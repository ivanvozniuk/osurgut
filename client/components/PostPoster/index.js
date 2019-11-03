import React from 'react';
import styled from '@emotion/styled';

import PostParentContainer from '../../containers/PostParentContainer';
import DateInfo from '../../elements/DateInfo';
import Adress from './Adress';
import PosterPrice from '../PosterPrice';

const PostPoster = ({ image, title, content, likes, views, address, price, date, nextDate }) => {
  return (
    <PostParentContainer
      image={image}
      headerTop={() => (
        <div>
          <DateInfo date={date} nextDate={nextDate} />
          <Adress address={address} />
        </div>
      )}
      headerRight={() => <Price price={price} />}
      title={title}
      content={content}
      likes={likes}
      views={views}
      footer={() => <div>footer</div>}
    />
  );
};
const Price = styled(PosterPrice)`
  margin-top: 15px;
`;

export default PostPoster;
