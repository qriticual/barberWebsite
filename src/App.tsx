import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './components/navbar/Navbar';
import BottomMenu from './components/bottomMenu/BottomMenu';

const App = () => {
  return (
    <>
    <Navbar />
      <section id="home-section">
        <Home />
      </section>
      <section id="about-section">
        <Home />
      </section>
      <section id="about-section">
        <Home />
      </section>
      <section id="about-section">
        <Home />
      </section>
      <section id="about-section">
        <Home />
      </section>
      <BottomMenu/>
    </>
  )
}

export default App
