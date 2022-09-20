import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignForms } from "./components/SignForms/index";
import Profile from "./Pages/Profile";
import Navbar from "./components/navbar";
import Landing from "./Pages/Landing";
import CityEventsPage from "./Pages/CityEventsPage/CityEventsPage";
import EventsByCity from "./Pages/CityEventsPage/EventsByCity";
import EventPage from "./Pages/EventPage";
import { Container } from "@mui/system";
import Footer from "./components/Footer";
import { useState } from "react";
import EventForm from "./components/Eventform/index";
import BookMark from "./components/bookmark";
import { Keywords } from "./_mock/RecentSearches/index.js";
import { SignUp } from "./components/SignForms/SignUp";
import HowItWorks from "./Pages/HowItWorks";

const httpLink = createHttpLink({
  uri: `${window.location.origin}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const App = () => {
  const [recentSearches, setRecentSearches] = useState(Keywords);
  const [modalState, setModalState] = useState(false);
  const [BookmarksModalState, setBookmarksModalState] = useState(false);

  // function openModal(type) {
  //   type((prev) => !prev);
  // }

  function closeModal(event) {
    const isCloseBox = event.target.getAttribute("value");
    setModalState((prev) => {
      return isCloseBox === "CloseBox" ? !prev : prev;
    });
  }

  return (
    <ApolloProvider client={client}>
      {modalState ? <SignForms closeModal={closeModal} /> : ""}
      {BookmarksModalState ? (
        <BookMark
          closeBookmarks={() => setBookmarksModalState((prev) => !prev)}
        />
      ) : (
        ""
      )}
      <Router>
        <Container
          maxWidth="xl"
          sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
        >
          <Navbar
            openBookmarks={setBookmarksModalState}
            openModal={setModalState}
          />
          <Routes>
            <Route
              path="/"
              element={<Landing recentSearches={recentSearches} />}
            />
            <Route path="/user/:usedId" element={<Profile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/search-by-city/:city" element={<EventsByCity />} />
            <Route path="/search/:city/:tag" element={<CityEventsPage />} />
            <Route path="/new-event" element={<EventForm />} />
            <Route path="/test" element={<BookMark />} />
            <Route
              path="/event/:eventId"
              element={
                <EventPage
                  openBookmarks={setBookmarksModalState}
                  openModal={setModalState}
                />
              }
            />
            <Route path="/how-it-works" element={<HowItWorks />} />
          </Routes>

          <Footer />
        </Container>
      </Router>
    </ApolloProvider>
  );
};
