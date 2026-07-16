import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, FileCheck, PhoneCall } from 'lucide-react';
import { PageId } from '../types';
import AdeptLogo from './AdeptLogo';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'accredations', label: 'Accreditations' },
    { id: 'instrumentation', label: 'Instrumentation' },
    { id: 'clientele', label: 'Clientele' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    setCurrentPage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyan-100/40 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex h-18 w-full max-w-full items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Logo */}
        <div 
          className="flex cursor-pointer items-center" 
          onClick={() => handleNavClick('home')}
          id="nav-logo-btn"
        >
          <AdeptLogo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1.5" id="desktop-nav">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}-btn`}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? 'text-blue-700 bg-cyan-50/75 shadow-sm border border-cyan-100/50' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeBubble"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-100/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-3" id="desktop-actions">
          <button
            onClick={() => handleNavClick('contact')}
            className="relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium text-white shadow-md shadow-blue-200/50 transition-transform duration-300 hover:scale-103"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600" />
            <span className="relative flex items-center space-x-1.5 rounded-full bg-slate-900/1 px-5 py-2 transition-colors duration-300 hover:bg-slate-900/0">
              <span className="text-sm font-semibold tracking-wide">Request Testing</span>
              <ChevronRight className="h-4 w-4 animate-bounce" />
            </span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={() => handleNavClick('contact')}
            className="p-2 rounded-full bg-cyan-50 text-cyan-600 hover:bg-cyan-100"
            title="Service Inquiry"
          >
            <PhoneCall className="h-4 w-4" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-lg text-slate-600 hover:bg-slate-50 border border-slate-100 transition-colors"
            aria-label="Toggle menu"
            id="mobile-menu-toggle-btn"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-slate-100 bg-white"
            id="mobile-nav-menu"
          >
            <div className="space-y-1.5 px-4 pt-3 pb-6">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex w-full items-center justify-between rounded-lg px-4.5 py-3 text-base font-semibold transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-50 to-blue-50/50 text-blue-700 border-l-4 border-cyan-500 pl-3.5'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`h-4 w-4 text-slate-400 transition-transform ${isActive ? 'rotate-90 text-cyan-500' : ''}`} />
                  </button>
                );
              })}
              
              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col space-y-3">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="flex items-center justify-center space-x-2 w-full py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg shadow-md hover:from-cyan-500 hover:to-blue-700 transition-all"
                >
                  <span>Request Testing Quote</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
