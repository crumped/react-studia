import React, { useState } from 'react';
import { convertToRaw, convertFromRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { IconButton, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
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
    },
    TitleClass: {
        display: "inline-block",
        height: "75px",
        width: "97.5%",
        textAlign: "left",
        lineHeight: "75px",
        fontSize: "36px",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        padding: "1rem",
        marginLeft: "0.5%",
        marginBottom: "5px",
        marginTop: "5px",
    },
    TitleClassInput: {
        border: "3px solid #3f51b5",
        height: "75px",
        width: "90%",
        textAlign: "left",
        fontSize: "36px",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        padding: "1rem",
        marginBottom: "5px",
        marginTop: "5px",
        
    },
    InlineText: {
        display: "inline",
    }
})



const EditorEdit = () => {
    const classes = useStyles();
    const { fileId }= useParams<EditorEditParams>();
    const [isEditMode, setIsEditMode] = useState(false);
    const [response, setResponse] = useState([]);
    const [title, setTitle] = useState("");
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
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({fileId: fileId, user:GetCookieFunction()})// body data type must match "Content-Type" header
        })
            .then((response:Response) =>{
                if(!response.ok){
                    console.log("nope");
                    return [];
                }
                else{
                    return response.json();
                }
            })
            .then((res) => {
                if(res.length !==0){
                    const content = JSON.parse(res[0]["content"])
                    setEditorState(EditorState.createWithContent(convertFromRaw(content)));
                    setTitle(res[0]["title"])
                    setResponse(res);
                }
            })
    }
    const SendEdit = (content:any, fileId:string) =>
    {
        fetch("http://localhost:8080/note/edit", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({fileId: fileId, notes:JSON.stringify(convertToRaw(content.getCurrentContent()))})// body data type must match "Content-Type" header
        })
    }
    const EditTitle = (title:string) =>
    {
        fetch("http://localhost:8080/note/editTitle", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({title:title, fileId: fileId})// body data type must match "Content-Type" header
        })
    }

    const changeToInput = () => {
        setIsEditMode(!isEditMode);
    }

    const handleKeyDown = (event:any) => {
        if (event.key === 'Enter') {
            EditTitle(title);
            setIsEditMode(!isEditMode);
        }
    }

    React.useEffect(() => GetNote(fileId), []);

    return (
        <div className="App">

            {isEditMode ?
                <div>
                    <input type="text" className={classes.TitleClassInput} onKeyDown={handleKeyDown} onChange={(e) => setTitle(e.target.value)} value={title} />
                    <IconButton>
                        <EditIcon />
                    </IconButton>
                    <IconButton>
                        <EditIcon />
                    </IconButton>
                </div>
                :
                <div className={classes.TitleClass} >
                    {title === "" ?

                        <div onDoubleClick={changeToInput} className={classes.InlineText}>Empty</div>
                        :
                        <div onDoubleClick={changeToInput} className={classes.InlineText}>{title}</div>
                    }
                    <IconButton>
                        <EditIcon />
                    </IconButton>
                </div>


            }

            {response.map(function(item, index) {
                return <Editor
                    defaultEditorState={editorState}
                    onEditorStateChange={setEditorState}
                    wrapperClassName={classes.WrapperClass}
                    editorClassName={classes.EditorClass}
                    toolbarClassName={classes.ToolbarClass}
                    onChange={() => SendEdit(editorState, fileId)}
                />
            })}
        </div>
    )
};

export default EditorEdit;
