import fetch from '../services/request';
import PostNews from '../components/PostNews';

export default ({ isError, data }) => {
  return isError ? (
    <div>Пост не найден</div>
  ) : (
    <PostNews
      image={data.image}
      author={data.author}
      content={data.body}
      likes={data.likes}
      views={data.views}
      author={data.author.name}
      link={data.author.link}
			date={data.date}
			title={data.title}
    />
  );
};

export const getInitialProps = async query => {
  const { id } = query;

  const req = await fetch('/post/get', {
    data: { id, model: 'news' },
  });

  return {
    data: req.body.post,
    isError: req.error,
  };
};
