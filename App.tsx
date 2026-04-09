import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Arsenal from './pages/Arsenal';
import Journey from './pages/Journey';
import Verification from './pages/Verification';
import Certifications from './pages/Certifications';
import Resources from './pages/Resources';
import Discovery from './pages/Discovery';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

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
            <Route path="/case-studies" element={<Projects />} />
            <Route path="/case-studies/:projectId" element={<Projects />} />
            <Route path="/arsenal" element={<Arsenal />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/discovery" element={<Discovery />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;