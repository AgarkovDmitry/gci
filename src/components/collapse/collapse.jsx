import React from 'react'

// import Trigger from './trigger'
// import Body from './body'

export default ({ Trigger, Body, onOpen, onClose }) => {
  return class extends React.Component{
    constructor(props){
      super(props)

      this.state = { isOpened: false }
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(){
      if(!this.state.isOpened && onOpen) onOpen()
      else if(onClose) onClose()
      this.setState(prev => ({ ...prev, isOpened: !prev.isOpened }))
    }

    render(){
      const props = {
        toggle: this.handleChange,
        isOpened: this.state.isOpened
      }
      return (
        <div>
          <Trigger {...props} {...this.props}/>
          <Body {...props} {...this.props}/>
        </div>
      )
    }
  }
}

// export default class extends React.Component{
//   constructor(props){
//     super(props)
//
//     this.state = { isOpened: false }
//     this.handleChange = this.handleChange.bind(this)
//   }
//
//   handleChange(){
//     if(!this.state.isOpened && this.props.onOpen) this.props.onOpen()
//     else if(this.props.onClose) this.props.onClose()
//     this.setState(prev => ({ ...prev, isOpened: !prev.isOpened }))
//   }
//
//   render(){
//     const children = this.props.children.map((child, key) => {
//       if(child.type == Trigger || child.type == Body) return React.cloneElement(child, { key, toggle: this.handleChange, isOpened: this.state.isOpened })
//       else return child
//     })
//     return <div>{children}</div>
//   }
// }
