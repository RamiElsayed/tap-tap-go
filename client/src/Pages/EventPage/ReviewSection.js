import ReviewCard from "../../components/ReviewCard/index";
import { Typography } from "@mui/material";
import ReviewForm from "../../components/ReviewForm";
import Box from "@mui/material/Box";

function ReviewSection({ cardData }) {
  return (
    <Box mt="4rem">
      <Typography variant="h4" fontWeight="600" textAlign="center">
        Leave your review:
      </Typography>

      <ReviewForm />

      <Typography variant="h4" fontWeight="600" textAlign="center" gutterBottom>
        What others thought:
      </Typography>
      <Box>
        {cardData.map((el) => {
          console.log(el.rating);
          return (
            <ReviewCard
              title={el.title}
              rating={el.rating}
              username={el.username}
              reviewText={el.reviewText}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default ReviewSection;
