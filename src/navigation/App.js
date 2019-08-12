// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';
import { Spin } from 'antd';

// Routes
import Private from './Private';
import Public from './Public';

// Styles
// import 'antd/dist/antd.css';

// Components
// import { Loading } from "../components";

// Actions
import { authActions } from '../bus/auth/actions';

const mapStateToProps = (state) => {

  return {
    isAuthenticated: state.auth.isAuthenticated,
    isInitialized:   state.auth.isInitialized,

  };
};

const mapDispatchToProps = {
  initializeAsync: authActions.initializeAsync,
};

// @hot(module)
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {

  componentDidMount = () => {
    this.props.initializeAsync();
  }

  render () {
    const { isAuthenticated, isInitialized } = this.props;

    if (!isInitialized) {
      return <Spin />;
    }

    return isAuthenticated ? <Private /> : <Public />;

  }
}
