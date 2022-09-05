import { Grid, Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/system";

function TopSellers() {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "200px",
        backgroundColor: "#FFFFE3",
      }}
      className="section__block-4"
    >
      <Grid item xs={12} md={7}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Typography variant="h6" textAlign="center">
            Want to try our best sellers?
          </Typography>
          <Button sx={{ width: "300px", marginX: "auto" }} variant="contained">
            Let's explore
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <img
          style={{ objectFit: "cover", height: "200px", width: "100%" }}
          src="https://images.alphacoders.com/461/461042.jpg"
        />
      </Grid>
      {/* <Grid item xs={12} md={8}>
        <Button variant="contained">Let's explore</Button>
      </Grid> */}
    </Grid>
  );
}

export default TopSellers;
