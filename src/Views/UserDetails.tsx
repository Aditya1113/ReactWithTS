import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams,Link, Outlet } from 'react-router-dom'

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
         <div className="row">
    <div className="col s12">
      <ul className="tabs">
        <li className="tab col s3"><Link to={`/users/${id}/personal`}>Personal</Link></li>
        <li className="tab col s3"><Link className="active" to={`/users/${id}/address`}>Address</Link></li>
        <li className="tab col s3"><Link to={`/users/${id}/company`}>company</Link></li>
      </ul>
    </div>
    <Outlet/>
  </div>

    </div>
  )
}

export default UserDetails