import React from 'react'

import { Modal, Body, Trigger } from 'components/modal'

import SingInForm from 'containers/forms/sign-in-form'

export default ({ token, signOut }) => {
  return (
    !token ? <Modal>
      <Trigger><button className='signinButton'/></Trigger>
      <Body className='signin-modal-body'>
        <SingInForm/>
      </Body>
    </Modal> : <button className='signoutButton' onClick={signOut}/>
  )
}
