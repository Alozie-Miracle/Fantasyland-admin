import { chats } from '@/constant/chats'
import { UserIcon } from '@heroicons/react/24/solid'
import React from 'react'

type Props = {}

const Message = (props: Props) => {
  return (
    <div className='bg-[#262626] rounded-md h-full p-2 overflow-y-scroll'>
        <div className='flex items-center justify-center w-full'>
            <p className='text-[10px] text-center text-gray-500 p-2 bg-[#0C0C0C]'>Sunday, August 15th 2022</p>
        </div>
        <div className='py-10 flex flex-col gap-5 '>
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
  )
}

export default Message