
import './App.css';
import PopularDestinations from './components/destinations-card';
import VoiceSearch from './components/floating-button';
import Footer from './components/footer';
import Nav from './components/nav';
import OptionsSelection from './components/options-selections';
import RectangleImage from './components/rectangle-image';
import SearchButton from './components/search-button';
import TopAirlines from './components/top-airlines';

function App() {
  return (
    <div>
      <Nav/>
      <RectangleImage />
      <OptionsSelection />
      <SearchButton />
      <VoiceSearch />
      {/* <PopularDestinations /> */}
      <TopAirlines />
      <Footer />
    </div>
  );
}

export default App;
