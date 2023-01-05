import * as React from "react";
import TextField from "@mui/material/TextField";
import { usePlacesWidget } from "react-google-autocomplete";

export default function SearchLocation({ updateLocation }) {
  const { ref: materialRef } = usePlacesWidget({
    apiKey: "AIzaSyBp2mqYgmJJ5qGBcRg_9Q6CFfc4AC106RQ",
    onPlaceSelected: (place, inputRef, autocomplete) => {
      const city = place.formatted_address.split(",")[0];
      updateLocation(city);
    },
    inputAutocompleteValue: "country",
    options: {
      componentRestrictions: { country: "uk" },
    },
  });

  return (
    <TextField
      fullWidth
      color="primary"
      variant="outlined"
      inputRef={materialRef}
    />
  );
}
