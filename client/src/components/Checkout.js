import React, { Fragment, PureComponent } from 'react';
import Footer from './Footer';
import Header from './Header';
import PhoneVerification from './PhoneVerification';
import Payment from './Payment';
import ContactDetailsForm from './ContactDetailsForm/ContactDetailsForm';
import { Collapsible, CollapsibleItem, Row, Col } from 'react-materialize';

export default class Checkout extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <Row>
            <Col s={12} l={8}>
              <Collapsible accordion popout defaultActiveKey={0}>
                <CollapsibleItem header="CONTACT DETAILS" icon="filter_drama">
                  <ContactDetailsForm />
                </CollapsibleItem>
                <CollapsibleItem header="PHONE VERIFICATION" icon="place">
                  <PhoneVerification />
                </CollapsibleItem>
                <CollapsibleItem header="PAYMENT" icon="place">
                  <Payment />
                </CollapsibleItem>
              </Collapsible>
            </Col>
          </Row>
        </main>
        <Footer />
      </Fragment>
    );
  }
}
