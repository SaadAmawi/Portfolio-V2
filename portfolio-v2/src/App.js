
import './App.css';
import AboutMe from './Components/AboutMe';
import Experince from './Components/Experience';
import Header from './Components/Header';
import { ToggleProvider } from './Context/toggleContext';
import Hero from './Components/Hero';
import LogoCarouselBundle from './Components/LogoCarousel/LogoCarouselBundle';
import './index.css'
function App() {
  return (
    <div className="App">
      <ToggleProvider>
      <Header/>
      <Hero/>
      <Experince/>
      </ToggleProvider>
      <AboutMe/>
      <LogoCarouselBundle/>
    </div>
  );
}

export default App;
