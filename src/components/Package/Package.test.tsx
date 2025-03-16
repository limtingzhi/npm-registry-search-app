/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { mockPackageObj } from '../../fixtures/packageDetails.fixture';
import { PackageObj } from '../../typings/npm-registry';
import { formatDate } from '../../utils/formats';
import Package from './Package';

jest.mock('react-markdown', () => ({ children }: any) => (
  <div data-testid="react-markdown">{children}</div>
));
jest.mock('../../utils/formats');

describe('Package', () => {
  test('should render package details correctly', () => {
    (formatDate as jest.Mock).mockReturnValue('Mocked Date');

    render(<Package packageDetails={mockPackageObj} />);

    expect(formatDate).toHaveBeenCalledWith('2025-03-14T16:20:32.224Z');

    expect(screen.getByText('react')).toBeInTheDocument();
    expect(screen.getByText('Test Author')).toBeInTheDocument();
    expect(
      screen.getByText('React is a JavaScript library for building user interfaces.'),
    ).toBeInTheDocument();
    expect(screen.getByText('Mocked Date')).toBeInTheDocument();
    expect(screen.getByText('MIT')).toBeInTheDocument();
    expect(screen.getByText('19.0.0')).toBeInTheDocument();
    expect(screen.getByTestId('react-markdown')).toHaveTextContent('# Test README');
  });

  test('should display fallback values when package details are missing', () => {
    render(<Package packageDetails={{} as PackageObj} />);

    expect(formatDate).not.toHaveBeenCalled();

    expect(screen.getByText('Someone')).toBeInTheDocument();
    expect(screen.getByText('No description available')).toBeInTheDocument();
    expect(screen.getByText('No last updated date available')).toBeInTheDocument();
    expect(screen.getByText('No license available')).toBeInTheDocument();
    expect(screen.getByText('No version available')).toBeInTheDocument();
    expect(screen.getByTestId('react-markdown')).toHaveTextContent('No README available');
  });

  test('should render nothing when packageDetails is null', () => {
    const { container } = render(<Package packageDetails={null} />);

    expect(container.firstChild).toBeNull();
  });
});
