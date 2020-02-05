import { OK } from 'http-status-code';
import nock from 'nock';
import { getComic, listComics } from './comicAPIService';
import config from '../config';

describe('ComicVine API Services', () => {
  describe('listComics service', () => {
    const comicList = {
      count: 964,
      next: 'https://pokeapi.co/api/v2/Comic/?offset=20&limit=20',
      previous:null,
      results: []
    };
    const limit = 20;
    const offset = 0;

    beforeEach(() => {
      nock(`https://cors-anywhere.herokuapp.com/${config.baseUrl}`)
        .get('/issues')
        .reply(OK, comicList);
    });

    test('should retrieve a list of Comics', async () => {
      const response = await listComics(limit, offset);

      expect(response).toEqual(comicList);
    });
  });
  
  describe('getComic service', () => {
    const ComicName = 'pikachu';
    const ComicDetail = {
      id: 24,
      height: 4,
      name: ComicName
     };

    beforeEach(() => {
      nock(`https://cors-anywhere.herokuapp.com/${config.baseUrl}`)
        .get(`/issue/${ComicName}`)
        .reply(OK, ComicDetail);
    });

    test('should retrieve the info of a specific Comic', async () => {
      const response = await getComic(ComicName);

      expect(response).toEqual(ComicDetail);
    });
  });
});
