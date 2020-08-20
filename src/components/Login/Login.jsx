import React from "react";
import {Field, reduxForm} from "redux-form";
import {NavLink, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {authUser, setUserData} from "../../Redux/auth-reducer";



const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit} >
                <div>
                    <Field placeholder={"Email"} name={"email"} component={"input"} />
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} type={"password"} component={"input"} />
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

        props.usersData.map(u => {
            if (formData.email === u.email && formData.password === u.password) {
                props.setUserData(u);
                props.authUser();
            }
        })

    }

    if (props.isAuth) return <Redirect to={"/profile"} />

    return (
        <LoginReduxForm onSubmit={onSubmit} />
    )
}


const mapStateToProps = (state) => {
    return {
        usersData: state.users.usersData,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {setUserData, authUser})(Login);