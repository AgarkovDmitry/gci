import React from 'react'

export default ({ children, className, toggle, isOpened }) => {
  return (
    isOpened ?
    <div onClick={toggle} className='modal'>
      <div className={className} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div> : null
  )
}
