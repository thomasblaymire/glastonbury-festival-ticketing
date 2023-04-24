import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  className?: string
  variant?: 'primary' | 'secondary'
  isLoading?: boolean
  disabled?: boolean
}

export const Button = ({
  children,
  onClick,
  className,
  variant = 'primary',
  isLoading = false,
  disabled = false,
}: ButtonProps) => {
  const primaryClasses =
    'text-teal-500 border-teal-500 hover:bg-teal-500 hover:text-white focus:ring-teal-500'
  const secondaryClasses =
    'text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white focus:ring-gray-500'
  const disabledClasses = 'text-gray-300 border-gray-300 cursor-not-allowed'

  const baseClasses =
    'px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variantClasses =
    variant === 'primary' ? primaryClasses : secondaryClasses
  const finalClasses = disabled
    ? `${baseClasses} ${disabledClasses}`
    : `${baseClasses} ${variantClasses} ${className || ''}`

  const spinnerColor = variant === 'primary' ? 'teal' : 'gray'

  return (
    <button
      onClick={onClick}
      className={finalClasses}
      disabled={disabled || isLoading}
      aria-disabled={disabled || isLoading}
      aria-busy={isLoading}
    >
      {isLoading ? (
        <svg
          className="animate-spin mx-auto h-4 w-4 text-current inline-block"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            strokeWidth="4"
            stroke={spinnerColor}
          />
          <path
            className="opacity-75"
            fill={spinnerColor}
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l1-2.647z"
          />
        </svg>
      ) : (
        children
      )}
    </button>
  )
}
