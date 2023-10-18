import React, { useEffect, useState } from 'react'

const UseEffectDemo = () => {

    const [counter,setCounter] = useState<number>(0)

    const [name,setName] = useState<string>('')

    // useEffect(()=>{
    //     console.log('useEffect called')
    //    console.log('api calll')
    // },[])//called only once)

    useEffect(()=>{
        console.log('useEffect called')
       console.log('api calll')
    },[counter])

    const handleCLick=()=>{
        setCounter((prevState)=>prevState+1)
    }
  return (
    <div>
        <h1>Count : {counter}</h1>
        <button onClick={handleCLick}>update</button>
        <div className="input-field-col s12">
        <input type="text" onChange={(event)=>setName(event.target.value)}/>
        </div>
    </div>
  )
}

export default UseEffectDemo