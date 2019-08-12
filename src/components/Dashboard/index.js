// Core
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return state;
};

const Dashboard = (props) => {

  return (
    <div>Dashboard</div>
  );
};

export default connect(
  mapStateToProps,
//   mapDispatchToProps
)(Dashboard);
