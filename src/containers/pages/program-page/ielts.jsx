import React from 'react'
import { withRouter } from 'react-router'
import 'assets/styles/program.less'

export default withRouter(({ history, title }) =>{
  return (
    <div className='program-wrapper'>
      <div className='program-top'>
        <div className='program-left'>
          <div> IELTS </div>
          English for international oppostunities
        </div>
        <div className='program-right'>
          <div> Place <div> Royal Hotel Baku </div> </div>
          <div> Date <div> {`25.0${title.substring(5)}.2017`} </div> </div>
          <div> Start <div> 10:00 </div> </div>
        </div>
      </div>
      <div className='program-body'>
        <p>
          IELTS, the International English Language Testing System, is designed to assess the language ability of candidates who need to study or work where English is the language of communication.
        </p>
        <p>
          IELTS is jointly managed by the University of Cambridge ESOL Examinations (Cambridge ESOL), British Council and IDP: IELTS Australia. IELTS conforms to the highest international standards of language assessment.\
        </p>
        <p>
          IELTS is recognised by universities and employers in many countries, including Australia, Canada, New Zealand, the UK and the USA. It is also recognised by professional bodies, immigration authorities and other government agencies.
        </p>
      </div>
      <div className='program-bot'>
        <button className='back-to-main' onClick={() => history.push('/')}> Back to Main Page </button>
        {
          title.substring(5) > 4
          ? <button className='order-now'> Apply now </button>
          : <button className='order-now' disabled> Apply now </button>
        }
      </div>
    </div>
  )
})
