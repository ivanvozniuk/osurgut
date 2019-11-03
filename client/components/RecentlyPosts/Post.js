import React from 'react';
import styled from '@emotion/styled';
import generateDate from '../../services/generateDate';

export default ({ data, isBig = false, ...props }) => {
  const generatedDate = generateDate(data.date);

  return (
    <Container {...props}>
      <Content>
        <Date datetime={generatedDate.schema}>{generatedDate.stringShort}</Date>
        <Title isBig={isBig} isHot={data.hot}>
          {data.title}
        </Title>
      </Content>
    </Container>
  );
};

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitionMedium};
  &:hover {
    opacity: ${({ theme }) => theme.hoverOpacity};
  }
`;

const Date = styled.time`
  display: flex;
  color: #909090;
  font-size: 12px;
  margin-right: 15px;
`;

const Title = styled.span`
  line-height: 1.3em;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: ${({ isHot, theme }) => (isHot ? theme.red : theme.darkestColor)};
  font-size: 15px;
  ${({ isBig }) => {
    if (isBig === true) {
      return `
      text-overflow: ellipsis;
      white-space: nowrap;
    `;
    } else {
      return `
          height: 40px;
      `;
    }
  }}
`;

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;
