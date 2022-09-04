import PrimarySearchAppBar from "../../components/navbar/index.js";
import Hero from "../../components/Hero/index.js";
import RecentlySeen from "../../components/RecentlySeen/index.js";

export default function Landing() {
  return (
    <>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <Hero></Hero>
      <RecentlySeen></RecentlySeen>
    </>
  );
}
