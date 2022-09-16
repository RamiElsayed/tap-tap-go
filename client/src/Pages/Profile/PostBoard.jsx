import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";

function PostBoard() {
  const [isEmpty, setIsEmpty] = useState(null);

  let isPostBoardEmpty = Boolean(isEmpty);

  let renderPostBoard = (
    <Card sx={{ width: { xs: "100%", md: "60%" } }}>
      <CardContent
        sx={{
          width: { xs: "99%", md: "60%" },
          marginX: "auto",
          paddingY: "2rem",
        }}
      >
        <Typography
          variant="h6"
          component="h1"
          textAlign="center"
          sx={{ fontWeight: "600" }}
          gutterBottom
          paddingX="1rem"
        >
          This board is empty
        </Typography>
        <Typography
          variant="body2"
          component="p"
          textAlign="center"
          paddingX="1rem"
        >
          Bookmark events and info to your profile so people can find you easily and
          get to know you better!
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    // <Card>
    //   <CardContent></CardContent>
    // </Card>
    renderPostBoard
  );
}

export default PostBoard;
