import {useState} from 'react';
import {useStyles} from './../login/Login'
import {useHistory} from "react-router"


const SignUp = () => {
    const classes = useStyles();
    const history = useHistory();
    const [username, setUsername]=useState('')
    const [firstname, setFirstname]=useState('')
    const [lastname, setLastname]=useState('')
    const [password, setPassword]=useState('')
    const [confirmPassword, setConfirmPassword]=useState('')
    const [message, setMessage] = useState('')
    const ValidRegisterForm = () => {
        fetch("http://localhost:8080/user/register/", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({login: username,first_name: firstname, last_name: lastname, password: password, confirm_password: confirmPassword}) // body data type must match "Content-Type" header
        })
            .then((response) => {
                if(!response.ok){
                    throw new Error(response.status.toString());
                }
                else{
                    return response.text();
                }
        })
            .then((response) => {
                console.log(response);
                if(response === "istnieje")
                {

                    setMessage("istnieje");
                }
                else if(response === "nieidentyczne")
                {
                    setMessage("nieidentyczne");
                }
                else
                {
                    console.log("no jestem tu");
                    history.push("/login");
                    setMessage("");
                }

            })
        console.log(message);
    };
    return (
        <div className={classes.Wrapper}>
            <div className={classes.FormContent}>
                Register
                <pre>
                    <input className={classes.Input} type="text" onChange={(e) => setUsername(e.target.value)} placeholder={"user name"}></input><br />
                    <input className={classes.Input} type="text" onChange={(e) => setFirstname(e.target.value)} placeholder={"first name"}></input><br />
                    <input className={classes.Input} type="text" onChange={(e) => setLastname(e.target.value)} placeholder={"last name"}></input><br />
                    <input className={classes.Input} type="password" onChange={(e) => setPassword(e.target.value)} placeholder={"password"}></input><br />
                    <input className={classes.Input} type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder={"confirm password"}></input><br />
                    <button className={classes.Button} onClick={() => ValidRegisterForm()} >Sign Up</button>
                </pre>
                {
                    message === "" ? ("") : (message === "istnieje" ? (<div>"podany login jest już zajęty"</div>) :
                        (<div> "hasła nie są identyczne" </div>))
                }
            </div>
        </div>
    );
};

export default SignUp;

