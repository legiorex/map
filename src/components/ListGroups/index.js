// Core
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { List, Avatar } from 'antd';

// Actions
import { groupsActions } from '../../bus/groups/actions';

const mapStateToProps = (state) => {
  return {
    groups:     state.groups,
    workspaces: state.workspaces,
  };
};

const mapDispatchToProps = {
  fillGroupsAsync: groupsActions.fillGroupsAsync,
};

const ListGroups = (props) => {

  const { workspaces, groups, fillGroupsAsync } = props;
  console.log('groups', groups)

  useEffect(() => {
    fillGroupsAsync(workspaces[0].id);
  }, []);

  return (
    <>
      <h2>Список отделов</h2>
      <List

        dataSource = { groups }
        itemLayout = 'horizontal'
        renderItem = { (item) => (
          <List.Item>
            <List.Item.Meta
              title = { item.title }
            />
          </List.Item>
        ) }
      />
    </>);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListGroups);
