/* eslint-disable react/sort-comp */
import React, { Children } from 'react';
import debounce from './debounce';

export default class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    const { inputs } = this.props;

    this.state = {
      errors: inputs.reduce((result, item) => {
        result[item.name] = item.error || null;
        return result;
      }, {}),
      values: inputs.reduce((result, item) => {
        result[item.name] = item.value || null;
        return result;
      }, {}),
      dependent: inputs.reduce((result, item) => {
        result[item.name] = item.dependent || null;
        return result;
      }, {}),
      dependence: inputs.reduce((result, item) => {
        result[item.name] = item.dependence || null;
        return result;
      }, {}),
      inputs: inputs.map(({ value, error, ...input }) => input),
    };
  }

  handleAction = debounce(() => {
    const {
      state: { values, errors },
      props: { action, inputs },
    } = this;

    let isError = false;

    inputs.forEach(({ name }) => {
      if (errors[name] !== null) isError = true;
      if (values[name] === null) isError = true;
    });

    if (isError) {
      this.setState(state => ({
        errors: { ...state.errors, error: 'Заполните все поля правильно' },
      }));
    } else {
      action(values);
    }
  }, 500);

  handleValidation = name => {
    const {
      state: { values, dependent, dependence },
      props: { validation },
    } = this;

    if (values[name] === null) return;

    const errorFunction = err => {
      if (err) {
        this.setState(state => ({
          errors: { ...state.errors, [name]: err },
        }));
      } else {
        this.setState(state => ({
          errors: { ...state.errors, [name]: null },
        }));
      }
    };

    if (Array.isArray(validation)) {
      for (let i = 0; i < validation.length; i++) {
        const err = validation[i](values[name], name, values[dependent[name]]);
        errorFunction(err);
        if (err) break;
      }
    } else {
      const err = validation(values[name], name, values[dependent[name]]);
      errorFunction(err);
    }

    if (dependence[name]) {
      this.handleValidation(dependence[name]);
    }
  };

  handleChange = (name, value) => {
    this.setState(state => ({
      values: { ...state.values, [name]: value },
      errors: { ...state.errors, [name]: null },
    }));
  };

  render() {
    const {
      handleChange,
      handleAction,
      handleValidation,
      props: { children, errors: errorsProps },
      state: { errors, values, inputs, isError },
    } = this;

    return React.cloneElement(Children.only(children), {
      errors: { ...errors, ...errorsProps },
      values,
      inputs,
      isError,
      validation: handleValidation,
      change: handleChange,
      action: handleAction,
    });
  }
}
