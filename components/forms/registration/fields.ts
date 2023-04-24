export const detailsFields: Field<
  'details',
  keyof RegistrationFormData['details']
>[] = [
  {
    id: 'streetAddress',
    label: 'Street Address',
    type: 'text',
    section: 'details',
    placeholder: 'Street Address',
    validation: { required: 'Street Address is required' },
  },
  {
    id: 'city',
    label: 'City',
    type: 'text',
    section: 'details',
    placeholder: 'City',
    validation: { required: 'City is required' },
  },
  {
    id: 'region',
    label: 'Region',
    type: 'text',
    section: 'details',
    placeholder: 'Region',
    validation: { required: 'Region is required' },
  },
  {
    id: 'postcode',
    label: 'Postcode',
    type: 'text',
    section: 'details',
    placeholder: 'Postcode',
    validation: {
      required: 'Postcode is required',
      pattern: {
        value: /^[0-9]{5}$/,
        message: 'Postcode must be 5 digits',
      },
    },
  },
]

export const accountFields: Field<
  'account',
  keyof RegistrationFormData['account']
>[] = [
  {
    label: 'Avatar',
    id: 'avatar',
    type: 'file',
    section: 'account',
    placeholder: 'Avatar',
  },
  {
    label: 'First Name',
    id: 'firstName',
    type: 'text',
    section: 'account',
    placeholder: 'First Name',
  },
  {
    label: 'Last Name',
    id: 'lastName',
    type: 'text',
    section: 'account',
    placeholder: 'Last Name',
  },
  {
    label: 'Email',
    id: 'email',
    type: 'email',
    section: 'account',
    placeholder: 'Email',
  },
]
