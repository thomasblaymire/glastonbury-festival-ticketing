import { useDisclosure, useMediaQuery } from '@chakra-ui/react'
import { Logo } from './logo'

interface HeaderProps {
  isBasic?: boolean
}

export function Header({ isBasic }: HeaderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isTablet] = useMediaQuery('(min-width: 780px)')
  const [isMobile] = useMediaQuery('(max-width: 768px)')

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
