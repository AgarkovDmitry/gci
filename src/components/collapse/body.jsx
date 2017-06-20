import React from 'react'

export default ({ children, isOpened }) => {
  return isOpened ?
  <div>
    {children}
  </div> : null
}
