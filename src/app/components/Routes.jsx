import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


import Home from './Home'
import First from './First'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div className='pageOutline'>
          <Route exact path='/' component={Home} />
          <Route path='/first' component={() => <First name='Cosmo' />} />
          <Route path='/second' component={() => <Second name='Kramer' />} />
          <Route path='/third' component={Third} />
          <Route path='/fourth' component={Fourth} />
        </div>
      </Router>
    )
  }
}
