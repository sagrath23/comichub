import React from 'react';
import { mockStore, renderComponent} from '../../../utils/test';
import ComicList from './ComicList';

describe('ComicList component', () => {
  test('should render the component with default props', () => {
    const { getByTestId } = renderComponent(mockStore(), <ComicList />);

    expect(getByTestId('pokemon-list-next-button')).toBeDefined();
    expect(getByTestId('pokemon-list-prev-button')).toBeDefined();
  });

  test('should render the list with one element', () => {
    const { getByTestId } = renderComponent(mockStore({
      currentComicList: {
        results: [{
          name: 'pikachu',
          url: 'https://pokeapi.co/api/v2/pokemon/25/'
        }]
      }
    }), <ComicList />);

    expect(getByTestId('pokemon-list-item-0')).toBeDefined();
  });
});
