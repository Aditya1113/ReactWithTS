import React, { useState } from 'react'


interface ILoginData{
  email:string,
  password:string
}
const FormHook = () => {

  const [loginFormData,setLoginFormData] = useState<ILoginData>(
    {email:'',password:''}
  )

  const handleChange=(event:any)=>{
      setLoginFormData({...loginFormData,[event.target.name]:event.target.value})
  }

  console.log(loginFormData)
  return (
    <div>

<div className="row">
        <div className="input-field col s12">
          <input id="email" name="email" type="email" className="validate" onChange={handleChange}/>
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" name="password" type="password" className="validate" onChange={handleChange}/>
          <label htmlFor="password">Password</label>
        </div>
      </div>
    

     
    </div>
  )
}

export default FormHook