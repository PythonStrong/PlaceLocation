import React from 'react'

export default function Hero() {
  return (
    <div>
      <div className='flex items-center flex-col text-center herotext'>
        <h1 className='sm:text-[50px] text-white text-[30px]'>Подключайтесь к такси в Польше <br />с ежедневным стабильным заработком!</h1>
        <h1 className='text-white text-[15px] sm:text-[20px]'>Ежедневные выплаты стали реальными вместе с Cleo Partner</h1>
        <div className='flex items-center gap-20 mt-20'>
          <button className='bg-white text-black w-[200px] h-[50px] font-bold rounded-md'>Оставить заявку</button>
          <button className='text-white font-bold'>Узнать больше</button>
        </div>
      </div>
    </div>
  )
}
