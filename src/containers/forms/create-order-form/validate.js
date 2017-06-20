export default values => {
  const errors = {}
  if (!values.company)
    errors.company = 'Required'
  else if (values.company.length > 15)
    errors.company = 'Must be 15 characters or less'

  if (!values.industry)
    errors.industry = 'Required'

  if (!values.service)
    errors.service = 'Required'

  if (!values.description)
    errors.description = 'Required'
  else if (values.description.length > 500)
    errors.description = 'Must be 500 characters or less'

  if (!values.result)
    errors.result = 'Required'
  else if (values.result.length > 500)
    errors.result = 'Must be 500 characters or less'

  if (!values.name)
    errors.name = 'Required'
  else if (values.name.length > 15)
    errors.name = 'Must be 15 characters or less'

  if (!values.surname)
    errors.surname = 'Required'
  else if (values.surname.length > 15)
    errors.surname = 'Must be 15 characters or less'

  if (!values.phone)
    errors.phone = 'Required'
  else if (values.phone.length > 15)
    errors.phone = 'Must be 15 characters or less'

  if (!values.email)
    errors.email = 'Required'

  return errors
}
