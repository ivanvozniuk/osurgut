import React from 'react';
import styled from '@emotion/styled';

import generateDate from '../services/generateDate';
import IconElem from './Icon';

export default ({ date, nextDate = {}, iconName = 'date', isIcon = true }) => {
  const { string, schema } = generateDate(date, nextDate);

  return (
    <Date>
      {isIcon && <Icon size="18" name={iconName} />}
      <TextDate datetime={schema}>{string}</TextDate>
    </Date>
  );
};

const Date = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Icon = styled(IconElem)`
  margin-right: 10px;
`;
const TextDate = styled.time`
  display: span;
  font-size: 17px;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.2em;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
