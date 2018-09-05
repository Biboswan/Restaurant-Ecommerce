import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import formFIELDS from './formFields';
import ContactDetailsField from './ContactDetailsField';
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
    return <form>{this.renderFields()}</form>;
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

export default reduxForm({
  validate,
  form: 'contactdetailsForm',
  destroyOnUnmount: false,
})(ContactDetailsForm);
