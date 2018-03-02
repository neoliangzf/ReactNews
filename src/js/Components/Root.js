import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import App from './App.js'
import NewsDetails from './NewsDetails'

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path='/details/:uniquekey' component={NewsDetails}/>
        <Route path='/usercenter' component={NewsDetails}/>
      </Switch>
    </Router>
  )
}

export default Root

