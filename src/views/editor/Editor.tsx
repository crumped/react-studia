import React, { useState } from 'react';
import { ContentState, convertToRaw, convertFromRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { makeStyles } from '@material-ui/core';
import {GetCookieFunction} from "../../functions/Cookies";
import {convertToHTML} from 'draft-convert'

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
const AddNote = (content:any) =>
{
    fetch("http://localhost:8080/note/add", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'include', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({notes:JSON.stringify(content), user:GetCookieFunction()})// body data type must match "Content-Type" header
    })
}
const Edit = () => {
    const classes = useStyles();
    let _contentState = ContentState.createFromText('Sample content state');
    const raw = convertToRaw(_contentState)
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    return (
        <div className="App">
            <Editor
                defaultEditorState={editorState}
                onEditorStateChange={setEditorState}
                wrapperClassName={classes.WrapperClass}
                editorClassName={classes.EditorClass}
                toolbarClassName={classes.ToolbarClass}
            />
            <button onClick={() =>AddNote(editorState)}>Send</button>
        </div>
    )
}

export default Edit;