export const authForm = [
  {
    title: 'LOGIN',
    type: 'login',
    ref: 'loginModal',
    fields: [
      {
        ref: 'email',
        label: 'EMAIL',
        type: 'email'
      },
      {
        ref: 'password',
        label: 'PASSWORD',
        type: 'password'
      }
    ]
  },
  {
    title: 'SIGNUP',
    type: 'signup',
    ref: 'signupModal',
    fields: [
      {
        ref: 'firstName',
        label: 'FIRST NAME',
        type: 'text'
      },
      {
        ref: 'lastName',
        label: 'LAST NAME',
        type: 'text'
      },
      {
        ref: 'email',
        label: 'EMAIL',
        type: 'email'
      },
      {
        ref: 'password',
        label: 'PASSWORD',
        type: 'password'
      },
      {
        ref: 'passwordConfirm',
        label: 'CONFIRM PASSWORD',
        type: 'password'
      }
    ]
  },
  {
    title: 'VERIFY CODE',
    type: 'verify',
    ref: 'verifyModal',
    fields: [
      {
        ref: 'verifyCode',
        label: 'CONFIRMATION NUMBER',
        type: 'text'
      }
    ]
  }
]

export const jobsForm = [
  {
    ref: 'firstName',
    label: 'FIRST NAME',
    type: 'text'
  },
  {
    ref: 'lastName',
    label: 'LAST NAME',
    type: 'text'
  },
  {
    ref: 'email',
    label: 'EMAIL',
    type: 'email'
  },
  {
    ref: 'phone',
    label: 'MOBIL PHONE',
    type: 'phone'
  }
]
