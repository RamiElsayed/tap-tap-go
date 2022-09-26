import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import { Keywords } from "./_mock/RecentSearches/index.js";
import HowItWorks from "./Pages/HowItWorks";
import { ModalProvider } from "./utils/ModalContext";
import Modals from "./components/Modals/index";

const httpLink = createHttpLink({
  uri: `${window.location.origin}/graphql`,
  // uri: `http://localhost:3001/graphql`,
});

console.log(window.location.origin);
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

  return (
    <ApolloProvider client={client}>
      <Router>
        <ModalProvider>
          <Modals />
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={<Landing recentSearches={recentSearches} />}
              />
              <Route path="/user/:usedId" element={<Profile />} />
              <Route path="/search-by-city/:city" element={<EventsByCity />} />
              <Route path="/search/:city/:tag" element={<CityEventsPage />} />
              <Route path="/new-event" element={<EventForm />} />
              <Route path="/event/:eventId" element={<EventPage />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
            </Routes>

            <Footer />
          </Container>
        </ModalProvider>
      </Router>
    </ApolloProvider>
  );
};
