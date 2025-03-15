import { Alert, Container, Stack } from '@mui/material';
import SearchInput from '../components/SearchInput/SearchInput';
import useSearchPackages from '../hooks/useSearchPackages';

function App() {
  const { errorMsg, searchPackages } = useSearchPackages();

  return (
    <Container>
      <Stack spacing={3}>
        <SearchInput searchPackages={searchPackages} />
        {errorMsg && <Alert severity="error" variant="filled">{errorMsg}</Alert>}
      </Stack>
    </Container>
  );
}

export default App;
