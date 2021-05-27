import React from 'react';

import { IconButton, makeStyles } from "@material-ui/core";


var text = "<p> <b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D?<b>abc</b> lorem ipsum Dilus :D? <p>";

const useStyles = makeStyles({
    NoteContent: {
        width: "80%",
        margin: "0 auto",
    }
})

const SharedNote = () => {
    const classes = useStyles();
    return (
        <div>

            <div dangerouslySetInnerHTML={{ __html: text }} className={classes.NoteContent} >
            </div>

        </div>
    );
}
export default SharedNote;