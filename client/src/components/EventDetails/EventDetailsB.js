import { Card, CardContent } from "@mui/material";

export default function EventDetailsB(props) {
  return (
    <Card>
      <CardContent>
        <p>Age Group</p>
        <p>{props.eventData.ageGroup}</p>
        <p>Address</p>
        <p>{props.eventData.address1}</p>
        <p>{props.eventData.address2}</p>
        <p>
          {props.eventData.address3} {props.eventData.postcode}
        </p>
      </CardContent>
    </Card>
  );
}
