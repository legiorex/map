// Core
import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Layout } from 'antd';

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};

const Manager = (props) => {
  return (
    <div>{props.profile.name}</div>
  );
};

export default connect(
  mapStateToProps,
  //   mapDispatchToProps
)(Manager);
