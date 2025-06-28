import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import "./components/Footer"
import Footer from "./components/Footer";

function App() {
  return (
    <>    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </BrowserRouter>

    <Footer />
    </>

  );
}

export default App;
