import { useState, useEffect } from 'react'
import { ProgressComponent } from '../../progress'
import { PersonalDetailsForm } from './details'
import { TicketsForm } from './tickets-form'
import { AccountForm } from './account'
import { useFormSteps } from '@/hooks/useFormSteps'

export default function BaseForm() {
  const [mounted, setMounted] = useState(false)
  const { step, formData, handleChange, handleNext, handlePrevious } =
    useFormSteps({
      account: {
        avatar: undefined,
        firstName: '',
        lastName: '',
        email: '',
      },
      personalDetails: {
        streetAddress: '',
        city: '',
        region: '',
        postcode: '',
      },
      tickets: {
        friendCode: '',
      },
    })

  useEffect(() => {
    setMounted(true)
  }, [])

  console.log('debug formData', formData)

  const stepComponents = [
    <AccountForm
      key={1}
      formData={formData.account}
      handleChange={handleChange}
      handleNext={handleNext}
      handlePrevious={handlePrevious}
    />,
    <PersonalDetailsForm
      key={2}
      formData={formData}
      handleChange={handleChange}
      handleNext={handleNext}
      handlePrevious={handlePrevious}
    />,
    <TicketsForm
      key={3}
      formData={formData.tickets}
      handleChange={handleChange}
      handleNext={handleNext}
      handlePrevious={handlePrevious}
    />,
  ]

  return (
    mounted && (
      <div className="h-screen w-full flex flex-col md:flex-row">
        <div className="md:w-2/5 bg-gray-200 h-full hidden md:block md:px-8 md:py-8">
          <ProgressComponent currentStep={step} />
        </div>
        <div className="flex-grow p-8">{stepComponents[step - 1]}</div>
      </div>
    )
  )
}
