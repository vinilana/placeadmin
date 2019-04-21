import { compose } from 'recompose'

//Constants
//import ROLES from '../../constants/roles'

//High Order Components
//import { withFirebase } from '../../highOrderComponents/Firebase/FirebaseContext'
import { withAuthorization } from '../../highOrderComponents/Session'

import ProductsPage from './ProductsPage'

const conditionToRenderPage = AuthUser => !!AuthUser

const ProductsPageEnhancement = compose(
  withAuthorization(conditionToRenderPage),
)(ProductsPage)

export default ProductsPageEnhancement