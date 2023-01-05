import { useState } from "react";
// Utilities
import Auth from "../../../utils/auth";
import { ADD_USER } from "../../../graphQL/mutations";
import { useMutation } from "@apollo/client";
// Material UI
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";
import Copyright from "../CopyRight";
import { useModalsContext } from "../../../utils/ModalContext";

export const SignUp = ({ switchToSignIn }) => {
  const { closeModal } = useModalsContext();
  const [verifyPassword, setVerifyPassword] = useState("");
  const [verification, setVerification] = useState(true);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    number: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const updateVerifyPassword = (event) => {
    const { value } = event.target;
    setVerifyPassword(value);
  };

  const [createUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      if (formState.password !== verifyPassword) {
        setVerification(false);
        setVerifyPassword("");
        setFormState((prev) => {
          return { ...prev, password: "" };
        });
        throw new Error("Password do not match");
      }
      const { data } = await createUser({
        variables: { input: { ...formState } },
      });
      Auth.login(data.createUser.token);
      setFormState({});
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box
      onClick={closeModal}
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h2" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleFormSubmit} sx={{ mt: 1 }}>
            <TextField
              fullWidth
              label="First Name"
              margin="normal"
              name="firstName"
              onChange={handleChange}
              required
              type="text"
              value={formState.firstName}
            />
            <TextField
              fullWidth
              label="Last Name"
              margin="normal"
              name="lastName"
              onChange={handleChange}
              required
              type="text"
              value={formState.lastName}
            />
            <TextField
              fullWidth
              label="username"
              margin="normal"
              name="username"
              onChange={handleChange}
              required
              type="text"
              value={formState.username}
            />
            <TextField
              fullWidth
              label="Phone number"
              margin="normal"
              name="number"
              onChange={handleChange}
              required
              type="number"
              value={formState.number}
            />
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              name="email"
              onChange={handleChange}
              required
              type="email"
              value={formState.email}
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              onChange={handleChange}
              required
              type="password"
              value={formState.password}
            />
            {(error || !verification) && (
              <Typography variant="body2" color="red">
                Passwords do not match
              </Typography>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              value={verifyPassword}
              onChange={updateVerifyPassword}
              label="Re-enter password"
              autoComplete="current-password"
            />
            {!verification && (
              <Typography variant="body2" color="red">
                Passwords do not match
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {error && (
              <Typography variant="body2" color="red">
                Fields incorrect, try again{" "}
              </Typography>
            )}
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography
                  href="#"
                  variant="body2"
                  component="a"
                  sx={{ textDecoration: "none" }}
                >
                  Forgot password?
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  onClick={switchToSignIn}
                  href="#"
                  component="a"
                  variant="body2"
                  sx={{ textDecoration: "none" }}
                >
                  Don't have an account? Sign Up
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Copyright sx={{ mt: 4, mb: 4 }} />
      </Card>
    </Box>
  );
};
