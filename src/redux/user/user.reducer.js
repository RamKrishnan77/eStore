const INITIAL_STATE = {
    myCurrentUser: {}
}    

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_CURRENT_USER': return {...state, myCurrentUser: action.payload
            }
        case 'GET_USER': return {...state, myCurrentUser: action.payload
            }
        default: return state
    }
}

export default userReducer;