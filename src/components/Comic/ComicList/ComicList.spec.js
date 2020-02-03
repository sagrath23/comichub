import React from 'react';
import { mockStore, renderComponent} from '../../../utils/test';
import PokemonList from './PokemonList';

describe('PokemonList component', () => {
  test('should render the component with default props', () => {
    const { getByTestId } = renderComponent(mockStore(), <PokemonList />);

    expect(getByTestId('pokemon-list-next-button')).toBeDefined();
    expect(getByTestId('pokemon-list-prev-button')).toBeDefined();
  });

  test('should render the list with one element', () => {
    const { getByTestId } = renderComponent(mockStore({
      currentPokemonList: {
        results: [{
          name: 'pikachu',
          url: 'https://pokeapi.co/api/v2/pokemon/25/'
        }]
      }
    }), <PokemonList />);

    expect(getByTestId('pokemon-list-item-0')).toBeDefined();
  });
});
