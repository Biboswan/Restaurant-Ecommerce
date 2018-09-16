import React, { PureComponent, Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import FixedBottomNav from './FixedBottomNav/FixedBottomNav';
import MenuCardHolder from './MenuCardHolder/MenuCardHolder';
import { Row, Col } from 'react-materialize';
import Hidden from '@material-ui/core/Hidden';

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
          <FixedBottomNav />
        </main>
        <Footer />
      </Fragment>
    );
  }
}
