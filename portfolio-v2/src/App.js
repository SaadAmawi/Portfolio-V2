
import './App.css';
import AboutMe from './Components/AboutMe';
import Header from './Components/Header';
import Hero from './Components/Hero';
import LogoCarouselBundle from './Components/LogoCarousel/LogoCarouselBundle';
import './index.css'
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <AboutMe/>
      <LogoCarouselBundle/>
    </div>
  );
}

export default App;
