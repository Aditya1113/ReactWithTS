import React, { useState } from 'react'


interface ILoginData{
     email: string
     password: string
}


interface IMovie{
    movie: string
    seen: boolean
}


export default function UseStateHookDemo() {


  const [message, setMessage] = useState<string>('Please Subscribe ,Like and share')
  const[firstName, setFirstName] = useState<string>('Peter Parker')
  const [age , setAge] = useState<number>(23)
  const [counter, setCounter] = useState<number>(0)
  const [movieList, setMovieList] = useState<IMovie[]>([
      {movie:'AVENGERS', seen: false},
      {movie:'IRON MAN', seen: false},
      {movie:'SPIDER MAN', seen: true},
      {movie:'SNIPER', seen: false},
  ])


  //Login Form State
  const [loginFormData , setLoginFormData] = useState<ILoginData>({email:'',password:''})


   const handleClick = ()=>{
    // setMessage('Thank you for subcribing')
    // setFirstName('John Doe')
    // setAge(45)


    // setCounter((prevState)=>prevState +1)




  }


  const loginProcess  = ()=>{
     console.log(loginFormData)
  }


  const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
      setLoginFormData({...loginFormData,[event.target.name]:event.target.value})
  }


  const handleCheck = (index: number)=>{
        let temp = [...movieList]
        temp[index].seen =  !temp[index].seen
        setMovieList(temp)


  }
  return (
    <div className='container'>
        <h3>Movie List</h3>
           {/* Movie Collection Starts */}
              <table className='table'>
                <thead>
                   <tr>
                      <th>Movie</th>
                      <th>Seen</th>
                  </tr>
                </thead>
                <tbody>
           
             {
                movieList?
                    movieList.map((m,index)=>(
                        <tr key={index}>
                            <td>{m.movie}</td>
                            <td>
                             <label>
                                    <input type="checkbox" checked={m.seen} onChange={()=>handleCheck(index)}/>
                                    <span>seen</span>
                                </label>
                            </td>
                       </tr>    
                    ))
                : <h4>Loading.....</h4>
             }  
              </tbody>
              </table>


            {/* Movie Collection End */}


            {/* Login Form Start */}
             <h4>Login Form</h4>
            {/* <div className="row">
                    <div className="input-field col s12">
                    <input onChange={(event)=>setLoginFormData({...loginFormData,email:event.target.value})}
                         id="email" type="email" className="validate"/>


                    <label htmlFor="email">Email</label>
                    </div>
              </div>
            <div className="row ">
                    <div className="input-field col s12">
                    <input onChange={(event)=>setLoginFormData({...loginFormData,password:event.target.value})}
                         id="password" type="password" className="validate"/>
                    <label htmlFor="password">Password</label>
                    </div>
                </div> */}


                {/* Other Way  */}
                <div className="row">
                    <div className="input-field col s12">
                    <input onChange={handleChange} name="email" id="email" type="email" className="validate"/>


                    <label htmlFor="email">Email</label>
                    </div>
              </div>
            <div className="row ">
                    <div className="input-field col s12">
                    <input onChange={handleChange} name="password" id="password" type="password" className="validate"/>
                    <label htmlFor="password">Password</label>
                    </div>
                </div>
               
           <button onClick={loginProcess} className='wave-effect wave-light btn blue darken-4'>Login</button>
 
     
            {/* Login From End */}
              <hr/>
           <h1>Counter : {counter}</h1>  
           <button onClick={handleClick} className='wave-effect wave-light btn teal arken-4'>Increment</button>
           <hr/>
          <h2>{message}</h2>
          <button onClick={handleClick} className='wave-effect wave-light btn purple arken-4'>Subscribe</button>
         
          <hr/>
          <h3>{firstName}</h3>
          <button onClick={handleClick} className='wave-effect wave-light btn red adrken-4'>ChangeName</button>


          <hr/>
          <h3>{age}</h3>
          <button onClick={handleClick} className='wave-effect wave-light btn green darken-4'>ChangeAge</button>




    </div>
  )
}
