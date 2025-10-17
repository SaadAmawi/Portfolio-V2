
import './App.css';
import AboutMe from './Components/AboutMe';
import Header from './Components/Header';
import Hero from './Components/Hero';
import LogoCarouselBundle from './Components/LogoCarousel/LogoCarouselBundle';
import Skills from './Components/Skills';
import './index.css'
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <LogoCarouselBundle/>
    </div>
  );
}

export default App;
