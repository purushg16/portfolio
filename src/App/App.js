import Home from '../components/Home/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
            <Route exact path="/" element={<Home />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
