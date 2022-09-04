import { Container, Grid, ListItem, Paper, Typography } from "@mui/material";
import React from "react";
// import { Link } from "react-router-dom";

const RecentlySeen = () => {
  return (
    <Container maxWidth="xl">
      <Paper elevation={3}>
        <Grid container spacing={2} marginX="2rem" alignItems="center">
          <Grid item sm={2}>
            <Typography variant="h5" gutterBottom>
              Check again
            </Typography>
          </Grid>
          <Grid item sm={10} display="flex" flexDirection="row">
            <ListItem>
              <Typography variant="h6" gutterBottom>
                Birmingham
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6" gutterBottom>
                London
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6" gutterBottom>
                Bristol
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6" gutterBottom>
                Cardiff
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6" gutterBottom>
                Wolves
              </Typography>
            </ListItem>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
export default RecentlySeen;
