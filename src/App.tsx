import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from './types';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Accredations from './components/Accredations';
import Instrumentation from './components/Instrumentation';
import Clientele from './components/Clientele';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string>('');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'services':
        return (
          <Services 
            setCurrentPage={setCurrentPage} 
            setSelectedServiceCategory={setSelectedServiceCategory} 
          />
        );
      case 'accredations':
        return <Accredations setCurrentPage={setCurrentPage} />;
      case 'instrumentation':
        return <Instrumentation />;
      case 'clientele':
        return <Clientele />;
      case 'contact':
        return <Contact prefilledCategory={selectedServiceCategory} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-cyan-500/10 selection:text-cyan-800">
      
      {/* Sleek top regulatory bar with live compliance marquee */}
      <div className="bg-[#2b96cc] text-white text-xs sm:text-sm py-2 border-b border-sky-400/20 font-bold overflow-hidden" id="top-compliance-bar">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="7"
          onMouseOver={(e) => e.currentTarget.stop()}
          onMouseOut={(e) => e.currentTarget.start()}
          className="cursor-pointer"
        >
          <span className="inline-block px-4">
            Approved Testing Laboratory by National Accreditation Board for Testing and Calibration Laboratories (NABL) , Quality Council of India &nbsp;&nbsp;||&nbsp;&nbsp; Approved Testing Laboratory by CDSCO, New Delhi &nbsp;&nbsp;||&nbsp;&nbsp; Approved Testing Laboratory by DCA, State of Telangana &nbsp;&nbsp;||&nbsp;&nbsp; GLP- Certified &nbsp;&nbsp;||&nbsp;&nbsp; Accredited by ISO 9001:2015 &nbsp;&nbsp;||&nbsp;&nbsp; Accredited by OHSAS 18001:2007
          </span>
        </marquee>
      </div>

      {/* Primary Navigation Header */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Core View Area with slide/fade routes transition */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            id="active-view-container"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate Clinical Footer */}
      <Footer setCurrentPage={setCurrentPage} />

    </div>
  );
}
