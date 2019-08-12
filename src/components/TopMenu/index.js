// Core
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

// Instruments
import { book } from '../../navigation/book';

const TopMenu = (props) => {
  return (
    <Menu
      defaultSelectedKeys = { [props.pathname] }
      mode = 'horizontal'
      style = { { lineHeight: '64px' } }
      theme = 'dark'>
      <Menu.Item key = { book.users }>
        <Link to = { book.users } />
        Пользователи
      </Menu.Item>
      <Menu.Item key = { book.quiz }>
        <Link to = { book.quiz } />
        Опросы
      </Menu.Item>
      <Menu.Item key = { book.responses }>
        <Link to = { book.responses } />
        Ответы
      </Menu.Item>
    </Menu>
  );
};

export default TopMenu;
