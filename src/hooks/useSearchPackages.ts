import { useCallback, useState } from 'react';
import { getPackages } from '../api/npmRegistry';
import { SearchPackageObj } from '../typings/npm-registry';

interface UseSearch {
  errorMsg: string | null;
  isLoading: boolean;
  noOfResults: number | null;
  searchInput: string;
  searchPackages: (page: number) => void;
  searchResults: SearchPackageObj[] | null;
  setSearchInput: (searchInput: string) => void;
}

function useSearchPackages(): UseSearch {
  const [searchInput, setSearchInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<SearchPackageObj[] | null>(null);
  const [noOfResults, setNoOfResults] = useState<number | null>(null);

  const searchPackages = useCallback(async (page: number) => {
    const trimmedSearchInput = searchInput.trim();

    if (trimmedSearchInput === '') {
      setErrorMsg('Please enter a search term.');
      return;
    }

    setIsLoading(true);
    setErrorMsg(null);

    if (page === 0) {
      setSearchResults([]);
      setNoOfResults(0);
    }

    try {
      const result = await getPackages(trimmedSearchInput, page);

      setSearchResults(result.objects);
      setNoOfResults(result.total);
    } catch (error: any) {
      setErrorMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [searchInput]);

  return {
    errorMsg,
    isLoading,
    noOfResults,
    searchInput,
    searchPackages,
    searchResults,
    setSearchInput,
  };
}

export default useSearchPackages;
