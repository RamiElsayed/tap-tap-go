import { Grid, Typography } from '@mui/material';
import ReviewCard from '../../components/ReviewCard';
import CityCard from './CityCard';

const CityEventsPage = () => {
  return (
    <Grid
      container
      sx={{ display: 'flex', flexDirection: 'column' }}
      className="section__block-5"
    >
      <Grid
        item
        justifyContent="center"
        xs={12}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: { xs: '3rem', md: '0rem' },
        }}
      >
        <Typography variant="h2" gutterBottom textAlign="left">
          City Name
        </Typography>
        {/* TODO: will map later with data. all of these card to make sure layout is correct and responsiveness */}
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12} md={4}>
            <CityCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <CityCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <CityCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <CityCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <CityCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <CityCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <CityCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <CityCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <CityCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CityEventsPage;
