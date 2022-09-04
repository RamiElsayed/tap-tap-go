import PrimarySearchAppBar from "./components/navbar/index.js";
import Hero from "./components/Hero/index.js";
import RecentlySeen from "./components/RecentlySeen/index.js";
import EventCard from "./components/Cards/EventCard";
import Cards from "./components/Cards/index.js";
import "./App.css";

import Profile from "./Pages/Profile";
import NavBar from "./components/navbar/index";
import { Card } from "@mui/material";
function App() {
  return (
    <>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <Hero></Hero>
      {/* <RecentlySeen></RecentlySeen> */}
      <Cards />
    </>
  );
}

export default App;
