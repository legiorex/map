// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import Users from '../pages/Users';
import Quiz from '../pages/Quiz';
import Responses from '../pages/Responses';

// Instruments
import { book } from './book';

export default class Private extends Component {
  render () {

    return (
      <Switch>
        <Route component = { Users } path = { book.users } />
        <Route component = { Quiz } path = { book.quiz } />
        <Route component = { Responses } path = { book.responses } />
        <Redirect to = { book.users } />
      </Switch>
    );
  }
}
