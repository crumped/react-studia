import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Link from "@material-ui/core/Link";
import { makeStyles} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

interface AppBarProps{
    isLoggedIn: boolean;
    isOpen: boolean;
    setIsOpen: (status: boolean) => void;
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
    },

    header: {
      background: "linear-gradient(180deg, rgba(53,47,158,1) 0%, rgba(70,66,133,1) 100%)",
    },

    homeIcon: {
      fontSize: "40",
    },

    navBarButton: {
        color: "white",
        "&:hover": {
            color: "#f0f0f0",
        }
    }
})

const AppBar:React.FC<AppBarProps> = ({ isLoggedIn, isOpen, setIsOpen }) => {
    const classes = useStyles();
    console.log(isLoggedIn);
    return (
        <MuiAppBar elevation={0} position="static"  className={classes.header}>
            {isLoggedIn ? (
                <div className={classes.navMargin}>
                    <span className={classes.toLeft}>
                        <Link
                            variant="h5"
                            underline="none"
                            color="inherit"
                            href="/"
                            className={classes.navBarButton}
                        >
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                            >
                              <HomeIcon />
                            </IconButton>
                        </Link>
                    </span>
                    <span className={classes.toRight}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => setIsOpen(!isOpen)}
                            className={classes.navBarButton}
                        >
                          <MenuIcon />
                        </IconButton>
                        <Link
                            color="inherit"
                            variant="h5"
                            underline="none"
                            href="/logout"
                            className={classes.navBarButton}
                        >
                            {'Logout'}
                        </Link>
                    </span>
                </div>
            ) : (
                <div className={classes.navMargin}>
                <span className={`${classes.toLeft} ${classes.navBarButton}`}>
                    <Link
                        variant="h6"
                        underline="none"
                        color="inherit"
                        href="/"
                        className={classes.navBarButton}
                    >
                        {'Mainpage'}
                    </Link>
                </span>
                    <span className={`${classes.toLeft} ${classes.navBarButton}`}>
                    <Link
                        color="inherit"
                        variant="h6"
                        underline="none"
                        href="/login"
                        className={classes.navBarButton}
                    >
                        {'Sign In'}
                    </Link>
                </span>
                    <span className={`${classes.toLeft} ${classes.navBarButton}`}>
                    <Link
                        color="inherit"
                        variant="h6"
                        underline="none"
                        href="/signup"
                        className={classes.navBarButton}
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
