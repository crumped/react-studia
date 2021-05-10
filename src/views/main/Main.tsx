import React from 'react';

import {makeStyles} from "@material-ui/core";
import background from '../../assets/images/notebook-mainguest-bg.jpg';

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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
        padding: "3% 0",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        textShadow: "1px 1px 3px rgb(0 0 0 / 25%)",
        color: "white",
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

const Main = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event: any, newValue: any) {
        setValue(newValue);
    }
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
                    <div className={classes.Card}>
                        <div className={classes.HalfBox1}>
                            <img className={classes.Img} src={background} alt="preview" />
                            <div className={classes.Desc}>Notatki z nowej</div>
                        </div>
                        <div className={`${classes.HalfBox2} ${classes.ListOfUsers}`}>
                            <ul>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.Card}>
                        <div className={classes.HalfBox1}>
                            <img className={classes.Img} src={background} alt="preview" />
                            <div className={classes.Desc}>Notatki z nowej</div>
                        </div>
                        <div className={`${classes.HalfBox2} ${classes.ListOfUsers}`}>
                            <ul>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.Card}>
                        <div className={classes.HalfBox1}>
                            <img className={classes.Img} src={background} alt="preview" />
                            <div className={classes.Desc}>Notatki z nowej</div>
                        </div>
                        <div className={`${classes.HalfBox2} ${classes.ListOfUsers}`}>
                            <ul>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.Card}>
                        <div className={classes.HalfBox1}>
                            <img className={classes.Img} src={background} alt="preview" />
                            <div className={classes.Desc}>Notatki z nowej</div>
                        </div>
                        <div className={`${classes.HalfBox2} ${classes.ListOfUsers}`}>
                            <ul>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                            </ul>
                        </div>
                    </div>

                    <div className={classes.Card}>
                        <div className={classes.HalfBox1}>
                            <img className={classes.Img} src={background} alt="preview" />
                            <div className={classes.Desc}>Notatki z nowej</div>
                        </div>
                        <div className={`${classes.HalfBox2} ${classes.ListOfUsers}`}>
                            <ul>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                            </ul>
                        </div>
                    </div>

                    <div className={classes.Card}>
                        <div className={classes.HalfBox1}>
                            <img className={classes.Img} src={background} alt="preview" />
                            <div className={classes.Desc}>Notatki z nowej</div>
                        </div>
                        <div className={`${classes.HalfBox2} ${classes.ListOfUsers}`}>
                            <ul>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                            </ul>
                        </div>
                    </div>

                    <div className={classes.Card}>
                        <div className={classes.HalfBox1}>
                            <img className={classes.Img} src={background} alt="preview" />
                            <div className={classes.Desc}>Notatki z nowej</div>
                        </div>
                        <div className={`${classes.HalfBox2} ${classes.ListOfUsers}`}>
                            <ul>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                            </ul>
                        </div>
                    </div>

                    <div className={classes.Card}>
                        <div className={classes.HalfBox1}>
                            <img className={classes.Img} src={background} alt="preview" />
                            <div className={classes.Desc}>Notatki z nowej</div>
                        </div>
                        <div className={`${classes.HalfBox2} ${classes.ListOfUsers}`}>
                            <ul>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                            </ul>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className={classes.Card}>
                        <div className={classes.HalfBox1}>
                            <img className={classes.Img} src={background} alt="preview" />
                            <div className={classes.Desc}>Notatki z nowej</div>
                        </div>
                        <div className={`${classes.HalfBox2} ${classes.ListOfUsers}`}>
                            <ul>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.Card}>
                        <div className={classes.HalfBox1}>
                            <img className={classes.Img} src={background} alt="preview" />
                            <div className={classes.Desc}>Notatki z nowej</div>
                        </div>
                        <div className={`${classes.HalfBox2} ${classes.ListOfUsers}`}>
                            <ul>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.Card}>
                        <div className={classes.HalfBox1}>
                            <img className={classes.Img} src={background} alt="preview" />
                            <div className={classes.Desc}>Notatki z nowej</div>
                        </div>
                        <div className={`${classes.HalfBox2} ${classes.ListOfUsers}`}>
                            <ul>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.Card}>
                        <div className={classes.HalfBox1}>
                            <img className={classes.Img} src={background} alt="preview" />
                            <div className={classes.Desc}>Notatki z nowej</div>
                        </div>
                        <div className={`${classes.HalfBox2} ${classes.ListOfUsers}`}>
                            <ul>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                            </ul>
                        </div>
                    </div>

                    <div className={classes.Card}>
                        <div className={classes.HalfBox1}>
                            <img className={classes.Img} src={background} alt="preview" />
                            <div className={classes.Desc}>Notatki z nowej</div>
                        </div>
                        <div className={`${classes.HalfBox2} ${classes.ListOfUsers}`}>
                            <ul>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                            </ul>
                        </div>
                    </div>

                    <div className={classes.Card}>
                        <div className={classes.HalfBox1}>
                            <img className={classes.Img} src={background} alt="preview" />
                            <div className={classes.Desc}>Notatki z nowej</div>
                        </div>
                        <div className={`${classes.HalfBox2} ${classes.ListOfUsers}`}>
                            <ul>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                            </ul>
                        </div>
                    </div>

                    <div className={classes.Card}>
                        <div className={classes.HalfBox1}>
                            <img className={classes.Img} src={background} alt="preview" />
                            <div className={classes.Desc}>Notatki z nowej</div>
                        </div>
                        <div className={`${classes.HalfBox2} ${classes.ListOfUsers}`}>
                            <ul>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                            </ul>
                        </div>
                    </div>

                    <div className={classes.Card}>
                        <div className={classes.HalfBox1}>
                            <img className={classes.Img} src={background} alt="preview" />
                            <div className={classes.Desc}>Notatki z nowej</div>
                        </div>
                        <div className={`${classes.HalfBox2} ${classes.ListOfUsers}`}>
                            <ul>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                                <li className={classes.Li}>Result</li>
                            </ul>
                        </div>
                    </div>
                </TabPanel>
            </div>
            
        </div>
    );
};

export default Main;
