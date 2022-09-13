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

const eventData = {
  date: "12th May 1990",
  username: "Username Jones",
  name: "Salsa with Fabian Sarango",
  location: "Velvet Rooms",
  price: 8,
};

function EventPage() {
  return (
    <>
      <EventDetailsA eventData={eventData} />
      <ImageCarousel />
      <EventDetailsB />
      <ReviewCard cardData={cardData} />
      <p>test</p>
    </>
  );
}

export default EventPage;
