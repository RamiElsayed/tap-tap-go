import EventDetailsA from "../../components/EventDetails/EventDetailsA";
import EventDetailsB from "../../components/EventDetails/EventDetailsB";
import ImageCarousel from "../../components/ImageCarousel";
import ReviewCard from "../../components/ReviewCard/index";

const cardData = {
  title: "Best Place to learn a new skill!",
  author: "Fabian Sarango",
  description:
    "I can suggest this is the best website for finding the next place to go! I will recommend it to my friends",
  value: 4,
};

function EventPage() {
  return (
    <>
      <EventDetailsA />
      <ImageCarousel />
      <EventDetailsB />
      <ReviewCard cardData={cardData} />
      <p>test</p>
    </>
  );
}

export default EventPage;
