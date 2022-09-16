import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Search({ category, inputLabel, updateTag }) {
  const [open, setOpen] = React.useState(false);
  let searchSuggestionLimit = 5;
  return (
    <Autocomplete
      sx={{ width: { xs: "100%" } }}
      open={open}
      limitTags={4}
      options={category.filter((option, i) => {
        if (i < searchSuggestionLimit) {
          return option;
        }
      })}
      getOptionLabel={(option) => {
        updateTag(option.title);
        return option.title;
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={inputLabel}
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
      onInputChange={(_, value) => {
        if (value.length === 0) {
          if (open) setOpen(false);
        } else {
          if (!open) setOpen(true);
        }
      }}
      onClose={() => setOpen(false)}
    />
  );
}
