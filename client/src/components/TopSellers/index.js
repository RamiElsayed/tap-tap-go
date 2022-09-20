import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

function TopSellers() {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "250px",
        backgroundColor: "#aa182b",
      }}
      className="section__block-4"
    >
      <Grid item xs={12} md={7} sx={{ height: { xs: "50%", md: "100%" } }}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            color: "white",
          }}
        >
          <Typography variant="h4" textAlign="center" fontWeight="600">
            Want to try our best sellers?
          </Typography>
          <Button
            sx={{ width: "300px", marginX: "auto" }}
            color="inherit"
            variant="outlined"
          >
            Let's explore
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={5} sx={{ height: { xs: "50%", md: "100%" } }}>
        <img
          alt="Image of a busy street"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
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
