import { act } from "react-dom/test-utils"
import { BUY_CAKE, BUY_CANDLE } from "./cakeActionType"


export interface ICakeAction {
    type : string
    payload : number
}

export interface ICake {
    numberOfCakes : number
    numberOfCandles : number
}
export const initialState :ICake  = {
    numberOfCakes : 60,
    numberOfCandles : 40 
}

// const initialState = 60; without object 

// action ={
//     type : BUY_CAKE
//      payload : 5
// }
const cakeReducer = (state=initialState,action:ICakeAction):ICake=>{

        switch(action.type){

            case BUY_CAKE:
                // return  state - 1 //without object
                return {
                    ...state,
                    numberOfCakes : state.numberOfCakes - action.payload
                } 
            
            case BUY_CANDLE : 
            return {
                ...state,
                numberOfCandles : state.numberOfCandles - action.payload
            } 

            default:
                return state
        }

}

export default cakeReducer