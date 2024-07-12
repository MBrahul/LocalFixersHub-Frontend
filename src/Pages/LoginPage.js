import React from 'react'
import Login from '../components/Login/Login';
import Navbar from '../components/Navbar/Navbar'

export default function LoginPage(props) {
    const {heading} = props;
  return (
    <>
    <Navbar/>
    <Login heading = {heading}/>
    </>
  )
}
