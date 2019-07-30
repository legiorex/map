// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';

// Routes
import Private from './Private';
import Public from './Public';

// Styles
// import 'antd/dist/antd.css';

// Components
// import { Loading } from "../components";

// Actions
// import { authActions } from '../bus/auth/actions';

const mapStateToProps = (state) => {

  return state;
};

// const mapDispatchToProps = {
//     // initializeAsync: authActions.initializeAsync,
//     // ...socketActions,
// };

// @hot(module)
@withRouter
@connect(mapStateToProps)
export default class App extends Component {

    state = {
      isAuthenticated: false,
    }

    // componentDidMount = () => {
    //     const { initializeAsync, listenConnection } = this.props;

    //     listenConnection();
    //     initializeAsync();
    //     joinSocketChannel();
    // }

    // componentWillUnmount = () => {
    //     socket.removeListener('connect');
    //     socket.removeListener('disconnect');
    // }

    // signIn = () => {

    //     const authOk = (googleUser) => {
    //         const nameUser = googleUser.getBasicProfile().getName();
    //         this.setState({ nameUser })
    //     }

    //     const authErr = () => console.log('Auth Err')

    //     const GoogleAuth = window.gapi.auth2.getAuthInstance()

    //     GoogleAuth.signIn({
    //         scope: 'profile email',
    //     }).then(authOk, authErr)
    // }

    // signOut = () => {
    //     const GoogleAuth = window.gapi.auth2.getAuthInstance();
    //     GoogleAuth.signOut().then(
    //         ()=> console.log('signOut Ok'),
    //         ()=> console.log('signOut Err')
    //     )
    // }

    render () {
      const { isAuthenticated } = this.state;

      return isAuthenticated ? <Private /> : <Public />;

    }
}
