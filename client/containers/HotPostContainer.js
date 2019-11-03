import React from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';

import fetch from '../services/request';

import ButtonElement from '../elements/Button';
import Icon from '../elements/Icon';

export default ({ data, ...props }) => {
  const handleAction = (model, id) => {
    Router.push(`/${model}/[id]`, `/${model}/${id}`, { shallow: true });
  };

  return (
    <Button {...props} onClick={() => handleAction(data.model, data.id)}>
      <Icon size="16" name="post" />
      <Text>{data.title}</Text>
    </Button>
  );
};

export const getInitialProps = async () => {
  const req = await fetch('/hotpost/get', {
    data: { type: null },
  });

  return {
    data: req.body.hotpost,
    isError: req.error,
  };
};

const Button = styled(ButtonElement)`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  padding: 0 30px;
  border: 2px solid ${({ theme }) => theme.red};
`;
const Text = styled.span`
  margin-left: 10px;
  color: #db4e5e;
  text-overflow: ellipsis;
  overflow: hidden;
`;
