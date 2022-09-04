import { Card, CardContent, Paper, Typography } from "@mui/material";
import React, { useState } from "react";

function PostBoard() {
  const [isEmpty, setIsEmpty] = useState(null);

  let isPostBoardEmpty = Boolean(isEmpty);

  let renderPostBoard = (
    <Card sx={{ width: "60%" }}>
      <CardContent
        sx={{
          width: { xs: "100%", md: "60%" },
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
        >
          FIll out your board with your exp!
        </Typography>
        <Typography variant="body2" component="p" textAlign="center">
          Add photos and info to your profile so people can find you easily and
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
