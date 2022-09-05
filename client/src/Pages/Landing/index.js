import PrimarySearchAppBar from "../../components/navbar/index.js";
import Hero from "../../components/Hero/index.js";
import RecentlySeen from "../../components/RecentlySeen/index.js";
import Cards from "../../components/Cards/index";
import { Typography } from "@mui/material";
import TopSellers from "../../components/TopSellers/index.js";
import { Container } from "@mui/system";

export default function Landing() {
  return (
    <>
      <Container maxWidth="xl">
        <PrimarySearchAppBar></PrimarySearchAppBar>
        <Hero></Hero>
        <RecentlySeen></RecentlySeen>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Want to learn to dance?? Check in your area
        </Typography>
        <Cards />
        <TopSellers></TopSellers>
        <Cards />
      </Container>
    </>
  );
}
