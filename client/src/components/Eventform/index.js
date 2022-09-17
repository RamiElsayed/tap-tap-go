import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card, CardContent, Container, Grid } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useTheme } from "@mui/material/styles";
import DropZone from "../dropZone/index";
import { Stack } from "@mui/system";
import { QUERY_TAGS } from "../../graphQL/queries";
import { useQuery } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_EVENT } from "../../graphQL/mutations";
import { useMutation } from "@apollo/client";

export default function EventForm() {
  const { loading, data } = useQuery(QUERY_TAGS);

  let completeEventInformation;

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
  const [imageOne, setImageOne] = React.useState({ imageLink: "" });
  const [imageTwo, setImageTwo] = React.useState({ imageLink: "" });
  const [imageThree, setImageThree] = React.useState({ imageLink: "" });
  const [imageFour, setImageFour] = React.useState({ imageLink: "" });
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
  const updateImage = (event, setter) => {
    const { value, name } = event.target;

    setter({ imageLink: value });
  };

  const handleKeywords = (event) => {
    const { value } = event.target;
    // console.log(keywords);
    let id = value.map((key) => {
      let answer = keywords.find((el) => {
        if (el.tagName === key) {
          return el;
        }
      });
      return answer._id;
    });
    setTags((prev) => {
      return { ...prev, keywords: value, tags: id };
    });
  };

  function updateDate(input, key) {
    let date = new Date(input);
    let dateTypeString = String(date);
    setNewEvent((prev) => {
      return { ...prev, [key]: date };
    });
  }

  React.useEffect(() => {
    completeEventInformation = {
      ...newEvent,
      tags: tags.tags,
      images: [imageOne, imageTwo, imageThree, imageFour],
      location: eventAddress,
    };
    console.log(completeEventInformation);
  }, [newEvent, eventAddress]);

  const [createEvent, { error, mutationData }] = useMutation(ADD_EVENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { eventData } = await createEvent({
        variables: { input: { ...completeEventInformation } },
      });
    } catch (e) {
      console.error(e);
    }
  };

  function renderForm() {
    if (formNumber == true) {
      return (
        <>
          <Button onClick={() => setFormNumber((prev) => !prev)}>Click</Button>

          <Grid
            container
            rowSpacing={2}
            columnSpacing={2}
            component="form"
            onSubmit={handleFormSubmit}
          >
            <Grid item xs={12}>
              <TextField
                onChange={(value) => updateState(value, setNewEvent)}
                value={newEvent.eve}
                fullWidth
                multiline
                rows={12}
                name="description"
                label="Description"
                defaultValue="test"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                style={{ background: "red" }}
                type="submit"
                fullWidth
                variant="contained"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </>
      );
    } else if (formNumber == false) {
      return (
        <>
          <Button onClick={() => setFormNumber((prev) => !prev)}>Click</Button>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                onChange={(value) => updateState(value, setNewEvent)}
                value={newEvent.eventName}
                fullWidth
                name="eventName"
                label="Event Name"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                onChange={(value) => updateState(value, setAddress)}
                value={eventAddress.buildingNumber}
                fullWidth
                name="buildingNumber"
                label="Building Number"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                onChange={(value) => updateState(value, setAddress)}
                value={eventAddress.streetName}
                fullWidth
                name="streetName"
                label="Street Name"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                onChange={(value) => updateState(value, setAddress)}
                value={eventAddress.cityName}
                fullWidth
                name="cityName"
                label="City"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                onChange={(value) => updateState(value, setAddress)}
                value={eventAddress.postcode}
                fullWidth
                name="postcode"
                label="Postcode"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                onChange={(value) => updateState(value, setNewEvent)}
                value={newEvent.maxAttendees}
                fullWidth
                type="number"
                inputProps={{ min: 4, max: 10 }}
                name="maxAttendees"
                label="Max attendees"
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Start date"
                  value={newEvent.date}
                  onChange={(newValue) => updateDate(newValue, "date")}
                  renderInput={(params) => <TextField fullWidth {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                name="price"
                fullWidth
                id="firstName"
                label="Price"
                type="number"
                value={newEvent.price}
                inputProps={{
                  max: 100,
                  min: 0,
                }}
                autoFocus
                onChange={(value) => updateState(value, setNewEvent)}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel id="ageGroup">Age</InputLabel>
                <Select
                  labelId="ageGroup"
                  value={newEvent.ageGroup}
                  label="Age"
                  name="ageGroup"
                  onChange={(value) => updateState(value, setNewEvent)}
                >
                  <MenuItem value={"Teenagers"}>Teenagers</MenuItem>
                  <MenuItem value={"Adult"}>Adult</MenuItem>
                  <MenuItem value={"Senior"}>Senior</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="tags">Keywords</InputLabel>
                <Select
                  labelId="tags"
                  multiple
                  value={tags.keywords}
                  onChange={handleKeywords}
                  input={<OutlinedInput id="tags" label="tags" />}
                  // renderValue={(selected) => {
                  //   console.log(selected);
                  //   return (
                  //     <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  //       <Chip label={selected} />
                  //     </Box>
                  //   );
                  // }}
                  renderValue={(selected, index) => {
                    return (
                      <Box
                        key={index}
                        sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                      >
                        {selected.map((value, i) => {
                          return <Chip key={i} label={value} />;
                        })}
                      </Box>
                    );
                  }}
                >
                  {keywords.map((keyword, index) => (
                    <MenuItem key={index} value={keyword.tagName}>
                      {keyword.tagName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="image"
                fullWidth
                label="Image 1"
                autoFocus
                value={imageOne.imageLink}
                onChange={(value) => updateImage(value, setImageOne)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="image"
                fullWidth
                label="Image 2"
                autoFocus
                value={imageTwo.imageLink}
                onChange={(value) => updateImage(value, setImageTwo)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="image"
                fullWidth
                label="Image 3"
                autoFocus
                value={imageThree.imageLink}
                onChange={(value) => updateImage(value, setImageThree)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="image"
                fullWidth
                label="Image 4"
                autoFocus
                value={imageFour.imageLink}
                onChange={(value) => updateImage(value, setImageFour)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                style={{ background: "red" }}
                onClick={() => setFormNumber((prev) => !prev)}
                fullWidth
                variant="contained"
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </>
      );
    }
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
