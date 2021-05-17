import { makeStyles } from '@material-ui/core';
import React, {useState} from 'react';
import {useHistory} from "react-router";

import {SetCookieFunction} from "../../functions/Cookies";

interface LoginProps{
    loggedIn: boolean;
    setLoggedIn: (status: boolean) => void;
}
export const useStyles = makeStyles({
    Wrapper: {
        display: 'flex',
        justifyContent:'center',
        width: "90%",
        minHeight: "100%",
        padding: "20px",
    },
    FormContent: {
        justifyContent: 'center',
        borderRadius:"10px 10px 10px 10px",
        background: "#fff",
        padding: "30px",
        width: "80%",
        maxWidth: "450px",
        position: "absolute",
        boxShadow: "0 30px 60px 0 rgba(0, 0, 0, 0.3)",
        textAlign:"center"
    },
    Input:{
        backgroundColor: '#f6f6f6',
        color: '#0d0d0d',
        border: 'None',
        borderRadius: "5px 5px 5px 5px",
        margin: '0.5em',
        padding: "1em 2em",
        textAlign: "center",
        fontSize: '0.5',
    },
    Button:{
        color:"#fff",
        backgroundColor: "rgba(92,168,214,0.9)",
        borderRadius: "0.5em 0.5em 0.5em 0.5em",
        border:'None',
        textAlign:'center',
        padding:"1.5em 8em",
        margin:"0.5em",
    },
    ValidationDiv:{
        color:"red",
        display:"none",
        margin:"0",
    }
})

const Login: React.FC<LoginProps> = ({loggedIn, setLoggedIn}) => {
    const classes = useStyles();
    const history = useHistory();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState("")
    const ValidLoginForm = () => {
        fetch("http://localhost:8080/user/", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({login: username, password: password}) // body data type must match "Content-Type" header
        })
            .then((response) => {
                if(!response.ok){
                    throw new Error(response.status.toString());
                }
                else{
                    return response.json();
                }
            })
            .then((papa) => {
                if(papa.length === 1)
                {
                    console.log(papa);
                    SetCookieFunction(username);
                    setLoggedIn(true);
                    history.push("/");
                }
                else
                {
                    setMessage("niezalogowany")
                    console.log(message);
                }

            })

    };



    return (
        <div className = {classes.Wrapper}>
            <div className = {classes.FormContent}>
                Login xd
          <pre>

              <input className={classes.Input} type="text" onChange={(e) => setUsername(e.target.value)} placeholder={"login"}></input> <br />
              <input className={classes.Input} type="password" onChange={(e) => setPassword(e.target.value)} placeholder={"password"}></input> <br />
              <button className={classes.Button} onClick={() => ValidLoginForm()}>Sign in</button>
          </pre>
                {
                    message === "niezalogowany"?(<div>
                        Niepoprawne dane
                    </div>):("")
                }
            </div>
        </div>
    );
};

export default Login;
