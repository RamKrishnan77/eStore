import axios from 'axios'

export const addUser = user => dispatch => {
    console.log('created new user')
    axios.post('http://localhost:5000/user',user).then(user => dispatch({
        type: 'ADD_CURRENT_USER', payload: user
    }))
}

export const getAllUsers = () => dispatch => {
    console.log('user action')
        axios('http://localhost:5000/user').then(response => 
        dispatch({type: 'GET_USER', payload: response}))
 
}