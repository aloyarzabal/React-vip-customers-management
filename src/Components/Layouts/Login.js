import { Fragment, useRef } from "react";
import ReactDOM from 'react-dom';

import classes from "./Login.module.css";

const Backdrop = props => {
    return <div className={classes.loginBackdrop} onClick={props.onClose}></div>
};

const LoginForm = props => {

    const userNameRef = useRef();
    const passwordRef = useRef();

    const loginHandler = (event) => {
        event.preventDefault();
        const introducedMail = userNameRef.current.value;
        const introducedPassword = passwordRef.current.value;
        props.logIn(introducedMail, introducedPassword);
    };


    return (
        <div className={classes.loginModal}>
            <form className={classes.loginForm}>
                <h2>Sign In</h2>
                <input type="text" required ref={userNameRef}></input>
                <label> Username:</label>
                <input type="password" required ref={passwordRef}></input>
                <label> Password:</label>
                {!props.isLoading && <button type="text" onClick={loginHandler} >Login</button>}
                {props.isLoading && <p >LOADING ...</p>}
                
            </form>
        </div>
    )
};

const portalElement = document.getElementById('overlays');

const Login = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<LoginForm logIn={props.logIn} isLoading={props.isLoading}></LoginForm>,
                portalElement)}
        </Fragment>
    );
}

export default Login;