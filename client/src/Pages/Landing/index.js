import PrimarySearchAppBar from "../../components/navbar/index.js";
import Hero from "../../components/Hero/index.js";
import RecentlySeen from "../../components/RecentlySeen/index.js";
import Cards from "../../components/Cards/index";
import TopSellers from "../../components/TopSellers/index.js";

export default function Landing() {
  return (
    <>
      <Hero />
      <RecentlySeen></RecentlySeen>
      <TopSellers />
      <Cards />
    </>
  );
}
