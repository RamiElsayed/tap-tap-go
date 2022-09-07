import { Grid } from "@mui/material";
import React, { useState } from "react";
import Banner from "./Banner";
import AboutUser from "./AboutUser";
import PostBoard from "./PostBoard";
import Bookmarks from "./Bookmarks";
import ActionOptions from "./ActionOptions";

let UserData = {
  firstName: "Fabian",
  lastName: "Sarango",
  address: "3 barleycorn Drive",
  username: "Fabian Sarango",
  number: "075429718393",
  email: "fasasa@gmail.com",
  attended: 4,
  upcoming: 5,
  yours: 6,
};

let options = ["Activities", "Bookmarks", "Your Events", "Reviews", "Manage"];

function Profile() {
  const [userDetails, setUserDetails] = useState(UserData);
  const [postBoardOption, setPostBoard] = useState("Activities");

  function renderPostBoard(value) {
    console.log("inside");
    setPostBoard(value);
  }

  function renderPostBoar() {
    if (postBoardOption == "Activities") {
      return <PostBoard />;
    } else if (postBoardOption == "Bookmarks") {
      return <Bookmarks />;
    } else if (postBoardOption == "Your Events") {
      return <PostBoard />;
    } else if (postBoardOption == "Reviews") {
      return <PostBoard />;
    } else {
      return <h1>Hello</h1>;
    }
  }
  return (
    <div className="section__block-Y-5">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Banner
            userInfo={userDetails}
            bannerOptions={options}
            changePostBoard={renderPostBoard}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <AboutUser userInfo={userDetails} />
          <ActionOptions />
        </Grid>
        <Grid item xs={12} md={9}>
          {renderPostBoar()}
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
