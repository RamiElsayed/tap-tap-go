import * as React from "react";
import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";

export default function SearchLocation({ updateLocation }) {
  const [country, setCountry] = React.useState("uk");

  const { ref: materialRef } = usePlacesWidget({
    // apiKey: process.env.REACT_APP_GOOGLE,
    apiKey: "AIzaSyBp2mqYgmJJ5qGBcRg_9Q6CFfc4AC106RQ",
    onPlaceSelected: (place) => {
      const city = place.formatted_address.split(",")[0];
      updateLocation(city);
    },
    inputAutocompleteValue: "country",
    options: {
      componentRestrictions: { country },
    },
  });

  return (
    <TextField
      // onChange={updateLocation}
      fullWidth
      color="primary"
      variant="outlined"
      inputRef={materialRef}
    />
    // <Autocomplete
    //   style={{ width: "100%", paddingTop: "1rem" }}
    //   apiKey={"AIzaSyBp2mqYgmJJ5qGBcRg_9Q6CFfc4AC106RQ"}
    //   onPlaceSelected={(place) => {
    //     console.log(place);
    //   }}
    // />
  );
}
