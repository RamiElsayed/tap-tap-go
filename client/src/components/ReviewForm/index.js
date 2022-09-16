import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, CardContent, Toolbar, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import React, { useState } from "react";
import { Stack } from "@mui/system";

import { CREATE_REVIEW } from "../../graphQL/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";

function ReviewForm({ eventIdParam }) {
  const [createReview, { error, reviewData }] = useMutation(CREATE_REVIEW);

  const [newReview, setReview] = useState({
    eventId: eventIdParam,
    postedBy: Auth.getProfile().data._id,
    username: Auth.getProfile().data.username,
    rating: 0,
    title: "",
    reviewText: "",
  });

  const updateReview = (event) => {
    let { name, value } = event.target;
    if (name == "rating") {
      value = parseInt(value);
    }
    setReview((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleCreateReview = async (event) => {
    event.preventDefault();
    console.log("inside");
    try {
      const { purchaseData } = await createReview({
        variables: { input: newReview },
      });
      console.log(purchaseData);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "1000px" }}>
      <CardContent>
        <Box
          sx={{
            width: "100%",
            maxWidth: "1000px",
            marginX: "auto",
          }}
        >
          <form onChange={updateReview} onSubmit={handleCreateReview}>
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
              name="title"
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
              name="reviewText"
              placeholder="What id you enjoy and disliked from the event?"
              id="fullWidth"
              size="medium"
              sx={{ marginBottom: "1rem" }}
            />
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </form>
        </Box>
      </CardContent>
    </Box>
  );
}

export default ReviewForm;
