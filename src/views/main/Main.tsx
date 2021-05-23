import React from 'react';

import {IconButton, makeStyles} from "@material-ui/core";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import {GetCookieFunction} from "../../functions/Cookies";
import DeleteIcon from '@material-ui/icons/Delete';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

function TabPanel(props: any) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index: any) {
    return {
        id: `scrollable-auto-tab-${index}`,
        "aria-controls": `scrollable-auto-tabpanel-${index}`
    };
}



const useStyles = makeStyles({
    Card: {
        borderRadius: "25px",
        padding: "1%",
        width: "30%",
        minWidth: "270px",
        height: "300px",
        margin: "3% 2%",
        display: "inline-block",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        "&:hover, &:focus": {
            boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
        },
    },
    Container: {
        textAlign: "center",
    },
    HalfBox1: {
        width: "50%",
        display: "inline-block",
        height: "100%",
        verticalAlign: "bottom",
    },
    HalfBox2: {
        width: "49%",
        display: "inline-block",
        height: "100%",
        verticalAlign: "bottom",
    },
    ListOfUsers: {
        overflow: "hidden",
        overflowY: "scroll",
        borderLeft: "1px solid",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
            display: "none"
        }
    },
    Li: {
        listStyleType: "none",
        fontSize: "17px",
        textAlign: "left",
    },
    Img: {
        width: "100%",
    },
    Desc: {
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        textShadow: "1px 1px 3px rgb(0 0 0 / 25%)",
        color: "white",
        overflowY: "scroll",
        height: "75%",
        marginBottom: "5px",
        borderRadius: "25px 0 0 0",
        paddingTop: "10px",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
            display: "none"
        }
    },
    Bookmark: {
        float: "left",
        minWidth: "300px",
        width: "10%",
        border: "1px solid black",

    },
    ClearFloat: {
        visibility: "hidden",
        display: "block",
        height: "0",
        clear: "both",
    },
    Root: {
        flexGrow: 1,
        width: "100%",
    }
})

export interface Shared {
    id_user_files: number;
    files_id: number;
    user_id: number;
    active: number;
    owner: number;
    id_user: number;
    user_name: string;
    password: string;
    first_name: string;
    last_name: string;
}

export interface MyNote {
    id_files: number;
    content: string;
    active: number;
    shared: Shared[];
}

const Main = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [myNotes, setMyNotes] = React.useState<MyNote[]>([]);
    const [sharedNotes, setSharedNotes] = React.useState([]);

    const GetList = () => {
        fetch("http://localhost:8080/notes/list", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({user: GetCookieFunction(),}) // body data type must match "Content-Type" header
        })
            .then((response) => {
                if(!response.ok){
                    console.log("nope");
                    return [];
                }
                else{
                    return response.json();
                }
            })
            .then((res) => {
                if("myNotes" in res)
                {
                    setMyNotes(res["myNotes"]);
                }

                if("theirNotes" in res)
                {
                    setSharedNotes(res["theirNotes"]);
                }

            })

    };

    const UndoShareForUser = (userId: number, fileID: number) => {
        fetch("http://localhost:8080/notes/undo-share", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId: userId, fileId: fileID}) // body data type must match "Content-Type" header
        })
            .then((response) => {
                if(!response.ok){
                    console.log("nope");
                    return [];
                }
                else{
                    GetList();
                }
            })

    };

    function handleChange(event: any, newValue: any) {
        setValue(newValue);
    }

    React.useEffect(() => GetList(), [])

    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
        { title: 'The Good, the Bad and the Ugly', year: 1966 },
        { title: 'Fight Club', year: 1999 },
        { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
        { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
        { title: 'Forrest Gump', year: 1994 },
        { title: 'Inception', year: 2010 },
        { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
        { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
        { title: 'Goodfellas', year: 1990 },
        { title: 'The Matrix', year: 1999 },
        { title: 'Seven Samurai', year: 1954 },
        { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
        { title: 'City of God', year: 2002 },
        { title: 'Se7en', year: 1995 },
        { title: 'The Silence of the Lambs', year: 1991 },
        { title: "It's a Wonderful Life", year: 1946 },
        { title: 'Life Is Beautiful', year: 1997 },
        { title: 'The Usual Suspects', year: 1995 },
        { title: 'Léon: The Professional', year: 1994 },
        { title: 'Spirited Away', year: 2001 },
        { title: 'Saving Private Ryan', year: 1998 },
        { title: 'Once Upon a Time in the West', year: 1968 },
        { title: 'American History X', year: 1998 },
        { title: 'Interstellar', year: 2014 },
        { title: 'Casablanca', year: 1942 },
        { title: 'City Lights', year: 1931 },
        { title: 'Psycho', year: 1960 },
        { title: 'The Green Mile', year: 1999 },
        { title: 'The Intouchables', year: 2011 },
        { title: 'Modern Times', year: 1936 },
        { title: 'Raiders of the Lost Ark', year: 1981 },
        { title: 'Rear Window', year: 1954 },
        { title: 'The Pianist', year: 2002 },
        { title: 'The Departed', year: 2006 },
        { title: 'Terminator 2: Judgment Day', year: 1991 },
        { title: 'Back to the Future', year: 1985 },
        { title: 'Whiplash', year: 2014 },
        { title: 'Gladiator', year: 2000 },
        { title: 'Memento', year: 2000 },
        { title: 'The Prestige', year: 2006 },
        { title: 'The Lion King', year: 1994 },
        { title: 'Apocalypse Now', year: 1979 },
        { title: 'Alien', year: 1979 },
        { title: 'Sunset Boulevard', year: 1950 },
        { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
        { title: 'The Great Dictator', year: 1940 },
        { title: 'Cinema Paradiso', year: 1988 },
        { title: 'The Lives of Others', year: 2006 },
        { title: 'Grave of the Fireflies', year: 1988 },
        { title: 'Paths of Glory', year: 1957 },
        { title: 'Django Unchained', year: 2012 },
        { title: 'The Shining', year: 1980 },
        { title: 'WALL·E', year: 2008 },
        { title: 'American Beauty', year: 1999 },
        { title: 'The Dark Knight Rises', year: 2012 },
        { title: 'Princess Mononoke', year: 1997 },
        { title: 'Aliens', year: 1986 },
        { title: 'Oldboy', year: 2003 },
        { title: 'Once Upon a Time in America', year: 1984 },
        { title: 'Witness for the Prosecution', year: 1957 },
        { title: 'Das Boot', year: 1981 },
        { title: 'Citizen Kane', year: 1941 },
        { title: 'North by Northwest', year: 1959 },
        { title: 'Vertigo', year: 1958 },
        { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
        { title: 'Reservoir Dogs', year: 1992 },
        { title: 'Braveheart', year: 1995 },
        { title: 'M', year: 1931 },
        { title: 'Requiem for a Dream', year: 2000 },
        { title: 'Amélie', year: 2001 },
        { title: 'A Clockwork Orange', year: 1971 },
        { title: 'Like Stars on Earth', year: 2007 },
        { title: 'Taxi Driver', year: 1976 },
        { title: 'Lawrence of Arabia', year: 1962 },
        { title: 'Double Indemnity', year: 1944 },
        { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
        { title: 'Amadeus', year: 1984 },
        { title: 'To Kill a Mockingbird', year: 1962 },
        { title: 'Toy Story 3', year: 2010 },
        { title: 'Logan', year: 2017 },
        { title: 'Full Metal Jacket', year: 1987 },
        { title: 'Dangal', year: 2016 },
        { title: 'The Sting', year: 1973 },
        { title: '2001: A Space Odyssey', year: 1968 },
        { title: "Singin' in the Rain", year: 1952 },
        { title: 'Toy Story', year: 1995 },
        { title: 'Bicycle Thieves', year: 1948 },
        { title: 'The Kid', year: 1921 },
        { title: 'Inglourious Basterds', year: 2009 },
        { title: 'Snatch', year: 2000 },
        { title: '3 Idiots', year: 2009 },
        { title: 'Monty Python and the Holy Grail', year: 1975 },
    ];

    return (
        <div className={classes.Container}>
            <div className={classes.Root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab label="Moje notatki" {...a11yProps(0)} />
                        <Tab label="Udostepnione notatki" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    {myNotes.map(function(item, index){
                        return <div className={classes.Card}>
                            <div className={classes.HalfBox1}>
                                <div className={classes.Desc}>{item["content"]}</div>
                                <div>
                                    <Autocomplete
                                        id="combo-box-demo"
                                        options={top100Films}
                                        getOptionLabel={(option) => option.title}
                                        // style={{ width: 300 }}
                                        renderInput={(params) => <TextField {...params} label="Dodaj osobę" variant="outlined" />}
                                    />
                                </div>
                            </div>
                            <div className={`${classes.HalfBox2} ${classes.ListOfUsers}`}>
                                <ul>
                                    {item["shared"].map(function(item2: Shared, index2: number){
                                        return <li className={classes.Li}>{item2["first_name"]} {item2["last_name"]}
                                            <IconButton onClick={() => UndoShareForUser(item2["user_id"], item2["files_id"])}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    })}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {sharedNotes.map(function(item, index){
                        return <div className={classes.Card}>
                            <div className={classes.Desc}>{item["content"]}</div>
                        </div>
                    })}
                </TabPanel>
            </div>

        </div>
    );
};

export default Main;
