import Hero from '@/components/SecondPage/Hero'
import MainSecond from '@/components/SecondPage/MainSecond'
import React from 'react'

export default function SecondPage() {
  return (
    <div>
      <div className='Second_Hero hero'>
        <Hero />
      </div>
      <div>
        <MainSecond />
      </div>
    </div>
  )
}
