import { Typography } from "@mui/material";

function Description({ eventData }) {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight="600"
        gutterBottom
        style={{ textAlign: "center", marginTop: "50px" }}
      >
        {eventData.eventName}
      </Typography>
      <Typography variant="body1" style={{ margin: " 0 50px" }}>
        {eventData.description}
      </Typography>
    </>
  );
}

export default Description;
