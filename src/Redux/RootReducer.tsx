import React from 'react'
import { combineReducers } from 'redux'
import cakeReducer from './Cake/cakeReducer'
import IceCreamReducer from './IceCream/IceCreamReducer'
import postReducer from './Post/PostReducer'

const RootReducer = combineReducers({
   cake : cakeReducer,
    ice : IceCreamReducer,
    post : postReducer
})


export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer