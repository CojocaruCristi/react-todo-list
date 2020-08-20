import React, {useState} from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {registerNewUser} from "../../Redux/register-reducer";
import {NavLink, Redirect} from "react-router-dom";



const RegisterForm = (props) => {
    return (
        <div>

            <form onSubmit={props.handleSubmit} >
                <div>
                    <Field placeholder={"First Name"} name={"firstName"} component={"input"} />
                </div>
                <div>
                    <Field placeholder={"Last Name"} name={"lastName"} component={"input"} />
                </div>
                <div>
                    <Field placeholder={"Email"} name={"email"} component={"input"} />
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} type={"password"} component={"input"} />
                </div>
                <div>
                    <Field name="country" component="select">
                        <option />
                        {props.countries.map(c => {
                            return <option key={c.code} value={c.name} >{c.name}</option>
                        })}
                    </Field>
                </div>
                <div>
                    <Field placeholder={"Phone Number"} name={"phoneNumber"} component={"input"} />
                </div>
                <div>
                    <button>Register</button>
                </div>
            </form>
            <NavLink to={"/login"} >Log In</NavLink>
        </div>
    )
}

const RegisterReduxForm = reduxForm({form: 'register'})(RegisterForm)

const Register = (props) => {

    const [redirectMode, setRedirectMode] = useState(false);

    const onSubmit = (formData) => {
        console.log(formData)
        props.registerNewUser(formData);
        setRedirectMode(!redirectMode)
    }

    if (redirectMode){
        return <Redirect to={"/login"} />
    }

    return (
        <RegisterReduxForm onSubmit={onSubmit} countries={props.countries} />
    )
}



export default Register;