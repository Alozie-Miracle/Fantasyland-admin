import Messages from '@/components/Messages'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/solid'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className=' h-[100vh] overflow-hidden'>
        <div className='w-full px-5 flex gap-10 items-center py-5 sticky top-0 z-50 bg-black '>
            <div className='w-[30%]'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-[#4A36EC]'>Messages</h2>
                    <MagnifyingGlassIcon className='h-5 w-5 text-gray-500' />
                </div>
            </div>
            <div className='w-[70%]'>
                <div className='flex items-center justify-between'>
                    <div className='flex gap-2'>
                        <div className='w-10 h-10 rounded-full bg-[#4A36EC] flex items-center justify-center'>
                            <UserIcon className='h-4 w-4 text-white' />
                        </div>
                        <div>
                            <h2 className='text-white text-base'>Need help with gags</h2>
                            <p className='text-xs text-gray-500'>Sit amet consectetur. Et ac nullam riss...</p>
                        </div>
                    </div>
                    <div className='p-2 bg-[#5a1a1a] text-xs'>
                        <p className='text-[#CC0000]'>Delete Message</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-5'>
            <Messages />
        </div>
    </div>
  )
}

export default page