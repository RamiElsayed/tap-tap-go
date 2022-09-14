export default function EventDetailsA(props) {
  return (
    <div className="event-details">
      <p>{props.eventData.date}</p>
      <p>{props.eventData.username} presents:</p>
      <p>{props.eventData.title}</p>
      <p>Hosted at:</p>
      <p>{props.eventData.location}</p>
      <p>£{props.eventData.price}</p>
    </div>
  );
}
