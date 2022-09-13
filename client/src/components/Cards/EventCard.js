import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { CardActionArea } from '@mui/material';

export default function EventCard({ eventName, price }) {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://upload.wikimedia.org/wikipedia/commons/2/2b/Salsa_dancing.jpg"
          alt={eventName}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            textAlign="left"
          >
            {eventName}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left',
            }}
          >
            <Rating
              size="small"
              name="read-only"
              // value={props.cardData.value}
              value={5}
              readOnly
            />
            <Typography variant="caption">256</Typography>
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="left"
            mt={2}
          >
            £{price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
