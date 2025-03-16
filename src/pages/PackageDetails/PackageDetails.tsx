import { Alert, Container, Skeleton, Stack } from '@mui/material';
import { useParams } from 'react-router';
import Package from '../../components/Package/Package';
import usePackageDetails from '../../hooks/usePackageDetails/usePackageDetails';

function PackageDetails() {
  const { name } = useParams<{ name: string; }>();

  const { errorMsg, isLoading, packageDetails } = usePackageDetails({ packageName: name ?? null });

  return (
    <Container sx={{ paddingY: 3 }}>
      <Stack spacing={3}>
        {isLoading && (
          <Stack spacing={2}>
            <Skeleton height={100} />
            <Skeleton />
            <Skeleton />
          </Stack>
        )}
        {errorMsg && (
          <Alert severity="error" variant="filled">
            {errorMsg}
          </Alert>
        )}
        <Package packageDetails={packageDetails} />
      </Stack>
    </Container>
  );
}

export default PackageDetails;
