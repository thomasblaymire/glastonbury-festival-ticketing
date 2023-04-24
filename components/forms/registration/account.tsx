import { useForm } from 'react-hook-form'
import { accountFields } from './fields'
import { FileUpload } from '@/components/forms/file-upload'
import { Button } from '@/components/button'

interface AccountForm {
  formData: AccountFormData
  handleChange: any
  handleNext: () => void
  handlePrevious: () => void
}

export function AccountForm({
  formData,
  handleChange,
  handleNext,
}: AccountForm) {
  const {
    control,
    register,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  })

  const handleValidation = async () => {
    const isValid = await trigger()
    if (isValid) {
      handleNext()
    }
  }

  const fields = accountFields.map((field) => ({
    ...field,
    value: formData[field.id],
  }))

  const submitting = false

  return (
    <>
      <h1>Account Details</h1>
      <form>
        <div className="space-y-4 mb-5">
          {fields.map((field) => (
            <div key={field.id} className="space-y-2">
              <label htmlFor={field.id} className="font-medium text-gray-700">
                {field.label}
              </label>
              {field.type === 'file' ? (
                <FileUpload
                  id={field.id}
                  onChange={(e) => handleChange('account', field.id, e)}
                />
              ) : (
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={field.value as string}
                  onChange={(e) => handleChange('account', field.id, e)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              )}
              {errors[field.id] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[field.id]?.message}
                </p>
              )}
            </div>
          ))}
        </div>
      </form>

      <Button
        onClick={handleValidation}
        variant="primary"
        isLoading={submitting}
      >
        Next
      </Button>
    </>
  )
}
