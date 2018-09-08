import React, { Fragment, PureComponent } from 'react';
import Footer from './Footer';
import Header from './Header';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import PhoneVerification from './PhoneVerification';
import Payment from './Payment';
import ContactDetailsForm from './ContactDetailsForm/ContactDetailsForm';
import { Row, Col, Icon } from 'react-materialize';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { connect } from 'react-redux';

class Checkout extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <Row>
            <Col s={12} l={8}>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Icon>phone</Icon>
                  PHONE VERIFICATION
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <PhoneVerification />
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel disabled={this.props.checkout.step1 === 'undone'}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Icon>place</Icon>
                  DELIVERY ADDRESS
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <ContactDetailsForm prop />
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                disabled={
                  this.props.checkout.step1 === 'undone' ||
                  this.props.checkout.step2 === 'undone'
                }
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Icon>payment</Icon>
                  PAYMENT
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Payment />
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Col>
          </Row>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

function mapStateToProps({ checkout }) {
  return { checkout };
}

export default connect(
  mapStateToProps,
  null
)(Checkout);
