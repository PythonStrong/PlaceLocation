import React from 'react'

export default function Hero() {
  return (
    <div>
      <div className='flex items-center flex-col text-center'>
        <h1 className='text-[50px] text-white'>Стань курьером у нас <br />и зарабатывай от 300 злотых в день</h1>
        <h1 className='text-white text-[20px]'>Ежедневные выплаты стали реальными вместе с Cleo Partner</h1>
        <div className='flex items-center gap-20 mt-20'>
          <button className='bg-white text-black w-[200px] h-[50px] font-bold rounded-md'>Оставить заявку</button>
          <button className='text-white font-bold'>Узнать больше</button>
        </div>
      </div>
    </div>
  )
}
