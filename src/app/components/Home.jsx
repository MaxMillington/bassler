
import React, {Component} from 'react'
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div id='home'>
        <h1>This is the home page</h1>
        <Link to='/first'>Click to go to First</Link><br/>
        <Link to='/second'>Click to go to Second</Link><br/>
        <Link to='/third'>Click to go to Third</Link><br/>
        <Link to='/fourth'>Click to go to Fourth</Link><br/>
      </div>
    );
  }
}
