import React from 'react';
import AppBar from "./AppBar";

interface AppBarProps{
    isLoggedIn: boolean;
}

const Layout: React.FC<AppBarProps> = ({children, isLoggedIn}) => {
    return (
        <div className="App">
            <AppBar isLoggedIn={isLoggedIn}/>
            {children}
        </div>
    );
};

export default Layout;
