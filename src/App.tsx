import React, {useState} from 'react';
import { Switch, Route, BrowserRouter} from "react-router-dom";

import Main from './views/main/index';
import Login from './views/login/index';
import SignUp from './views/signup/index';
import Page404 from './views/page404/index';
import {GetCookieFunction} from "./functions/Cookies";
import {Select} from "./server/databaseManager"

import './App.css';


const App = () => {
    //set cookie
    //TODO make as global function.

    var db = Select("user", "*", "")
    const [loggedIn, setLoggedIn] = useState(false)


    const CheckIfLoggedIn = () => {
        let username = GetCookieFunction();
        if(!!username){
            //TODO
            //Check if user exist in database

            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    };

    React.useEffect(() => CheckIfLoggedIn(), [CheckIfLoggedIn])

  return (

    <div className="App">
        {loggedIn ? (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Main} exact />
                    <Route path="*" component={Page404} />
                </Switch>
            </BrowserRouter>
        ) : (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="*" component={Page404} />
                </Switch>
            </BrowserRouter>
        )
        }
    </div>
  );
}

export default App;
