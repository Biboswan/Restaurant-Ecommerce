import React, { PureComponent, Fragment } from 'react';
import { Row, Input, Button, Col, Icon } from 'react-materialize';
import axios from 'axios';
import { addVerifiedPhone_Number, editVerifiedPhoneNumber } from '../actions';
import { connect } from 'react-redux';

class PhoneVerification extends PureComponent {
  state = {
    showNumberButton: true,
    phone_number: '',
    verification_code: '',
    mobile_isValid: true,
  };

  onChangePhone_Number(e) {
    this.setState({ phone_number: e.target.value });
  }

  onChangeOTP(e) {
    this.setState({ verification_code: e.target.value });
  }

  async sendPhoneVerifcationStart() {
    const res = await axios.post('/api/phone/verification/start', {
      via: 'sms',
      phone_number: this.state.phone_number,
    });

    if (res.data.success) {
      this.setState({
        showNumberButton: false,
        mobile_isValid: true,
      });
    } else {
      this.setState({ mobile_isValid: false });
    }
  }

  async sendPhoneVerifcationCheck() {
    const { phone_number, verification_code } = this.state;
    const res = await axios.post('/api/phone/verification/check', {
      phone_number,
      verification_code,
    });

    if (res.data.success) {
      this.props.addVerifiedPhone_Number({
        phone_number,
      });
    } else {
      this.setState({ otpIsValid: false });
    }
  }

  render() {
    return (
      <Row>
        {this.props.checkout.step1 === 'done' ? (
          <Fragment>
            <p>{this.props.verifiednumber}</p>
            <Button
              onClick={this.props.editVerifiedPhoneNumber}
              className="red btn-flat right white-text"
            >
              EDIT
              <Icon right>edit</Icon>
            </Button>
          </Fragment>
        ) : this.state.showNumberButton ? (
          <Col>
            <Input
              placeholder="+91"
              label="ENTER YOUR 10 DIGIT MOBILE NUMBER"
              type="tel"
              data-length="10"
              value={this.state.phone_number}
              onChange={e => this.onChangePhone_Number(e)}
            />
            {!this.state.mobile_isValid && (
              <p>
                <i>Retry Wrong Number</i>
              </p>
            )}
            <Button
              onClick={async () => await this.sendPhoneVerifcationStart()}
            >
              SEND
            </Button>
          </Col>
        ) : (
          <Col>
            <Input
              label="ENTER OTP"
              type="text"
              value={this.state.verification_code}
              onChange={e => this.onChangeOTP(e)}
            />
            {this.state.otpIsValid === false && (
              <p>
                <i>Couldn't verify resend</i>
              </p>
            )}
            <Button onClick={() => this.sendPhoneVerifcationCheck()}>
              SEND
            </Button>
            <Button onClick={() => this.setState({ showNumberButton: true })}>
              BACK
            </Button>
          </Col>
        )}
      </Row>
    );
  }
}

function mapStateToProps({ checkout, verifiednumber }) {
  return { checkout, verifiednumber };
}

export default connect(
  mapStateToProps,
  { addVerifiedPhone_Number, editVerifiedPhoneNumber }
)(PhoneVerification);
