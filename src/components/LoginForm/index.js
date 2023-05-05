import React, { Component } from 'react';
import Header from '../Header';

import './index.css';

class LoginForm extends Component {

  render() {
    return (
      <><Header /><div className="bg-container">
        <div className="login-card">
          <h1 className="main-heading"> Login</h1>
          <form className="form-container">
            <label id="username" className="user-heading">
              Username</label>
            <input type="text" className="username-box" for="username" />

            <label id="password" className="pass-heading">
              Password</label>
            <input type="password" className="pass-box" for="password" />
            <p className='pass-sub-heading'>Forget Password?</p>

            <button className="btn">Submit</button>
          </form>
        </div>
      </div></>
    );
  }
}

export default LoginForm;