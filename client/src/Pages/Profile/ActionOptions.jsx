import { Card, CardContent, Typography } from "@mui/material";
import { Stack } from "@mui/system";

function ActionOptions() {
  return (
    <Card sx={{ marginBottom: "1rem" }}>
      <CardContent>
        <Stack>
          <Typography variant="body1" fontWeight="600">
            Share your experience
          </Typography>
          <Typography variant="body1">Create Post</Typography>
          <Typography gutterBottom variant="body1">
            Write review
          </Typography>
          <Typography variant="body1" fontWeight="600">
            Create your own event
          </Typography>
          <Typography variant="body1">Create event</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ActionOptions;
