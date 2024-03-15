import { FourthCar } from '@/public'
import Image from 'next/image'
import React from 'react'

export default function FourthMain() {
    return (
        <div>
            {/* fro car  */}
            <div className='flex items-center md:justify-evenly md:px-20 FourthMain md:flex-row flex-col'>
                <div className='flex flex-col gap-6 md:items-start items-center md:justify-start justify-center'>
                    <h1 className='text-white text-[50px] font-bold'>Что входит в страховку?</h1>
                    <h1 className='text-white font-bold text-[22px]'>Компания Cleo Partners в течении часа оформляет легальные месячные страховки каждому водителю от компании PZU!</h1>
                    <div className='flex items-center gap-5'>
                        <div className='w-[20px] h-[20px] rounded-full bg-green-500'></div>
                        <h1 className='md:w-[500px] text-white'>Каждый водитель получает зелёную карту в подарок.</h1>
                    </div>
                    <div className='flex items-center gap-10'>
                        <button className='text-white font-bold bg-gray-600 p-2 h-[60px] w-[160px] text-[18px] rounded-full'>Консультация</button>
                        <button className='text-white font-bold'>Калькулятор</button>
                    </div>
                </div>
                <Image src={FourthCar} alt='FourthCar' />
            </div>

            <div className='FourthMainText flex flex-col items-center justify-center'>
                <h1 className='text-[44px] text-white font-bold mb-10'>Рассчитайте стоимость страховки:</h1>
                <div className='bg-transparent  flex items-center gap-14 md:flex-row flex-col'>
                    <div>
                        <div className='border md:w-[500px] p-6 rounded-xl flex flex-col gap-4'>
                            <div className="flex flex-col w-full lg:flex-row">
                                <div className="text-white font-bold text-[20px]">Период:  3 месяца</div>
                                <div className="divider lg:divider-horizontal"></div>
                                <div className="text-white font-bold text-[20px]">Цена:  300 злотых</div>
                            </div>
                            <input type="range" className='range' />
                        </div>
                    </div>
                    <button className='bg-white text-black w-[200px] h-[60px]  text-[19px] rounded-xl'>Получить страховку</button>
                </div>
            </div>
        </div>
    )
}
