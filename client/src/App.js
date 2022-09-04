import PrimarySearchAppBar from "./components/navbar/index.js";
import Hero from "./components/Hero/index.js";
import RecentlySeen from "./components/RecentlySeen/index.js";
import "./App.css";

function App() {
  const title = "Salsa with Fabian Sarango";
  const price = "From £15 per person";
  const value = 4;
  const nRatings = 254;

  return (
    <>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <Hero></Hero>
      <RecentlySeen></RecentlySeen>
    </>
  );
}

export default App;
