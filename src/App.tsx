import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#fcf9f5] text-zinc-800 antialiased font-sans flex flex-col justify-between selection:bg-[#f5ebe6] selection:text-zinc-900">
      {/* Navigation menu */}
      <Navbar />
      
      {/* Main page content sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Dashboard />
        <Contact />
      </main>
      
      {/* Footer navigation and copyright */}
      <Footer />
    </div>
  );
}
