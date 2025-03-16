/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { mockSearchPackageObjs } from '../../fixtures/searchPackages.fixture';
import useSearchPackages from '../../hooks/useSearchPackages/useSearchPackages';
import SearchPackages from './SearchPackages';

jest.mock('../../hooks/useSearchPackages/useSearchPackages');

describe('SearchPackages', () => {
  test('should match snapshot with default state', () => {
    const mockUseSearchPackages = {
      errorMsg: null,
      isLoading: false,
      noOfResults: 200,
      searchPackages: jest.fn(),
      searchResults: mockSearchPackageObjs,
    };

    (useSearchPackages as jest.Mock).mockReturnValue(mockUseSearchPackages);

    const { asFragment } = render(
      <MemoryRouter>
        <SearchPackages />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('should match snapshot with no search results', () => {
    const mockUseSearchPackages = {
      errorMsg: null,
      isLoading: false,
      noOfResults: 0,
      searchPackages: jest.fn(),
      searchResults: [],
    };

    (useSearchPackages as jest.Mock).mockReturnValue(mockUseSearchPackages);

    const { asFragment } = render(
      <MemoryRouter>
        <SearchPackages />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('should match snapshot with loading state', () => {
    const mockUseSearchPackages = {
      errorMsg: null,
      isLoading: true,
      noOfResults: 0,
      searchPackages: jest.fn(),
      searchResults: [],
    };

    (useSearchPackages as jest.Mock).mockReturnValue(mockUseSearchPackages);

    const { asFragment } = render(
      <MemoryRouter>
        <SearchPackages />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('should match snapshot with error state', () => {
    const mockUseSearchPackages = {
      errorMsg: 'Please enter a search term.',
      isLoading: false,
      noOfResults: null,
      searchPackages: jest.fn(),
      searchResults: null,
    };

    (useSearchPackages as jest.Mock).mockReturnValue(mockUseSearchPackages);

    const { asFragment } = render(
      <MemoryRouter>
        <SearchPackages />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
