import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { top100Films } from "./fakeData";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  // ...
});

theme = createTheme(theme, {
  typography: {
    h1: {
      fontSize: 73,
      [theme.breakpoints.only("xs")]: {
        fontSize: 55,
      },
    },
  },
});

export default function Search() {
  const [open, setOpen] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1" gutterBottom textAlign="center">
        Hobbies everywhere!
      </Typography>
      <Stack sx={{ width: { xs: "90%", md: "60%" }, marginX: "auto" }}>
        <Autocomplete
          freeSolo
          open={open}
          id="free-solo-2-demo"
          disableClearable
          options={top100Films.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
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
    </ThemeProvider>
  );
}
