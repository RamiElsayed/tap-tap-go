import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
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
  createdById,
}) {
  let tokenUserId;
  let canBookmark = false;
  if (Auth.loggedIn()) {
    tokenUserId = Auth.getProfile().data._id;
    let isOwner = createdById._id === tokenUserId;
    canBookmark = Auth.loggedIn() && !isOwner;
  }

  const { loading, data } = useQuery(
    QUERY_USER_BOOKMARKS,
    {
      variables: { userId: tokenUserId },
    },
    { enabled: false }
  );

  const [bookmarkEvent, { error }] = useMutation(BOOKMARK_EVENT, {
    update(cache, { data: { bookmarkEvent } }) {
      try {
        const userData = cache.readQuery({
          query: QUERY_USER_BOOKMARKS,
          variables: { userId: tokenUserId },
          enabled: Auth.loggedIn(),
        });
        console.log(userData.user);
        console.log(bookmarkEvent);

        // Then we update the cache by combining existing profile data with the newly created data returned from the mutation
        cache.writeQuery({
          query: QUERY_USER_BOOKMARKS,
          // If we want new data to show up before or after existing data, adjust the order of this array
          data: {
            user: {
              ...userData.user,
              bookmarks: [...userData.user.bookmarks, bookmarkEvent],
            },
          },
        });
      } catch (e) {
        console.error(e);
        console.log("hei");
      }
    },
  });
  const [unbookmarkEvent, { errorUnbookmark }] = useMutation(UNBOOKMARK_EVENT, {
    update(cache, { data: { unbookmarkEvent } }) {
      try {
        const userData = cache.readQuery({
          query: QUERY_USER_BOOKMARKS,
          variables: { userId: tokenUserId },
          enabled: Auth.loggedIn(),
        });

        let filteredBookmarks = userData.user.bookmarks.filter(
          (el) => el._id !== _id
        );
        let newObj = { ...userData.user, bookmarks: [...filteredBookmarks] };
        cache.writeQuery({
          query: QUERY_USER_BOOKMARKS,
          data: {
            user: { ...newObj },
          },
        });
      } catch (e) {
        console.error(e);
        console.log("hay");
      }
    },
  });

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

            {canBookmark ? renderBookmarkIcon() : ""}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
