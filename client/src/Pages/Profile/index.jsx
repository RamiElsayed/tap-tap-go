import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "./Banner";
import AboutUser from "./AboutUser";
import PostBoard from "./PostBoard";
import Bookmarks from "./Bookmarks";
import ActionOptions from "./ActionOptions";
import ReviewForm from "../../components/ReviewForm/index";
import { useQuery } from "@apollo/client";
import { GET_PROFILEDATA, QUERY_ME } from "../../graphQL/queries";
import ReviewCard from "../../components/ReviewCard";
import Auth from "../../utils/auth";
import EventCard from "../../components/Cards/EventCard";

// Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.

let options = [ "Bookmarks", "Your Events", "Reviews", "Manage"];

const Profile = () => {
  //const { userId: userParam } = useParams();
  // const userParam = "6321b33222ddc6d1be9f22dc";
  const userParam = Auth.getProfile().data._id;

  useEffect(() => {
    let userIDFromToken = Auth.getProfile().data._id;
    console.log(userIDFromToken);
  }, []);

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
 if (postBoardOption == "Bookmarks") {
      return (
        <Grid container spacing={2}>
          {userDetails.bookmarks.map((review, i) => {
            return (
              <Grid item xs={11} sm={10} md={4} lg={3}>
                <EventCard {...review} key={i} />
              </Grid>
            );
          })}
        </Grid>
      );
    } else if (postBoardOption == "Your Events") {
      return <PostBoard />;
    } else if (postBoardOption == "Reviews") {
      return userDetails.reviews.map((review, i) => (
        <ReviewCard {...review} key={i} />
      ));
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
