import React, {useState} from 'react';
import {useHistory} from "react-router";

import {SetCookieFunction} from "../../functions/Cookies";

interface LoginProps{
    loggedIn: boolean;
    setLoggedIn: (status: boolean) => void;
}
const Login: React.FC<LoginProps> = ({loggedIn, setLoggedIn}) => {
    const history = useHistory();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState("")
    const ValidLoginForm = () => {
        console.log(username+" "+password);
        fetch("http://localhost:8083/user/", {
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
        <div>
            Login xd
            <div style={{
                marginLeft: '200px',
            }}>
          <pre>
            <h2>Setting Cookie in ReactJS</h2>
            <span>Enter User Name: </span>
              <input type="text" onChange={(e) => setUsername(e.target.value)}></input> <br />
              <span>Enter Password: </span>
              <input type="password" onChange={(e) => setPassword(e.target.value)}></input> <br />
              <button onClick={() => ValidLoginForm()}>Sign in</button>
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
