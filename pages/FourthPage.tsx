import FourthHero from '@/components/Fourth/FourthHero'
import FourthMain from '@/components/Fourth/FourthMain'
import React from 'react'

export default function FourthPage() {
  return (
    <div>
      <div className='FourthHero hero'>
        <FourthHero />
      </div>
      <div>
        <FourthMain />
      </div>
    </div>
  )
}
