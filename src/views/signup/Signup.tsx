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
    let getData = true;
    const HideValidationDiv = (divId:string) => {

        let div = (document.getElementById(divId) as HTMLDivElement);
        let input = (document.getElementById(divId.slice(3, divId.length)) as HTMLInputElement);
        div.style.display = "none";
        div.innerText = "";
        input.style.border = "none";
    }
    const IsBlank = (divId:string, value:any) => {
        console.log(divId.slice(3, divId.length))

        let div = (document.getElementById(divId) as HTMLDivElement);
        let input = (document.getElementById(divId.slice(3, divId.length)) as HTMLInputElement);
        if(value ==='')
        {

            div.style.display = "block";
            div.innerText = "The field is required";
            input.style.border = "solid";
            input.style.borderWidth="thin"
            input.style.borderColor = "red";
            getData=false;
        }
        else if((value.length<4))
        {
            div.style.display = "block";
            div.innerText = "Entered data is too short";
            getData=false;
        }
        else if((value.length>=100))
        {
            div.style.display = "block";
            div.innerText = "Entered data is too long";
            getData=false;
        }
        else
        {
            HideValidationDiv(divId);
        }
    }
    const CheckPassword = () =>
    {
        let div = (document.getElementById('divConfPassword') as HTMLDivElement);
        let input = (document.getElementById('ConfPassword') as HTMLInputElement);
        if(password === '')
        {
            div.style.display = "block";
            div.innerText = "The field is required";
            input.style.border = "solid";
            input.style.borderWidth="thin"
            input.style.borderColor = "red";
            getData=false;
        }
        else if(password !== confirmPassword)
        {
            div.style.display = "block";
            div.innerText = "Password not match";
            input.style.border = "solid";
            input.style.borderWidth="thin"
            input.style.borderColor = "red";
            getData=false;
        }
        else{
            HideValidationDiv('divConfPassword');
        }
    }
    const ValidRegisterForm = () => {
        getData=true;
        IsBlank("divUsername", username);
        IsBlank("divFirstName", firstname);
        IsBlank("divLastName", lastname);
        IsBlank("divPassword", password);
        CheckPassword();

        if(getData) {
            console.log("jeste tu");
            fetch("http://localhost:8080/user/register/", {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'include', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    login: username,
                    first_name: firstname,
                    last_name: lastname,
                    password: password,
                }) // body data type must match "Content-Type" header
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(response.status.toString());
                    } else {
                        return response.text();
                    }
                })
                .then((response) => {
                    if (response === "istnieje") {
                        let div = (document.getElementById("divUsername") as HTMLDivElement);
                        let input = (document.getElementById("Username") as HTMLInputElement);

                        div.style.display = "block";
                        div.innerText = "User with that login already exists";
                        input.style.border = "solid";
                        input.style.borderWidth = "thin";
                        input.style.borderColor = "red";
                    } else {
                        history.push("/login");
                    }

                })
        }
    };
    return (
        <div className={classes.Wrapper}>
            <div className={classes.FormContent}>
                Register
                <pre>
                    <input className={classes.Input} id={"Username"} type="text" onChange={(e) => {setUsername(e.target.value); HideValidationDiv('divUsername')}} placeholder={"user name"}></input><br />
                    <div className={classes.ValidationDiv} id={"divUsername"}></div>
                    <input className={classes.Input} id="FirstName" type="text" onChange={(e) => {setFirstname(e.target.value); HideValidationDiv('divFirstName')}} placeholder={"first name"}></input><br />
                    <div className={classes.ValidationDiv} id="divFirstName"></div>
                    <input className={classes.Input} id="LastName" type="text" onChange={(e) => {setLastname(e.target.value); HideValidationDiv('divLastName')}} placeholder={"last name"}></input><br />
                    <div className={classes.ValidationDiv} id="divLastName"></div>
                    <input className={classes.Input} id="Password" type="password" onChange={(e) => {setPassword(e.target.value); HideValidationDiv('divPassword')}} placeholder={"password"}></input><br />
                    <div className={classes.ValidationDiv} id="divPassword"></div>
                    <input className={classes.Input} id="ConfPassword" type="password" onChange={(e) => {setConfirmPassword(e.target.value); HideValidationDiv('divConfPassword')}} placeholder={"confirm password"}></input><br />
                    <div className={classes.ValidationDiv} id="divConfPassword"></div>
                    <button className={classes.Button} onClick={() => ValidRegisterForm()} >Sign Up</button>
                </pre>
            </div>
        </div>
    );
};

export default SignUp;

