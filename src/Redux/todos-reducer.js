const DELETE_TO_DO = "DELETE_TO_DO";
const CREATE_NEW_TASK = "CREATE_NEW_TASK";
const CHECK_TASK = "CHECK_TASK";


let initialState = {
    todos: []

}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_TO_DO:
            return {
                ...state,
                todos: state.todos.filter(el => {
                    return el.id !== action.taskId
                })
            }
        case CREATE_NEW_TASK:
            return {
                ...state,
                todos: [...state.todos, action.task]
            }
        case CHECK_TASK:
            return {
                ...state,
                todos: state.todos.map(el => {
                    if (el.id === action.id){
                        el.check = !el.check;
                    }
                    return el
                })
            }
        default: return state
    }
}



export const deleteTodo = (taskId) => {
    return {
        type: DELETE_TO_DO,
        taskId
    }
}
export const createNewTask = (task) => {
    return {
        type: CREATE_NEW_TASK,
        task
    }
}

export const checkTask = (id) => {
    return {
        type: CHECK_TASK,
        id
    }
}



export default todoReducer;