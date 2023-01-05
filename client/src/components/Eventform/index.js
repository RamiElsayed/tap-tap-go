import * as React from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card, CardContent, Container, Grid } from "@mui/material";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_TAGS } from "../../graphQL/queries";
import { ADD_EVENT } from "../../graphQL/mutations";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { FormOne } from "./FormOne";
import { FormTwo } from "./FormTwo";

export default function EventForm() {
  const navigate = useNavigate();
  const { loading, data } = useQuery(QUERY_TAGS);

  const completeEventInformation = React.useRef();

  const [keywords, setKeywords] = React.useState([]);

  React.useEffect(() => {
    if (data?.tags?.length) {
      setKeywords(
        data.tags.map((el) => {
          return el;
        })
      );
    }
  }, [data]);

  const [newEvent, setNewEvent] = React.useState({
    eventName: "",
    date: null,
    price: "",
    ageGroup: "",
    description: "",
    maxAttendees: "",
  });

  const [tags, setTags] = React.useState({
    tags: [],
    keywords: [],
  });
  const [eventAddress, setAddress] = React.useState({
    buildingNumber: "",
    streetName: "",
    cityName: "",
    postcode: "",
  });
  const [imageUpload, setImageUpload] = React.useState([]);

  const [formNumber, setFormNumber] = React.useState(false);

  const updateState = (event, setter) => {
    const { value, name } = event.target;
    let valueX = value;
    if (name === "price" || name === "maxAttendees") {
      valueX = parseInt(value);
    }
    setter((prev) => {
      return { ...prev, [name]: valueX };
    });
  };
  const ChangeNewEvent = (event, setter) => {
    const { value, name } = event.target;
    let valueX = value;
    if (name === "price" || name === "maxAttendees") {
      valueX = parseInt(value);
    }
    setNewEvent((prev) => {
      return { ...prev, [name]: valueX };
    });
  };

  const updateImage = (arrayImgs) => {
    setImageUpload(arrayImgs);
  };

  const handleKeywords = (event) => {
    const { value } = event.target;
    let tagId = value.map((key) => {
      let answer = keywords.find((el) => el.tagName === key);
      return answer._id;
    });
    setTags((prev) => {
      return { ...prev, keywords: value, tags: tagId };
    });
  };

  function updateDate(input, key) {
    let date = new Date(input);
    setNewEvent((prev) => {
      return { ...prev, [key]: date };
    });
  }

  const [createEvent] = useMutation(ADD_EVENT);

  const uploadImage = async (image) => {
    if (image == null) return;
    const imageRef = ref(storage, `events/images/${image.name + v4()}`);
    let snapshot = await uploadBytes(imageRef, image);
    let URL = await getDownloadURL(snapshot.ref);
    return await URL;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      Promise.all(
        imageUpload.map(async (item) => {
          let imageURL = await uploadImage(item.imageLink);
          return { imageLink: imageURL };
        })
      )
        .then((images) => {
          completeEventInformation.current = {
            ...newEvent,
            tags: tags.tags,
            images: images,
            location: eventAddress,
          };
        })
        .then(async () => {
          const { data: eventData } = await createEvent({
            variables: { input: { ...completeEventInformation.current } },
          });
          if (eventData?.createEvent?._id) {
            const eventID = eventData.createEvent._id;
            navigate(`/event/${eventID}`, { replace: true });
          }
        });
    } catch (e) {
      console.error(e);
    }
  };

  function renderForm() {
    return formNumber ? (
      <FormTwo
        ChangeNewEvent={ChangeNewEvent}
        newEvent={newEvent}
        setFormNumber={setFormNumber}
        handleFormSubmit={handleFormSubmit}
      />
    ) : (
      <FormOne
        updateState={updateState}
        ChangeNewEvent={ChangeNewEvent}
        newEvent={newEvent}
        setFormNumber={setFormNumber}
        eventAddress={eventAddress}
        updateDate={updateDate}
        imageUpload={imageUpload}
        setAddress={setAddress}
        tags={tags}
        keywords={keywords}
        handleKeywords={handleKeywords}
        updateImage={updateImage}
      />
    );
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        flexGrow: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div>
        <Typography
          gutterBottom
          textAlign="center"
          component="h3"
          variant="h3"
          fontWeight="500"
        >
          Starting a new event
        </Typography>
        <Card>
          <CardContent>{renderForm()}</CardContent>
        </Card>
      </div>
    </Container>
  );
}
