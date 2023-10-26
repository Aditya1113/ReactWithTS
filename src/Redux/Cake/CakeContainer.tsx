import React, { useReducer, useState } from 'react'
import { buyCake, buyCandle } from './cakeAction'
import cakeReducer, { initialState } from './cakeReducer'

const CakeContainer = () => {

   const [state,dispatch] = useReducer(cakeReducer,initialState)

    const [qty,setQty] = useState<number>(0)
    const [candleqty,setCandleQty] = useState<number>(0)

//    console.log(state)

  return (

    <div className="container">
        <h4>Cake Shop</h4>
        <h3>Available Cakes : <span className='orange-text'>{state.numberOfCakes}</span></h3>

        <div className="row">
            <div className="input-field col s12">
                <input type="number" id='qty' className='validate' onChange={(event:any)=>setQty(event.target.value)}/>
                <label htmlFor="qty">Enter Quantity</label>
            </div>
        </div>
        <button onClick={()=>dispatch(buyCake(qty))} className="wave-effect wave-light btn purple">Buy Cake</button>
        
        {/* BUY_CANDLE  */}

        <h3 className='teal-text'>
            Available Candles : <span className='orange-text'>{state.numberOfCandles}</span>
        </h3>
        <div className="row">
            <div className="input-field col s12">
                <input type="number" id='qty1' className='validate' onChange={(event:any)=>setCandleQty(event.target.value)}/>
                <label htmlFor="qty1">Enter Quantity</label>
            </div>
        </div>
        <button onClick={()=>dispatch( buyCandle(candleqty))} className="wave-effect wave-light btn purple">Buy Candle</button>
    </div>
  )
}

export default CakeContainer