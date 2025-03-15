import { Box } from '@mui/material';
import { SearchPackage } from '../../typings/npm-registry';

interface Props {
  searchResults: SearchPackage[];
}

function SearchResults(props: Props) {
  const { searchResults } = props;

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
