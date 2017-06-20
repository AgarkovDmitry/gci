import React from 'react'

export default ({ children, toggle }) => {
  return (
    <div onClick={toggle}>
      {children}
    </div>
  )
}
