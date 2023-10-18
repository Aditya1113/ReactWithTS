import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {

    const [userInfo,setUserInfo] = useState<any>()

        const {id}=useParams();

        useEffect(() => {
            axios
              .get(`http://localhost:3001/users/${id}`)
              .then((res) => setUserInfo(res.data))
              .catch((error) => console.log(error));
          }, []);
  return (
    <div className='container'>

        {
            userInfo?
            <ul className="collection">
                <li className="collection-item avatar">
                <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553__340.png" alt="" className="circle"/>
                <span className="title">{userInfo.name}</span>
                <p>{userInfo.email}<br/>
                   {userInfo.username}
                </p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>
            </ul>
            :
            (<h4>Loading......</h4>)
        }

    </div>
  )
}

export default UserDetails