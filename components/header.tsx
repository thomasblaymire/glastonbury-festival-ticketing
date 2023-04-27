import { useState, useEffect } from 'react'
import { Logo } from './logo'

interface HeaderProps {
  isBasic?: boolean
}

export function Header({ isBasic }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // TODO: Refactor this into a useMedia hook etc
  useEffect(() => {
    const updateWindowSize = () => {
      setIsTablet(window.innerWidth >= 780)
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', updateWindowSize)
    updateWindowSize()

    return () => window.removeEventListener('resize', updateWindowSize)
  }, [])

  return (
    <header className="sticky top-0">
      <div
        className={`h-20 ${isMobile ? 'px-4' : ''} border-b border-gray-800`}
      >
        <div className="container mx-auto h-full flex items-center justify-between">
          <div>
            <Logo />
          </div>
        </div>
      </div>
    </header>
  )
}
