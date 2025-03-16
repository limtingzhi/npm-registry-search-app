import { Box, Typography } from '@mui/material';

interface Props {
  body: string;
  title: string;
}

function PackageInfo(props: Props) {
  const { body, title } = props;

  return (
    <Box>
      <Typography variant="h6">
        {title}
      </Typography>
      <Typography variant="body1">
        {body}
      </Typography>
    </Box>
  );
}

export default PackageInfo;
