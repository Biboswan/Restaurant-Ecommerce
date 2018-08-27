import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet, link } from 'react-helmet';
import Home from './Home/Home';
import Menu from './Menu';
import iconUrl from '../images/shimlaicon.png';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Helmet>
            <link rel="shortcut icon" type="image/png" href={iconUrl} />
          </Helmet>
          <Switch>
            {/* BrowserRouter can have only one child component */}

            <Route exact path="/" component={Home} />
            <Route exact path="/menu" component={Menu} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}
