import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Navbar from "../components/Common/Navbar";
import NotFound from "../pages/NotFound";
import Footer from "../components/Common/Footer";
import Principal from "../pages/Principal";
import Team from "../pages/Team";
import Facilities from "../pages/Facilities";
import Curriculum from "../pages/Curriculum";
import Admission from "../pages/Admission";
import Gallery from "../pages/Gallery";
import Legacy from "../pages/Legacy";
import Playgroup from "../pages/Playgroup";
import Nursery from "../pages/Nursery";
import LKG from "../pages/LKG";
import UKG from "../pages/UKG";

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/principal" element={<Principal />} />
          <Route path="/team" element={<Team />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/legacy" element={<Legacy />} />
          <Route path="/playgroup" element={<Playgroup />} />
          <Route path="/nursery" element={<Nursery />} />
          <Route path="/lkg" element={<LKG />} />
          <Route path="/ukg" element={<UKG />} />

        {/* 404 fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}
