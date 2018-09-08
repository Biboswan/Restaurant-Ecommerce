import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import formFIELDS from './formFields';
import { Button, Icon } from 'react-materialize';
import ContactDetailsField from './ContactDetailsField';
import { submitDeliveryAddress, editDeliveryAddress } from '../../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

class ContactDetailsForm extends PureComponent {
  renderFields() {
    return _.map(formFIELDS, ({ name, label, type }) => (
      <Field
        key={name}
        label={label}
        name={name}
        type={type}
        component={ContactDetailsField}
      />
    ));
  }

  render() {
    return (
      <form>
        {this.renderFields()}
        <Button
          disabled={this.props.form.contactdetailsForm.syncErrors}
          onClick={this.props.submitDeliveryAddress}
          className="teal btn-flat right white-text"
        >
          DONE
          <Icon right>done</Icon>
        </Button>
        {this.props.checkout.step2 === 'done' ? (
          <Button
            onClick={this.props.editDeliveryAddress}
            className="red btn-flat right white-text"
          >
            EDIT
            <Icon right>edit</Icon>
          </Button>
        ) : null}
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formFIELDS, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

function mapStateToProps({ checkout, form }) {
  return { checkout, form };
}

export default reduxForm({
  validate,
  form: 'contactdetailsForm',
  destroyOnUnmount: false,
})(
  connect(
    mapStateToProps,
    { submitDeliveryAddress, editDeliveryAddress }
  )(ContactDetailsForm)
);
