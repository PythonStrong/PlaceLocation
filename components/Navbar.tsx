import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../public/logo.png'
import Link from 'next/link'

export default function Navbar() {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(!show)
  const handleHide = () => setShow(false)
  const [isSticky, setIsStciky] = useState(false)
  return (
    <div>
      <div className='md:flex hidden items-center justify-around  navbar z-[999]'>
        <Image src={logo} alt='logo' width={200} />
        <div className='flex gap-10'>
          <Link href='/'><h1 className='text-white'>Главная</h1></Link>
          <Link href='/SecondPage'><h1 className='text-white'>Страховка</h1></Link>
          <Link href='/ThirdPage'><h1 className='text-white'>FAQ</h1></Link>
          <Link href='/FourthPage'><h1 className='text-white'>Доставка</h1></Link>
          <Link href='/'><h1 className='text-white'>Контакты</h1></Link>
        </div>
        <h1 className='text-white font-bold'>Оставить заявку</h1>
      </div>

      {/* for mobile nav */}
      <div className='flex items-center justify-between px-4 navbar md:hidden'>
        <Image src={logo} alt='logo' />
        <div className='md:hidden flex items-center justify-center flex-col gap-1 cursor-pointer' onClick={handleShow}>
          <div className='w-6 h-1 bg-white'></div>
          <div className='w-5 h-1 bg-white'></div>
          <div className='w-6 h-1 bg-white'></div>
        </div>
      </div>

      {show ? <div className='fixed top-0 left-0  w-full h-full  flex flex-col justify-center items-center gap-10 z-[999]'>
        <div className='flex items-center justify-center gap-4 absolute top-10 right-8 cursor-pointer' onClick={handleHide}>
          <div className='bg-white h-6 rotate-45 w-1'></div>
          <div className='bg-white h-6 rotate-[-50deg] absolute w-1'></div>
        </div>
        <div className='flex items-center  justify-center gap-16 font-semibold flex-col mobile_nav'>
          <Link href='/'><h1 className='text-white text-3xl'>Главная</h1></Link>
          <Link href='/SecondPage'><h1 className='text-white text-3xl'>Страховка</h1></Link>
          <Link href='/ThirdPage'><h1 className='text-white text-3xl'>FAQ</h1></Link>
          <Link href='/FourthPage'><h1 className='text-white text-3xl'>Доставка</h1></Link>
          <Link href='/'><h1 className='text-white text-3xl'>Контакты</h1></Link>
        </div>
      </div> : ''}
    </div>
  )
}
