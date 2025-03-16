import { Button, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router';

function PageNotFound() {
  return (
    <Container sx={{ paddingY: 3 }}>
      <Stack spacing={3} sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Typography gutterBottom variant="h1">
          404
        </Typography>
        <Typography gutterBottom variant="body1">
          We can't seem to find the page you're looking for.
        </Typography>
        <Button component={Link} disableElevation to="/" variant="contained">
          Go Home
        </Button>
      </Stack>
    </Container>
  );
}

export default PageNotFound;
