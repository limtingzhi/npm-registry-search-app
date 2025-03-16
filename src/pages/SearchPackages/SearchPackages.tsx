import { Alert, Container, Stack } from '@mui/material';
import SearchInput from '../../components/SearchInput/SearchInput';
import SearchResults from '../../components/SearchResults/SearchResults';
import useSearchPackages from '../../hooks/useSearchPackages/useSearchPackages';

function SearchPackages() {
  const { errorMsg, isLoading, noOfResults, searchPackages, searchResults } = useSearchPackages();

  return (
    <Container sx={{ paddingY: 3 }}>
      <Stack spacing={3}>
        <SearchInput searchPackages={searchPackages} />
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
