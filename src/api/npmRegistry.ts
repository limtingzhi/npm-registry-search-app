import { SEARCH_PACKAGES_PER_PAGE } from '../constants/searchConstants';
import { PackageObj, SearchPackagesResponse } from '../typings/npm-registry';

const NPM_REGISTRY_API_URL = 'https://registry.npmjs.org';

async function getPackages(searchInput: string, page: number): Promise<SearchPackagesResponse> {
  const encodedQuery = encodeURIComponent(searchInput);
  const offsetNoOfResults = page * SEARCH_PACKAGES_PER_PAGE;
  const url = `${NPM_REGISTRY_API_URL}/-/v1/search?text=${encodedQuery}&size=${SEARCH_PACKAGES_PER_PAGE}&from=${offsetNoOfResults}`;
  const options = { method: 'GET' };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(
        `Error getting packages: ${response.status} ${response.statusText}`,
      );
    }

    return await response.json();
  } catch {
    throw new Error('Failed to load search results. Please try again.');
  }
}

async function getPackageDetails(packageName: string): Promise<PackageObj> {
  const encodedPackageName = encodeURIComponent(packageName);
  const url = `${NPM_REGISTRY_API_URL}/${encodedPackageName}`;
  const options = { method: 'GET' };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(
        `Error getting package details: ${response.status} ${response.statusText}`,
      );
    }

    return await response.json();
  } catch (error: any) {
    if (error.message.includes('404')) {
      throw new Error(
        `Package '${packageName}' not found. Please check the package name and try again.`,
      );
    }

    throw new Error('Failed to load package details. Please try again.');
  }
}

export {
  getPackages,
  getPackageDetails,
};
