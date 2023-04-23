import { useForm } from 'react-hook-form'
import { accountFields } from './fields'
import { FileUpload } from '../file-upload'

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
  const { control } = useForm<AccountFormData>({
    defaultValues: formData,
  })

  const fields = accountFields.map((field) => ({
    ...field,
    value: formData[field.id],
  }))

  return (
    <>
      <h1>Account Details</h1>
      <form>
        <div className="space-y-4">
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
                  value={field.value as string}
                  onChange={(e) => handleChange('account', field.id, e)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              )}
            </div>
          ))}
        </div>
      </form>

      <button
        onClick={handleNext}
        className="mt-4 px-4 py-2 border border-teal-500 text-teal-500 rounded-md hover:bg-teal-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
      >
        Next
      </button>
    </>
  )
}
