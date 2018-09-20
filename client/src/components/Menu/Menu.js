import React, { PureComponent, Fragment } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import FixedBottomNav from '../FixedBottomNav/FixedBottomNav';
import MenuCardHolder from '../MenuCardHolder/MenuCardHolder';
import { Row, Col } from 'react-materialize';
import Cart from '../Cart/Cart';
import MenuSideNav from '../MenuSideNav';
import './Menu.css';

export default class Menu extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <Row>
            <Col l={3} className="sticky hide-on-med-and-down">
              <MenuSideNav />
            </Col>
            <Col s={12} m={12} l={6}>
              <MenuCardHolder />
            </Col>
            <Col l={3} className="sticky hide-on-med-and-down">
              <Cart />
            </Col>
          </Row>
          <FixedBottomNav />
        </main>
        <Footer />
      </Fragment>
    );
  }
}
