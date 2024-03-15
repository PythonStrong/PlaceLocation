import { Vector } from '@/public'
import Image from 'next/image'
import React from 'react'

export default function ThirdHero() {
  return (
    <div className='ThirdHero hero'>
      <div className='flex items-center justify-center flex-col gap-28'>
        <h1 className='text-white text-[103px] font-bold'>FAQ</h1>
        <Image src={Vector} alt='Vector' />
      </div>
    </div>
  )
}
