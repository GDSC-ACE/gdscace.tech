import './App.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Domains from './components/Domains/Domains';
import Prizes from './components/Prizes/Prizes';
import Timeline from './components/Timeline/Timeline';
import Sponsers from './components/Sponsers/Sponsers';
import Faqs from './components/Faqs/Faqs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Domains/>
      <Prizes/>
      <Timeline/>
      <Sponsers/>
      <Faqs/>
      <Footer/>
    </div>
  );
}

export default App;
