import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import DeleteIcon from "@mui/icons-material/Delete";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import Auth from "../../utils/auth";
import { DELETE_REVIEW } from "../../graphQL/mutations";
import { useMutation } from "@apollo/client";

export default function ReviewCard({
  title,
  rating,
  username,
  reviewText,
  postedBy,
  _id,
}) {
  let isOwner = false;
  if (Auth.loggedIn()) {
    isOwner = postedBy === Auth.getProfile().data._id;
  }

  const [deleteReview, { error, data }] = useMutation(DELETE_REVIEW);

  const handleDeleteReview = async () => {
    try {
      const { deleteResponse } = await deleteReview({
        variables: { reviewId: _id },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Card sx={{ maxWidth: "850px", mb: "1rem", marginX: "auto" }}>
      <CardContent sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            textAlign="left"
            fontWeight="600"
          >
            {title}
          </Typography>
          <Rating
            size="medium"
            name="read-only"
            value={rating}
            icon={<CircleRoundedIcon fontSize="inherit" />}
            emptyIcon={<CircleRoundedIcon fontSize="inherit" />}
            readOnly
          />
        </Box>
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          textAlign="left"
        >
          {username}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="left"
          mt={2}
        >
          {reviewText}
        </Typography>
        {isOwner ? (
          <DeleteIcon
            color="action"
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              padding: "1rem",
            }}
            onClick={handleDeleteReview}
          />
        ) : (
          ""
        )}
      </CardContent>
    </Card>
  );
}
