import React from 'react';

import ReactMarkdown from 'react-markdown';

const PostBody = ({ content }) => <ReactMarkdown source={content} />;

export default PostBody;
