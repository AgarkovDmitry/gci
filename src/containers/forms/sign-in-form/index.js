import React from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'

import mutation from './mutation.gql'
import validate from './validate'

import { TextInput, PasswordInput } from 'components/form-fields'
import { signIn } from 'store/actions'

const submit = (mutate, signIn) => variables => {
  return mutate({ variables }).then(res => {
    if (!res.data.signIn.error) signIn(res.data.signIn.token)
    else throw new SubmissionError({ _error: res.data.signIn.error })
  })
}

let Form = ({ error, handleSubmit, pristine, reset, submitting, mutate, signIn }) => {
  return (
    <form onSubmit={handleSubmit(submit(mutate, signIn))}>
      {
        error && <div role="alert">
          <span>{error}</span>
        </div>
      }
      <Field name="login" component={TextInput} label="Login"/>
      <Field name="password" component={PasswordInput} label="Password"/>

      <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Sign in</button>
      <button type='button' disabled={pristine || submitting} onClick={reset}>Clear Values</button>
    </form>
  )
}

Form = reduxForm({ form: 'SignInForm', validate })(Form)
Form = graphql(mutation)(Form)
Form = connect(null, { signIn })(Form)

export default Form
