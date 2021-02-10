import {ADD_PRODUCT,GET_ALL_PRODUCTS} from './productTypes'
import axios from 'axios'

// async function f() {
//     // let data = await (await fetch('http://localhost:3000/api').catch((err)=> console.warn(err))).json()
//     axios('http://localhost:3000/api/users').then(el => console.log(el))
//     // console.log(data)
//     // return data
// }

export  const addProduct = data => dispatch => {
    console.log('created new product')
    axios.post('http://localhost:5000/data',data).then(data => dispatch({
        type: ADD_PRODUCT, payload: data
    }))
}

export const deleteProduct = data => dispatch => {
    console.log('created new product')
    axios.delete('http://localhost:5000/data',data).then(data => dispatch({
        type: 'DELETE_PRODUCT', payload: data
    }))
}

export const getAllProducts = () => async (dispatch) => {
    console.log('action')
    await axios('http://localhost:5000/data').then(response => 
            dispatch({type: GET_ALL_PRODUCTS, payload: response}))
    // dispatch({type: GET_ALL_PRODUCTS, payload: data})

 
}