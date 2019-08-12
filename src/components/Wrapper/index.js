// Core
import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';

const { Footer, Content } = Layout;

// Components
import Header from '../Header';
import Dashboard from '../Dashboard';

// Instruments
import { book } from '../../navigation/book';

const mapStateToProps = (state) => {
  return {
    pathname: state.router.location.pathname,
  };
};

const Wrapper = (props) => {

  

  return (
    <>
      <Layout>
        <Header />
        <Content>
          <Dashboard />
        </Content>
        <Footer />
      </Layout>

    </>

  );
};

export default connect(
  mapStateToProps,
//   mapDispatchToProps
)(Wrapper);
