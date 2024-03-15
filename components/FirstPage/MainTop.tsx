import { MacBook, phones } from '@/public'
import Image from 'next/image'
import React from 'react'

export default function MainTop() {
    return (
        <div className='md:px-40'>
            {/* for phones */}
            <div className='flex items-center xl:gap-[350px] md:flex-row flex-col-reverse justify-center'>
                <Image className='md:w-[450px] w-[300px]' src={phones} alt='phones' />
                <div className='md:w-[450px] w-[60%] flex flex-col gap-6'>
                    <h1 className='text-[42px] text-white font-bold'>О нашей компании</h1>
                    <h1 className='text-white font-bold text-[22px]'>Компания Cleo Partners предлагает Вам комплексное сотрудничество на платформах Uber, Bolt, Free Now, Uber Eats, Bolt Food.</h1>
                    <h1>С нами уже работают более 2000 довольных водителей по всей Польше, которые ежедневно зарабатывают.</h1>
                </div>
            </div>

            {/* for laptop  */}
            <div className='flex items-center md:mt-32 mt-48 md:flex-row flex-col'>
                <div className='flex gap-8 flex-col md:justify-start items-center justify-center'>
                    <h1 className='text-[28px] w-[60%] font-bold text-white'>Работая с нами Вы сохраняете все преимущества водителя такси</h1>
                    <div className='flex items-center gap-5'>
                        <div className='w-[20px] h-[20px] rounded-full bg-green-500'></div>
                        <h1 className='md:w-[500px]'>Вы имеете возможность самостоятельно устанавливать рабочий график и получать заработанные деньги ежедневно.</h1>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='w-[20px] h-[20px] rounded-full bg-green-500'></div>
                        <h1 className='md:w-[500px]'>Всего 4 документа разделяют вас от обычного человека и работника нашей компании.</h1>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='w-[20px] h-[20px] rounded-full bg-green-500'></div>
                        <h1 className='md:w-[500px]'>Работать можно на собственном или арендованном автомобиле из нашего автопарка, либо из автопарка за пределами компании.</h1>
                    </div>
                    <div className='flex items-center gap-10'>
                        <button className='text-white font-bold bg-gray-600 p-2  h-[50px] w-[160px] text-[18px] rounded-full'>Консультация</button>
                        <button className='text-white font-bold'>Узнать больше</button>
                    </div>
                </div>
                <Image src={MacBook} width={450} alt='MacBook' />
            </div>
        </div>
    )
}
