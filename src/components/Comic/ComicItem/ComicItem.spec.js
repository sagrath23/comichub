import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ComicItem from './ComicItem';

describe('ComicItem component', () => {
  test('should render with default props', () => {
    const { getByTestId } = render(<MemoryRouter><ComicItem /></MemoryRouter>);

    expect(getByTestId('comic-list-item-0')).toBeDefined();
  });
});