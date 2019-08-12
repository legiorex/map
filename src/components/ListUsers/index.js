// Core
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { List, Avatar } from 'antd';

// Actions
import { usersActions } from '../../bus/users/actions';

const mapStateToProps = (state) => {
  return {
    workspaces: state.workspaces,
    users:      state.users,
  };
};

const mapDispatchToProps = {
  fillUsersAsync: usersActions.fillUsersAsync,
};

const ListUsers = (props) => {
  const { workspaces, users, fillUsersAsync } = props;


  useEffect(() => {
    fillUsersAsync(workspaces[0].id);
  }, []);

  return (
    <List

      dataSource = { users }
      itemLayout = 'horizontal'
      renderItem = { (item) => (
        <List.Item>
          <List.Item.Meta
            avatar = { <Avatar src = 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' /> }
            description = { item.email }
            title = { item.name }
          />
        </List.Item>
      ) }
    />

  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListUsers);
