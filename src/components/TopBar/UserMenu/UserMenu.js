import React, { useState } from 'react'
import PropTypes from 'prop-types'

function UserMenu (props) {
  const { user } = props

  return (
    <div className={`user-menu`}>
      <div className={`user-menu__name`}>
        {user.displayName || 'Sem nome'}
      </div>
      <div className={`user-menu__avatar`}>

      </div>
    </div>
  )
}

UserMenu.propTypes = {
  user: PropTypes.string
}

UserMenu.defaultProps = {
  user: {
    name: 'Visitante'
  }
}

export { UserMenu }
