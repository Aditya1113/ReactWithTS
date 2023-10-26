import axios from "axios"
import { FETCH_POST_FAILURE, FETCH_POST_REQUEST, FETCH_POST_SUCCESS } from "./PostType"


export const fetchPostRequest = ()=>{
    return {
        type : FETCH_POST_REQUEST
    }
}


export const fetchPostSuccess = (postData:any)=>{
    return {
        type : FETCH_POST_SUCCESS,
        payload : postData
    }
}

export const fetchPostFailure = (postError : any)=>{
    return {
        type : FETCH_POST_FAILURE,
        payload : postError
    }
}


//thunk middleware concept ( function )

export const fetchPostData = () : any=>{

    console.log('inside method')
    return (dispatch:any)=>
     {
        console.log('inside return')
        dispatch(fetchPostRequest())
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
         
            dispatch(fetchPostSuccess(res.data))
        })
        .catch(error=>{
            console.log(error)
            dispatch(fetchPostFailure(error.message))
        })
    }

}