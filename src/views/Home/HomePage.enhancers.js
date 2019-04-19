import { compose } from 'recompose'

//High Order Components
//import { withFirebase } from '../../highOrderComponents/Firebase/FirebaseContext'
import { withAuthenticatedRoute } from '../../highOrderComponents/AuthenticatedRoute'

import HomePage from './HomePage'

const HomePageEnhancement = compose(
  withAuthenticatedRoute,
)(HomePage)

export default HomePageEnhancement