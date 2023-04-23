type AccountField = {
  label: string
  id: keyof AccountFormData
  type: string
}

export const accountFields: AccountField[] = [
  {
    label: 'Avatar',
    id: 'avatar',
    type: 'file',
  },
  {
    label: 'First Name',
    id: 'firstName',
    type: 'text',
  },
  {
    label: 'Last Name',
    id: 'lastName',
    type: 'text',
  },
  {
    label: 'Email',
    id: 'email',
    type: 'email',
  },
]
