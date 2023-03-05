import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Pre";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/about" exact element={<About />} />
          <Route path="/projects" exact element={<Projects />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
