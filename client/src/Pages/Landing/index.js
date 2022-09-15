import PrimarySearchAppBar from '../../components/Navbar/index.js';
import Hero from '../../components/Hero/index.js';
import RecentlySeen from '../../components/RecentlySeen/index.js';
import Cards from '../../components/Cards/index';
import TopSellers from '../../components/TopSellers/index.js';

export default function Landing({ recentSearches }) {
  return (
    <div style={{ flexGrow: '1' }}>
      <Hero />
      <RecentlySeen recentSearches={recentSearches} />
      <TopSellers />

      {/* <Cards /> */}
    </div>
  );
}
