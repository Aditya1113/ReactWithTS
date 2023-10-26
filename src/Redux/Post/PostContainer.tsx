import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostData } from './PostAction'

import postReducer, { postInitialState } from './PostReducer'

import {RootState} from '../RootReducer'

const PostContainer = () => {

    // const [state,dispatch] = useReducer(postReducer,postInitialState)


    const data  = useSelector((state : RootState) =>state.post)


    const dispatch = useDispatch()

    console.log(data)


    useEffect(() => {
        dispatch(fetchPostData());
      }, []);



  return (


    <div className="container">
    <table className="table centered">
      <thead>
        <tr>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
        <th>Body</th>
        </tr>
      </thead>

      <tbody>
        {!data.loading ? (
          data.posts.map((user: any) => (
            <tr key={user.id}>
              <td>
                {user.userId}
              </td>
              <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.body}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={2}>
              <div className="preloader-wrapper active center-align">
                <div className="spinner-layer spinner-red-only">
                  <div className="circle-clipper left ">
                    <div className="circle"></div>
                  </div>
                  <div className="gap-patch">
                    <div className="circle"></div>
                  </div>
                  <div className="circle-clipper right">
                    <div className="circle"></div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
  )
}

export default PostContainer