import { HeroBackground, appStore, audi } from '@/public'
import Image from 'next/image'
import React from 'react'

export default function MainBottom() {
    return (
        <div className='md:mt-0 mt-[1150px]'>
            {/* for cars  */}
            <div className='Main_Car pt-20 md:flex-row '>
                <h1 className='text-[43px] text-white font-bold text-center'>Требования к автомобилю</h1>
                <div className='flex items-center justify-around md:flex-row flex-col-reverse'>
                    <Image src={audi} alt='audi' width={600} />
                    <div>
                        <div className='flex gap-8 flex-col'>
                            <h1 className='text-[28px] md:w-[60%] font-bold text-white'>Авто должно быть 4-х дверное, леворульное.</h1>
                            <div className='flex items-center gap-5'>
                                <div className='w-[20px] h-[20px] rounded-full bg-green-500'></div>
                                <h1 className='md:w-[500px]'>Авто должно быть 4-х дверное, леворульное.</h1>
                            </div>
                            <div className='flex items-center gap-5'>
                                <div className='w-[20px] h-[20px] rounded-full bg-green-500'></div>
                                <h1 className='md:w-[500px]'>Для работы в сервисе Bolt нужно:— Авто от 2001 года</h1>
                            </div>
                            <div className='flex items-center gap-5'>
                                <div className='w-[20px] h-[20px] rounded-full bg-green-500'></div>
                                <h1 className='md:w-[500px]'>Для работы в сервисе Uber, Free Now нужно:— Авто от 2006 года</h1>
                            </div>
                            <div className='flex items-center md:flex-row flex-col'>
                                <Image src={appStore} alt='appStore' />
                                <Image src={appStore} alt='appStore' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* for input and city  */}
            <div className="City hero flex items-center justify-around md:flex-row flex-col p-20 md:p-0">
                <div>
                    <h1 className='text-[42px] text-white font-bold md:w-[600px]'>Присоединяйся к нашей службе такси и начинай зарабатывать прямо сейчас! </h1>
                    <h1 className='text-white font-bold text-[20px]'>Оставляй заявку для сотрудничества с Cleo Partners</h1>
                </div>
                <div className='flex flex-col gap-6'>
                    <input type="text" placeholder='Ваше имя' />
                    <input type="text" placeholder='998 91 041 14 25' />
                    <button className='bg-white text-black  h-[50px] font-bold rounded-md'>Оставить заявку</button>
                </div>
            </div>

            {/* for map  */}
            <div>
                <h1 className='text-[42px] text-white font-bold text-center Footer'>Мы уже работаем в таких городах:</h1>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202845.20224756977!2d-122.2062489739059!3d37.40268870131207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon%20Valley%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1709475310255!5m2!1sen!2s" width="100%" height="450" style={{ border: '0', filter: 'brightness(20%)' }} allowFullScreen loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
}
