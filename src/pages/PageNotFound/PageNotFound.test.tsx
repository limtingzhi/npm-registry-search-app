/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import PageNotFound from './PageNotFound';

describe('PageNotFound', () => {
  test('should match snapshot with default state', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
