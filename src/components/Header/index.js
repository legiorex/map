// Code
import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Layout } from 'antd';

// Components
import Logo from '../Logo';
import TopMenu from '../TopMenu';
import Manager from '../Manager';

const mapStateToProps = (state) => {
  return {
    pathname: state.router.location.pathname,
  };
};

const Header = (props) => {
  return (
    <Layout>
      <Row>
        <Col>
          <Logo />
        </Col>

      </Row>
      <Row>
        <Col span = { 4 }>
          <Manager />
        </Col>
        <Col span = { 18 }>
          <TopMenu pathname = { props.pathname } />
        </Col>

      </Row>
    </Layout>

  );
};

export default connect(
  mapStateToProps,
  //   mapDispatchToProps
)(Header);
