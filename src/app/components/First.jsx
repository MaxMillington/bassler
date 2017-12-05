import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class First extends Component {
  render() {
    return (
      <div id='first'>
        <h1>This is the first page</h1>
        <Link to='/'>Home</Link>
      </div>
    );
  }
}
