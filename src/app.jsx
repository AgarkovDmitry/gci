import React from 'react'
import { Router, Route, Switch } from 'react-router'
import { ApolloProvider } from 'react-apollo'

import { Home, Program } from 'containers/pages'
import Footer from 'containers/footer'

export default ({ history, client, store }) => {
  return (
    <ApolloProvider client={client} store={store}>
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={Home}/>
            <Route path='/program/:title' component={Program}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    </ApolloProvider>
  )
}
