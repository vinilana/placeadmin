import { compose } from 'recompose'
import { withFirebase } from '../../containers/Firebase/FirebaseContext'

import HomePage from './HomePage'

const HomePageEnhancement = compose(
  withFirebase
)(HomePage)

export default HomePageEnhancement