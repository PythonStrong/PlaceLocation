import React from 'react'
import Accordion from '../SecondPage/Accordion'

export default function ThirdMain() {
    return (
        <div>
            <div className='ThirdMain'>
                {/* for accordion  */}
                <div className="Accordion flex items-center justify-center flex-col md:mb-0 pb-20">
                    <h1 className="text-white text-[40px] font-bold mb-16">Частые вопросы</h1>
                    <div className="join join-vertical w-[80%] rounded-2xl">
                        <Accordion title={'Какие документы нужны для работы в такси?'} text={'Все что нужно, это Ваш загранпаспорт и права ( в случае доставки на автомобиле)'} />
                        <Accordion title={'Какие документы нужны для работы в доставке?'} text={'Все что нужно, это Ваш загранпаспорт и права ( в случае доставки на автомобиле)'} />
                        <Accordion title={'Как долго занимает процесс оформления в такси?'} text={'Все что нужно, это Ваш загранпаспорт и права ( в случае доставки на автомобиле)'} />
                        <Accordion title={'Какая комиссия для еженедельных выплат?'} text={'Все что нужно, это Ваш загранпаспорт и права ( в случае доставки на автомобиле)'} />
                        <Accordion title={'Будет ли сниматься комиссия, если я не работаю?'} text={'Все что нужно, это Ваш загранпаспорт и права ( в случае доставки на автомобиле)'} />
                        <Accordion title={'Нужно ли тратить деньги на покупку таксометра, фискальной кассы для моего авто, чтобы избежать штрафов?'} text={'Все что нужно, это Ваш загранпаспорт и права ( в случае доставки на автомобиле)'} />
                    </div>
                </div>
            </div>

            
            <div className="ThirdCity hero flex items-center justify-evenly md:flex-row flex-col md:mt-0 mt-[350px]">
                <div>
                    <h1 className='text-[42px] text-white font-bold md:w-[600px]'>Все еще остались вопросы, на которые не нашлись здесь ответы?</h1>
                    <h1 className='text-gray-200 font-bold text-[20px]'>Оставляй заявку для сотрудничества с Cleo Partners</h1>
                </div>
                <div className='flex flex-col gap-6'>
                    <input type="text" placeholder='Ваше имя' />
                    <input type="text" placeholder='998 91 041 14 25' />
                    <button className='bg-white text-black  h-[50px] font-bold rounded-md'>Оставить заявку</button>
                </div>
            </div>
        </div>
    )
}
