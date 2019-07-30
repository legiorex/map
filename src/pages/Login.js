// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col } from 'antd';

import Styles from './styles.module.css';

// Actions
import { googleActions } from '../bus/google/actions';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  initialize: googleActions.initialize,
};

@connect(mapStateToProps, mapDispatchToProps)

export default class Login extends Component {
    state = {
      isAuthenticated: false,
      nameUser:        '',
    }

    componentDidMount () {
      // this.props.initialize();

      // window.gapi.load('auth2', () => {

      //   window.gapi.auth2
      //     .init({
      //       client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      //     })
      //     .then(() => console.log('init Ok'), () => console.log('init Error'));
      // });

    }

    _googleInit = () => {
      this.props.initialize();
    }

    render () {
      return (
        <div className = { Styles.wrapper }>
          <Row
            align = 'middle'
            justify = 'center'
            type = 'flex'>
            <Col span = { 8 } >

              <Button
                onClick = { this._googleInit }
                className = { Styles.mainButton }
                icon = 'google'
                type = 'primary' >
                login
              </Button>

            </Col>

          </Row>
        </div>

      );
    }
}
