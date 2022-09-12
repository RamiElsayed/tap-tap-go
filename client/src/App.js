import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignForm from "./components/SignIn/index";
import Profile from "./Pages/Profile";
import ResponsiveAppBar from "./components/navbar";
import Landing from "./Pages/Landing";
import EventPage from "./Pages/EventPage";
import { Container } from "@mui/system";
import Footer from "./components/Footer";
import { useState } from "react";
import EventForm from "./components/Eventform/index";
import BookMark from "./components/bookmark";
import { Keywords } from "./_mock/RecentSearches/index.js";

const httpLink = createHttpLink({
  uri: "/graphql",
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

function App() {
  const [recentSearches, setRecentSearches] = useState(Keywords);
  const [signInOpen, setSignInOpen] = useState(false);

  function openModal() {
    setSignInOpen((prev) => !prev);
  }

  function closeModal(event) {
    const isCloseBox = event.target.getAttribute("value");
    console.log(isCloseBox);
    setSignInOpen((prev) => {
      return isCloseBox === "CloseBox" ? !prev : prev;
    });
  }

  return (
    <ApolloProvider client={client}>
      {signInOpen ? <SignForm closeForm={closeModal} /> : ""}
      <Router>
        <Container maxWidth="xl">
          <ResponsiveAppBar signInStateOpener={openModal} />
          <Routes>
            <Route
              path="/"
              element={<Landing recentSearches={recentSearches} />}
            />
            <Route>
              <Route path="/user/:usedId" element={<Profile />} />
            </Route>
            <Route>
              <Route path="/new-event" element={<EventForm />} />
            </Route>
            <Route>
              <Route path="/test" element={<BookMark />} />
            </Route>
          </Routes>
          <Footer />
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
