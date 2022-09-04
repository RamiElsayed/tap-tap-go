import { Card, CardContent, Typography } from "@mui/material";
import { Stack } from "@mui/system";

function PostingBoard() {
  return (
    <Card sx={{ marginBottom: "1rem" }}>
      <CardContent>
        <Stack>
          <Typography variant="h6">Create your own event</Typography>
          <Typography variant="body1">Create event</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default PostingBoard;
