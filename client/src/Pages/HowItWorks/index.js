import { Typography, Paper } from "@mui/material";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

// Added route for /how-it-works in App.js

export default function HowItWorks() {
  return (
    <>
      <Paper style={{ margin: "3rem", padding: "3rem" }} elevation={3}>
        <Typography variant="h3" textAlign="center" my={5}>
          How Does Tap Tap Go Work?
        </Typography>
        <Typography varient="body1" textAlign="center">
          Using Tap Tap Go you can find and purchase tickets for events all over
          the UK!
          <br />
          <br />
          <AutoAwesomeOutlinedIcon />
        </Typography>

        <Typography variant="h4" textAlign="center" my={3}>
          Finding Events
        </Typography>
        <Typography variant="h6" textAlign="center">
          Landing Page Search Bar
        </Typography>
        <Typography variant="body1" textAlign="center">
          Enter the city you'd like to explore and optionally select a category
          and the date you would like to attend.
        </Typography>
        <Typography variant="h6" textAlign="center" mt={3}>
          Landing Page City Selector
        </Typography>
        <Typography variant="body1" textAlign="center">
          Select one of the dispalyed cities to see a list of all events taking
          place there.
        </Typography>
        <Typography variant="h6" textAlign="center" mt={3}>
          Recent Searches
        </Typography>
        <Typography variant="body1" textAlign="center">
          Select one of your recent searches to see all events in that city.
          <br />
          <br />
          <AutoAwesomeOutlinedIcon />
        </Typography>
        <Typography variant="h4" textAlign="center" mt={4} mb={2}>
          Saving Events
        </Typography>
        <Typography variant="h6" textAlign="center">
          Bookmarks
        </Typography>
        <Typography variant="body1" textAlign="center">
          Click the heart bookmark icon on any event you would like to save to
          your bookmarks.
          <br />
          <br />
          <AutoAwesomeOutlinedIcon />
        </Typography>
        <Typography variant="h4" textAlign="center" mt={4} mb={2}>
          Viewing Events
        </Typography>
        <Typography variant="h6" textAlign="center">
          Event Details
        </Typography>
        <Typography variant="body1" textAlign="center" mb={3}>
          <p>All details of an event are available on the event's page.</p>
          <p>
            You can purchase tickets, read and/or write reviews for the event
            and use tags to find other similar events.
          </p>
          <br />
        </Typography>
      </Paper>
    </>
  );
}
