import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Partners from './pages/Partners';

function App() {
  return (
    <Router>
      <div className="w-full font-outfit text-brand-navy-dark overflow-x-hidden min-h-screen flex flex-col justify-between">
        {/* Global shared Top Navigation Bar */}
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/partners" element={<Partners />} />
          </Routes>
        </main>
        
        {/* Global shared bottom sections */}
        <JoinUs />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
