import { FETCH_POST_FAILURE, FETCH_POST_REQUEST, FETCH_POST_SUCCESS } from "./PostType"

export interface IPostAction {
    type :string
    payload? : IPost[] | undefined
}

export interface IPost{
    userId : number,
    id : number,
    title: string,
    body : string
}

export interface IPostData {
    loading : boolean
    posts : IPost[]
    error : string
}

export const postInitialState : IPostData ={
    loading : false,
    posts : [],
    error : ''
}

const postReducer = (state = postInitialState,action:IPostAction):any=>{
    switch(action.type){
        case FETCH_POST_REQUEST:
            return {
                ...state ,
                loading : true
            }
        
        case FETCH_POST_SUCCESS:{
            return {
                loading : false,
                posts : action.payload,
                error : ''
            }
        }

        case FETCH_POST_FAILURE:{
            return {
                loading : false,
                posts :[],
                error : action.payload
            }
        }

        default : 
            return state
    }
}


export default postReducer