/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { mockPackageObj } from '../../fixtures/packageDetails.fixture';
import usePackageDetails from '../../hooks/usePackageDetails/usePackageDetails';
import PackageDetails from './PackageDetails';

jest.mock('react-markdown', () => ({ children }: any) => (
  <div data-testid="react-markdown">{children}</div>
));
jest.mock('../../hooks/usePackageDetails/usePackageDetails');

describe('PackageDetails', () => {
  test('should match snapshot with default state', () => {
    const mockUsePackageDetails = {
      errorMsg: null,
      isLoading: false,
      packageDetails: mockPackageObj,
    };

    (usePackageDetails as jest.Mock).mockReturnValue(mockUsePackageDetails);

    const { asFragment } = render(
      <MemoryRouter initialEntries={['/package/react']}>
        <Routes>
          <Route path="/package/:name" element={<PackageDetails />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('should match snapshot with loading state', () => {
    const mockUsePackageDetails = {
      errorMsg: null,
      isLoading: true,
      packageDetails: null,
    };

    (usePackageDetails as jest.Mock).mockReturnValue(mockUsePackageDetails);

    const { asFragment } = render(
      <MemoryRouter initialEntries={['/package/react']}>
        <Routes>
          <Route path="/package/:name" element={<PackageDetails />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('should match snapshot with error message', () => {
    const mockUsePackageDetails = {
      errorMsg: 'Package not found',
      isLoading: false,
      packageDetails: null,
    };

    (usePackageDetails as jest.Mock).mockReturnValue(mockUsePackageDetails);

    const { asFragment } = render(
      <MemoryRouter initialEntries={['/package/react']}>
        <Routes>
          <Route path="/package/:name" element={<PackageDetails />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
