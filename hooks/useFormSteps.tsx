import { useState, ChangeEvent } from 'react'

export function useFormSteps(initialFormData: RegistrationFormData) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] =
    useState<RegistrationFormData>(initialFormData)

  const handleChange = (
    fieldType: keyof RegistrationFormData,
    field: keyof RegistrationFormData[typeof fieldType],
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [fieldType]: {
        ...formData[fieldType],
        [field]: event.target.value,
      },
    })
  }

  const handleNext = () => {
    setStep((prevState) => prevState + 1)
  }

  const handlePrevious = () => {
    setStep((prevState) => prevState - 1)
  }

  return { step, formData, handleChange, handleNext, handlePrevious }
}
