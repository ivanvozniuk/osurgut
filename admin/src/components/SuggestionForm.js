import React, { useState } from 'react';
import { Message, Icon, Header, Segment, Container, Divider } from 'semantic-ui-react';
import styled from '@emotion/styled';

const PostItem = ({ data, action }) => {
  const [isActive, setActive] = useState(false);

  return (
    <Segment>
      <Container textAlign="justified">
        <Title
          onClick={() => {
            setActive(!isActive);
          }}
        >
          {data.title}
        </Title>
        {isActive && (
          <>
            <Divider />
            <div>
              {data.body && (
                <>
                  <strong>Описание: </strong>
                  {data.body}
                  <br />
                </>
              )}

              {data.date && (
                <>
                  <strong>Дата: </strong>
                  {data.date}
                  <br />
                </>
              )}
              {data.address && (
                <>
                  <strong>Адрес: </strong>
                  {data.address}
                  <br />
                </>
              )}
              {data.price && (
                <>
                  <strong>Цена: </strong>
                  {data.price}
                  <br />
                </>
              )}
              {data.contact && (
                <>
                  <strong>Контакты: </strong>
                  {data.contact}
                  <br />
                </>
              )}
              {data.social && (
                <>
                  <strong>Социальные сети: </strong>
                  {data.social}
                  <br />
                </>
              )}
              {data.website && (
                <>
                  <strong>Вебсайт: </strong>
                  {data.website}
                  <br />
                </>
              )}
              {data.image && (
                <img style={{ width: '100%', height: 'auto' }} src={data.image} alt="" />
              )}
            </div>
            <Divider />
            <Title
              onClick={() => {
                action(data._id);
              }}
            >
              Удалить
            </Title>
          </>
        )}
      </Container>
    </Segment>
  );
};

const CompilationContainer = ({
  isLoading,
  isRendering,
  data = [],
  isError,
  message,
  actionDelete,
}) => {
  console.log(data);
  return (
    <Segment loading={isRendering === true}>
      <Header as="h2">Посты в предложение</Header>

      {data.map(data => (
        <PostItem data={data} action={actionDelete} />
      ))}

      <Message
        negative={isError === true ? true : null}
        success={isError === false ? true : null}
        icon
      >
        {isLoading && <Icon name="circle notched" loading />}
        {<Message.Content>{message || 'Список предложенных товаров'}</Message.Content>}
      </Message>
    </Segment>
  );
};

export default CompilationContainer;

const Title = styled.strong`
  cursor: pointer;
  text-decoration: underline;
`;
