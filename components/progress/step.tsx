import React from 'react'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'

interface ProgressStepProps {
  title: string
  description: string
  isActive: boolean
}

export const ProgressStep = ({
  title,
  description,
  isActive,
}: ProgressStepProps) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <IoCheckmarkCircleOutline
        style={{
          color: isActive ? 'green' : 'gray',
          fontSize: '24px',
          marginRight: '1rem',
        }}
      />
      <div>
        <p
          style={{
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'black' : 'gray',
          }}
        >
          {title}
        </p>
        <p style={{ fontSize: '0.875rem', color: 'gray' }}>{description}</p>
      </div>
    </div>
  )
}
