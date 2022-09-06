import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { top100Films } from "./fakeData";

export default function Search() {
  const [open, setOpen] = React.useState(false);

  let searchSuggestionLimit = 5;

  return (
    <Stack sx={{ width: { xs: "90%", md: "60%" }, marginX: "auto" }}>
      <Autocomplete
        // freeSolo
        open={open}
        limitTags={4}
        options={top100Films.filter((option, i) => {
          if (i < searchSuggestionLimit) {
            return option;
          }
        })}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search by location or event"
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
    </Stack>
  );
}
