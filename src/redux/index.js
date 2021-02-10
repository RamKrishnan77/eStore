import { combineReducers} from 'redux'
import  productReducer  from './product/productReducer'
import userReducer from './user/user.reducer'

export default combineReducers ({
    products: productReducer,
    user: userReducer
})