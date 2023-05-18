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


function App() {

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/work" element={<Work />}/>
            <Route exact path="/projects" element={<Projects />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
