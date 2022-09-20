import ReviewCard from "../../components/ReviewCard/index";
import { Typography } from "@mui/material";
import ReviewForm from "../../components/ReviewForm";
import Box from "@mui/material/Box";
import Auth from "../../utils/auth";

function ReviewSection({ eventId, cardData }) {
  let logged = Auth.loggedIn();

  return (
    <Box mt="4rem">
      {logged ? (
        <>
          <Typography variant="h4" fontWeight="600" textAlign="center">
            Leave your review:
          </Typography>
          <ReviewForm eventIdParam={eventId} />
        </>
      ) : (
        <Typography
          variant="h4"
          fontWeight="600"
          textAlign="center"
          gutterBottom
        >
          Sign In to Write a review
        </Typography>
      )}

      <Typography variant="h4" fontWeight="600" textAlign="center" gutterBottom>
        What others thought:
      </Typography>
      <Box>
        {cardData.map((el, index) => {
          return (
            <ReviewCard
              key={index}
              title={el.title}
              rating={el.rating}
              username={el.username}
              reviewText={el.reviewText}
              postedBy={el.postedBy}
              _id={el._id}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default ReviewSection;
