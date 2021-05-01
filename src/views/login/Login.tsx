import React, {useState} from 'react';
import {useHistory} from "react-router";

import {SetCookieFunction} from "../../functions/Cookies";

interface LoginProps{
    loggedIn: boolean;
    setLoggedIn: (status: boolean) => void;
}
const Login: React.FC<LoginProps> = ({loggedIn, setLoggedIn}) => {
    const history = useHistory();
    const [logIn, setLogIn] = useState('')
    const ValidLoginForm = () => {
        SetCookieFunction(logIn);
        setLoggedIn(true);
        history.push("/");
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
              <input type="text" onChange={(e) => setLogIn(e.target.value)}></input> <br />
              <button onClick={() => ValidLoginForm()}>Sign in</button>
          </pre>
            </div>
        </div>
    );
};

export default Login;
