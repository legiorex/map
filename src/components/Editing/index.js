// Core
import React from 'react';
import { Row, Col } from 'antd';

// Components
import ListDepart from '../ListDepart';
import ListGroups from '../ListGroups';

export const Editing = () => {

  return (
    <>
      <Row>
        <h1>
        Редактирование
        </h1>
      </Row>
      <Row>
        <Col span = { 12 }>
          <ListGroups />
        </Col>
        <Col span = { 12 }>
          <ListDepart />
        </Col>
      </Row>
    </>

  );
};
