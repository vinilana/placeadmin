import React  from 'react'
import PropTypes from 'prop-types'

// Components
import { Popover } from '../../Popover'

const Menu = ({ doSignOut }) => (
  <div onClick={doSignOut}>
    Fazer logout
  </div>
)

const UserMenu = (props) => {
  const { user, doSignOut } = props

  return (
    <Popover
      title={`Opções de Usuário`}
      content={<Menu doSignOut={doSignOut}/>}
      placement={'bottomRight'}>
      <div className={`user-menu`}>
        <div className={`user-menu__name`}>
          {user.displayName || 'Sem nome'}
        </div>
        <div className={`user-menu__avatar`}>
        </div>
      </div>
    </Popover>
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
