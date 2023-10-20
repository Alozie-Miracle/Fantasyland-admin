'use client'
import React, {useState, useRef, useEffect} from 'react'
import User from './User'
import Message from './Message'
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from '@/constant/firebase';
import { MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline';

interface Chat {
  id: string;
  userId: string;
  title: string;
  read: false;
  timestamp: Date
}

interface chatName {
  name: string
}


type Props = {}

const Messages = (props: Props) => {
  const [id, setId] = useState("");
  const [name, setName] = useState('')

    useEffect(() => {
      const getChat = async () => {
        const querySnapshot = await getDocs(collection(db, "chats"));
        const fetchedChats: Chat[] = [];

        querySnapshot.forEach((doc) => {
          fetchedChats.push({
            id: doc.id,
            userId: doc.data().userId,
            title: doc.data().title,
            read: doc.data()?.read,
            timestamp: doc.data().timestamp,
          });
        });

        // Convert timestamps to Date objects and then sort in descending order
        fetchedChats.sort((a, b) => {
          const timestampA = new Date(a.timestamp).getTime();
          const timestampB = new Date(b.timestamp).getTime();
          return timestampA - timestampB;
        });

        const chatName = fetchedChats.filter((name) => {
          return name.id === id
        })

        setName(chatName[0]?.title);
        
        
      };
      getChat();
    }, [id]);
  
  return (
    <>
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
                            <h2 className='text-white text-base'>{name}</h2>
                            <p className='text-xs text-gray-500'>Sit amet consectetur. Et ac nullam riss...</p>
                        </div>
                    </div>
                    <div className='p-2 bg-[#5a1a1a] text-xs'>
                        <p className='text-[#CC0000]'>Delete Message</p>
                    </div>
                </div>
            </div>
        </div>
    <div className='w-full flex gap-10 h-[100vh]'>
      <div className='w-[30%]'>
        <div className=' h-[80vh] overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#4A36EC]/80 pr-5'>
          <User setId={setId} id={id} />
        </div>
        <p className='text-xs py-5 text-center text-gray-500'>Admin account. All Rights Reserved</p>
      </div>
      <div className='w-[70%] h-full '>
        <Message id={id} />
        
      </div>
    </div>
    </>
  )
}

export default Messages