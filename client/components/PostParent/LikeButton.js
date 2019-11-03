import React from 'react';
import styled from '@emotion/styled';

import ClickingButton from '../../elements/ClickingButton';
import SubButton from '../../elements/SubButton';
import Icon from '../../elements/Icon';

export default ({ value }) => {
  return (
    <Container>
      <ClickingButton>
        <SubButton>
          <Icon name="like" size={18} />
          <Number>{value}</Number>
        </SubButton>
      </ClickingButton>
    </Container>
  );
};

const Number = styled.span`
  margin-left: 10px;
  font-family: ${props => props.theme.bold};
`;

const Container = styled.div`
  height: 50px;
`;
