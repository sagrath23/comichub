import request from 'superagent';
import config from '../config';

const CORSProxy = 'https://cors-anywhere.herokuapp.com/';

export const listComics = async (limit, offset) => {
  // TODO: fix this CORS workaround
  const response = await request.get(`${CORSProxy}${config.baseUrl}/issues`)
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Credentials', 'true')
    .query({
      api_key: config.authKey,
      limit,
      offset,
      format: 'json',
      sort: 'cover_date:desc'
    });

  return response.body;
};

export const getComic = async (comicID) => {
  const response = await request.get(`${CORSProxy}${config.baseUrl}/issue/${comicID}`)
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Credentials', 'true')
    .query({
      api_key: config.authKey,
      format: 'json'
    });

  return response.body;
};
