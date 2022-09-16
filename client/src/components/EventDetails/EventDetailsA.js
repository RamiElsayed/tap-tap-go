import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

export default function EventDetailsA(props) {
  return (
    <Card sx={{ mt: "1rem", mb: "2rem" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" fontWeight="600">
          {props.eventData.eventName}
        </Typography>
        <Typography variant="h6" component="h2" fontWeight="600">
          {props.eventData.date}
        </Typography>
        <Grid container spacing={2}>
          <Grid item sx={6}>
            <Typography variant="h6" component="h2" textAlign="right">
              £ {props.eventData.price} / person
            </Typography>
          </Grid>
        </Grid>
        <Paper
          elevation={1}
          sx={{ width: "100%", height: "1px", my: "1rem" }}
        />
        <Typography variant="h6" component="h2">
          {props.eventData.location.streetName}
        </Typography>
        <Typography variant="h6" component="h2">
          {props.eventData.location.cityName}
        </Typography>
        <Typography variant="h6" component="h2">
          {props.eventData.location.postcode}
        </Typography>
        <Button
          onClick={props.handlePurchase}
          sx={{
            display: { xs: "none", md: "block" },
            marginTop: "3rem",
            marginX: "auto",
            width: "250px",
            height: "50px",
          }}
          variant="contained"
          color="error"
        >
          Get Tickets
        </Button>
      </CardContent>
    </Card>
  );
}
