import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Page404 from './pages/Page404';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
