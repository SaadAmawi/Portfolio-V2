
import './App.css';
import AboutMe from './Components/AboutMe';
import Header from './Components/Header';
import Hero from './Components/Hero';
import LogoCarouselBundle from './Components/LogoCarousel/LogoCarouselBundle';
import Projects from './Components/Projects';
import './index.css'
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <AboutMe/>
      {/* <Projects/> */}
      <LogoCarouselBundle/>
    </div>
  );
}

export default App;
