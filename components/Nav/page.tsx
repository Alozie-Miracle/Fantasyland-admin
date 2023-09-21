'use client'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import hambuger from '@/assets/hamburger.png'
import { usePathname } from 'next/navigation'

export default function Nav() {
    const [toggle, setToggle] = useState(false)
    const [pathname, setPathname] = useState('/')

    const router = usePathname()

    useEffect(() => {

        setPathname(router)
    
    }, [router])

    const scrollToTop = () => {
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        })
    }
   
  return (
    <div className='sticky top-0 z-50 bg-black'>
    <div className='bg-[#0C0C0C] h-[65px] w-[100%] text-[#FFFFFF] lg:flex items-center justify-between hidden '>
        <div className='ml-[98px] cursor-pointer ' onClick={scrollToTop}> 
            <Image src='../img/logo.svg' height={100} width= {100} alt={'Logo'} className='w-[173px] ' />  
        </div>
        <div className='flex w-[30%] justify-between text-[16px] font-500 '>
            <p className={`${pathname === '/' && 'text-[#4A36EC]'}  'cursor-pointer'`}>Home</p>
            <p className={`${pathname === '/services' && 'text-[#4A36EC]'}  'cursor-pointer'`}>Services</p>
            <p className={`${pathname === '/contact' && 'text-[#4A36EC]'}  'cursor-pointer'`}>Contact</p>
        </div>
        <div className='flex items-center w-[20%] gap-[18px] mr-[98px] '>
            <Image src='../img/email.svg' height={100} width={100} alt='email' className='w-[19px] h-[17px] ' />
            <a href="mailto: officialfantasy@gmail.com" className='text-[13px] font-500 '>officialfantasy@gmail.com</a>
        </div>
    </div>

    <div className='lg:hidden block w-[100%] bg-[#CCCCC] '>
        <div className='flex items-center justify-between max-w-[95%] mx-auto'>
            <div onClick={scrollToTop}>
                <Image src='../img/logo.svg' height={100} width= {100} alt={'Logo'} className='w-[170px] ' />
            </div>

            <div className='py-[20px] pl-[10px] md:pl-[25px] cursor-pointer '>
                <Image className='md:hidden h-8 w-8 cursor-pointer' src={hambuger} alt='hambuger menu' onClick={()=> setToggle(!toggle)}  />
            </div>

        </div>
    </div>

    <div>
        {toggle && (
            <div className='flex flex-col gap-3 text-xs pt-3 max-w-[80%] mx-auto'>
                <Link href='/' className='border-y border-gray-300 py-3'>Home</Link>
                <Link href='/services' className='border-b border-gray-300 pb-3'>Services</Link>
                <Link href='/contact' className='border-b border-gray-300 pb-3'>Contact</Link>
            </div>
        )}
    </div>
    </div>
  )
}
