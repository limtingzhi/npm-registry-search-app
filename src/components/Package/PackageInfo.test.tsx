/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import PackageInfo from './PackageInfo';

describe('PackageInfo', () => {
  test('should render package info correctly', () => {
    render(<PackageInfo title="Author" body="Test Author" />);

    expect(screen.getByText('Author')).toBeInTheDocument();
    expect(screen.getByText('Test Author')).toBeInTheDocument();
  });
});
