import { Card, CardContent, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';

function AboutUser({ userInfo: { address, createdAt, websiteUrl, aboutMe } }) {
  return (
    <Card sx={{ marginBottom: '1rem' }}>
      <CardContent>
        <Stack>
          <Typography variant="body1" fontWeight="600">
            About You
          </Typography>
          <Typography variant="body1">Address: {address}</Typography>
          <Typography variant="body1">Member since: {createdAt}</Typography>
          <Typography variant="body1">Website: {websiteUrl}</Typography>
          <Typography variant="body1">About Me: {aboutMe}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default AboutUser;
