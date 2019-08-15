import React, { useState } from 'react'
import PropTypes from 'prop-types'

function UserMenu (props) {
  const { user, doSignOut } = props

  return (
    <div className={`user-menu`} onClick={doSignOut}>
      <div className={`user-menu__name`}>
        {user.displayName || 'Sem nome'}
      </div>
      <div className={`user-menu__avatar`}>

      </div>
    </div>
  )
}

UserMenu.propTypes = {
  user: PropTypes.object,
  doSignOut: PropTypes.func
}

UserMenu.defaultProps = {
  user: {
    name: 'Visitante'
  },
  doSignOut: () => {}
}

export { UserMenu }
