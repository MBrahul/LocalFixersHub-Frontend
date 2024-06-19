import './App.css';
import Explore from './components/Explore/Explore';
import Hero from './components/Hero/Hero';
import KeyFeatures from './components/KeyFeatures/KeyFeatures';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Explore/>
    <Services/>
    <KeyFeatures/>
    </>
  );
}

export default App;
