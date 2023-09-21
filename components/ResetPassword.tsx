'use client'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/assets/Group 2 (1).png'
import Success from './Success'

type Props = {
    setResetPasswordToggle: React.Dispatch<React.SetStateAction<boolean>>;
    setuser: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResetPassword = ({setResetPasswordToggle, setuser}: Props) => {

    const [resetPassword, setResetPassword] = useState(false)

    const handleClick = () => {
        setResetPassword(true)
    }

    if(resetPassword === true) return <Success setResetPassword={setResetPassword} setuser={setuser} />
  return (
    <div className='flex items-center justify-center w-full h-[90%]'>
        <div className='bg-white shadow-md p-2 rounded-2xl text-black px-3 laptop:px-5 w-[95%] laptop:w-[50%] mx-auto'>
            <div className='flex items-center justify-between border-b border-gray-200 pb-2'>
                <div className='flex items-center gap-1 text-[10px] cursor-pointer' onClick={()=> {
                    setResetPasswordToggle(false)
                    }}>
                    <ArrowLeftIcon className='h-3 w-5 text-[#4A36EC]' />
                    <p className=' text-[#4A36EC]'>Back</p>
                </div>
                <Image src={logo} alt='logo' className='w-10 h-10 object-contain' />
                <p className='text-xs'>Admin Log In</p>
            </div>
            <div className='flex flex-col items-center justify-center py-5'>
                <h2 className='font-bold'>Reset Password?</h2>
                <p className="text-[10px] text-[#ABABAB]">Please enter your password</p>
            </div>

            <div className='w-[85%] laptop:w-[60%] mx-auto pb-10 pt-5'>
                <p className='text-[10px] font-bold'>Enter New Password</p>
                <div className='w-full border border-gray-500 rounded-md p-2 '>
                    <input type='text'  placeholder='Enter New Password' className='w-full outline-none border-none bg-transparent text-xs' />
                    
                </div>

                <p className='text-[10px] font-bold mt-5'>Confirm New Password</p>
                <div className='w-full border border-gray-500 rounded-md p-2 '>
                    <input type='text'  placeholder='Confirm New Password' className='w-full outline-none border-none bg-transparent text-xs flex-1' />
                </div>

                <button type='button' className='w-full mt-5 rounded-xl bg-[#4A36EC] py-3 text-white text-xs' onClick={handleClick}>Continue</button>

            </div>
        </div>
    </div>
  )
}

export default ResetPassword