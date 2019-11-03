import React from 'react';

import Auth from '../components/AuthParent';

export default ({ inputs, errors, title, button, links, action, validation, change }) => {
  return (
    <Auth
      title={title}
      errors={errors}
      inputs={inputs}
      button={button}
      action={action}
      links={links}
      validation={validation}
      change={change}
    />
  );
};
