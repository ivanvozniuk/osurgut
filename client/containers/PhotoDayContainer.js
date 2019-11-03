import React from 'react';
import Router from 'next/router';
import fetch from '../services/request';

import DayPhoto from '../components/PhotoDay';
import CategoryHeader from '../components/CategoryHeader';
import Content from '../layout/Content';
import ActionButton from '../elements/ActionButton';

export default ({ data }) => {
  const handleAction = () => {
    const href = `/${data.model}/[id]`;
    const as = `/${data.model}/${data.id}`;
    Router.push(href, as, { shallow: true });
  };

  return (
    <>
      <Content>
        <CategoryHeader
          heading="Фотография дня"
          isBottomOffset
          RightSide={() => <ActionButton isPrimary isActive iconName="plus" text="Запостить" />}
        />
      </Content>
      <DayPhoto action={handleAction} post={data} />
    </>
  );
};

export const getInitialProps = async () => {
  const req = await fetch('/photoday/get', {
    data: { id: null },
  });

  return {
    data: req.body.photoday,
    isError: req.error,
  };
};
