import React from 'react';
import { mockStore, renderComponent} from '../../../utils/test';
import PokemonDetail from './PokemonDetail';

describe('PokemonDetail component', () => {
  test('should render the component with default props', () => {
    const { getByTestId } = renderComponent(mockStore(), <PokemonDetail />);

    expect(getByTestId('pokemon-name')).toBeDefined();
  });
});
