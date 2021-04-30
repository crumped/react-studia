import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Link from "@material-ui/core/Link";
import { makeStyles} from "@material-ui/core";

interface AppBarProps{
    isLoggedIn: boolean;
}

const useStyles = makeStyles({
    toLeft: {
        float: "left",
        margin: "10px",
    },

    toRight: {
        float: "right",
        margin: "10px",
    },

    navMargin: {
        marginLeft: "40px",
        marginRight: "60px",
    }
})

const AppBar:React.FC<AppBarProps> = ({ isLoggedIn }) => {
    const classes = useStyles();
    console.log(isLoggedIn);
    return (
        <MuiAppBar elevation={0} position="static" >
            {isLoggedIn ? (
                <div className={classes.navMargin}>
                    <span className={classes.toLeft}>
                        <Link
                            variant="h6"
                            underline="none"
                            color="inherit"
                            href="/"
                        >
                            {'Mainpage'}
                        </Link>
                    </span>
                    <span className={classes.toRight}>
                        <Link
                            color="inherit"
                            variant="h6"
                            underline="none"
                            href="/logout"
                        >
                            {'Logout'}
                        </Link>
                    </span>
                </div>
            ) : (
                <div className={classes.navMargin}>
                <span className={classes.toLeft}>
                    <Link
                        variant="h6"
                        underline="none"
                        color="inherit"
                        href="/"
                    >
                        {'Mainpage'}
                    </Link>
                </span>
                    <span className={classes.toLeft}>
                    <Link
                        color="inherit"
                        variant="h6"
                        underline="none"
                        href="/login"
                    >
                        {'Sign In'}
                    </Link>
                </span>
                    <span className={classes.toLeft}>
                    <Link
                        color="inherit"
                        variant="h6"
                        underline="none"
                        href="/signup"
                    >
                        {'Sign Up'}
                    </Link>
                </span>
                </div>
            )}

        </MuiAppBar>
    );
}

export default AppBar;
