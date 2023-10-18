import React from 'react'


type Iprops = {
    name:string,
    age:number,
    isAdmin:boolean
}

const Greet = ({name,age,isAdmin}:Iprops) => {

  return (
    <div> {name} {age} {isAdmin?'Yes':'No'} </div>
  )
}

export default Greet