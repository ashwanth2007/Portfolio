import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Arsenal from './pages/Arsenal';
import Journey from './pages/Journey';
import Verification from './pages/Verification';
import Certifications from './pages/Certifications';
import Discovery from './pages/Discovery';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-black font-sans selection:bg-brand-red selection:text-white grid-bg">
        <Navbar />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/arsenal" element={<Arsenal />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/discovery" element={<Discovery />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;