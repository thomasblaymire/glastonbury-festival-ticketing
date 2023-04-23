export const getSignupFormFields = (showPassword: boolean): FormField[] => [
  {
    id: 'firstName',
    label: 'First Name',
    type: 'text',
    name: 'firstName',
    required: true,
  },
  {
    id: 'lastName',
    label: 'Last Name',
    type: 'text',
    name: 'lastName',
    required: true,
  },
  {
    id: 'email',
    label: 'Email address',
    type: 'email',
    name: 'email',
    required: true,
  },
  {
    id: 'password',
    label: 'Password',
    type: showPassword ? 'text' : 'password',
    name: 'password',
    required: true,
  },
]

export const getAccountFormFields = (show: boolean): FormControlObject[] => [
  {
    id: 'first-name',
    label: 'First name',
    placeholder: 'First name',
    section: 'account',
    field: 'firstName',
    type: 'text',
  },
  {
    id: 'last-name',
    label: 'Last name',
    placeholder: 'Last name',
    section: 'account',
    field: 'lastName',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email address',
    placeholder: '',
    section: 'account',
    field: 'email',
    type: 'email',
  },
  {
    id: 'password',
    label: 'Password',
    placeholder: 'Enter password',
    section: 'account',
    field: 'password',
    type: 'password',
  },
]

export const getDetailsFormFields = (): FormControlObject[] => [
  {
    id: 'country',
    label: 'Country / Region',
    placeholder: 'Select option',
    section: 'details',
    type: 'select',
    field: 'country',
    options: ['United States', 'Canada', 'Mexico'],
  },
  {
    id: 'street_address',
    label: 'Street address',
    section: 'details',
    placeholder: '',
    field: 'street_address',
    type: 'text',
  },
  {
    id: 'city',
    label: 'City',
    section: 'details',
    placeholder: '',
    field: 'city',
    type: 'text',
  },
  {
    id: 'state',
    label: 'State / Province',
    section: 'details',
    placeholder: '',
    field: 'state',
    type: 'text',
  },
  {
    id: 'postal_code',
    label: 'ZIP / Postal',
    section: 'details',
    field: 'postal_code',
    placeholder: '',
    type: 'text',
  },
]
