import React from 'react'
import { connect } from 'react-redux'
import 'assets/styles/program.less'

import IELTS from './ielts'

const page = ({ params }) => {
  return (
    <div className='program'>
      {
         <IELTS title={params.title}/>
      }
    </div>
  )
}
export default connect(state => ({ token: state.auth.token }))(page)
