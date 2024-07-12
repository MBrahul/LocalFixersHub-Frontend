import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import SignUp from '../components/SignUp/SignUp'

export default function SignUpPage(props) {
  const {heading} = props;
  return (
    <>
    <Navbar/>
    <SignUp heading = {heading}/>
    </>
  )
}
