import Messages from '@/components/Messages'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/solid'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className=' h-[100vh] overflow-hidden'>
        
        <div className='px-5'>
            <Messages />
        </div>
    </div>
  )
}

export default page