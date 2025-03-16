import { Button, OutlinedInput, Stack } from '@mui/material';

interface Props {
  searchInput: string;
  searchPackages: (page: number) => void;
  setSearchInput: (searchInput: string) => void;
}

function SearchInput(props: Props) {
  const { searchInput, searchPackages, setSearchInput } = props;

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
        onClick={() => searchPackages(0)}
        type="submit"
        variant="contained"
      >
        Search
      </Button>
    </Stack>
  );
}

export default SearchInput;
