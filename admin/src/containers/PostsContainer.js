import React from 'react';
import { Button, Divider, Grid, Header, Icon, Input, Segment } from 'semantic-ui-react';
import styled from '@emotion/styled';
import { withRouter } from 'react-router';

const PostContainer = ({ history }) => {
  return (
    <Segment placeholder>
      <Grid columns={2} stackable textAlign="center">
        <Divider vertical>Or</Divider>

        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Header icon>
              <Icon name="search" />
              Найти пост
            </Header>

            <Input
              fluid
              action={{
                icon: 'search',
                onClick: () => {
                  alert(1);
                },
              }}
              placeholder="Поиск по id..."
            />
          </Grid.Column>

          <Grid.Column>
            <Header icon>
              <Icon name="world" />
              Создать пост
            </Header>
            <Button
              primary
              onClick={() => {
                history.push('/posts/create');
              }}
            >
              Создать
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default withRouter(PostContainer);
