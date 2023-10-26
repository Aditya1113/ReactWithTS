import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface IUserForm {
  name: string;
  email: string;
  username: string;
}

const AddUser = () => {
  const [userFormData, setUserFormData] = useState<IUserForm>({
    name: "",
    username: "",
    email: "",
  });

  const handleChange = (event: any) => {
    setUserFormData({
      ...userFormData,
      [event.target.name]: event.target.value,
    });
  };

  const navigate = useNavigate();
  const registerProcess = () => {
    axios
      .post("http://localhost:3001/users", userFormData)
      .then((res) => {
        alert("Data added successfully");
        navigate("/users");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="container">
      <h3>Register Form</h3>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="name"
            name="name"
            type="text"
            className="validate"
            onChange={handleChange}
          />
          <label htmlFor="name">Name</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input
            id="email"
            name="email"
            type="email"
            className="validate"
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input
            id="username"
            name="username"
            type="text"
            className="validate"
            onChange={handleChange}
          />
          <label htmlFor="username">Username</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <button
            onClick={registerProcess}
            className="btn purple waves-effect waves-light"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};


export default AddUser;
