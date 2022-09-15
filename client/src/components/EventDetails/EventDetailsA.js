import { Card, CardContent } from "@mui/material";

export default function EventDetailsA(props) {
  return (
    <Card>
      <CardContent>
        <p>{props.eventData.date}</p>
        <p>{props.eventData.username} presents:</p>
        <p>{props.eventData.title}</p>
        <p>Hosted at:</p>
        <p>{props.eventData.location}</p>
        <p>£{props.eventData.price}</p>
      </CardContent>
    </Card>
  );
}
