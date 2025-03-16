/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { mockSearchPackageObjs } from '../../fixtures/searchPackages.fixture';
import { SearchPackageObj } from '../../typings/npm-registry';
import { formatDate } from '../../utils/formats';
import SearchResults from './SearchResults';

jest.mock('../../utils/formats');

describe('SearchResults', () => {
  const mockSearchPackages = jest.fn();
  const mockSearchResults: SearchPackageObj[] = mockSearchPackageObjs;

  test('should render data grid with correct columns and rows', () => {
    (formatDate as jest.Mock).mockReturnValue('Mocked Date');

    render(
      <MemoryRouter>
        <SearchResults
          isLoading={false}
          noOfResults={200}
          searchPackages={mockSearchPackages}
          searchResults={mockSearchResults}
        />
      </MemoryRouter>,
    );

    expect(screen.getByText('Package Name')).toBeInTheDocument();
    expect(screen.getByText('react')).toBeInTheDocument();
    expect(screen.getByText('react-router')).toBeInTheDocument();

    expect(screen.getByText('Author Username')).toBeInTheDocument();
    expect(screen.getByText('react-bot')).toBeInTheDocument();
    expect(screen.getByText('mjackson')).toBeInTheDocument();

    expect(screen.getByText('Last Updated')).toBeInTheDocument();
    expect(formatDate).toHaveBeenCalledTimes(2);
    expect(formatDate).toHaveBeenCalledWith('2024-12-05T18:10:21.804Z');
    expect(formatDate).toHaveBeenCalledWith('2025-03-06T20:45:45.890Z');
    expect(screen.getAllByText('Mocked Date').length).toBe(2);

    expect(screen.getByText('Actions')).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'View Details' }).length).toBe(2);

    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', '/package/react');
    expect(links[1]).toHaveAttribute('href', '/package/react-router');

    expect(screen.getByText('1–50 of 200')).toBeInTheDocument();
  });

  test('should encode the package name in the link', () => {
    render(
      <MemoryRouter>
        <SearchResults
          isLoading={false}
          noOfResults={200}
          searchPackages={mockSearchPackages}
          searchResults={[
            {
              ...mockSearchResults[0],
              package: { ...mockSearchResults[0].package, name: '@types/react' },
            },
          ]}
        />
      </MemoryRouter>,
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/package/%40types%2Freact');
  });

  test('should render loading state successfully', () => {
    render(
      <MemoryRouter>
        <SearchResults
          isLoading
          noOfResults={200}
          searchPackages={mockSearchPackages}
          searchResults={mockSearchResults}
        />
      </MemoryRouter>,
    );

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test('should handle pagination change successfully', () => {
    render(
      <MemoryRouter>
        <SearchResults
          isLoading={false}
          noOfResults={200}
          searchPackages={mockSearchPackages}
          searchResults={mockSearchResults}
        />
      </MemoryRouter>,
    );

    const paginationButton = screen.getByRole('button', { name: /Go to next page/i });

    fireEvent.click(paginationButton);

    expect(mockSearchPackages).toHaveBeenCalledWith(1);
  });

  test('should render nothing when noOfResults is null', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchResults
          isLoading={false}
          noOfResults={null}
          searchPackages={mockSearchPackages}
          searchResults={mockSearchResults}
        />
      </MemoryRouter>,
    );

    expect(container.firstChild).toBeNull();
  });

  test('should render nothing when searchResults is null', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchResults
          isLoading={false}
          noOfResults={200}
          searchPackages={mockSearchPackages}
          searchResults={null}
        />
      </MemoryRouter>,
    );

    expect(container.firstChild).toBeNull();
  });
});
