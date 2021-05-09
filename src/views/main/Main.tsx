import React from 'react';
import {makeStyles} from "@material-ui/core";
import background from '../../assets/images/notebook-mainguest-bg.jpg';

const useStyles = makeStyles({
    Card:{
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
    Li:{
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
})

const Main = () => {
    const classes = useStyles();
    return (
        <div className={classes.Container}>
            <div className={classes.Card}>
                <div className={classes.HalfBox1}>
                    <img className={classes.Img} src={background} alt="preview"/>
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
                    <img className={classes.Img} src={background} alt="preview"/>
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
                    <img className={classes.Img} src={background} alt="preview"/>
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
                    <img className={classes.Img} src={background} alt="preview"/>
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
                    <img className={classes.Img} src={background} alt="preview"/>
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
                    <img className={classes.Img} src={background} alt="preview"/>
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
                    <img className={classes.Img} src={background} alt="preview"/>
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
                    <img className={classes.Img} src={background} alt="preview"/>
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
        </div>
    );
};

export default Main;
