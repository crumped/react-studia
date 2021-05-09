import React from 'react';
import {makeStyles} from "@material-ui/core";
import background from '../../assets/images/notebook-mainguest-bg.jpg';

const useStyles = makeStyles({
    Background:{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "cover",
        minHeight: "100vh",
        position: "absolute",
        top: "0",
        width: "100%",
        zIndex: -1,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
    },

    Text:{
        mixBlendMode: "difference",
        color: "white",
        width: "60%",
        margin: "20% auto auto 30%",
    },

    TextLine: {
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        overflowWrap: "break-word",
        wordWrap: "break-word",
    }
})

const Main = () => {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.Background}>
                <div className={classes.Text}>
                    <h1>E-notatnik</h1>
                    <h3>Twój osobisty elektroniczny notatnik dostępny w każdym miejscu</h3>
                    <pre className={classes.TextLine}>Serwis ułatwi Ci tworzenie notatek ze względu na rozbudowany edytor tekstowy w nowoczesnym stylu.</pre>
                    <pre className={classes.TextLine}>Dostępność notatek - wszystkie notatki są prywatne.
                    Także masz do nich dostęp tylko Ty oraz osoby z którymi się nimi podzielisz!</pre>
                    <pre className={classes.TextLine}>Wszystkie dokumenty, które utworzysz przechowywane są na naszych serwerach</pre>
                    <pre className={classes.TextLine}>Łatwość udostępniania - dzielenie się swoimi notatkami z innymi
                    użytkownikami serwisu jest niezwykle proste. Wystarczy dodać użytkownika do list udostępnień</pre>
                </div>
            </div>
        </div>


    );
};

export default Main;
