import { Button, OutlinedInput, Stack } from '@mui/material';
import { useState } from 'react';

interface Props {
  searchPackages: (searchInput: string) => void;
}

function SearchInput(props: Props) {
  const { searchPackages } = props;

  const [searchInput, setSearchInput] = useState<string>('');

  return (
    <Stack direction="row" spacing={2}>
      <OutlinedInput
        id="searchInput"
        name="searchInput"
        onChange={e => setSearchInput(e.target.value)}
        placeholder="Search packages"
        sx={{ flexGrow: 1 }}
        value={searchInput}
      />
      <Button
        disableElevation
        onClick={() => searchPackages(searchInput)}
        type="submit"
        variant="contained"
      >
        Search
      </Button>
    </Stack>
  );
}

export default SearchInput;
