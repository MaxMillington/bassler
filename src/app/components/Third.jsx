import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class Third extends Component {
  render() {
    return (
      <div id='first'>
        <h1>This is the third page</h1>
        <Link to='/'>Home</Link>
      </div>
    );
  }
}
