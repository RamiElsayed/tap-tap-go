import { Stack } from "@mui/system";
import { Typography } from "@mui/material";

function Suggestions() {
  return (
    <>
      <Stack>
        <Typography
          variant="h3"
          fontWeight="600"
          style={{ marginTop: "50px", textAlign: "center" }}
        >
          Similar Events
        </Typography>
        <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
          <li>
            <a href="#">
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "black",
                }}
              ></div>
            </a>
          </li>
          <li>
            <a href="#">
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "black",
                }}
              ></div>
            </a>
          </li>
          <li>
            <a href="#">
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "black",
                }}
              ></div>
            </a>
          </li>
          <li>
            <a href="#">
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "black",
                }}
              ></div>
            </a>
          </li>
        </ul>
      </Stack>
    </>
  );
}

export default Suggestions;
