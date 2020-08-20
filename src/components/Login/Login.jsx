import React from "react";
import {Field, reduxForm} from "redux-form";
import {NavLink, Redirect} from "react-router-dom";



const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit} >
                <div>
                    <Field placeholder={"Email"} name={"email"} component={"input"} />
                </div>
                <div>
                    <Field placeholder={"Password"} name={"Password"} type={"password"} component={"input"} />
                </div>
                <div>
                    <button>Log In</button>
                </div>
            </form>
            <NavLink to={"/register"}>Register</NavLink>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <LoginReduxForm onSubmit={onSubmit} />
    )
}



export default Login;