import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import { BrowserRouter as Router, Route, Switch,  Redirect} from "react-router-dom";
import IndexPage from './routes/IndexPage/IndexPage';
import HomePage from './routes/HomePage/HomePage';
import ClassifyPage from './routes/ClassifyPage/ClassifyPage';
import HeadIinePage from './routes/HeadIinePage/HeadIinePage';
import CartPage from './routes/CartPage/CartPage';
import MinePage from './routes/MinePage/MinePage';
import LoginPage from './routes/LoginPage/LoginPage';
import RegisterPage from './routes/RegisterPage/RegisterPage';
import ClausePage from './routes/ClausePage/ClausePage';
// import history from './history';
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
        <Route path="/register" component={RegisterPage} />
        <Route path="/clause" component={ClausePage} />
      </Switch>
      {/* <Redirect to="/home" /> */}
    </Router>
      );
    }
    
    export default RouterConfig;
