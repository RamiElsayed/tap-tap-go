import { Card, CardContent, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";

function AboutUser({ userInfo }) {
  return (
    <Card sx={{ marginBottom: "1rem" }}>
      <CardContent>
        <Stack>
          <Typography variant="body1" fontWeight="600">
            About You
          </Typography>
          <Typography variant="body1">Address: {userInfo.address}</Typography>
          <Typography variant="body1">Member since</Typography>
          <Typography variant="body1">Add website</Typography>
          <Typography variant="body1">Add an about me</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default AboutUser;
