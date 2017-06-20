import loadHome from 'bundle-loader?lazy&name=home!./home-page'
import loadProgram from 'bundle-loader?lazy&name=orders!./program-page'

import AsyncComponent from 'components/async-component'

const Home = AsyncComponent(loadHome)
const Program = AsyncComponent(loadProgram)

export { Home, Program }
