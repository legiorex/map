// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col, Checkbox } from 'antd';

import Styles from './styles.module.css';

// Actions
import { authActions } from '../bus/auth/actions';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  googleInit: authActions.googleInit,
};

@connect(mapStateToProps, mapDispatchToProps)

export default class Login extends Component {

    _googleInit = () => {
      this.props.googleInit();
    }
    _onChange = (e) => {

      e.target.checked ?
        localStorage.setItem('remember', e.target.checked) :
        localStorage.removeItem('remember');

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
                className = { Styles.mainButton }
                icon = 'google'
                type = 'primary'
                onClick = { this._googleInit }>
                login
              </Button>
              <Checkbox onChange = { this._onChange }>Запомнить меня</Checkbox>
            </Col>

          </Row>
        </div>

      );
    }
}
