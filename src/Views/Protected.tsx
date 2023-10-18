import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Protected = (props:any) => {

    const {Component} = props

    const navigate=useNavigate()

    useEffect(()=>{
        let login: string | null = sessionStorage.getItem("role");

        if(!login){
            navigate('/login')
        }
    })
  return (

    <Component/>
  )
}

export default Protected