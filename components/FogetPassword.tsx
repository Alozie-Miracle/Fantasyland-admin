'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/assets/Group 2 (1).png'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import ResetPassword from './ResetPassword'

type Props = {
    setuser: React.Dispatch<React.SetStateAction<boolean>>;
    setPasswordToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const FogetPassword = ({setuser, setPasswordToggle}: Props) => {
    const [resetPasswordToggle, setResetPasswordToggle] = useState(false)

    const handleClick = () => {
        //handle checks here

        setResetPasswordToggle(true)
    }

    if(resetPasswordToggle === true) return <ResetPassword setResetPasswordToggle={setResetPasswordToggle} setuser={setuser} />
  return (
    <div className='flex items-center justify-center w-full h-[90%]'>
        <div className='bg-white shadow-md p-2 rounded-2xl text-black px-3 md:px-5 w-[95%] md:w-[50%] mx-auto'>
            <div className='flex items-center justify-between border-b border-gray-200 pb-2'>
                <div className='flex items-center gap-1 text-[10px] cursor-pointer' onClick={()=> {
                    setuser(false)
                    setPasswordToggle(false)
                    }}>
                    <ArrowLeftIcon className='h-3 w-5 text-[#4A36EC]' />
                    <p className=' text-[#4A36EC]'>Back</p>
                </div>
                <Image src={logo} alt='logo' className='w-10 h-10 object-contain' />
                <p className='text-xs'>Admin Log In</p>
            </div>
            <div className='flex flex-col items-center justify-center py-5'>
                <h2 className='font-bold'>Forgot Password?</h2>
                <p className="text-[10px] text-[#ABABAB]">Please provide the code sent to your email</p>
            </div>

            <div className='w-[85%] md:w-[60%] mx-auto pb-10 pt-5'>
                <p className='text-[10px] font-bold'>Email Address</p>
                <div className='w-full border border-gray-500 rounded-md p-2 '>
                    <input type='text'  placeholder='Enter Your Email Address' className='w-full outline-none border-none bg-transparent text-xs' />
                    
                </div>

                <p className='text-[10px] font-bold mt-5'>Enter Code</p>
                <div className='w-full border border-gray-500 rounded-md p-2 flex items-center'>
                    <input type='text'  placeholder='Enter Code' className='w-full outline-none border-none bg-transparent text-xs flex-1' />
                    <p className='pl-2 border-l border-gray-300 text-xs text-gray-700 cursor-pointer'>Send</p>
                </div>

                <button type='button' className='w-full mt-5 rounded-xl bg-[#4A36EC] py-3 text-xs text-white' onClick={handleClick}>Continue</button>

            </div>
        </div>
    </div>
  )
}

export default FogetPassword