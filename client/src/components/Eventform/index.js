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

export default function MultipleSelectChip() {
  const [value, setValue] = React.useState(dayjs());

  return <BasicTextFields value={value} />;
}

function BasicTextFields({ value, setValue, theme }) {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [age, setAge] = React.useState("");
  const [keywordsList, setKeywordsList] = React.useState([]);

  const handleKeywords = (event) => {
    const { value } = event.target;
    setKeywordsList(value);
    console.log(keywordsList);
  };

  return (
    <Container maxWidth="xl">
      <Typography gutterBottom component="h3" variant="h5">
        Starting a new event
      </Typography>
      <Card>
        <CardContent>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Address" type="search" />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="End date"
                  value={startDate}
                  onChange={(newValue) => {
                    setStartDate(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField sx={{ width: "49%" }} {...params} />
                  )}
                />
                <DatePicker
                  label="End date"
                  value={endDate}
                  onChange={(newValue) => {
                    setEndDate(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField sx={{ width: "49%" }} {...params} />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="image"
                fullWidth
                id="firstName"
                label="Price"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="ageGroup">Age</InputLabel>
                <Select
                  labelId="ageGroup"
                  id="age-group-select"
                  value={age}
                  label="Age"
                  onChange
                >
                  <MenuItem value={10}>Teenager</MenuItem>
                  <MenuItem value={20}>Adult</MenuItem>
                  <MenuItem value={30}>Senior</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button variant="contained" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="image"
                fullWidth
                id="firstName"
                label="image"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="keywords">Keywords</InputLabel>
                <Select
                  labelId="keywords"
                  multiple
                  value={keywordsList}
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
              <Button
                style={{ background: "red" }}
                fullWidth
                variant="contained"
              >
                submit
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
