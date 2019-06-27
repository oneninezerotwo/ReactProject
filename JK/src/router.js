import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage';
import HomePage from './routes/HomePage/HomePage';
import ClassifyPage from './routes/ClassifyPage/ClassifyPage';
import HeadIinePage from './routes/HeadIinePage/HeadIinePage';
import CartPage from './routes/CartPage/CartPage';
import MinePage from './routes/MinePage/MinePage';
import LoginPage from './routes/LoginPage/LoginPage';
// import { Provider } from 'dva'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/classify" component={ClassifyPage} />
        <Route path="/headIine" component={HeadIinePage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/mine" component={MinePage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
