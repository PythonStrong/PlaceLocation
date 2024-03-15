import { cardBackground, cardYellow, money } from '@/public'
import Image from 'next/image'
import React from 'react'
import Card from './Card'

export default function Main() {
    return (
        <div className='mt-[850px] md:mt-0'>
            <h1 className='text-[40px] text-white font-bold text-center'>Наши преимущества</h1>

            <div className='flex items-center justify-center flex-wrap mt-10 md:w-[900px] gap-10 card_parent '>
                <Card img={money} image={cardBackground} text={'Автоматическая выплата зарплаты каждые 24 часа'} />
                <Card img={money} image={cardBackground} text={'Рекомендованный партнер Uber, Bolt, Free Now'} />
                <Card img={money} image={cardBackground} text={'Техническая поддержка 24/7 в онлайн-режиме'} />
                <Card img={money} image={cardYellow} text={'Мы оплачиваем штрафы по безналичным поездкам'} />
                <Card img={money} image={cardYellow} text={'До 2-ух рабочих дней подключения на флот водителя'} />
                <Card img={money} image={cardYellow} text={'Являемся единственным гарантом выплат на рынке'} />
            </div>
        </div>
    )
}
