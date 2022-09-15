import { Box, Card, CardContent, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

const style = {
  width: "100%",

  bgcolor: "background.paper",
};

function BookMark() {
  return (
    <Box>
      <Card sx={{ width: "70%", height: "500px", mx: "auto" }}>
        <CardContent sx={{ padding: "3rem" }}>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <Link to="/">
              <ListItem button>
                <ListItemText primary="EventName" />
                <ListItemText primary="Cost" />
                <ListItemText primary="location" />
              </ListItem>
            </Link>
            <Divider />
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}

export default BookMark;
