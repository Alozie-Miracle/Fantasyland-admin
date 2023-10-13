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
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  
  const userId = localStorage.getItem('userId')

  useEffect(() => {
  const fetchMessages = async () => {
    try {
      // Fetch messages from the "messages" subcollection of the chat document
      const messagesRef = collection(db, "chat", userId, "messages");
      const messagesQuery = query(messagesRef, orderBy("timestamp", "asc"));
      const querySnapshot = await getDocs(messagesQuery);
      const fetchedMessages : any = [];

      querySnapshot.forEach((doc) => {
        fetchedMessages.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setMessages(fetchedMessages);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  fetchMessages();
}, [userId, messages]);  // You likely only need 'userId' as a dependency, not 'messages'


  return (
    <div className='w-full flex gap-10 h-[100vh]'>
      <div className='w-[30%]'>
        <div className=' h-[80vh] overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#4A36EC]/80 pr-5'>
          <User />
        </div>
        <p className='text-xs py-5 text-center text-gray-500'>Admin account. All Rights Reserved</p>
      </div>
      <div className='w-[70%] h-full '>
        <Message />
        
      </div>
    </div>
  )
}

export default Messages