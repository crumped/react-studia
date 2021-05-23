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
        minWidth: "300px",
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
        height: "100%",
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
