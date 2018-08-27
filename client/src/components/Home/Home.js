import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import HomeBackground from '../HomeBackground/HomeBackground';
import { Row, Col } from 'react-materialize';
import SearchLocality from '../SearchLocality';

export default class Home extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <main className="valign-wrapper">
          <Row className="center-align">
            <Col s={12}>
              <SearchLocality />
            </Col>
            <Col s={12}>
              <Link className="btn" to="/menu">
                Go to Food Menu
              </Link>
            </Col>
          </Row>
        </main>
        <Footer />
      </Fragment>
    );
  }
}
