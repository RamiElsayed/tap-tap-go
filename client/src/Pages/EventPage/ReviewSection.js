import ReviewCard from "../../components/ReviewCard/index";
import { Typography } from "@mui/material";
import ReviewForm from "../../components/ReviewForm";
import Box from "@mui/material/Box";

function ReviewSection({ eventId, cardData }) {
  console.log(cardData);
  return (
    <Box mt="4rem">
      <Typography variant="h4" fontWeight="600" textAlign="center">
        Leave your review:
      </Typography>

      <ReviewForm eventIdParam={eventId} />

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
              reviewId={el._id}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default ReviewSection;
