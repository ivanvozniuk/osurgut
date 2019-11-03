import React, { useState } from 'react';

import Markdown from 'react-markdown';

import InputBlock from '../components/InputBlock';
import {
  Segment,
  Message,
  Header,
  Menu,
  Form,
  Button,
  Icon,
  TextArea,
  Container,
  Divider,
} from 'semantic-ui-react';

const PostContainer = ({
  state,
  modelList,
  status,
  action: { change, changeStatus, ...action },
  meta,
}) => {
  const [activeItem, setActive] = useState(0);

  console.log(status.model, 1);

  return (
    <Segment loading={meta.isRendering ? true : null} fluid>
      <Header as="h2">Параметры поста</Header>
      <Menu attached="top">
        <Menu.Item active={activeItem === 0} onClick={() => setActive(0)}>
          Настройки
        </Menu.Item>
        <Menu.Item active={activeItem === 1} onClick={() => setActive(1)}>
          Статья
        </Menu.Item>
        <Menu.Item active={activeItem === 2} onClick={() => setActive(2)}>
          Картинки
        </Menu.Item>
      </Menu>

      <Segment>
        {activeItem === 0 && (
          <Form>
            <Form.Group widths="equal">
              <InputBlock
                required
                isSelect
                options={[
                  { key: 0, value: 'news', text: 'Новость' },
                  { key: 1, value: 'poster', text: 'Афиша' },
                ]}
                placeholder="По умолчанию Новость"
                title="Модель поста"
                action={value => changeStatus(value, 'model')}
                value={status.model}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <InputBlock
                required
                title="Заголовок"
                action={value => change(value, 'title')}
                value={state.title}
              />
              <InputBlock
                required
                title="Категория"
                placeholder="Например: it, business, fashion"
                action={value => change(value, 'category')}
                value={state.category}
              />
            </Form.Group>
            {status.model === 'news' && (
              <Form.Group widths="equal">
                <InputBlock
                  required
                  title="Автор"
                  action={value => change(value, 'author', 'name')}
                  value={state.author.name}
                />
                <InputBlock
                  required
                  title="Ссылка на автора"
                  action={value => change(value, 'author', 'link')}
                  value={state.author.link}
                />
              </Form.Group>
            )}
            {status.model === 'poster' && (
              <Form.Group widths="equal">
                <InputBlock
                  required
                  title="Адресс"
                  action={value => change(value, 'address', 'name')}
                  value={state.address.name}
                />
                <InputBlock
                  required
                  title="Ссылка на карту"
                  action={value => change(value, 'address', 'link')}
                  value={state.address.link}
                />
              </Form.Group>
            )}
            <Form.Group widths="equal">
              <InputBlock
                type="number"
                required
                title="Год"
                action={value => change(value, 'date', 'year')}
                value={state.date.year}
              />
              <InputBlock
                type="number"
                required
                title="Месяц"
                action={value => change(value, 'date', 'month')}
                value={state.date.month}
              />
              <InputBlock
                type="number"
                required
                title="День"
                action={value => change(value, 'date', 'day')}
                value={state.date.day}
              />
              <InputBlock
                type="number"
                required
                title="Часы"
                action={value => change(value, 'date', 'hours')}
                value={state.date.hours}
              />
              <InputBlock
                type="number"
                required
                title="Минуты"
                action={value => change(value, 'date', 'minutes')}
                value={state.date.minutes}
              />
            </Form.Group>
            {status.model === 'poster' && (
              <div>
                <Header as="h5">Дата конца проведения мерояприятия</Header>
                <Form.Group widths="equal">
                  <InputBlock
                    type="number"
                    required
                    title="Год"
                    action={value => change(value, 'nextDate', 'year')}
                    value={state.nextDate.year}
                  />
                  <InputBlock
                    type="number"
                    required
                    title="Месяц"
                    action={value => change(value, 'nextDate', 'month')}
                    value={state.nextDate.month}
                  />
                  <InputBlock
                    type="number"
                    required
                    title="День"
                    action={value => change(value, 'nextDate', 'day')}
                    value={state.nextDate.day}
                  />
                  <InputBlock
                    type="number"
                    required
                    title="Часы"
                    action={value => change(value, 'nextDate', 'hours')}
                    value={state.nextDate.hours}
                  />
                  <InputBlock
                    type="number"
                    required
                    title="Минуты"
                    action={value => change(value, 'nextDate', 'minutes')}
                    value={state.nextDate.minutes}
                  />
                </Form.Group>
              </div>
            )}
            <Form.Checkbox
              onChange={(e, { checked }) => {
                changeStatus(checked, 'dateOnSave');
              }}
              value={status.dateOnSave}
              label="Установить дату при создании"
            />
            <Form.Group widths="equal">
              <InputBlock
                type="number"
                title="Лайки"
                action={value => change(value, 'likes')}
                value={state.likes}
              />
              <InputBlock
                type="number"
                title="Просмотры"
                action={value => change(value, 'views')}
                value={state.views}
              />
              {status.model === 'poster' && (
                <InputBlock
                  required
                  title="Прайс мероприятия"
                  action={value => change(value, 'price')}
                  value={state.price}
                />
              )}
            </Form.Group>
            <Form.Checkbox
              onChange={(e, { checked }) => {
                change(checked, 'hidden');
              }}
              value={state.dateOnSave}
              label="Скрыть пост"
            />
            <Form.Checkbox
              onChange={(e, { checked }) => {
                change(checked, 'hot');
              }}
              value={state.dateOnSave}
              label="Горячий пост"
            />
          </Form>
        )}

        {activeItem === 1 && (
          <Form>
            <Container>
              <Markdown source={state.body} />
            </Container>
            <Divider />
            <Form.Group widths="equal">
              <TextArea
                style={{ minHeight: '70vh' }}
                value={state.body}
                onChange={(e, { value }) => change(value, 'body')}
                placeholder="Заполните контент статьи"
              />
            </Form.Group>
          </Form>
        )}

        {activeItem === 2 && (
          <Form>
            <Form.Group widths="equal">
              <InputBlock
                required
                title="Ccылка на фото"
                action={value => change(value, 'image')}
                value={state.image}
              />
            </Form.Group>
          </Form>
        )}
      </Segment>

      <Segment>
        <Message
          negative={meta.isError === true ? true : null}
          success={meta.isError === false ? true : null}
          icon
        >
          {meta.isLoading && <Icon name="circle notched" loading />}
          <Message.Content>{meta.message || 'Заполните форму'}</Message.Content>
        </Message>

        <Button onClick={action.create} primary>
          Сохранить
        </Button>
        <Button basic onClick={action.delete}>
          Удалить
        </Button>
      </Segment>
    </Segment>
  );
};

export default PostContainer;
