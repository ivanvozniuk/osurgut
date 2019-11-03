import React, { useState, useEffect } from 'react';
import { Button, Message, Icon, Header, Form, Segment } from 'semantic-ui-react';

import InputBlock from './InputBlock';

const ItemForm = ({ posts, action }) => {
  const [data, setData] = useState([]);
  const handleChange = (value, id) => {
    const newData = [...data];
    newData[id] = value;

    setData(newData);
  };

  useEffect(() => {
    console.log('use effect', posts);
    setData(posts.map(({ _id }) => _id));
  }, [posts]);

  const handleAction = () => {
    const dataSend = data.filter(id => id.length > 0);
    action(dataSend);
  };

  return (
    <Form style={{ padding: '0px 0px 15px 25px' }}>
      <Form.Group widths="equal">
        <InputBlock
          action={value => {
            handleChange(value, 0);
          }}
          title="ID поста"
          value={data[0] || ''}
        />
        <InputBlock
          action={value => {
            handleChange(value, 1);
          }}
          title="ID поста"
          value={data[1] || ''}
        />
        <InputBlock
          action={value => {
            handleChange(value, 2);
          }}
          title="ID поста"
          value={data[2] || ''}
        />
        <InputBlock
          action={value => {
            handleChange(value, 3);
          }}
          title="ID поста"
          value={data[3] || ''}
        />
      </Form.Group>
      <Button onClick={handleAction} basic>
        Сохранить изменения
      </Button>
    </Form>
  );
};

const CompilationContainer = ({
  isLoading,
  isRendering,
  data: dataObj,
  change,
  action,
  isError,
  message,
}) => {
  const [postsValue, setPosts] = useState(null);
  const [typeValue, setTypeValue] = useState(null);
  const [modelValue, setModelValue] = useState(null);

  const [filter, setFilter] = useState({ type: null, model: null });
  const [data, setData] = useState(dataObj);

  useEffect(() => {
    setData(
      dataObj.filter(({ type, model }) => {
        const filterType = filter.type === null ? true : type === filter.type;
        const modelType = filter.model === null ? true : model === filter.model;

        return filterType && modelType;
      }),
    );
  }, [filter, dataObj]);

  return (
    <Segment loading={isRendering === true}>
      <Header as="h2">Параметры слайдеров</Header>
      <Segment>
        <Form>
          <Form.Group widths="equal">
            <InputBlock
              placeholder="Сортировка по Странице"
              isSelect
              options={[
                {
                  value: null,
                  text: 'Все',
                },
                {
                  value: 'home',
                  text: 'Главная',
                },
                {
                  value: 'news',
                  text: 'Home',
                },
                {
                  value: 'posters',
                  text: 'Афиши',
                },
              ]}
              value={filter.value}
              action={value => setFilter({ ...filter, type: value })}
            />
            <InputBlock
              placeholder="Сортировка по модели"
              isSelect
              options={[
                {
                  value: null,
                  text: 'Все',
                },
                {
                  value: 'news',
                  text: 'Новости',
                },
                {
                  value: 'poster',
                  text: 'Афиша',
                },
              ]}
              value={filter.value}
              action={value => setFilter({ ...filter, model: value })}
            />
          </Form.Group>
        </Form>
      </Segment>

      {data.map(({ type, model, title, posts, _id }, ind) => (
        <Segment key={ind}>
          <Form>
            <Form.Group widths="equal">
              <InputBlock title="Тип" value={type} />
              <InputBlock title="Модель" value={model} />
            </Form.Group>
            <Form.Group widths="equal">
              <ItemForm
                posts={posts}
                action={data => {
                  action({ id: _id, posts: data, model }, 'change');
                }}
              />
            </Form.Group>
          </Form>
          <Button onClick={() => action({ id: _id }, 'delete')} basic>
            Удалить
          </Button>
        </Segment>
      ))}
      <Segment>
        <Form>
          <Form.Group widths="equal">
            <InputBlock
              placeholder="id0,id1,id2"
              title="ID постов через запятую слитно"
              action={value => {
                setPosts(value.split(','));
              }}
              value={postsValue}
            />
            <InputBlock
              isSelect
              options={[
                {
                  value: 'home',
                  text: 'Главная страница',
                },
                {
                  value: 'news',
                  text: 'Страница новостей',
                },
                {
                  value: 'posters',
                  text: 'Страница афиш',
                },
              ]}
              title="Страница"
              action={value => setTypeValue(value)}
              value={typeValue}
            />
            <InputBlock
              isSelect
              options={[
                {
                  value: 'news',
                  text: 'Новости',
                },
                {
                  value: 'poster',
                  text: 'Афиша',
                },
              ]}
              title="Модель постов"
              action={value => setModelValue(value)}
              value={modelValue}
            />
          </Form.Group>
        </Form>
        <Button
          primary
          onClick={() =>
            action({ posts: postsValue, type: typeValue, model: modelValue }, 'create')
          }
        >
          Создать
        </Button>
      </Segment>

      <Message
        negative={isError === true ? true : null}
        success={isError === false ? true : null}
        icon
      >
        {isLoading && <Icon name="circle notched" loading />}
        <Message.Content>{message || 'Заполните форму'}</Message.Content>
      </Message>
    </Segment>
  );
};

export default CompilationContainer;
