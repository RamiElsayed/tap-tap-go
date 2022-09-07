import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignIn from "./login";
import Profile from "./Pages/Profile";
import ResponsiveAppBar from "./components/navbar";
import Landing from "./Pages/Landing";
import EventPage from "./Pages/EventPage";
import { Container } from "@mui/system";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container maxWidth="xl">
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route>
              <Route path="/user/:usedId" element={<Profile />} />
            </Route>
          </Routes>
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
