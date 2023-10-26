
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";

interface IUserForm {
    name: string;
    email: string;
    username: string;
  }


const EditUser = () => {
    const [userFormData, setUserFormData] = useState<IUserForm>({
        name: "",
        username: "",
        email: "",
      });
      const {id} = useParams()
      const navigate = useNavigate()
    
      const location = useLocation()

        const dataobj =  location.state

     

      const handleChange = (event: any) => {
        setUserFormData({
          ...userFormData,
          [event.target.name]: event.target.value,
        });
      };

      useEffect(()=>{
        // axios.get(`http://localhost:3001/users/${id}`)
        // .then(res=>setUserFormData(res.data))
        // .catch((error) => console.log(error));
        setUserFormData(dataobj)
      },[])
    
  

     
      const UpdateProcess =()=>{
    
            axios.put(`http://localhost:3001/users/${id}`,userFormData)
            .then(res=>{
                alert('Data updated successfully')
                navigate('/users')
            })
            .catch(err=>console.log(err.message))
     }
      return (
        <div className="container">
          <h3>Update Form</h3>
          
          <div className="row">
            <div className="input-field col s12">
              <input
                id="name"
                name="name"
                type="text"
                value={userFormData.name}
                className="validate"
                onChange={handleChange}
              />
              {/* <label htmlFor="name">Name</label> */}
            </div>
          </div>
    
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                name="email"
                type="email"
                value={userFormData.email}
                className="validate"
                onChange={handleChange}
              />
              {/* <label htmlFor="email">Email</label> */}
            </div>
          </div>
    
          <div className="row">
            <div className="input-field col s12">
              <input
                id="username"
                name="username"
                type="text"
                value={userFormData.username}
                className="validate"
                onChange={handleChange}
              />
              {/* <label htmlFor="username">Username</label> */}
            </div>
          </div>
          
            <div className="row">
            <div className="input-field col s12">
                <button onClick={UpdateProcess} className="btn purple waves-effect waves-light">Update</button>
                </div>
            </div>
    
        </div>
      );
}

export default EditUser