import React, {useState} from 'react';
import AppBar from "./AppBar";
import {makeStyles} from "@material-ui/core";
import SidePanel from "./SidePanel";

interface AppBarProps{
    isLoggedIn: boolean;
}

const useStyles = makeStyles({
    App: {
        width: "100%",
        minHeight: "100vh",
    },
})

const Layout: React.FC<AppBarProps> = ({children, isLoggedIn}) => {
    const classes = useStyles();
    const [isOpenSidePanel, setIsOpenSidePanel] = useState(false)

    return (
        <div className={classes.App}>
            <AppBar isLoggedIn={isLoggedIn} isOpen={isOpenSidePanel} setIsOpen={setIsOpenSidePanel}/>
            <SidePanel isOpen={isOpenSidePanel} setIsOpen={setIsOpenSidePanel} />
            {children}
        </div>
    );
};

export default Layout;
