import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useSignup } from '@/hooks/useSignup'
import { getSignupFormFields } from '../forms-old/data'

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showEmailConfirmed, setShowEmailConfirmed] = useState(false)
  const signUpMutation = useSignup()
  const formControls = getSignupFormFields(showPassword)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: any) => {
    try {
      await signUpMutation.mutateAsync(data)
      setShowEmailConfirmed(true)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="space-y-8 mx-auto py-12 px-6 w-1/3">
        <div className="text-center">
          <h2 className="text-4xl font-semibold">Sign up</h2>
        </div>
        <div className="rounded-lg bg-white shadow-lg p-8">
          {!showEmailConfirmed ? (
            <>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {formControls.map((control: FormField) => (
                  <div key={control.id} className="space-y-1">
                    <label
                      htmlFor={control.id}
                      className="font-medium text-gray-700"
                    >
                      {control.label}
                    </label>
                    <input
                      {...register(control.name, {
                        required: control.required,
                      })}
                      type={control.type}
                      id={control.id}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                ))}
              </form>
              <div className="pt-2 space-y-10">
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-lg text-white bg-blue-400 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign up
                </button>
              </div>
            </>
          ) : (
            <div>
              Successfully registered, please visit your email to verify your
              account.
            </div>
          )}
        </div>
        <div className="pt-6 text-center">
          <p className="text-gray-600">
            Already a user?{' '}
            <a href="#" className="text-blue-400">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
