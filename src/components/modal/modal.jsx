import React from 'react'

import Trigger from './trigger'
import Body from './body'

export default class extends React.Component{
  constructor(props){
    super(props)

    this.state = { isOpened: false }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(){
    this.setState(prev => ({ ...prev, isOpened: !prev.isOpened }))
  }

  render(){
    const children = this.props.children.map((child, key) => {
      if(child.type == Trigger || child.type == Body) return React.cloneElement(child, { key, toggle: this.handleChange, isOpened: this.state.isOpened })
      else return child
    })
    return <div>{children}</div>
  }
}
