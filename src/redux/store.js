import {configureStore} from '@reduxjs/toolkit'
import ProductReducer from './product/productReducer'

const store = configureStore({reducer: ProductReducer})

export default store