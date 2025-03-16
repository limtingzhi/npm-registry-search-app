/**
 * @jest-environment jsdom
 */

import { act, renderHook, waitFor } from '@testing-library/react';
import { getPackages } from '../../api/npmRegistry';
import { mockSearchPackagesResponse } from '../../fixtures/searchPackages.fixture';
import useSearchPackages from './useSearchPackages';

jest.mock('../../api/npmRegistry');

describe('useSearchPackages', () => {
  test('should fetch search results successfully', async () => {
    (getPackages as jest.Mock).mockResolvedValue(mockSearchPackagesResponse);

    const { result } = renderHook(() => useSearchPackages());

    await act(async () => {
      result.current.searchPackages(0, 'react');
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.searchResults).toEqual(mockSearchPackagesResponse.objects);
    expect(result.current.noOfResults).toBe(mockSearchPackagesResponse.total);
    expect(result.current.errorMsg).toBeNull();
    expect(getPackages).toHaveBeenCalledWith('react', 0);
  });

  test('should trim search input', async () => {
    (getPackages as jest.Mock).mockResolvedValue(mockSearchPackagesResponse);

    const { result } = renderHook(() => useSearchPackages());

    await act(async () => {
      result.current.searchPackages(0, '  react  ');
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(getPackages).toHaveBeenCalledWith('react', 0);
  });

  test('should use searchInput state value if no input is provided', async () => {
    (getPackages as jest.Mock).mockResolvedValue(mockSearchPackagesResponse);

    const { result } = renderHook(() => useSearchPackages());

    await act(async () => {
      result.current.searchPackages(0, '  react  ');
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(getPackages).toHaveBeenCalledWith('react', 0);

    await act(async () => {
      result.current.searchPackages(1);
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(getPackages).toHaveBeenCalledWith('react', 1);
  });

  test('should reset search results and no of results when page is 0', async () => {
    (getPackages as jest.Mock).mockRejectedValue(new Error('API Error'));

    const { result } = renderHook(() => useSearchPackages());

    expect(result.current.searchResults).toBe(null);
    expect(result.current.noOfResults).toBe(null);

    await act(async () => {
      result.current.searchPackages(0, 'react');
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.searchResults).toStrictEqual([]);
    expect(result.current.noOfResults).toBe(0);
    expect(getPackages).toHaveBeenCalledWith('react', 0);
  });

  test('should show error message on API errors', async () => {
    (getPackages as jest.Mock).mockRejectedValue(new Error('API Error'));

    const { result } = renderHook(() => useSearchPackages());

    await act(async () => {
      result.current.searchPackages(0, 'react');
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.searchResults).toStrictEqual([]);
    expect(result.current.noOfResults).toBe(0);
    expect(result.current.errorMsg).toBe('API Error');
    expect(getPackages).toHaveBeenCalledWith('react', 0);
  });

  test('should show error message on empty search input', async () => {
    const { result } = renderHook(() => useSearchPackages());

    await act(async () => {
      result.current.searchPackages(0, '');
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.searchResults).toBeNull();
    expect(result.current.noOfResults).toBeNull();
    expect(result.current.errorMsg).toBe('Please enter a search term.');
    expect(getPackages).not.toHaveBeenCalled();
  });
});
