const regMail = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b/;
const regPhone = /^\+[0-9]{12}\b/;

export const formValidation = (password: string, confirmedPassword: string, name: string, email: string) => {
  const errors = {
    name: '',
    email: '',
    password: '',
    confirmedPassword: '',
  }

  if (!(name.trim()).length) {
    errors.name = 'Enter the correct name please'
  }
  if (!regMail.test(email)) {
    errors.email = 'Enter the correct email please'
  }
  if (password !== confirmedPassword) {
    errors.confirmedPassword = 'Check your password please'
  }
  if (password.length < 5) {
    errors.password = 'Password should be at least 6 characters'
  }

  return errors;
}

export const addFormValidation = (
  phone: string, surname: string, name: string, email: string, 
  isPhone: boolean, isMail: boolean, additionalPhone: string,
  additionalEmail: string
) => {
  const errors = {
    name: '',
    email: '',
    surname: '',
    phone: '',
    additionalPhone: '',
    additionalMail: '',
  }

  if (!(name.trim()).length) {
    errors.name = 'Enter the correct name please'
  }

  if (!(surname.trim()).length) {
    errors.surname = 'Enter the correct surname please'
  }

  if (!regMail.test(email)) {
    errors.email = 'Enter the correct email please'
  }

  if (!regPhone.test(phone)) {
    errors.phone = 'Enter the correct phone please'
  }

  if (isPhone && !regPhone.test(additionalPhone)) {
    errors.additionalPhone = 'Enter the correct phone please'
  }

  if (isMail && !regMail.test(additionalEmail)) {
    errors.additionalMail = 'Enter the correct email please'
  }

  return errors;
}