import {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';
import {Analytics} from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Process from './pages/Process';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import About from './pages/About';

// BrowserRouter has no scroll restoration (that needs a data router), so routes
// otherwise open at whatever offset the previous page was scrolled to.
function ScrollToTop() {
  const {pathname} = useLocation();
  // Block body, not a concise one: React treats an effect's return value as the
  // cleanup function, and scrollTo's return value is not callable.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="px-6 pt-28 pb-20 md:pb-28 mx-auto max-w-6xl">
      <title>VersaLab | Page not found</title>
      <p className="t-eyebrow text-violet mb-6">Error 404</p>
      <h1 className="t-h1 text-ink mb-6 max-w-[16ch]">This page doesn't exist.</h1>
      <p className="t-body max-w-[52ch] mb-8">
        The link may be out of date. Everything we offer is one click away.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center bg-ink text-paper px-7 py-3.5 rounded-full text-[0.9375rem] font-medium hover:bg-violet transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-cream text-muted font-sans selection:bg-violet/15 selection:text-ink">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}
