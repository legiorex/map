// Core
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';

// Actions
import { departmentsActions } from '../../bus/departments/actions';

const mapStateToProps = (state) => {
  return {
    departments: state.departments,
    workspaces:  state.workspaces,
  };
};

const mapDispatchToProps = {
  fillDepartAsync: departmentsActions.fillDepartAsync,
};

const ListDepart = (props) => {
  const { workspaces, departments, fillDepartAsync } = props;

  useEffect(() => {
    fillDepartAsync(workspaces[0].id);
  }, []);

  return (
    <>
      <h2>Список отделов</h2>
      <List

        dataSource = { departments }
        itemLayout = 'horizontal'
        renderItem = { (item) => (
          <List.Item>
            <List.Item.Meta
              title = { item.title }
            />
          </List.Item>
        ) }
      />
    </>

  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListDepart);
