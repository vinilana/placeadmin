import React, { PureComponent } from 'react'

import './Box.scss'

class Box extends PureComponent {
  static head = (props) => (
    <div className={'box__head'}>
      {props.children}
    </div>
  )

  static body = (props) => (
    <div className={'box__body'}>
      {props.children}
    </div>
  )

  static footer = (props) => (
    <div className={'box__footer'}>
      {props.children}
    </div>
  )

  render () {
    return (
      <div className={'box'}>
        {this.props.children}
      </div>
    )
  }
}

export { Box }
