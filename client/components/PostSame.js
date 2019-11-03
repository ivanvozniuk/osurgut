import React from 'react';

import styled from '@emotion/styled';
import BorderedImage from '../elements/BorderedImage';
import IconTimeBig from '../assets/date.svg';

const PostSame = ({ date, title, image }) => (
  <PostSameContainer>
    <PostBorderedImage src={image} alt="Post image" />
    <PostDataBlock>
      <PostIconTime />
      <DateText>{date}</DateText>
    </PostDataBlock>
    <h3>
      <TitleLink href="/">{title}</TitleLink>
    </h3>
  </PostSameContainer>
);

const PostBorderedImage = styled(BorderedImage)`
  @media screen and (max-width: 768px) {
    align-self: center;
  }
`;
const PostIconTime = styled(IconTimeBig)`
  fill: #8a8a8a;
  margin-bottom: 2px;
`;
const DateText = styled.span`
  color: ${props => props.theme.darkColor};
  margin-left: 10px;
`;
const PostSameContainer = styled.li`
  flex-basis: calc(50% - 15px);

  &:nth-of-type(2n + 1) {
    margin-right: 30px;
  }

  @media screen and (max-width: 768px) {
    margin-right: 0 !important;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;

    &:not(:last-of-type) {
      margin-bottom: 50px;
    }
  }
`;
const PostDataBlock = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    align-self: center;
  }
`;
const TitleLink = styled.a`
  color: rgba(0, 0, 0, 0.9);
  font-size: 28px;
  line-height: 36px;

  @media screen and (max-width: 560px) {
    font-size: 22px;
    line-height: 30px;
  }
`;

export default PostSame;
