interface RegistrationFormData {
  account: {
    avatar?: FileList | undefined
    firstName: string
    lastName: string
    email: string
  }
  personalDetails: {
    country: string
    streetAddress: string
    city: string
    region: string
    postcode: string
  }
  tickets: {
    friendCode: string
  }
}

type AccountField = (typeof accountFields)[number]
type AccountFormData = {
  [K in AccountField['id']]: K extends 'avatar' ? FileList | undefined : string
}

/// OLD
interface FormField {
  id: string
  label: string
  type: string
  name: string
  required: boolean
  showPassword?: boolean
}

// interface FormControlObject {
//   id: string
//   label: string
//   placeholder: string
//   section: string
//   field:
//     | keyof AccountFormData
//     | keyof PersonalDetailsFormData
//     | keyof TicketsFormData
//   type?: string
//   options?: string[]
// }

interface AccountFormData {
  avatar?: FileList | undefined
  firstName: string
  lastName: string
  email: string
  password: string
}

interface PersonalDetailsFormData {
  country: string
  street_address: string
  city: string
  state: string
  postal_code: string
}

interface TicketsFormData {
  friendCode: string
}

interface RegistrationFormData {
  account: AccountFormData
  personalDetails: PersonalDetailsFormData
  tickets: TicketsFormData
}
