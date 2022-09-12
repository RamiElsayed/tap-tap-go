import { useState } from "react";

import { ADD_USER } from "../../graphQL/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";
import Copyright from "./CopyRight";

export const SignUp = ({ closeSignUp, switchToSignIn }) => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    number: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // New line

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box
      onClick={closeSignUp}
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
              margin="normal"
              required
              fullWidth
              label="First Name"
              name="firstName"
              value={formState.firstName}
              onChange={handleChange}
              type="text"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="lastName"
              value={formState.lastName}
              onChange={handleChange}
              label="Last Name"
              type="text"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="username"
              value={formState.username}
              onChange={handleChange}
              label="username"
              type="text"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="number"
              value={formState.number}
              onChange={handleChange}
              label="Phone number"
              type="number"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              value={formState.email}
              onChange={handleChange}
              label="Email"
              type="email"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={formState.password}
              onChange={handleChange}
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography onClick={switchToSignIn} variant="body2">
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
