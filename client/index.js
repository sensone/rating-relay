import { Router, Route, browserHistory, applyRouterMiddleware } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay/classic';
import AppLayout from './views/AppLayout';
import PlayersList from './views/PlayersList';
import TournamentsList from './views/TournamentsList';
import PlayerPreview from './views/PlayerPreview';
import TournamentPreview from './views/TournamentPreview';
import NoFound from './views/NoFound';
import './style.css';
import useRelay from 'react-router-relay'

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:3009/graphql')
)

const ViewerQueries = { viewer: () => Relay.QL`query { viewer }` }

ReactDOM.render(
  <Router
    forceFetch
    environment={Relay.Store}
    render={applyRouterMiddleware(useRelay)}
    history={browserHistory}
  >
    <Route component={AppLayout}>
      <Route path="/" component={PlayersList} queries={ViewerQueries} />
      <Route path="/player/:_id" component={PlayerPreview} queries={ViewerQueries} />
      <Route path="/tournaments" component={TournamentsList} queries={ViewerQueries} />
      <Route path="/tournament/:_id" component={TournamentPreview} queries={ViewerQueries} />

      <Route path="*" component={NoFound} />
    </Route>
  </Router>
  , document.getElementById('root')
);
