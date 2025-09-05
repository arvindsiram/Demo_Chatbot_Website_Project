import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import shared layout components
import Header from './components/Header';
import Footer from './components/Footer';

// Import page components
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Tools from './pages/Tools';
import Contact from './pages/Contact';

// Import the DarkModeProvider to wrap the entire application
import { DarkModeProvider } from '../DarkModeContext';

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      {/* This 'basename' prop is the crucial fix. 
        It tells the router that all paths should be relative to this sub-folder.
      */}
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </DarkModeProvider>
  );
};

export default App;

