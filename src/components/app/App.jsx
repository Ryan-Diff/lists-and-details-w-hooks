import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import ListPage from '../../Containers/List-Page';
import DetailPage from '../../containers/Detail-Page';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route 
            path="/" 
            exact
            component={ListPage} />
          <Route 
            path="/:characterName" 
            exact
            component={DetailPage}
          />
        </Switch>
      </Router>
    </div>
  );
}