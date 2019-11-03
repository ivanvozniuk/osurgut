import React from 'react';

import styled from '@emotion/styled';

import PrimaryButton from '../elements/ClickingButton';
import Input from '../elements/Input';
import Icon from '../elements/Icon';

const AddComment = () => {
  // const [isFocused, setFocused] = useState(false);
  const AddCommentOuter = styled.div`
    border: 2px solid;
    box-sizing: border-box;
    border-radius: 26px;
    width: 100%;
    display: flex;
    align-items: center;
    transition: ${props => props.theme.transitionMedium};

    @media screen and (max-width: 560px) {
      flex-direction: column;
    }
  `;

  return (
    <AddCommentOuter>
      <AddCommentInput placeholder="Ваше сообщение" />
      <AddCommentButton>
        <ButtonText>Опубликовать</ButtonText>
        <Icon name="send" />
      </AddCommentButton>
    </AddCommentOuter>
  );
};

const AddCommentInput = styled(Input)`
  color: ${props => props.theme.darkColor};
  font-family: ${props => props.theme.medium};
  padding-left: 20px;
  padding-right: 5px;
  min-height: 52px;
`;
const ButtonText = styled.span`
  margin-right: 20px;
`;

const AddCommentButton = styled(PrimaryButton)`
  @media screen and (max-width: 560px) {
    width: 100%;
    border-radius: 0 0 24px 24px;
  }
`;

export default AddComment;
