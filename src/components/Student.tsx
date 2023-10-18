import React from 'react'

interface data{
    id:number,
    name:string,
    gender:string,
    age:number
}


interface Iprops{
    details:data[]
}


const Student = (props:Iprops) => {

    // const sayMyName=()=>{
    //     alert('Hi Everyone')
    // }

    const sayMyName=(std: data)=>{
        alert(`Hi ${std.name}`)
    }
  return (
    <div>
        {
            props.details.map((std,index)=>(
                <>
                <li key={index}>{std.id},{std.name},{std.age},{std.gender}</li>
                {/* <button onClick={sayMyName}  className='btn wave-light waves-effect'>PrintName</button> */}
                <button onClick={()=>sayMyName(std)}  className='btn wave-light waves-effect'>PrintName</button>
                
                </>
            ))
        }
    </div>
  )
}

export default Student