import {ADD_PRODUCT, GET_ALL_PRODUCTS} from './productTypes'
// import { addProduct, getAllProducts } from './productActions'

const initialState = {
    items: [],
    item: {}
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT : return {...state, item: action.payload}
        case GET_ALL_PRODUCTS : return {...state, items: action.payload}
        case 'DELETE_PRODUCT': return {...state, item:action.payload}
        default : return state
    }
}

export default productReducer