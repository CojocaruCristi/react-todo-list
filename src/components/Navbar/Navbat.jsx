import React from "react";
import {connect} from "react-redux";
import {nullifyUser} from "../../Redux/auth-reducer";
import {NavLink} from "react-router-dom";


const Navbar = (props) => {

    const logOut = () => {
        props.nullifyUser()
    }


    return (
        <div>
            {props.isAuth ? <button onClick={logOut}>Log Out</button> : ""}
            {props.isAuth ? <h3>{`${props.userData.lastName} ${props.userData.firstName}`}</h3> : ""}

        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userData: state.auth.user
    }
}

export default connect(mapStateToProps, {nullifyUser})(Navbar);