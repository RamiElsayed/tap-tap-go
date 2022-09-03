import PrimarySearchAppBar from "./components/navbar/index.js";
import Hero from "./components/Hero/index.js";
import RecentlySeen from "./components/RecentlySeen/index.js";
import "./App.css";

function App() {
  return (
    <>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <Hero></Hero>
      <RecentlySeen></RecentlySeen>
    </>
  );
}

export default App;
