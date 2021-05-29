import React from 'react';
import { Drawer, IconButton, Link } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import NoteIcon from '@material-ui/icons/Note';
import ShareIcon from '@material-ui/icons/Share';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

interface SidePanelProps{
    isOpen: boolean;
    setIsOpen: (status: boolean) => void;
}

const useStyles = makeStyles({
    BlankList:{
        listStyle: "none",
    },
    Icons: {
        fill: "rgba(53, 47, 158, 1)",
        fontSize: "2.5rem",
    },
    LinkText: {
        color: "rgba(53, 47, 158, 1)",
        fontSize: "24px",
    },
    Button: {
        "&:hover": {
            color: "grey",
            backgroundColor: "white",
        },
    },
    DrawerProperties: {
        minWidth: "300px",
        width: "15vw",
        height: "100%",
    },
    SectionTitle: {
        padding: "10px",
        textAlign: "center",
        fontWeight: 800,
    },
    SectionLogout: {

    }
})


const SidePanel: React.FC<SidePanelProps> = ({ isOpen, setIsOpen }) => {

    const classes = useStyles();

    return (
        <div>
            <Drawer
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <div className={classes.DrawerProperties}>
                    <h2 className={classes.SectionTitle}> Your Profile </h2>
                    <ul>{/*Profil*/}
                        <li className={classes.BlankList}>
                            <Link href="/" className={classes.LinkText}>
                                <IconButton className={ classes.Button}>
                                    <AccountBoxIcon className={classes.Icons}/>
                                </IconButton>
                                { "Zobacz profil" }
                            </Link>
                        </li>
                    </ul>
                    <h2 className={classes.SectionTitle}> Pages </h2>
                    <ul>{/*Linki do stron*/}
                        <li className={classes.BlankList}>
                            <Link href="/" className={classes.LinkText}>
                                <IconButton className={classes.Button}>
                                    <HomeIcon className={classes.Icons} />
                                </IconButton>
                                {"Strona główna"}
                            </Link>
                        </li>
                        <li className={classes.BlankList}>
                            <Link href="/?tab=1" className={classes.LinkText}>
                                <IconButton className={classes.Button}>
                                    <ShareIcon className={classes.Icons}/>
                                </IconButton>
                                { "Udostępnione dla mnie" }
                            </Link>
                        </li>
                        <li className={classes.BlankList}>
                            <Link href="/" className={classes.LinkText}>
                                <IconButton className={classes.Button}>
                                    <NoteIcon className={classes.Icons}/>
                                </IconButton>
                                {"Moje notatki"}
                            </Link>
                        </li>
                        <li className={classes.BlankList}>
                            <Link href="/note/add" className={classes.LinkText}>
                                <IconButton className={classes.Button}>
                                    <NoteAddIcon className={classes.Icons}/>
                                </IconButton>
                                {'Dodaj notatkę'}
                            </Link>
                        </li>
                    </ul>
                    <div className={classes.SectionLogout}>
                        <h2 className={classes.SectionTitle}> Logout </h2>
                    <ul>{/*Logout*/}
                            <li className={classes.BlankList}>
                                <Link href="/logout" className={classes.LinkText}>
                                    <IconButton className={classes.Button}>
                                        <MeetingRoomIcon className={classes.Icons} />
                                    </IconButton>
                                    {"Wyloguj"}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}
export default SidePanel;
