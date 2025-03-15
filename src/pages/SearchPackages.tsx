import { Alert, Container, Stack } from '@mui/material';
import SearchInput from '../components/SearchInput/SearchInput';
import SearchResults from '../components/SearchResults/SearchResults';
import useSearchPackages from '../hooks/useSearchPackages';

function SearchPackages() {
  const { errorMsg, searchResults, searchPackages } = useSearchPackages();

  return (
    <Container>
      <Stack spacing={3}>
        <SearchInput searchPackages={searchPackages} />
        {errorMsg && <Alert severity="error" variant="filled">{errorMsg}</Alert>}
        <SearchResults searchResults={searchResults} />
      </Stack>
    </Container>
  );
}

export default SearchPackages;
