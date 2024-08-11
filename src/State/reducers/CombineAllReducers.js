import {combineReducers} from "redux"
import UserReducer from "./UserReducer"
import ProductReducer from "./ProductReducer"

export default combineReducers({
    User: UserReducer,
    Product: ProductReducer
})