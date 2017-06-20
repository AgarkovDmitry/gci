export default values => {
  const errors = {}

  if (!values.login) {
    errors.login = 'Required'
  } else if (values.login.length <= 3) {
    errors.login = 'Invalid login'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length <= 3) {
    errors.password = 'Must be at least 4 characters'
  }

  return errors
}
