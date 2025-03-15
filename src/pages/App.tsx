import { Container } from '@mui/material';
import SearchInput from '../components/SearchInput/SearchInput';
import useSearchPackages from '../hooks/useSearchPackages';

function App() {
  const { searchPackages } = useSearchPackages();

  return (
    <Container>
      <SearchInput searchPackages={searchPackages} />
    </Container>
  );
}

export default App;
