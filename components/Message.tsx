'use client'
import { chats } from '@/constant/chats'
import { app, db } from '@/constant/firebase'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/solid'
import { getAuth } from 'firebase/auth'
import { addDoc, collection, getDocs, orderBy, query, serverTimestamp, onSnapshot  } from 'firebase/firestore'
import React, { useRef, useEffect, useState } from 'react'
import headset from '@/assets/ri_customer-service-2-fill.png'
import Image from 'next/image'

type Props = {
    id: string
}

interface Message {
    email: string;
    id: string;
    user: string;
    message: string;
    timestamp: any
}

const Message = ({id}: Props) => {
    const [toggle, setToggle] = useState(true)
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState<Message[]>([])
    const scrollViewRef = useRef(null);

    // const fetchMessages = async () => {
    //     // Fetch messages from the "messages" subcollection of the chat document
    //     const messagesRef = collection(db, "chats", id, "messages");
    //     const messagesQuery = query(messagesRef, orderBy("timestamp", "asc"));
    //     const querySnapshot = await getDocs(messagesQuery);
    //     const fetchedMessages: Message[] = [];

    //     querySnapshot.forEach((doc) => {
    //         fetchedMessages.push({
    //             id: doc.id,
    //             user: doc.data().user,
    //             message: doc.data().message,
    //             timestamp: doc.data().timestamp, // Change 'timeStamp' to 'timestamp'
    //             email: doc.data().email
    //         });
    //     });
    //     setMessages(fetchedMessages);
    // };

    // useEffect(() => {
    //     fetchMessages()
        
    // }, [id, messages])

    useEffect(() => {
    // Set up a query for the messages collection
    if (!id) return;
        const messagesRef = collection(db, 'chats', id, 'messages');
        const messagesQuery = query(messagesRef, orderBy('timestamp', 'asc'));

        // Set up a snapshot listener to listen for changes
        const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
            const fetchedMessages: Message[] = [];
            snapshot.forEach((doc) => {
                fetchedMessages.push({
                    id: doc.id,
                    user: doc.data().user,
                    message: doc.data().message,
                    timestamp: doc.data().timestamp,
                    email: doc.data().email,
                });
            });
            setMessages(fetchedMessages);
        });

        // This will unsubscribe from the listener when the component unmounts
        return unsubscribe;
    }, [id]);


    const sendMessage = async () => {
        const auth = getAuth(app)
        

        if (input) {
            const messagesRef = collection(db, "chats", id, "messages");

            // Add a new message to the subcollection
            await addDoc(messagesRef, {
            message: input,
            timestamp: serverTimestamp(), // Change 'timeStamp' to 'timestamp'
            email: auth?.currentUser?.email,
            user: 'admin',
        });
            // fetchMessages();

            setInput("");
            const container = scrollViewRef.current as HTMLElement | null; // Use assertion

            if (container) {
                container.scrollTop = container.scrollHeight;
            }

        }

        
        
        

    return;
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
        // Handle Enter key press here, e.g., trigger a function or submit a form.
        sendMessage(); // You can call your send message function here.
    }
};
  


  return (
    <>

        {
            toggle ? (
                <div className='bg-[#262626]  rounded-lg pb-2'>
                    <div ref={scrollViewRef} className='h-[80vh] p-2 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#4A36EC]/80'>
                        <div className='flex items-center justify-center w-full'>
                            <p className='text-[10px] text-center text-gray-500 p-2 bg-[#0C0C0C]'>{new Date().toLocaleTimeString()}</p>
                        </div>
                        <div className='py-10 flex flex-col gap-5'>
                            {messages.map((chat, index) => (
                                <div className={`${chat.user === 'admin' ? "justify-end" : "justify-start" } flex `} key={index}>
                                    <div className={`${chat.user === 'admin' ? 'text-gray-800' : 'text-[#4A36EC]' } w-[420px] p-2 bg-white rounded-md flex gap-2 items-center`}>
                                        <div className={`${chat.user !== 'admin' && 'w-8 h-8 rounded-md bg-[#4A36EC] flex items-center justify-center'}`}>
                                            <UserIcon className='h-4 w-4 text-white' />
                                        </div>
                                        <div className='w-[80%]'>
                                            <p className={`${chat.user === 'admin' && 'text-right'} text-[10px]`}>{chat.message}</p>
                                            <p className={`${chat.user === 'admin' ? "justify-end" : "justify-start" } flex text-[8px]`}>{new Date(chat.timestamp?.toDate()).toLocaleString()}</p>
                                        </div>
                                        <div className={`${chat.user === 'admin' && 'w-8 h-8 rounded-md bg-black flex items-center justify-center'}`}>
                                            <Image src={headset} alt='headset' className='h-4 w-4' />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='border border-gray-500 p-2 rounded-md max-w-[80%] mx-auto bg-[#262626] my-2 flex items-center gap-5'>
                        <input type='text' value={input} onChange={e => setInput(e.target.value)} placeholder='type your message...' className='bg-transparent outline-none border-none w-full text-xs flex-1' onKeyDown={handleKeyDown}/>
                        <div className='flex items-center gap-5'>
                            <div className='h-4 w-[1px] bg-gray-400' />
                            <PaperAirplaneIcon onClick={sendMessage} className='text-gray-400 h-5 w-5 cursor-pointer active:scale-90 transition duration-200 ease-in-out' />
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