import { useCallback, useState } from 'react';
import { getPackages } from '../api/npmRegistry';
import { SearchPackage } from '../typings/npm-registry';

interface UseSearch {
  errorMsg: string | null;
  isLoading: boolean;
  searchPackages: (searchInput: string, page: number) => void;
  searchResults: SearchPackage[] | null;
}

function useSearchPackages(): UseSearch {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<SearchPackage[] | null>(null);

  const searchPackages = useCallback(async (searchInput: string, page: number) => {
    const trimmedSearchInput = searchInput.trim();

    if (trimmedSearchInput === '') {
      setErrorMsg('Please enter a search term.');
      return;
    }

    setIsLoading(true);
    setErrorMsg(null);
    setSearchResults(null);

    try {
      const result = await getPackages(trimmedSearchInput, page);

      setSearchResults(result.objects);
    } catch (error: any) {
      setErrorMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, errorMsg, searchResults, searchPackages };
}

export default useSearchPackages;
