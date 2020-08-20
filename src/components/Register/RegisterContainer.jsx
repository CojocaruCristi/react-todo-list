import React from "react";
import Register from "./Register";
import {connect} from "react-redux";
import {registerNewUser} from "../../Redux/register-reducer";


const ProfileContainer = (props) => {

    return(
        <Register registerNewUser={props.registerNewUser} countries={props.countries} />
    )

}





let mapStateToProps = (state) => {
    return(
        {
            countries: state.users.countries
        }
    )
}

export default connect(mapStateToProps, {registerNewUser})(ProfileContainer);