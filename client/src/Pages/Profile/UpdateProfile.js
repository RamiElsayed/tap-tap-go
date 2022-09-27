import { useEffect, useState } from "react";
// Utilities
import Auth from "../../utils/AuthContext";
import { CHECK_USERNAME } from "../../graphQL/queries";
import { ADD_USER } from "../../graphQL/mutations";
import { useMutation, useLazyQuery } from "@apollo/client";
// Material UI
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";
import { useModalsContext } from "../../utils/ModalContext";
import _ from "lodash";

export const UpdateProfile = () => {
  const [getUsername, { loading, data }] = useLazyQuery(CHECK_USERNAME);

  const { closeUpdateProfileModal } = useModalsContext();
  const [formState, setFormState] = useState({
    username: "",
    address: "",
    website: "",
    number: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  const [createUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };

  const handleChangeUsername = async (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(value);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Box
      onClick={closeUpdateProfileModal}
      value="CloseBox"
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 999,
        position: "fixed",
        top: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CssBaseline />
      <Card
        sx={{
          width: { xs: "95%", sm: "600px" },
          maxWidth: "90%",
          backgroundColor: "white",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mx: "auto",
          }}
        >
          <Typography component="h2" variant="h5">
            Update Profile
          </Typography>
          <Box component="form" onSubmit={handleFormSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="username"
              value={formState.username}
              onChange={handleChangeUsername}
              label="username"
              type="text"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="address"
              value={formState.address}
              onChange={handleChange}
              label="Address"
              type="text"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="website"
              value={formState.website}
              onChange={handleChange}
              label="website"
              type="text"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              value={formState.description}
              onChange={handleChange}
              label="Description"
              rows={8}
              multiline
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>
            {error && (
              <Typography variant="body2" color="red">
                Fields incorrect, try again{" "}
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
