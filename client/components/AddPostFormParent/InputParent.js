import React from 'react';

import DateInput from './DateInput';
import DefaultInput from './DefaultInput';
import FileInput from './FileInput';
import Textarea from './Textarea';
import Select from './Select';

export default ({
  type,
  placeholder,
  index,
  iconName,
  iconSize,
  options,
  name,
  onBlur,
  reference,
}) => {
  switch (type) {
    case 'date':
      return (
        <DateInput
          iconName={iconName}
          iconSize={iconSize}
          index={index}
          name={name}
          placeholder={placeholder}
          type={type}
        />
      );
    case 'textarea':
      return (
        <Textarea type={type} placeholder={placeholder} name={name} index={index} onBlur={onBlur} />
      );
    case 'select':
      return (
        <Select
          options={options}
          type={type}
          index={index}
          placeholder={placeholder}
          iconName={iconName}
          iconSize={iconSize}
          name={name}
        />
      );
    case 'file':
      return (
        <FileInput
          reference={reference}
          index={index}
          type={type}
          placeholder={placeholder}
          iconName={iconName}
          iconSize={iconSize}
          name={name}
          onBlur={onBlur}
        />
      );
    default:
      return (
        <DefaultInput
          index={index}
          type={type}
          iconName={iconName}
          iconSize={iconSize}
          name={name}
          placeholder={placeholder}
          onBlur={onBlur}
        />
      );
  }
};
