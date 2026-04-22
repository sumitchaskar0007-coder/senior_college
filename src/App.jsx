import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import ScrollToTopOnRoute from "./components/ScrollToTopOnRoute";

/* ===== PAGES ===== */
import Home from "./pages/Home";
import About from "./pages/About";
import Administration from "./pages/Administration";
import Departments from "./pages/Departments";
import Admissions from "./pages/Admissions";
import Facilities from "./pages/Facilities";
import StudentCorner from "./pages/StudentCorner";
import IQAC from "./pages/IQAC";
import NAAC from "./pages/NAAC";
import NIRF from "./pages/NIRF";
import Research from "./pages/Research";
import Alumni from "./pages/Alumni";
import Contact from "./pages/Contact";

/* ⭐ ADD THIS IMPORT (MAIN FIX) */
import ProgramRoute from "./pages/ProgramRoute";

function App() {
  return (
    <Router basename="/">
      <ScrollToTopOnRoute />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/student-corner" element={<StudentCorner />} />
          <Route path="/iqac" element={<IQAC />} />
          <Route path="/naac" element={<NAAC />} />
          <Route path="/nirf" element={<NIRF />} />
          <Route path="/research" element={<Research />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/contact" element={<Contact />} />

          {/* ⭐ DYNAMIC PROGRAM ROUTE */}
          <Route path="/program/:slug" element={<ProgramRoute />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
