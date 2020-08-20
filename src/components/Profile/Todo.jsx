import React from "react";
import {Field, reset, reduxForm} from "redux-form";
import "./Profile.css";

const TodoForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter what u have to do"} name={"task"} component={"input"} />
            </div>
            <div>
                <button>Add task</button>
            </div>
        </form>
    )
}


const afterSubmit = (result, dispatch) =>
    dispatch(reset('todoList'));


const TodoReduxForm = reduxForm({form: 'todoList', onSubmitSuccess: afterSubmit,})(TodoForm)

const Todo = (props) => {

    const onSubmit = (formData) => {
        formData.id = Math.random();
        formData.check = false;
        formData.editMode = false;
        props.createNewTask(formData);
        console.log(formData)
    }

    return (
        <div>
            <TodoReduxForm onSubmit={onSubmit} />
            {props.todosList.map(t => {
                return <div key={t.id}  className={t.check ? "checked" : ""}>
                    <input type={"checkbox"} checked={t.check} onClick={() => {props.checkTask(t.id)}}/> {t.task} <span onClick={() => {props.deleteTodo(t.id)}}>X</span>
                    </div>
            })}
        </div>
    )
}

export default Todo;