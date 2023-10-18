import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ILoginData {
  email: string;
  password: string;
}



const Login = () => {

    const navigate = useNavigate()

  const [loginFormData, setLoginFormData] = useState<ILoginData>({
    email: "",
    password: "",
  });

  const handleChange = (event: any) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };


  const loginProcess=()=>{

        if(loginFormData.email==='admin' && loginFormData.password==='admin'){
            sessionStorage.setItem('role','admin')
            navigate('/about')
           
        }
       else{
        sessionStorage.setItem('role','guest')
        navigate('/home')
       }

  }




  console.log(loginFormData);
  return (
    <div className="container">
        <h3>Login Form</h3>
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
            id="password"
            name="password"
            type="password"
            className="validate"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field-col s12">
            <button onClick={loginProcess} className='btn teal wave-effect wave-light'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
