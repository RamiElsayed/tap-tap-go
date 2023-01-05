// Not in use
import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
export default function CategoryPicker() {
  const [open, setOpen] = React.useState(false);

  let searchSuggestionLimit = 5;

  return (
    <Stack
      sx={{
        width: { xs: "100%", md: "60%" },
        marginLeft: "auto",
      }}
    >
      <Autocomplete
        // freeSolo
        open={open}
        limitTags={4}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search by keyword"
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
