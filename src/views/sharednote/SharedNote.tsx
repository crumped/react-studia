import React, {useState} from 'react';

import { IconButton, makeStyles } from "@material-ui/core";
import {Editor} from "react-draft-wysiwyg";
import {convertFromRaw, EditorState} from "draft-js";
import {useParams} from "react-router";
import {GetCookieFunction} from "../../functions/Cookies";

type SharedNoteParams = { fileId: string; }

const useStyles = makeStyles({
    NoteContent: {
        width: "80%",
        margin: "0 auto",
    },
    ToolbarClass: {
        display: "none",
    },
})

const SharedNote = () => {

    const classes = useStyles();
    const { fileId } = useParams<SharedNoteParams>();
    const [response, setResponse] = useState([]);
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    const GetNote = (fileId: string) =>
    {
        // przerób metodę, żeby aktualizowała pola w bazie (obecnie dodaje)
        fetch("http://localhost:8080/note/", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({fileId: fileId, user:GetCookieFunction()})
        })
            .then((response) => {
                if(!response.ok){
                    console.log("nope");
                    return [];
                }
                else{
                    return response.json();
                }
            })
            .then((res) => {
                if(res.length !== 0){
                    const content = JSON.parse(res[0]["content"]);
                    setEditorState(EditorState.createWithContent(convertFromRaw(content)));
                    setResponse(res);
                }
            })
    }

    React.useEffect(() => GetNote(fileId), [])

    return (
        <div className={classes.NoteContent}>
            {response.map(function(item, index) {
                return <Editor
                    defaultEditorState={editorState}
                    onEditorStateChange={setEditorState}
                    toolbarClassName={classes.ToolbarClass}
                    readOnly={true}
                />
            })}
        </div>
    );
};

export default SharedNote;
