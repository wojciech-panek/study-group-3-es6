import './src/main.scss';

import 'babel-polyfill';

import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {Router, browserHistory} from 'react-router';


const reactRoot = window.document.getElementById('react-root');

function renderApp() {
  const routes = require('./src/routes').default;

  render(
    <Router history={browserHistory} routes={routes}/>,
    reactRoot
  );
}

function startApp() {
  renderApp();

  if (module.hot) {
    module.hot.accept('./src/routes', () => {
      unmountComponentAtNode(reactRoot);
      renderApp();
    });
  }
}

startApp();

