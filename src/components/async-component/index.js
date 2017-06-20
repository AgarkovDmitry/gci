import React from 'react'
import Bundle from './bundle'

export default (load) => {
  return ({ match }) => {
    return <Bundle load={load}>{Comp => Comp && <Comp {...match}/>}</Bundle>
  }
}
