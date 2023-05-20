import Home from '../components/Home/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Work from '../components/Work/Work';
import Projects from '../components/Projects/Projects';
import About from '../components/Home/About/About';
import Contact from '../components/Home/Contact/Contact';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/work" element={<Work />}/>
            <Route exact path="/projects" element={<Projects />}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
