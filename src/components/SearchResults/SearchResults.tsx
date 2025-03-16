import { Box, Button } from '@mui/material';
import { DataGrid, GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import { useCallback, useState } from 'react';
import { Link } from 'react-router';
import { SEARCH_PACKAGES_PER_PAGE } from '../../constants/searchConstants';
import { SearchPackageObj } from '../../typings/npm-registry';
import { formatDate } from '../../utils/formats';

interface Props {
  isLoading: boolean;
  noOfResults: number | null;
  searchPackages: (page: number) => void;
  searchResults: SearchPackageObj[] | null;
}

function SearchResults(props: Props) {
  const { isLoading, noOfResults, searchPackages, searchResults } = props;

  const [page, setPage] = useState(0);

  const onPaginationModelChange = useCallback((newModel: GridPaginationModel) => {
    setPage(newModel.page);
    searchPackages(newModel.page);
  }, [searchPackages]);

  if (searchResults === null || noOfResults === null) {
    return;
  }

  const columns: GridColDef[] = [
    {
      field: 'packageName',
      headerName: 'Package Name',
      minWidth: 300,
      valueGetter: (_value, row) => row.package.name,
    },
    {
      field: 'authorUsername',
      headerName: 'Author Username',
      minWidth: 300,
      valueGetter: (_value, row) => row.package.publisher.username,
    },
    {
      field: 'lastUpdated',
      headerName: 'Last Updated',
      minWidth: 200,
      type: 'dateTime',
      valueFormatter: (_value, row) => formatDate(row.package.date),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      minWidth: 150,
      renderCell: params => (
        <Button
          component={Link}
          disableElevation
          to={`/package/${encodeURIComponent(params.id)}`}
          variant="contained"
        >
          View Details
        </Button>
      ),
    },
  ];

  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        columns={columns}
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
        disableColumnSorting
        disableDensitySelector
        disableEval
        disableMultipleRowSelection
        disableRowSelectionOnClick
        getRowId={row => row.package.name}
        loading={isLoading}
        onPaginationModelChange={onPaginationModelChange}
        pageSizeOptions={[SEARCH_PACKAGES_PER_PAGE]}
        pagination
        paginationMode="server"
        paginationModel={{ page, pageSize: SEARCH_PACKAGES_PER_PAGE }}
        rowCount={noOfResults}
        rows={searchResults}
      />
    </Box>
  );
}

export default SearchResults;
