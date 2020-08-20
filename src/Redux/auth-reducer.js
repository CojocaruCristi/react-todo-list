const SET_USER_DATA = "SET_USER_DATA";
const AUTH_USER = "AUTH_USER";
const NULLIFY_USER_DATA = "NULLIFY_USER_DATA";


const initialState = {
    user: null,
    isAuth: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                user: action.userData
            }
            case AUTH_USER:
            return {
                ...state,
                isAuth: true
            }
            case NULLIFY_USER_DATA:
            return {
                ...state,
                user: null,
                isAuth: false
            }
        default: return state
    }
}




export const setUserData = (userData) => {
    return {
       type: SET_USER_DATA,
       userData
    }
}
export const authUser = () => {
    return {
       type: AUTH_USER,
    }
}

export const nullifyUser = () => {
    return {
        type: NULLIFY_USER_DATA
    }
}



export default authReducer