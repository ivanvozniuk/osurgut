import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const SERVER_API = process.env.SERVER_API || publicRuntimeConfig.SERVER_API;

export default (
  url,
  { data = null, header = null, token = null, method = null },
  parentUrl = true,
) => {
  const fetchMethod = data === null ? 'GET' : method === null ? 'POST' : method;

  const settings = {
    method: fetchMethod,
    headers: {
      ...header,
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };

  if (fetchMethod !== 'GET') {
    settings.body = JSON.stringify({ ...data });
  }

  return fetch(parentUrl ? SERVER_API + url : url, settings)
    .then(res => res.json())
    .then(({ status, body }) => {
      return { error: status !== 200, body, status };
    });
};
