import React from 'react'

export const ProgressStep = ({ title, description, isActive }: any) => {
  return (
    <div style={{ fontWeight: isActive ? 'bold' : 'normal' }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export const ProgressComponent = ({ currentStep }: any) => {
  const steps = [
    {
      title: 'Step 1: Account',
      description: 'Please provide your account details',
    },
    {
      title: 'Step 2: Personal Details',
      description: 'Please provide your personal details',
    },
    {
      title: 'Step 3: Tickets',
      description: 'Please provide ticket information',
    },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {steps.map((step, index) => (
        <ProgressStep
          key={index}
          title={step.title}
          description={step.description}
          isActive={currentStep === index + 1}
        />
      ))}
    </div>
  )
}
