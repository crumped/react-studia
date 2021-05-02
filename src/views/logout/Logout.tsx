import {Redirect} from "react-router";
import React from "react";
import {RemoveCookieFunction} from "../../functions/Cookies";

const Logout = () => {

    //TODO
    //delete cookies
    //change status to logged out
    RemoveCookieFunction();
    return <Redirect to="/login" push={true}/>;
};

export default Logout;
