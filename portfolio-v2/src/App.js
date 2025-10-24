
import './App.css';
import './theme.css';
import AboutMe from './Components/AboutMe';
import Experience from './Components/Experience';
import Header from './Components/Header';
import { ToggleProvider } from './toggleContext';
import Hero from './Components/Hero';
import LogoCarouselBundle from './Components/LogoCarousel/LogoCarouselBundle';
import './index.css'
function App() {
  return (
    <div className="App">
      <ToggleProvider>
      <Header/>
      <Hero/>
      <Experience/>
      </ToggleProvider>
      <AboutMe/>
      <LogoCarouselBundle/>
    </div>
  );
}

export default App;
