import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { graphql } from 'react-apollo'

import mutation from './mutation.gql'
import validate from './validate'
import normalizePhone from './normalizePhone'
import { TextArea, TextInput, SelectInput } from 'components/form-fields'

const submit = (mutate) => variables => {
  return mutate({ variables, updateQueries: {
    orders: (prev, { mutationResult }) => ({ ...prev, order: [mutationResult.data.order, ...prev.order] })
  } })
}

const IndustrySelect = props => <SelectInput {...props} options={[
  'Легкая промышленность',
  'Тяжелая промышленность',
  'Сельское хозяйство',
  'Банковское дело',
  'Оптовая торговля',
  'Розничная торговля',
  'Страхование',
  'Общественное питание',
  'Услуги',
  'Сети',
  'Другое',
]}/>

const ServiceSelect = props => <SelectInput {...props} options={[
  'Стратегическое планирование',
  'Решение бизнес проблем',
  'Оптимизация бизнес процессов',
  'Оптимизация организационной культуры',
  'Оптимизация организационной структуры',
  'Финансовый анализ',
  'Оценка персонала',
  'Обучение и развитие персонала',
  'Разработка внутренней документации',
]}/>

const Form = ({ handleSubmit, pristine, submitting, mutate }) => {
  return (
    <form onSubmit={handleSubmit(submit(mutate))} className='createOrder'>
      <div>
        <Field name="company" component={TextInput} label="Название Компании"/>
        <Field name='industry' component={IndustrySelect} label='Отрасль'/>
        <Field name="service" component={ServiceSelect} label="Услуга"/>
      </div>
      <div>
        <Field name="description" component={TextArea} label="Описание"/>
        <Field name="result" component={TextArea} label="Ожидаемые результаты"/>
      </div>
      <div>
        <Field name="name" component={TextInput} label="Имя контактного лица"/>
        <Field name="surname" component={TextInput} label="Фамилия контактного лица"/>
      </div>
      <div>
        <Field name="phone" component={TextInput} label="Телефон" normalize={normalizePhone}/>
        <Field name="email" component={TextInput} label="Email"/>
      </div>

      <div>
        <button type='submit' disabled={pristine || submitting}>Отправить</button>
      </div>
    </form>
  )
}

const compose = (...decorators) => Component => decorators.reduce((comp, decorator) => decorator(comp), Component)

// Form = reduxForm({ form: 'CreateOrderForm', validate })(Form)
// Form = graphql(mutation)(Form)

export default compose(
  reduxForm({ form: 'CreateOrderForm', validate }),
  graphql(mutation)
)(Form)
