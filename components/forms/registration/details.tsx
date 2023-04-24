import React from 'react'
import { detailsFields } from './fields'
import { Button } from '@/components/button'

interface DetailsProps {
  formData: RegistrationFormData
  handleChange: (
    section: 'details',
    fieldId: keyof RegistrationFormData['details'],
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
  handleNext: () => void
  handlePrevious: () => void
}

export const DetailsForm = ({
  formData,
  handleNext,
  handleChange,
  handlePrevious,
}: DetailsProps) => {
  const fields = detailsFields.map((field) => ({
    ...field,
    value: formData[field.section][field.id],
  }))

  return (
    <>
      <h1 className="w-full text-center font-semibold mb-8">
        User Registration
      </h1>

      <div className="flex flex-col space-y-4 mb-4">
        {fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="block text-sm font-medium">
              {field.label}
            </label>
            <input
              id={field.id}
              type={field.type}
              value={field.value}
              placeholder={field.placeholder}
              onChange={(e) => handleChange(field.section, field.id, e)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        ))}
      </div>

      <Button onClick={handlePrevious} variant="primary">
        Previous
      </Button>

      <Button onClick={handleNext} variant="primary">
        Next
      </Button>
    </>
  )
}
