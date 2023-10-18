import React from 'react'

interface IProps {
    info:{
        email:string,
        fullName:string,
        location:string
    }
}


const Person = ({info:{email,fullName,location}}:IProps) => {

    // let {email,fullName,location} = props.info
  return (
    <div>
        <h1>{email}</h1>
        <h2>{fullName}</h2>
        <h3>{location}</h3>
    </div>
  )
}

export default Person