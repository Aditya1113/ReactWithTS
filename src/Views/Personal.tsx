import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Personal = () => {

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
            <span className="title">Id = {userInfo.id}</span>
            <p>Phone = {userInfo.phone}<br/>
               website = {userInfo.website}
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

export default Personal