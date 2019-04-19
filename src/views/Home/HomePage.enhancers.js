import { compose } from 'recompose'

//Constants
//import ROLES from '../../constants/roles'

//High Order Components
//import { withFirebase } from '../../highOrderComponents/Firebase/FirebaseContext'
import { withAuthorization } from '../../highOrderComponents/Session'

import HomePage from './HomePage'

const conditionToRenderPage = AuthUser => !!AuthUser

const HomePageEnhancement = compose(
  withAuthorization(conditionToRenderPage),
)(HomePage)

export default HomePageEnhancement