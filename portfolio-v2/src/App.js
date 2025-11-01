
import './App.css';
import './theme.css';
import AboutMe from './Components/AboutMe';
import Experience from './Components/Experience';
import Header from './Components/Header';
import { ToggleProvider } from './toggleContext';
import Hero from './Components/Hero';
// import LogoCarouselBundle from './Components/LogoCarousel/LogoCarouselBundle';
import './index.css'
import Projects from './Components/Projects';
import GPT from './Components/GPT';


function App() {

  return (
    <div className="App">
      <ToggleProvider>
      <Header/>
      <Hero/>
      <AboutMe/>
      <Experience/>
      </ToggleProvider>
      {/* <LogoCarouselBundle/> */}
      <Projects/>
      <GPT/>

    </div>
  );
}

export default App;
