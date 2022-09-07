import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignIn from "./login";
import Profile from "./Pages/Profile";
import ResponsiveAppBar from "./components/navbar";
import Landing from "./Pages/Landing";
import EventPage from "./Pages/EventPage";
import { Container } from "@mui/system";
import Footer from "./components/Footer";
import { useState } from "react";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

let recentLocations = [
  "Birmingham",
  "London",
  "Derby",
  "Brighton",
  "Manchester",
  "Leeds",
];

function App() {
  const [recentSearches, setRecentSearches] = useState(recentLocations);
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container maxWidth="xl">
          <ResponsiveAppBar />
          <Routes>
            <Route
              path="/"
              element={<Landing recentSearches={recentSearches} />}
            />
            <Route>
              <Route path="/user/:usedId" element={<Profile />} />
            </Route>
          </Routes>
          <Footer />
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
