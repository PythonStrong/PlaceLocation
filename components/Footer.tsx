import { logo } from '@/public'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <div >
            <div className='h-[30vh] Footer md:pt-10 pt-20'>
                <div className='flex items-center text-start justify-around md:flex-row flex-col'>
                    <h1 className='text-[40px] font-bold text-white'>Наши контакты</h1>
                    <h1>На связи 24/7, будем рады помочь, обращайтесь</h1>
                    <Image className='md:block hidden' src={logo} alt='logo' />
                </div>
                <div className='flex mt-10 text-start md:justify-around items-center  md:flex-row flex-col justify-center'>
                    <div>
                        <h1 className='text-white font-bold'>+48 797 933 388</h1>
                        <h1>(Viber, WhatsApp)</h1>
                    </div>
                    <h1 className='text-white font-bold'>+48 797 133 888</h1>
                    <h1 className='text-white font-bold'>t.me/cleo_partner</h1>
                </div>
            </div>

            {/* 2 */}
            <div className='h-[20vh]'>
                <div className='flex items-center justify-around mt-4  md:flex-row flex-col'>
                    <div className='items-center gap-20 md:flex hidden'>
                        <h1>Главная</h1>
                        <h1>Страховка</h1>
                        <h1>FAQ</h1>
                        <h1>О нас</h1>
                        <h1>Контакты</h1>
                    </div>
                    <Image src={logo} alt='logo' />
                </div>
                <div className='flex items-center justify-around pt-10  md:flex-row flex-col'>
                    <h1>© 2021 Cleopartner 2021-2022</h1>
                    <div className='flex items-center gap-20'>
                        <h1>Политика конфиденциальности</h1>
                        <h1>Договора</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
