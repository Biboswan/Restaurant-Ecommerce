import React, { PureComponent, Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import MenuCardHolder from './MenuCardHolder/MenuCardHolder';
import { Row, Col } from 'react-materialize';

export default class Menu extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <Row>
            <Col s={12}>
              <MenuCardHolder />
            </Col>
          </Row>
        </main>
        <Footer />
      </Fragment>
    );
  }
}
