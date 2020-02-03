import request from 'superagent';
import config from '../config';

export const listComics = async (limit, offset) => {
  // TODO: fix this CORS workaround
  const response = await request.get(`https://cors-anywhere.herokuapp.com/${config.baseUrl}/issues`)
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Credentials', 'true')
    .query({
      api_key: config.authKey,
      limit: 20,
      offset: 0,
      format: 'json'
    });

  console.log(response, 'response');

  return response.body;
};

export const getComic = async (comicID) => {
  const response = await request.get(`${config.baseUrl}/issue/${comicID}`);

  return response.body;
};
