import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Navbar from "../components/Common/Navbar";
import NotFound from "../pages/NotFound";
import Footer from "../components/Common/Footer";
import Principal from "../pages/Principal";
import Team from "../pages/Team";

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/principal" element={<Principal />} />
          <Route path="/team" element={<Team />} />

        {/* 404 fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}
