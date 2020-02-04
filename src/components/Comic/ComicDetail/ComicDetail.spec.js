import React from 'react';
import { mockStore, renderComponent} from '../../../utils/test';
import ComicDetail from './ComicDetail';

describe('ComicDetail component', () => {
  test('should render the component with default props', () => {
    const { getByTestId } = renderComponent(mockStore(), <ComicDetail />);

    expect(getByTestId('pokemon-name')).toBeDefined();
  });
});
