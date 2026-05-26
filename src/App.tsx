import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import Header from "./components/Header";
import SubHeader from "./components/Subheader";
import Footer from "./components/Footer";
import logo from "./assets/newlogo.png";
import Creative from "./pages/creative";
import Ops from "./pages/ops";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";


const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
          {/* Header + Subheader */}
          <Header
            logoSrc={logo} 
            brand="R43 Digital Tech"
            locationNote="Serving Stevens County and Surrounding Areas"
          />
          <SubHeader />

          {/* Main routed pages */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="creative" element={<Creative />} />
              <Route path="ops" element={<Ops />} />
              <Route path="contact" element={<Contact />} />
              <Route path="projects" element={<Projects />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
