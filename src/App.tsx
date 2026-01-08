import React from 'react';
import { Code2, Rocket, Users, MessageSquare, CheckCircle, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import MonthlyPlans from './components/MonthlyPlans';
import OneOffFixes from './components/OneOffFixes';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <MonthlyPlans />
      <OneOffFixes />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;