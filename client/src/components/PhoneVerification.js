import React, { PureComponent } from 'react';
import { Row, Input, Button, Col } from 'react-materialize';
import axios from 'axios';
import { addVerifiedPhone_Number } from '../actions';
import { connect } from 'react-redux';

class PhoneVerification extends PureComponent {
  state = {
    showNumberButton: true,
    phone_number: '',
    verification_code: '',
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
      this.setState({ showNumberButton: false });
    } else {
      this.setState({});
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
    }
  }

  render() {
    return (
      <Row>
        {this.state.showNumberButton ? (
          <Col>
            <Input
              placeholder="+91"
              label="ENTER YOUR 10 DIGIT MOBILE NUMBER"
              type="tel"
              data-length="10"
              value={this.state.phone_number}
              onChange={e => this.onChangePhone_Number(e)}
            />
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

export default connect(
  null,
  { addVerifiedPhone_Number }
)(PhoneVerification);
