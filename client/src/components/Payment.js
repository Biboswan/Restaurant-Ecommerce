import React, { PureComponent } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

//import scriptLoader from 'react-async-script-loader';

export default class Payment extends PureComponent {
  onSuccess(payment) {
    // Congratulation, it came here means everything's fine!
    console.log('The payment was succeeded!', payment);
    // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
  }

  onCancel(data) {
    // User pressed "cancel" or close Paypal's popup!
    console.log('The payment was cancelled!', data);
    // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
  }

  onError(err) {
    // The main Paypal's script cannot be loaded or somethings block the loading of that script!
    console.log('Error!', err);
    // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
    // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
  }

  render() {
    // you can set here to 'production' for production
    let currency = 'INR'; // or you can set this value from your props or state
    let total = 500;

    const client = {
      sandbox: process.env.REACT_APP_PAYPAL_sandbox,
      production: process.env.REACT_APP_PAYPAL_production,
    };

    return (
      <PaypalExpressBtn
        env={process.env.REACT_APP_PAYPAL_ENV}
        client={client}
        currency={currency}
        total={total}
        onError={this.onError}
        onSuccess={this.onSuccess}
        onCancel={this.onCancel}
      />
    );
  }
  // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
  // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
}
