'use client'
import { db } from '@/constant/firebase'
// import { readMessage, unreadMessages } from '@/constant/users'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/solid'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

type Props = {
    setId:React.Dispatch<React.SetStateAction<string>>; 
    id: string
}

interface Chat {
    id: string;
    userId: string;
    title: string;
    read: false;
}

const User = ({ setId, id }: Props) => {
    const [chatTitle, setChatTitle] = useState<Chat[]>([]);

    useEffect(() => {
        const getChat = async () => {
            const querySnapshot = await getDocs(collection(db, "chats"));
            const fetchedChats: Chat[] = [];

            querySnapshot.forEach((doc) => {
                fetchedChats.push({
                    id: doc.id,
                    userId: doc.data().userId,
                    title: doc.data().title,
                    read: doc.data()?.read
                });
            });

            setChatTitle(fetchedChats);
        };

        getChat();
    }, []);

    const handleClick = (id: string) => {
        setId(id)
    }
  return (
    <div className='h-full'>
        <div className='py-2 flex flex-col gap-2 pb-5'>
            <div className='flex items-center justify-between text-gray-500 '>
                <p className='text-xs'>All Messages</p>
                <ChevronDownIcon className='h-5 w-5 text-gray-500' />
            </div>
            {chatTitle.map((msg) => (
                <div className={`${id === msg.id && 'bg-gray-700 rounded-md'} flex flex-col gap-5 py-2 px-1`} onClick={() =>handleClick(msg.id)} key={msg.id}>
                    <div className='flex items-center gap-2'>
                        <div className='w-8 h-8 rounded-full bg-[#4A36EC] flex items-center justify-center'>
                            <UserIcon className='h-4 w-4 text-white' />
                        </div>
                        <div>
                            <h2 className='text-white text-sm'>{msg?.title}</h2>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        
    </div>
  )
}

export default User