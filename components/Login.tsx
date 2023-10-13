'use client'
'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

import logo from '@/assets/Group 2 (1).png'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import {
    createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from '@/constant/firebase'

type Props = {
    setuser: React.Dispatch<React.SetStateAction<boolean>>;
    setPasswordToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setuser, setPasswordToggle }: Props) => {
    const [toggle, settoggle] = useState(false)
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const auth = getAuth();
        const unsubsscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;
            const uid = user.uid;
            
            window.location.assign('/chat')
        }
        });
        return unsubsscribe;
  }, []);

    const handleClick = () => {
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            if(userCredential.user.email  !== undefined){
                window.location.assign('/chat')
            }
            
        })
        .catch((error) => {
            console.log(error.message);
            
        });
  };
//   const handleSubmit = () => {
//     const auth = getAuth();
//         createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             console.log(userCredential.user);
            
//             // Signed up 
//             const user = userCredential.user;
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(error.message);
            
//             // ..
//         });
//   };

  return (
    <div className='flex items-center justify-center w-full h-[90%]'>
        <div className='bg-white shadow-md p-2 rounded-2xl text-black px-5 w-[90%] md:w-[50%] mx-auto'>
            <div className='flex items-center justify-between border-b border-gray-200 pb-2'>
                <Image src={logo} alt='logo' className='w-10 h-10 object-contain' />
                <p className='text-xs'>Admin Log In</p>
            </div>
            <div className='flex flex-col items-center justify-center py-5'>
                <h2 className='font-bold'>Welcome Back</h2>
                <p className="text-[10px] text-[#ABABAB]">Please enter your log in details</p>
            </div>

            <div className='w-[90%] md:w-[60%] mx-auto pb-10 pt-5'>
                <p className='text-[10px] font-bold'>Email Address</p>
                <div className='w-full border border-gray-500 rounded-md p-2'>
                    <input value={email} onChange={e => setemail(e.target.value)} type='text' name='email'  placeholder='Enter Your Email Address' className='w-full outline-none border-none bg-transparent text-xs' />
                </div>

                <p className='text-[10px] font-bold mt-5'>Passsword</p>
                <div className='w-full border border-gray-500 rounded-md p-2 flex items-center'>
                    <input type={`${toggle === true ? "text" : 'password'}`} value={password} name='password' onChange={e => setPassword(e.target.value)}  placeholder='Enter Your Passsword' className='w-full outline-none border-none bg-transparent text-xs flex-1' />
                    {toggle ? (
                        <EyeSlashIcon className='h-5 w-5 cursor-pointer' onClick={()=> settoggle(false)} />
                    ): (
                        <EyeIcon className='h-5 w-5 cursor-pointer' onClick={()=> settoggle(true)} />
                    )}
                </div>

                <p className='text-[10px] font-bold mt-5 text-[#4A36EC] cursor-pointer hover:scale-105 transition-all duration-200' onClick={()=> {
                    setuser(true)
                    setPasswordToggle(true)
                    }}>Forgot Passwords?</p>

                <button type='button' className='w-full my-2 rounded-xl bg-[#4A36EC] py-3 text-xs text-white' onClick={handleClick}>Log In</button>

            </div>
        </div>
    </div>
  )
}

export default Login