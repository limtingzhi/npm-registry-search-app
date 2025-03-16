import { Alert, Container, Stack } from '@mui/material';
import SearchInput from '../components/SearchInput/SearchInput';
import SearchResults from '../components/SearchResults/SearchResults';
import useSearchPackages from '../hooks/useSearchPackages';

function SearchPackages() {
  const {
    errorMsg, isLoading, noOfResults, searchInput, searchPackages, searchResults, setSearchInput,
  } = useSearchPackages();

  return (
    <Container>
      <Stack spacing={3}>
        <SearchInput
          searchInput={searchInput}
          searchPackages={searchPackages}
          setSearchInput={setSearchInput}
        />
        {errorMsg && (
          <Alert severity="error" variant="filled">
            {errorMsg}
          </Alert>
        )}
        <SearchResults
          isLoading={isLoading}
          noOfResults={noOfResults}
          searchPackages={searchPackages}
          searchResults={searchResults}
        />
      </Stack>
    </Container>
  );
}

export default SearchPackages;
