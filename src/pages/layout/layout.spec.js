import React from 'react';
import { mockStore, renderComponent} from '../../utils/test';
import Layout from './layout';

describe('Layout page Component test', () => {
  test('should render the component with default props', () => {
    const { container } = renderComponent(mockStore(), <Layout />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render the PokemonList Component', () => {
    const { container } = renderComponent(mockStore(), <Layout />, [{ pathname: '/pokemons', key: 'pokemons' }]);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render the PokemonDetail Component', () => {
    const { container } = renderComponent(mockStore(), <Layout />, [{ pathname: '/pokemons/pikachu', key: 'pokemons' }]);

    expect(container.firstChild).toMatchSnapshot();
  });
});
