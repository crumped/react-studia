import React, { useState } from 'react';

import { IconButton, Input, makeStyles } from "@material-ui/core";
import { useParams } from "react-router";
import { GetCookieFunction } from "../../functions/Cookies";



const useStyles = makeStyles({
    Container: {
        display: 'flex',
        justifyContent: 'center',
        width: "90%",
        minHeight: "100%",
        padding: "20px",
    },
    FormContent: {
        justifyContent: 'center',
        borderRadius: "10px 10px 10px 10px",
        background: "#fff",
        padding: "30px",
        width: "80%",
        minWidth: "500px",
        position: "absolute",
        boxShadow: "0 30px 60px 0 rgba(0, 0, 0, 0.3)",
        textAlign: "center"
    },
    Inputs: {
        margin: "0 auto",
        width: "50%"
    },
    LabelP: {
        display: "block",
        marginTop: "10px",
        marginBottom: "0px",
        width: "100%",
        textAlign: "left",
        textIndent: "15%"
    },
    Input: {
        fontFamily: "inherit",
        width: "60%",
        maxWidth: "750px",
        minWidth: "300px",
        border: "0",
        borderBottom: "2px solid gray",
        outline: "0",
        fontSize: "1.3rem",
        color: "black",
        padding: "7px 0",
        background: "transparent", 
    },
    Button: {
        margin: "35px",
        width: "300px",
        minWidth: "150px",
        height: "50px",
        backgroundColor: "white",
        color: "black",
        border: "2px solid #3f51b5",
        borderRadius: "10px",
        '&:hover': {
            backgroundColor: "#3f51b5",
            color: "white",
            border: "none",
            cursor: "pointer"}
    },
    
    
})

const UserProfile = () => {
    const classes = useStyles();
    return(
        <div className={classes.Container}>
            <div className={classes.FormContent}>
                <h1>Dane osobowe</h1>
                <div className={classes.Inputs} >
                    <div className={classes.LabelP}>Imie:</div><input className={classes.Input} />
                    <div className={classes.LabelP}>Nazwisko:</div><input className={classes.Input} />
                </div>
                <h1>Bezpieczenstwo</h1>
                <div className={classes.Inputs}>
                    <div className={classes.LabelP}>Haslo:</div><input className={classes.Input} />
                    <div className={classes.LabelP}>Powtorz Haslo:</div><input className={classes.Input} />
                </div>
                <button className={classes.Button} > Potwierdz</button>
            </div>
        </div>
        
    ); 
}

export default UserProfile;
