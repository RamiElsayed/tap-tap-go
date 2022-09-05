import PrimarySearchAppBar from "../../components/navbar/index.js";
import Hero from "../../components/Hero/index.js";
import RecentlySeen from "../../components/RecentlySeen/index.js";
import Cards from "../../components/Cards/index";
import TopSellers from "../../components/TopSellers/index.js";
import { Container } from "@mui/system";
import Footer from "../../components/Footer/index.jsx";

export default function Landing() {
  return (
    <>
      <Container maxWidth="xl">
        <PrimarySearchAppBar></PrimarySearchAppBar>
        <Hero></Hero>
        <RecentlySeen></RecentlySeen>
      </Container>
      <TopSellers />

      <Container maxWidth="xl">
        <Cards />
      </Container>
      <Footer />
    </>
  );
}
