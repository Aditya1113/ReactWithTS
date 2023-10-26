import React, { useState } from 'react'


interface Iprops{
    info:string
}
const HOC = (OriginalComponent: any) => {
    //OriginalComponent = <ClickCounter/>

    function NewComponent(props:Iprops){
        const [counter,setCounter] = useState<number>(0)

        const incrementCounter=()=>{
            setCounter(prev=>prev+1)
        }

        return <OriginalComponent  counter={counter} {...props} incrementCounter={incrementCounter}/>
    }

  return NewComponent
}

export default HOC