'use client'
import { chats } from '@/constant/chats'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/solid'
import React, { useRef, useEffect, useState } from 'react'

type Props = {}

const Message = (props: Props) => {
    const scrollViewRef = useRef();
    const [toggle, setToggle] = useState(true)

    useEffect(() => {
        const userId = localStorage.getItem('userId')
        if(userId !== null){
            setToggle(true)
        }
    }, [])
  return (
    <>

        {
            toggle ? (
                <div className='bg-[#262626]  rounded-lg pb-2'>
                    <div className='h-[80vh] p-2 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#4A36EC]/80' >
                        <div className='flex items-center justify-center w-full'>
                            <p className='text-[10px] text-center text-gray-500 p-2 bg-[#0C0C0C]'>Sunday, August 15th 2022</p>
                        </div>
                        <div className='py-10 flex flex-col gap-5'>
                            {chats.map((chat, index) => (
                                <div className={`${chat.user === 'admin' ? "justify-end" : "justify-start" } flex `} key={index}>
                                    <div className={`${chat.user === 'admin' ? 'text-gray-800' : 'text-[#4A36EC]' } w-[420px] p-2 bg-white rounded-md flex gap-2 items-center`}>
                                        <div className={`${chat.user !== 'admin' && 'w-8 h-8 rounded-md bg-[#4A36EC] flex items-center justify-center'}`}>
                                            <UserIcon className='h-4 w-4 text-white' />
                                        </div>
                                        <div className='w-[80%]'>
                                            <p className={`${chat.user === 'admin' && 'text-right'} text-[10px]`}>{chat.msg}</p>
                                            <p className={`${chat.user === 'admin' ? "justify-end" : "justify-start" } flex text-[8px]`}>{chat.time}</p>
                                        </div>
                                        <div className={`${chat.user === 'admin' && 'w-8 h-8 rounded-md bg-[#4A36EC] flex items-center justify-center'}`}>
                                            <UserIcon className='h-4 w-4 text-white' />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='border border-gray-500 p-2 rounded-md max-w-[80%] mx-auto bg-[#262626] my-2 flex items-center gap-5'>
                        <input type='text' placeholder='type your message...' className='bg-transparent outline-none border-none w-full text-xs flex-1' />
                        <div className='flex items-center gap-5'>
                            <div className='h-4 w-[1px] bg-gray-400' />
                            <PaperAirplaneIcon className='text-gray-400 h-5 w-5 cursor-pointer active:scale-90 transition duration-200 ease-in-out' />
                        </div>

                    </div>
                </div>

            ): (
                <div className='h-full w-full flex flex-col items-center justify-center'>
                    <h2 className='text-[#4A36EC] text-3xl font-bold'>Welcome</h2>
                    <p className='text-gray-500'>You've got no chat open yet.</p>
                </div>
            )
        }
    
    </>
  )
}

export default Message