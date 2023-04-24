export const personalDetailsFields: Field<
  'personalDetails',
  keyof RegistrationFormData['personalDetails']
>[] = [
  {
    id: 'streetAddress',
    label: 'Street Address',
    type: 'text',
    section: 'personalDetails',
    placeholder: 'Street Address',
  },
  {
    id: 'city',
    label: 'City',
    type: 'text',
    section: 'personalDetails',
    placeholder: 'City',
  },
  {
    id: 'region',
    label: 'Region',
    type: 'text',
    section: 'personalDetails',
    placeholder: 'Region',
  },
  {
    id: 'postcode',
    label: 'Postcode',
    type: 'text',
    section: 'personalDetails',
    placeholder: 'Postcode',
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
