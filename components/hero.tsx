import Link from 'next/link'

interface HeroProps {
  title: string
  description: string
}

export function Hero({ title, description }: HeroProps) {
  return (
    <div className="flex flex-col items-center text-white font-montserrat px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
        {title}
      </h1>
      <p className="text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 lg:mb-16 w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 text-center">
        {description}
      </p>
      <Link href="/signup">
        <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg">
          Register
        </button>
      </Link>
    </div>
  )
}
