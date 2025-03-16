import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import { useCallback, useState } from 'react';
import { SEARCH_PACKAGES_PER_PAGE } from '../../constants/searchConstants';
import { SearchPackageObj } from '../../typings/npm-registry';

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
      valueFormatter: (_value, row) =>
        new Intl.DateTimeFormat('en-SG', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
          timeZone: 'Asia/Singapore',
        }).format(new Date(row.package.date)),
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
