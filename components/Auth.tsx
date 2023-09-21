'use client'
import React, { useState } from 'react'
import Login from './Login'
import FogetPassword from './FogetPassword'

type Props = {}

const Auth = (props: Props) => {
    const [user, setuser] = useState(false)
    const [passwordToggle, setPasswordToggle] = useState(false)

    const token = null

    if(!token){
        if(user === false) return <Login setuser={setuser} setPasswordToggle={setPasswordToggle} />
        if(passwordToggle === true) return <FogetPassword setuser={setuser} setPasswordToggle={setPasswordToggle} />
    }
  return (
    <div>Auth</div>
  )
}

export default Auth