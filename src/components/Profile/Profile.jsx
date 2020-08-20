import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import Todo from "./Todo";
import {checkTask, createNewTask, deleteTodo} from "../../Redux/todos-reducer";


const Profile = (props) => {

    if (!props.isAuth){
        return <Redirect to={"/login"} />
    }

    return (
        <div>
            <Todo todosList={props.todosList} deleteTodo={props.deleteTodo} createNewTask={props.createNewTask} checkTask={props.checkTask} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        todosList: state.todoData.todos
    }
}

export default connect(mapStateToProps, {deleteTodo, createNewTask, checkTask})(Profile);