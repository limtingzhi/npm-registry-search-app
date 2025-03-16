/**
 * @jest-environment jsdom
 */

import { renderHook, waitFor } from '@testing-library/react';
import { getPackageDetails } from '../../api/npmRegistry';
import { mockPackageObj } from '../../fixtures/packageDetails.fixture';
import usePackageDetails from './usePackageDetails';

jest.mock('../../api/npmRegistry');

describe('usePackageDetails', () => {
  test('should fetch package details successfully', async () => {
    (getPackageDetails as jest.Mock).mockResolvedValue(mockPackageObj);

    const { result } = renderHook(() => usePackageDetails({ packageName: 'react' }));

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.packageDetails).toEqual(mockPackageObj);
    expect(result.current.errorMsg).toBeNull();
    expect(getPackageDetails).toHaveBeenCalledWith('react');
  });

  test('should show error message on API errors', async () => {
    (getPackageDetails as jest.Mock).mockRejectedValue(new Error('API Error'));

    const { result } = renderHook(() => usePackageDetails({ packageName: 'react' }));

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.packageDetails).toBeNull();
    expect(result.current.errorMsg).toBe('API Error');
    expect(getPackageDetails).toHaveBeenCalledWith('react');
  });

  test('should show error message on missing package name', async () => {
    const { result } = renderHook(() => usePackageDetails({ packageName: null }));

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.packageDetails).toBeNull();
    expect(result.current.errorMsg).toBe('Package name is missing.');
    expect(getPackageDetails).not.toHaveBeenCalled();
  });
});
