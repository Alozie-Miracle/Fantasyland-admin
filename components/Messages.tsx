'use client'
import React, {useState, useRef, useEffect} from 'react'
import User from './User'
import Message from './Message'
import {
  collection,
  getDocs,
  serverTimestamp,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from '@/constant/firebase';



type Props = {}

const Messages = (props: Props) => {
  const [id, setId] = useState("");
  
  return (
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
  )
}

export default Messages