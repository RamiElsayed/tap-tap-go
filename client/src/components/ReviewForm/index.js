import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, CardContent, Toolbar, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import React, { useState } from "react";
import { Stack } from "@mui/system";

function ReviewForm() {
  const [newReview, setReview] = useState({
    rating: 0,
    headline: "",
    review: "",
  });

  const updateReview = (event) => {
    let { name, value } = event.target;
    if (name == "rating") {
      value = parseInt(value);
    }
    setReview((prev) => {
      return {
        prev,
        [name]: value,
      };
    });
  };

  const printState = (event) => {
    event.preventdefault();
    console.log(newReview);
  };

  return (
    <Card sx={{ maxWidth: "600px" }}>
      <CardContent>
        <Box
          sx={{
            maxWidth: "400px",
            marginX: "auto",
          }}
        >
          <form onChange={updateReview}>
            <Rating
              name="rating"
              onChange={updateReview}
              value={newReview.rating}
              size="large"
            />
            <Typography variant="h6" fontWeight="600">
              Add a headline
            </Typography>
            <TextField
              fullWidth
              name="headline"
              placeholder="what is most important to share?"
              id="fullWidth"
              size="medium"
              margin="dense"
            />
            <Typography variant="h6" fontWeight="600">
              Write your review
            </Typography>
            <TextField
              fullWidth
              name="review"
              placeholder="What id you enjoy and disliked from the event?"
              id="fullWidth"
              size="medium"
              sx={{ marginBottom: "1rem" }}
            />
            <Button type="submit" variant="outlined" onSubmit={printState}>
              Submit
            </Button>
          </form>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ReviewForm;
