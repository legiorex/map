// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Wrapper from '../components/Wrapper';

const mapStateToProps = (state) => {
  return state;
};

@connect(mapStateToProps)

export default class Users extends Component {

  render () {
    return (
      <>
        <Wrapper />
      </>
    );
  }
}
