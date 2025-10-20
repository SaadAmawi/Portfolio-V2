
import './App.css';
import AboutMe from './Components/AboutMe';
import Experince from './Components/Experience';
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
      <Experince/>
      <LogoCarouselBundle/>
    </div>
  );
}

export default App;
