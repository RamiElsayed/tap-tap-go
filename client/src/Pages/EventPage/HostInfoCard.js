import { Card, CardContent, Grid, Typography } from "@mui/material";

const style = {
  width: "100%",

  bgcolor: "background.paper",
};

export default function HostInfoCard(props) {
  return (
    <Card>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          fontWeight="600"
          textAlign="center"
        >
          About your host
        </Typography>
        <Typography
          sx={{
            height: "100px",
            borderRadius: "50%",
            marginX: "33%",
            marginY: "2rem",
          }}
          component="img"
          src={props.eventData.createdById.profileAvatar}
        />

        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6">Hosted by</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">
              {" "}
              {props.eventData.createdById.username}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6">Events Hosted:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">
              {props.eventData.createdById.myEvents.length}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
