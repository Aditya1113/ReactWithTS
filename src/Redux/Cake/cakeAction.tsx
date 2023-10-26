import { BUY_CAKE, BUY_CANDLE } from "./cakeActionType"


export const buyCake =(qty:number)=>{
    return {
        type :  BUY_CAKE,
        payload:qty
    }
}


export const buyCandle =(qty:number)=>{
    return {
        type :  BUY_CANDLE,
        payload : qty
    }
}

