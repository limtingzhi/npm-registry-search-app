import fetchMock from 'jest-fetch-mock';
import { mockPackageObj } from '../fixtures/packageDetails.fixture';
import { mockSearchPackagesResponse } from '../fixtures/searchPackages.fixture';
import { getPackageDetails, getPackages } from './npmRegistry';

fetchMock.enableMocks();

describe('npmRegistry', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  describe('getPackages', () => {
    test('should fetch packages successfully', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(mockSearchPackagesResponse));

      const packages = await getPackages('react', 0);

      expect(packages).toEqual(mockSearchPackagesResponse);
      expect(fetchMock).toHaveBeenCalledWith(
        `https://registry.npmjs.org/-/v1/search?text=react&size=50&from=0`,
        { method: 'GET' },
      );
    });

    test('should handle pagination correctly', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(mockSearchPackagesResponse));

      await getPackages('react', 1);

      expect(fetchMock).toHaveBeenCalledWith(
        `https://registry.npmjs.org/-/v1/search?text=react&size=50&from=50`,
        { method: 'GET' },
      );
    });

    test('should encode search input', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(mockSearchPackagesResponse));

      await getPackages('@types/react', 0);

      expect(fetchMock).toHaveBeenCalledWith(
        `https://registry.npmjs.org/-/v1/search?text=%40types%2Freact&size=50&from=0`,
        { method: 'GET' },
      );
    });

    test('should throw error on non-200 response', async () => {
      fetchMock.mockResponseOnce('Not Found', { status: 404 });

      const res = getPackages('nonexistent-package', 0);
      const error = 'Failed to load search results. Please try again.';

      await expect(res).rejects.toThrow(error);
    });

    test('should throw error on fetch failure', async () => {
      fetchMock.mockReject(new Error('Network error'));

      const res = getPackages('react', 0);
      const error = 'Failed to load search results. Please try again.';

      await expect(res).rejects.toThrow(error);
    });
  });

  describe('getPackageDetails', () => {
    test('should fetch package details successfully', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(mockPackageObj));

      const details = await getPackageDetails('react');

      expect(details).toEqual(mockPackageObj);
      expect(fetchMock).toHaveBeenCalledWith(
        `https://registry.npmjs.org/react`,
        { method: 'GET' },
      );
    });

    test('should encode package name', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(mockPackageObj));

      await getPackageDetails('@types/react');

      expect(fetchMock).toHaveBeenCalledWith(
        `https://registry.npmjs.org/%40types%2Freact`,
        { method: 'GET' },
      );
    });

    test('should throw error on 404 response', async () => {
      fetchMock.mockResponseOnce('Not Found', { status: 404 });

      const res = getPackageDetails('nonexistent-package');
      const error = 'Package \'nonexistent-package\' not found. Please check the package name and try again.';

      await expect(res).rejects.toThrow(error);
    });

    test('should throw error on non-200 and not 404 response', async () => {
      fetchMock.mockResponseOnce('Internal Server Error', { status: 500 });

      const res = getPackageDetails('react');
      const error = 'Failed to load package details. Please try again.';

      await expect(res).rejects.toThrow(error);
    });

    test('should throw error on fetch failure', async () => {
      fetchMock.mockReject(new Error('Network error'));

      const res = getPackageDetails('react');
      const error = 'Failed to load package details. Please try again.';

      await expect(res).rejects.toThrow(error);
    });
  });
});
