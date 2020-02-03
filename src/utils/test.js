import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

const mockStore = (state) => {
  const defaultState = {
    detailedPokemon: {},
    currentPokemonList: {
      results: []
    },
    ...state
  };

  return {
    getState: jest.fn().mockReturnValue(defaultState),
    subscribe: jest.fn(),
    dispatch: jest.fn()
  };
};

const renderComponent = (store, component, entries) => render(
  <Provider store={store}>
    <MemoryRouter initialEntries={entries}>
      {component}
    </MemoryRouter>
  </Provider>
);

export {
  mockStore,
  renderComponent
};
