import React, { useState } from 'react';
import { ContentState, convertToRaw, convertFromRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { makeStyles } from '@material-ui/core';
import {GetCookieFunction} from "../../functions/Cookies";
import {useParams} from "react-router";

type EditorEditParams = { fileId: string; }

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

const EditNote = (content:any, fileId: string) =>
{
    // przerób metodę, żeby aktualizowała pola w bazie (obecnie dodaje)
    fetch("http://localhost:8080/note/edit", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'include', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({notes:JSON.stringify(convertToRaw(content.getCurrentContent())), user:GetCookieFunction()})// body data type must match "Content-Type" header
    })
}

const EditorEdit = () => {
    const classes = useStyles();
    const { fileId }= useParams<EditorEditParams>();
    console.log(fileId);

    // request do wzięcia danych z bazy o kontekście z bazy

    // kod który działa tylko trzeba go podpiąć pod odpowiednie zmienne i edytor
    // const setOk = JSON.parse(res["myNotes"][0]["content"])
    // setEditorState(EditorState.createWithContent(convertFromRaw(setOk)));
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

            <button onClick={() => EditNote(editorState, fileId)}>Send</button>
        </div>
    )
}

export default EditorEdit;
