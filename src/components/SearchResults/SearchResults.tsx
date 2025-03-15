import { Box } from '@mui/material';
import { SearchPackage } from '../../typings/npm-registry';

interface Props {
  searchResults: SearchPackage[] | null;
}

function SearchResults(props: Props) {
  const { searchResults } = props;

  if (searchResults === null) {
    return;
  }

  if (searchResults.length === 0) {
    return <Box>No results found</Box>;
  }

  return (
    <Box>
      {searchResults.map(r => (
        <Box key={r.package.name}>
          <Box>{r.package.name}</Box>
          <Box>{r.package.publisher.username}</Box>
          <Box>{r.package.date}</Box>
        </Box>
      ))}
    </Box>
  );
}

export default SearchResults;
