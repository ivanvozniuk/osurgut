import React from 'react';
import { NextHead } from 'next';

export default ({ title, description, url, image }) => {
  return (
    <NextHead>
      {title && (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} />
        </>
      )}
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </>
      )}
      {url && (
        <>
          <meta property="og:url" content={url} />
          <meta name="twitter:site" content={url} />
        </>
      )}
      {image && (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={image} />
          <meta property="og:image" content={image} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </>
      )}
    </NextHead>
  );
};
