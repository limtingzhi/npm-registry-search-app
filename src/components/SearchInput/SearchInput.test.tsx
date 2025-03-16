/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  const mockSearchPackages = jest.fn();

  test('should render search input and button', () => {
    render(<SearchInput searchPackages={mockSearchPackages} />);

    expect(screen.getByPlaceholderText('Search packages')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  test('should update search input value on change', () => {
    render(<SearchInput searchPackages={mockSearchPackages} />);

    const input = screen.getByPlaceholderText('Search packages');

    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: 'react' } });

    expect(input).toHaveValue('react');
  });

  test('should call searchPackages with correct input on button click', () => {
    render(<SearchInput searchPackages={mockSearchPackages} />);

    const input = screen.getByPlaceholderText('Search packages');

    fireEvent.change(input, { target: { value: 'react' } });

    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    expect(mockSearchPackages).toHaveBeenCalledWith(0, 'react');
  });
});
