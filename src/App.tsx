import React, {useState} from 'react';
import { Switch, Route, BrowserRouter} from "react-router-dom";

import Layout from "./components/Layout";
import Main from './views/main/index';
import Login from './views/login/index';
import SignUp from './views/signup/index';
import Page404 from './views/page404/index';
import {GetCookieFunction} from "./functions/Cookies";


import './App.css';
import Logout from "./views/logout";


const App = () => {
    //set cookie


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
      <Layout isLoggedIn={loggedIn}>
          <div>Test</div>
          {loggedIn ? (
              <BrowserRouter>
                  <Switch>
                      <Route path="/" component={Main} exact />
                      <Route path="/logout" component={Logout}  />
                      <Route path="*" component={Page404} />
                  </Switch>
              </BrowserRouter>
          ) : (
              <BrowserRouter>
                  <Switch>
                      <Route path="/login" component={() => <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
                      <Route path="/signup" component={SignUp} />
                      <Route path="*" component={Page404} />
                  </Switch>
              </BrowserRouter>
          )
          }
      </Layout>
  );
}

export default App;
