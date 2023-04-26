import React from 'react'
import { Hero } from '@/components/hero'

export default function Page() {
  return (
    <div
      className="w-full min-h-screen bg-center bg-no-repeat bg-cover bg-[#141518]"
      style={{ backgroundImage: 'url(/home.jpg)' }}
    >
      <div className="flex items-center justify-center min-h-screen">
        <Hero
          title="Glastonbury Festival Registration 2024"
          description="Register now to secure your tickets."
        />
      </div>
    </div>
  )
}
