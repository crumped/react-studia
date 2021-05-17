import React, { useState } from 'react';
import { ContentState, convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    WrapperClass: {
        padding: "1rem",
        border: "1px solid #ccc",
    },
    EditorClass: {
        backgroundColor: "lightgray",
        padding: "1rem",
        border: "1px solid #ccc",
    },
    ToolbarClass: {
        border: "1px solid #ccc",
    }

})

const Edit = () => {
    const classes = useStyles();
    let _contentState = ContentState.createFromText('Sample content state');
    const raw = convertToRaw(_contentState)
    const [contentState, setContentState] = useState(raw) // ContentState JSON
    return (
        <div className="App">
            <Editor
                defaultContentState={contentState}
                onContentStateChange={setContentState}
                wrapperClassName={classes.WrapperClass}
                editorClassName={classes.EditorClass}
                toolbarClassName={classes.ToolbarClass}
            />
        </div>
    )
}

export default Edit;