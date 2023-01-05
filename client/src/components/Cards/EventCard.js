import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { CardActionArea } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { RenderBookmarkIcon } from "./ToggleHeart/Index";
import { averageRatingFromDB, selectRandomImage } from "../../utils";

import { BOOKMARK_EVENT, UNBOOKMARK_EVENT } from "../../graphQL/mutations";
import { QUERY_USER_BOOKMARKS } from "../../graphQL/queries";
import { useMutation, useQuery } from "@apollo/client";
import Auth from "../../utils/auth";

export default function EventCard(props) {
  let { eventName, price, reviews, images, _id, createdById } = props;
  const [isBookmarked, setIsBookmarked] = useState(false);
  let { tokenUserId, isOwner, logged } = Auth.isOwner(createdById);

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
      }
    },
  });

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
        await bookmarkEvent({
          variables: { eventId: _id },
        });
      } else {
        await unbookmarkEvent({
          variables: { eventId: _id },
        });
      }

      setIsBookmarked((prev) => !prev);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea>
        <Link to={`/event/${_id}`}>
          <CardMedia
            component="img"
            height="170"
            image={selectRandomImage(images)}
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
              value={averageRatingFromDB(reviews)}
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

            {isOwner || (
              <RenderBookmarkIcon
                isBookmarked={isBookmarked}
                toggleHeart={toggleHeart}
              />
            )}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
