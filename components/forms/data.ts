export const getSignupFormFields = (showPassword: boolean): FormField[] => [
  {
    id: "firstName",
    label: "First Name",
    type: "text",
    name: "firstName",
    required: true,
  },
  {
    id: "lastName",
    label: "Last Name",
    type: "text",
    name: "lastName",
    required: true,
  },
  {
    id: "email",
    label: "Email address",
    type: "email",
    name: "email",
    required: true,
  },
  {
    id: "password",
    label: "Password",
    type: showPassword ? "text" : "password",
    name: "password",
    required: true,
  },
];
