import React from 'react'
import User from './User'
import Message from './Message'

type Props = {}

const Messages = (props: Props) => {
  return (
    <div className='w-full flex gap-10 h-full'>
        <div className='w-[30%] overflow-y-scroll'>
            <User />
        </div>
        <div className='w-[70%]  h-full'>
            <Message />
        </div>
    </div>
  )
}

export default Messages