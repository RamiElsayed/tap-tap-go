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

const keywords = [
  "Oliver",
  "Van",
  "April",
  "Ralph",
  "Omar",
  "Carlos",
  "Miriam",
  "Bradley",
  "Virginia",
  "Kelly",
];

export default function EventForm() {
  const [newEvent, setNewEvent] = React.useState({
    Address: "",
    startDate: null,
    endDate: null,
    price: "",
    ageGroup: "",
    keywords: [],
    images: [],
    description: "",
  });

  const [formNumber, setFormNumber] = React.useState(false);

  const updateNewEventDetails = (event) => {
    console.log(event);
    const { value, name } = event.target;
    console.log(event.currentTarget);
    setNewEvent((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleKeywords = (event) => {
    const { value } = event.target;
    setNewEvent((prev) => {
      let { keywords } = prev;
      return { ...prev, keywords: value };
    });
  };

  function updateDate(input, key) {
    setNewEvent((prev) => {
      return { ...prev, [key]: input };
    });
  }

  // React.useEffect(() => {
  //   console.log(newEvent);
  // }, [newEvent]);

  function renderForm() {
    if (formNumber == true) {
      return (
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12}>
            <TextField
              onChange={updateNewEventDetails}
              value={newEvent.description}
              fullWidth
              multiline
              rows={12}
              maxRows={50}
              name="description"
              label="Description"
            />
          </Grid>
          <Grid item xs={12}>
            <Button style={{ background: "red" }} fullWidth variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      );
    } else if (formNumber == false) {
      return (
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              onChange={updateNewEventDetails}
              value={newEvent.Address}
              fullWidth
              name="Address"
              label="Address"
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
                name="startDate"
                value={newEvent.startDate}
                onChange={(newValue) => updateDate(newValue, "startDate")}
                renderInput={(params) => (
                  <TextField sx={{ width: "49%" }} {...params} />
                )}
              />
              <DatePicker
                label="End date"
                name="endDate"
                value={newEvent.endDate}
                onChange={(newValue) => updateDate(newValue, "endDate")}
                renderInput={(params) => (
                  <TextField sx={{ width: "49%" }} {...params} />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="price"
              fullWidth
              id="firstName"
              label="Price"
              autoFocus
              onChange={updateNewEventDetails}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="ageGroup">Age</InputLabel>
              <Select
                labelId="ageGroup"
                value={newEvent.ageGroup}
                label="Age"
                name="ageGroup"
                onChange={updateNewEventDetails}
              >
                <MenuItem value={"Teenagers"}>Teenagers</MenuItem>
                <MenuItem value={"Adult"}>Adult</MenuItem>
                <MenuItem value={"Senior"}>Senior</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="keywords">Keywords</InputLabel>
              <Select
                labelId="keywords"
                multiple
                value={newEvent.keywords}
                onChange={handleKeywords}
                input={<OutlinedInput id="keywords" label="Keywords" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                {keywords.map((keys) => (
                  <MenuItem key={keys} value={keys}>
                    {keys}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <DropZone />
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
      );
    }
  }

  return (
    <Container maxWidth="xl">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          height: "90vh",
        }}
      >
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
