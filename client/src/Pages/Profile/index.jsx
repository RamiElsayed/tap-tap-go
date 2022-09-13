import { Grid } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "./Banner";
import AboutUser from "./AboutUser";
import PostBoard from "./PostBoard";
import Bookmarks from "./Bookmarks";
import ActionOptions from "./ActionOptions";
import ReviewForm from "../../components/ReviewForm/index";
import { useQuery } from "@apollo/client";
import { GET_PROFILEDATA, QUERY_ME } from "../../graphQL/queries";

// Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.

let options = ["Activities", "Bookmarks", "Your Events", "Reviews", "Manage"];

const Profile = () => {
  //const { userId: userParam } = useParams();
  const userParam = "63208fd7a316f0af42ad5557";
  const { loading, data } = useQuery(GET_PROFILEDATA, {
    variables: { userId: userParam },
  });

  let userDetails = data?.user || [];

  // const [userDetails, setUserDetails] = useState("");

  const [postBoardOption, setPostBoard] = useState("Activities");

  function changeBoardOptions(value) {
    setPostBoard(value);
  }

  function renderPostBoard() {
    if (postBoardOption == "Activities") {
      return <PostBoard />;
    } else if (postBoardOption == "Bookmarks") {
      return <Bookmarks bookmarkData={userDetails.bookmarks} />;
    } else if (postBoardOption == "Your Events") {
      return <PostBoard />;
    } else if (postBoardOption == "Reviews") {
      return <PostBoard />;
    } else if (postBoardOption == "NewEvent") {
      return <ReviewForm />;
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
            changePostBoard={changeBoardOptions}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <AboutUser userInfo={userDetails} />
          <ActionOptions changePostBoard={changeBoardOptions} />
        </Grid>
        <Grid item xs={12} md={9}>
          {renderPostBoard()}
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
