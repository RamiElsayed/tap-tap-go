import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Banner from "./Banner";
import AboutUser from "./AboutUser";
import PostBoard from "./PostBoard";
import ActionOptions from "./ActionOptions";

let UserData = {
  firstName: "Fabian",
  lastName: "Sarango",
  username: "Fabian Sarango",
  number: "075429718393",
  email: "fasasa@gmail.com",
  attended: 4,
  upcoming: 5,
  yours: 6,
};

function Profile() {
  const [userDetails, setUserDetails] = useState(UserData);

  return (
    <div className="section__block-Y-5">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Banner userInfo={userDetails} />
        </Grid>
        <Grid item xs={12} md={3}>
          <AboutUser />
          <ActionOptions />
        </Grid>
        <Grid item xs={12} md={9}>
          <PostBoard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
