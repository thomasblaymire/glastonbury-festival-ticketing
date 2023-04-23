import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Image from 'next/image'

interface PersonalDetails {
  formData: any
  handleChange: any
  handleNext: () => void
  handlePrevious: () => void
}

export const PersonalDetailsForm = ({
  formData,
  handleNext,
  handleChange,
  handlePrevious,
}: PersonalDetails) => {
  return (
    <>
      <h1 className="w-full text-center font-semibold mb-8">
        User Registration
      </h1>

      <div className="flex flex-col space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Street Address
          </label>
          <input
            id="street"
            type="text"
            value={formData.streetAddress}
            onChange={(e) =>
              handleChange('personalDetails', 'streetAddress', e)
            }
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            City
          </label>
          <input
            id="city"
            type="text"
            value={formData.city}
            onChange={(e) => handleChange('personalDetails', 'city', e)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Region
          </label>
          <input
            id="street"
            type="text"
            value={formData.region}
            onChange={(e) => handleChange('personalDetails', 'region', e)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Postcode
          </label>
          <input
            id="street"
            type="text"
            value={formData.postcode}
            onChange={(e) => handleChange('personalDetails', 'postcode', e)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <button
        onClick={handlePrevious}
        className="mt-4 px-4 py-2 border border-teal-500 text-teal-500 rounded-md hover:bg-teal-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
      >
        Previous
      </button>

      <button
        onClick={handleNext}
        className="mt-4 px-4 py-2 border border-teal-500 text-teal-500 rounded-md hover:bg-teal-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
      >
        Next
      </button>
    </>
  )
}
