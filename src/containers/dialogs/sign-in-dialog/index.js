import { connect } from 'react-redux'

import * as actions from '../../../store/actions'
import Component from './component'

export default connect(state => ({ token: state.auth.token }), actions)(Component)
