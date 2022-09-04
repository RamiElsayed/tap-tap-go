import { Card, CardContent, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";

function Description() {
  return (
    <Card>
      <CardContent>
        <Stack>
          <Typography variant="h6">Intro</Typography>
          <Typography variant="body1">Address</Typography>
          <Typography variant="body1">Member since</Typography>
          <Typography variant="body1">Add website</Typography>
          <Typography variant="body1">Add an about me</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default Description;
