import { Divider, Grid2 as Grid, Stack, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { PackageObj } from '../../typings/npm-registry';
import { formatDate } from '../../utils/formats';
import PackageInfo from './PackageInfo';

interface Props {
  packageDetails: PackageObj | null;
}

function Package(props: Props) {
  const { packageDetails } = props;

  if (packageDetails === null) {
    return;
  }

  const lastUpdatedDate = packageDetails.time != null
    ? formatDate(packageDetails.time.modified)
    : 'No last updated date available';

  return (
    <Stack direction="column" spacing={2}>
      <Typography gutterBottom variant="h4">
        {packageDetails.name}
      </Typography>
      <Divider />
      <Grid
        columns={12}
        container
        direction={{ xs: 'column', md: 'row-reverse' }}
        spacing={5}
      >
        <Grid
          container
          direction="column"
          gap={3}
          marginTop="20px"
          size={{ xs: 12, md: 4 }}
        >
          <PackageInfo
            title="Author"
            body={packageDetails.author?.name || 'Someone'}
          />
          <PackageInfo
            title="Description"
            body={packageDetails?.description || 'No description available'}
          />
          <PackageInfo
            title="Last Updated"
            body={lastUpdatedDate}
          />
          <PackageInfo
            title="License"
            body={packageDetails.license || 'No license specified'}
          />
          <PackageInfo
            title="Version"
            body={packageDetails['dist-tags'].latest}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <ReactMarkdown
            children={packageDetails.readme || 'No README available'}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Package;
