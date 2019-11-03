import React from 'react';
import styled from '@emotion/styled';

import Icon from '../../elements/Icon';

const Adress = ({ address: { name, link } }) => {
  return (
    <Container>
      <Icon name="marker-gray" size="18" />
      <Link href={link} target="_blank">
        {name}
      </Link>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  margin-top: 20px;
`;
const Link = styled.a`
  color: rgba(255, 255, 255, 0.65);
  font-size: 18px;
  margin-left: 10px;
`;

export default Adress;
