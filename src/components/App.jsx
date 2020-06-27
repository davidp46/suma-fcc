import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Event } from '../pages/Event';
import { Layout } from './Layout';

export const App = () => (
  <Router basename="/">
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/SuMA" />
        </Route>
        <Route path="/SuMA" exact component={Home} />
        <Route path="/SuMA/:event" exact component={Event} />
      </Switch>
    </Layout>
  </Router>
);
