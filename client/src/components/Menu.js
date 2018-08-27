import React, { PureComponent, Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import MenuCardHolder from './MenuCardHolder/MenuCardHolder';

export default class Menu extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <MenuCardHolder />
        </main>
        <Footer />
      </Fragment>
    );
  }
}
