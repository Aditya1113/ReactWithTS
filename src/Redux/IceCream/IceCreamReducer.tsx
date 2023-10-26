import { stat } from "fs"
import { BUY_ICE_CREAM } from "./IceCreamActionType"



export interface IIceCreamAction{
    type : string
}

export interface IIceCream{
    numberOfIceCream : number
}

export const initialState : IIceCream ={
    numberOfIceCream : 60
}


const IceCreamReducer = (state=initialState,action : IIceCreamAction):IIceCream=>{

    switch(action.type){
        case BUY_ICE_CREAM:
            return {
                numberOfIceCream : state.numberOfIceCream-1
            }

        default : return state
    }

}

export default IceCreamReducer