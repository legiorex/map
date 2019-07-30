// Core
import React, { Component } from 'react';

import Styles from './styles.module.css';

// Api
// import { api } from '../REST/api';

export default class Login extends Component {
    state = {
      isAuthenticated: false,
      nameUser:        '',
    }

    componentDidMount () {

      window.gapi.load('auth2', () => {

        window.gapi.auth2
          .init({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          })
          .then(() => console.log('init Ok'), () => console.log('init Error'));
      });

    }

    render () {
      return (
        <div className = { Styles.login } >login </div>
      );
    }
}
