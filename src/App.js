import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mapsection from './components/Mapsection';
import LocationInputMap from './components/LocationInputMap';
import Footer from './components/Footer';
import OurMission from './pages/OurMission';
import OurFirm from './pages/OurFirm';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero />
      <Mapsection />
      <LocationInputMap /> */}
      <OurFirm />
      <Footer />

      
    </div>
  );
}

export default App;
