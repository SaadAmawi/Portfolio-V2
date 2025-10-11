
import './App.css';
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
      <Projects/>
      <LogoCarouselBundle/>
    </div>
  );
}

export default App;
