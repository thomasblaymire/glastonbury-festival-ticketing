import Link from 'next/link'

interface HeroProps {
  title: string
  description: string
}

export function Hero({ title, description }: HeroProps) {
  // return (
  //   <div className="bg-white py-24">
  //     <div className="flex flex-col items-center">
  //       <h1 className="text-4xl font-bold mb-8">{heroTitle}</h1>
  //       <p className="text-base mb-16 w-[38.5rem] text-center">
  //         {heroDescription}
  //       </p>
  //       <Link href="/signup">
  //         <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 px-8 py-4 rounded-full text-white">
  //           Register
  //         </button>
  //       </Link>
  //     </div>
  //   </div>
  // )
  return (
    <div className="flex flex-col items-center text-white font-montserrat">
      <h1 className="text-4xl font-bold mb-8">{title}</h1>
      <p className="text-base mb-16 w-[38.5rem] text-center">{description}</p>
      <Link href="/signup">
        <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 px-8 py-4 rounded-full text-white">
          Register
        </button>
      </Link>
    </div>
  )
}
