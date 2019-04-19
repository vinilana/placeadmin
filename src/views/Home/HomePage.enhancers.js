import { compose } from 'recompose'

//High Order Components
//import { withFirebase } from '../../highOrderComponents/Firebase/FirebaseContext'
import { withAuthenticatedRoute } from '../../highOrderComponents/Session'

import HomePage from './HomePage'

const HomePageEnhancement = compose(
  withAuthenticatedRoute,
)(HomePage)

export default HomePageEnhancement