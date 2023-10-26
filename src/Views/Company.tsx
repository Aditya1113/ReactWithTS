import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Company = () => {
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
          <span className="title">Name = {userInfo.company.name}</span>
          <p>
            
            Description = {userInfo.company.catchPhrase}<br/>
            Work = {userInfo.company.bs}
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

export default Company