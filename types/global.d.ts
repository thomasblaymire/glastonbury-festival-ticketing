type Field<
  S extends keyof RegistrationFormData,
  F extends keyof RegistrationFormData[S]
> = {
  label: string
  id: F
  type: string
  placeholder: string
  section: S
}

interface RegistrationFormData {
  account: {
    avatar?: FileList | undefined
    firstName: string
    lastName: string
    email: string
  }
  personalDetails: {
    streetAddress: string
    city: string
    region: string
    postcode: string
  }
  tickets: {
    friendCode: string
  }
}

type AccountFormData = {
  [K in AccountField['id']]: K extends 'avatar' ? FileList | undefined : string
}
