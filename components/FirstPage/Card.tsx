import { cardBackground, money } from '@/public'
import Image from 'next/image'
import React from 'react'

export default function Card({ img, image, text }: any) {
    return (
        <div className='flex flex-col items-center justify-center text-center w-[250px]'>
            <div className='flex items-center text-center justify-center mb-6'>
                <Image src={img} alt='Image' className='z-20' />
                <Image src={image} alt='image' className='absolute mb-[-30px] z-[-0]' />
            </div>
            <h1 className='font-bold text-white'>{text}</h1>
        </div>
    )
}
