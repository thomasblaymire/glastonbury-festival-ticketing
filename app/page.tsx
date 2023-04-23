import React from 'react'
import { Hero } from '@/components/hero'

export default function Page() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundImage: 'url(/hero.svg)',
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: '#141518',
      }}
    >
      <Hero />
    </div>
  )
}
