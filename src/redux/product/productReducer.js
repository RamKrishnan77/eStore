import { ADD_PRODUCT, GET_ALL_PRODUCTS, DELETE_PRODUCT } from './productTypes'
// import { addProduct, getAllProducts } from './productActions'

const initialState = { data: [] }

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      let { data } = state
      data.push(action.payload)
      return { data }
    }
    case GET_ALL_PRODUCTS:
      return action.payload
    case DELETE_PRODUCT:
      let { data } = state
      return { data: data.filter((item) => item.id != action.payload) }
    default:
      return state
  }
}

export default productReducer
