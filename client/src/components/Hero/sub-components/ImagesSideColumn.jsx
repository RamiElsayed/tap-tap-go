import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { itemData } from "../../../_mock/Cities/index.js";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImagesSideColumn() {
  return (
    <ImageList
      sx={{
        width: "100%",
        height: "auto",
        display: { xs: "none", md: "grid" },
      }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          sx={{ overflow: "hidden" }}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <Link to={`/search-by-city/${item.title}`}>
            <img
              className="img--Column"
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </Link>
          <Typography
            variant="body1"
            sx={{
              position: "absolute",
              fontWeight: 600,
              top: 0,
              margin: "0.2rem",
              zIndex: "99",
              color: "white",
            }}
          >
            {item.title}
          </Typography>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
