import { useState, useCallback } from 'react';
import { Package } from '../typings/package';

interface UseSearch {
  errorMsg: string | null;
  isLoading: boolean;
  searchPackages: (searchInput: string) => void;
  searchResults: Package[];
}

function useSearchPackages(): UseSearch {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<Package[]>([]);

  const searchPackages = useCallback(async (searchInput: string) => {
    const trimmedSearchInput = searchInput.trim();

    if (trimmedSearchInput === '') {
      setErrorMsg('Please enter a search term.');
      return;
    }

    setIsLoading(true);
    setErrorMsg(null);
    setSearchResults([]);

    try {
      // TODO: Call API and setSearchResults
      console.log(trimmedSearchInput);
      setSearchResults([]);
    } catch (error: any) {
      setErrorMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, errorMsg, searchResults, searchPackages };
}

export default useSearchPackages;
