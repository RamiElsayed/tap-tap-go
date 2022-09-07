import { Button, Card, CardContent, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const img = {
  objectFit: "contain",
  height: "100px",
  width: "auto",
  borderRadius: 2,
};

export default function DropZone(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 4,
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <Stack
      sx={{
        borderRadius: 2,
        border: "1px solid #eaeaea",
        marginBottom: 1,
        marginRight: 2,
        padding: 0.5,
        boxSizing: "border-box",
      }}
      key={file.name}
    >
      <Box sx={{ minWidth: 0, overflow: "hidden" }}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </Box>
    </Stack>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <Card sx={{ width: "55%", mx: "auto" }}>
      <CardContent>
        <Box
          sx={{ border: "1px dashed grey" }}
          {...getRootProps({ className: "dropzone" })}
        >
          <input {...getInputProps()} />
          <Typography marginY="1rem" textAlign="center">
            Drag 'n' drop some files here, or click to select files
          </Typography>
        </Box>
        <aside style={thumbsContainer}>{thumbs}</aside>
      </CardContent>
    </Card>
  );
}
