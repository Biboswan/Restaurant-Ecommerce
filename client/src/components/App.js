import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet, link } from 'react-helmet';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './Home/Home';
import Menu from './Menu/Menu';
import Checkout from './Checkout';
import iconUrl from '../images/shimlaicon.png';
import * as actions from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <CssBaseline />
          <Helmet>
            <link rel="shortcut icon" type="image/png" href={iconUrl} />
          </Helmet>
          <Switch>
            {/* BrowserRouter can have only one child component */}

            <Route exact path="/" component={Home} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/checkout" component={Checkout} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
