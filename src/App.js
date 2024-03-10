import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import {
  HashRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
          <Route exact path="/About" element={<About/>}>
          </Route>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route exact path="/Portfolio" element={<Portfolio/>}>
          </Route>
          <Route exact path="/Contact" element={<Contact/>}>
          </Route>
          <Route exact path="/Footer" element={<Footer/>}>
          </Route>
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
