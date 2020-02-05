import React from 'react';
import { mockStore, renderComponent} from '../../../utils/test';
import ComicList from './ComicList';

describe('ComicList component', () => {
  test('should render the component with default props', () => {
    const { getByTestId } = renderComponent(mockStore({
      comicList: {
        list: []
      }
    }), <ComicList />);

    expect(getByTestId('comic-list-next-button')).toBeDefined();
    expect(getByTestId('comic-list-prev-button')).toBeDefined();
  });

  test('should render the list with one element', () => {
    const { getByTestId } = renderComponent(mockStore({
      comicList: {
        list: [{
          api_detail_url: 'https://comicvine.co/api/123/',
          id: 123,
          image: {
            original_url: 'https://url-to-source/cover.jpeg'
          },
          name: 'The Amazing Spiderman',
          volume: {
            name: 'The Amazing Spiderman'
          }
        }]
      }
    }), <ComicList />);

    expect(getByTestId('comic-list-item-0')).toBeDefined();
  });
});
