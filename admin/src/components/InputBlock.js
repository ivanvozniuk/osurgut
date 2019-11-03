import React from 'react';
import { Select, Form, Input } from 'semantic-ui-react';

export default class InputBlock extends React.PureComponent {
  handleChange = e => {
    const { action = null } = this.props;
    if (action !== null) {
      this.props.action(e.target.value);
    }
  };

  render() {
    const {
      value,
      action,
      title,
      placeholder,
      required = false,
      type = 'text',
      key,
      isSelect,
      ...props
    } = this.props;

    if (isSelect)
      return (
        <Form.Field {...props} required={required}>
          <label>{title}</label>
          <Select
            placeholder={placeholder}
            options={props.options}
            onChange={(e, { value }) => action(value)}
          />
        </Form.Field>
      );

    return (
      <Form.Field {...props} required={required}>
        <label>{title}</label>
        <Input type={type} value={value} onChange={this.handleChange} placeholder={placeholder} />
      </Form.Field>
    );
  }
}
