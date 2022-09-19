import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import ToggleFavorite from "./ToggleFavorite";
import IconButton from "@mui/material/IconButton";
import { CardActionArea } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

import { BOOKMARK_EVENT, UNBOOKMARK_EVENT } from "../../graphQL/mutations";
import { QUERY_USER_BOOKMARKS } from "../../graphQL/queries";
import { useMutation, useQuery } from "@apollo/client";
import Auth from "../../utils/auth";

export default function EventCard({
  eventName,
  price,
  reviews,
  images,
  _id,
  rating,
}) {
  let tokenUserId;
  if (Auth.loggedIn()) {
    tokenUserId = Auth.getProfile().data._id;
  }
  const { loading, data } = useQuery(
    QUERY_USER_BOOKMARKS,
    {
      variables: { userId: tokenUserId },
    },
    { enabled: false }
  );

  const [bookmarkEvent, { error, bookmarkData }] = useMutation(BOOKMARK_EVENT);
  const [unbookmarkEvent, { errorUnbookmark, unbookmarkData }] =
    useMutation(UNBOOKMARK_EVENT);

  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (data?.user?.bookmarks?.length) {
      data.user.bookmarks.forEach((el) => {
        if (el._id === _id) {
          setIsBookmarked(true);
        }
      });
    }
  }, [data]);

  const toggleHeart = async () => {
    try {
      if (!isBookmarked) {
        const { bookmarkData } = await bookmarkEvent({
          variables: { eventId: _id },
        });
      } else {
        const { unbookmarkData } = await unbookmarkEvent({
          variables: { eventId: _id },
        });
      }
      setIsBookmarked((prev) => !prev);
    } catch (e) {
      console.error(e);
    }
  };
  const averageRating = () => {
    return (
      reviews
        .map((review) => review.rating)
        .reduce((acc, curr) => acc + curr, 0) / reviews.length
    );
  };

  const randomImageSelector = () => {
    return images[Math.floor(Math.random() * images.length)].imageLink;
  };
  const renderBookmarkIcon = () => {
    return isBookmarked ? (
      <FavoriteIcon
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          padding: "1rem",
        }}
        onClick={toggleHeart}
        className="heart"
      />
    ) : (
      <FavoriteBorderIcon
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          padding: "1rem",
        }}
        onClick={toggleHeart}
        className="heart"
      />
    );
  };

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea>
        <Link to={`/event/${_id}`}>
          <CardMedia
            component="img"
            height="170"
            image={randomImageSelector()}
            alt={eventName}
          />
        </Link>
        <CardContent>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            textAlign="left"
          >
            {eventName}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              position: "relative",
            }}
          >
            <Rating
              size="small"
              name="read-only"
              // value={props.cardData.value}
              value={averageRating()}
              precision={0.5}
              readOnly
            />
            <Typography variant="caption">{reviews.length}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="left"
              mt={2}
              sx={{ display: "flex" }}
            >
              £ {price} /
              <PersonIcon sx={{ fontSize: "1.2rem" }} />
            </Typography>

            {Auth.loggedIn() ? renderBookmarkIcon() : ""}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
