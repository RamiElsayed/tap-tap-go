import { Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

function AddressInput({ updateState, setAddress, eventAddress }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const answer = results[0];
        console.log(answer);
        // const { lat, lng } = getLatLng(results[0]);
        // console.log("📍 Coordinates: ", { lat, lng });
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <Typography
          variant="body1"
          key={place_id}
          onClick={handleSelect(suggestion)}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </Typography>
      );
    });

  return (
    <>
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
      <Grid item xs={12} md={6} ref={ref}>
        <TextField
          //   onChange={(value) => updateState(value, setAddress)}
          onChange={handleInput}
          //   value={eventAddress.postcode}
          value={value}
          disabled={!ready}
          fullWidth
          name="postcode"
          label="Postcode"
        />
        {status === "OK" && <ul>{renderSuggestions()}</ul>}
      </Grid>
    </>
  );
}

export default AddressInput;
