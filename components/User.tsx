import { readMessage, unreadMessages } from '@/constant/users'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/solid'
import React from 'react'

type Props = {}

const User = (props: Props) => {
  return (
    <div>
        <div className='py-2 flex flex-col gap-2'>
            <div className='flex items-center justify-between text-gray-500 '>
                <p className='text-xs'>Unread</p>
                <ChevronDownIcon className='h-5 w-5 text-gray-500' />
            </div>
            {unreadMessages.map((msg, index) => (
                <div className='flex flex-col gap-5 py-2' key={index}>
                    <div className='flex gap-2'>
                        <div className='w-8 h-8 rounded-full bg-[#4A36EC] flex items-center justify-center'>
                            <UserIcon className='h-4 w-4 text-white' />
                        </div>
                        <div>
                            <h2 className='text-white text-sm'>{msg.msg1}</h2>
                            <p className='text-xs text-gray-500'>{msg.msg2}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        <div className='py-2 flex flex-col gap-2'>
            <div className='flex items-center justify-between text-gray-500 '>
                <p className='text-xs'>All Messages</p>
                <ChevronDownIcon className='h-5 w-5 text-gray-500' />
            </div>
            {readMessage.map((msg, index) => (
                <div className='flex flex-col gap-5 py-2' key={index}>
                    <div className='flex gap-2'>
                        <div className='w-8 h-8 rounded-full bg-[#4A36EC] flex items-center justify-center'>
                            <UserIcon className='h-4 w-4 text-white' />
                        </div>
                        <div>
                            <h2 className='text-white text-sm'>{msg.msg1}</h2>
                            <p className='text-xs text-gray-500'>{msg.msg2}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default User