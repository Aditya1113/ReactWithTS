import React, { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from './IceCreamAction'

import IceCreamReducer, { initialState } from './IceCreamReducer'

const IceCreamContainer = () => {

  const state : any= useSelector(state=>state)
   const dispatch = useDispatch()

   console.log(state)
  return (
    <div className="container">
    <h4>Cake Shop</h4>
    <h3>Available IceCream : <span className='orange-text'>{state.ice.numberOfIceCream}</span></h3>

    <button onClick={()=>dispatch(buyIceCream())} className="wave-effect wave-light btn purple">Buy Ice Cream</button>
    </div>
  )
}

export default IceCreamContainer