import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";

export function FormTwo(props) {
  let { ChangeNewEvent, setFormNumber, newEvent, handleFormSubmit } = props;
  return (
    <>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        component="form"
        onSubmit={handleFormSubmit}
      >
        <Grid item xs={12}>
          <TextField
            onChange={(value) => ChangeNewEvent(value)}
            value={newEvent.description}
            fullWidth
            multiline
            rows={12}
            name="description"
            label="Description"
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            color="secondary"
            variant="contained"
            fullWidth
            onClick={() => setFormNumber((prev) => !prev)}
          >
            Previous
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button color="info" type="submit" fullWidth variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
