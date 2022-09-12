import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
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

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [recentSearches, setRecentSearches] = useState(Keywords);
  const [signInOpen, setSignInOpen] = useState(false);

  function openSignIn() {
    setSignInOpen((prev) => !prev);
  }

  function closeSignIn(event) {
    const isCloseBox = event.target.getAttribute("value");
    setSignInOpen((prev) => {
      return isCloseBox ? !prev : prev;
    });
  }

  return (
    <ApolloProvider client={client}>
      {signInOpen ? <SignForm closeForm={closeSignIn} /> : ""}
      <Router>
        <Container maxWidth="xl">
          <ResponsiveAppBar signInStateOpener={openSignIn} />
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
