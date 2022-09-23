import { Grid } from "@mui/material";
import { useState } from "react";
import Banner from "./Banner";
import AboutUser from "./AboutUser";
import ActionOptions from "./ActionOptions";
import ReviewForm from "../../components/ReviewForm/index";
import { useQuery } from "@apollo/client";
import { GET_PROFILEDATA } from "../../graphQL/queries";
import ReviewCard from "../../components/ReviewCard";
import Auth from "../../utils/auth";
import EventCard from "../../components/Cards/EventCard";

// Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.

let options = ["Bookmarks", "Your Events", "Your Reviews", "Going"];

const Profile = () => {
  //const { userId: userParam } = useParams();
  // const userParam = "6321b33222ddc6d1be9f22dc";
  const userParam = Auth.getProfile().data._id;

  const { loading, data } = useQuery(GET_PROFILEDATA, {
    variables: { userId: userParam },
  });

  let userDetails = data?.user || [];
  console.log(userDetails);

  // const [userDetails, setUserDetails] = useState("");

  const [postBoardOption, setPostBoard] = useState("Activities");

  function changeBoardOptions(value) {
    setPostBoard(value);
  }

  function renderPostBoard() {
    if (postBoardOption === "Bookmarks") {
      return (
        <Grid container spacing={2}>
          {userDetails.bookmarks.map((review, i) => {
            return (
              <Grid key={i} item xs={11} sm={10} md={4} lg={3}>
                <EventCard {...review} key={i} />
              </Grid>
            );
          })}
        </Grid>
      );
    } else if (postBoardOption === "Your Events") {
      return (
        <Grid container spacing={2}>
          {userDetails.myEvents.map((myEvent, i) => {
            return (
              <Grid key={i} item xs={11} sm={10} md={4} lg={3}>
                <EventCard {...myEvent} key={i} />
              </Grid>
            );
          })}
        </Grid>
      );
    } else if (postBoardOption === "Your Reviews") {
      return userDetails.reviews.map((review, i) => (
        <ReviewCard {...review} key={i} />
      ));
    } else if (postBoardOption === "NewEvent") {
      return <ReviewForm />;
    } else if (postBoardOption === "Going") {
      return (
        <Grid container spacing={2}>
          {userDetails.events.map((myEvent, i) => {
            return (
              <Grid key={i} item xs={11} sm={10} md={4} lg={3}>
                <EventCard {...myEvent} key={i} />
              </Grid>
            );
          })}
        </Grid>
      );
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
          {/* <ActionOptions changePostBoard={changeBoardOptions} /> */}
        </Grid>
        <Grid item xs={12} md={9}>
          {renderPostBoard()}
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
