import request from 'superagent';
import config from '../config';

export const listComics = async (limit, offset) => {
  // TODO: remove this CORS Workaround
  const response = await request.get(`https://cors-anywhere.herokuapp.com/${config.baseUrl}/issues`)
    .query({
      api_key: config.authKey,
      limit: 20,
      offset: 0,
      format: 'json'
    });

  return response.body;
};

export const getComic = async (comicID) => {
  const response = await request.get(`${config.baseUrl}/issue/${comicID}`);

  return response.body;
};
