import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import { UserMenu } from '../UserMenu'

class TopBar extends Component {
  static propTypes = {
    doSignOut: PropTypes.func,
    user: PropTypes.object
  }

  static defaultProps = {
    doSignOut: () => {},
    user: {}
  }

  state = {
    expanded: false
  }

  handleDoSignOut = () => {
    this.props.doSignOut()
  }

  handleExpandMenu = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    const { user } = this.props

    return (
      <div className={`top-bar`}>
        <UserMenu user={user} doSignOut={this.handleDoSignOut} />
      </div>
    )
  }
}

export default TopBar
