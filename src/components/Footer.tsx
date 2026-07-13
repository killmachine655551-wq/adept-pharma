import { ExternalLink, ShieldAlert } from 'lucide-react';
import { PageId } from '../types';
import AdeptLogo from './AdeptLogo';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (id: PageId) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800" id="adept-footer">
      <div className="mx-auto w-full max-w-full px-4 py-12 sm:px-6 lg:px-8 xl:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800 text-left">
          
          {/* Col 1: Logo & Disclaimer */}
          <div className="md:col-span-4 space-y-4">
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => handleNavClick('home')}
            >
              <AdeptLogo theme="dark" />
            </div>
            
            <p className="text-xs leading-relaxed max-w-sm">
              cGMP-compliant contract pharmaceutical and bioscience testing laboratory. Providing quantitative purity assays, stability storage studies, and raw material release testing.
            </p>

            <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 text-[10px] text-yellow-500 font-mono">
              <ShieldAlert className="h-3.5 w-3.5 text-yellow-500 shrink-0" />
              <span>SAMPLES SUBMITTED ARE FOR RESEARCH & ANALYSIS VALIDATION ONLY.</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Validation Suite</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-cyan-400 transition-colors">
                  Analytical Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-cyan-400 transition-colors">
                  Compliance & About
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-cyan-400 transition-colors">
                  Testing Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('accredations')} className="hover:text-cyan-400 transition-colors">
                  Accreditations & Licensing
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('instrumentation')} className="hover:text-cyan-400 transition-colors">
                  Calibrated Hardware Array
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('clientele')} className="hover:text-cyan-400 transition-colors">
                  Interactive COA Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Accreditations list */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Quality Accreditations</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center space-x-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>DCA, State of Telangana Approved</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>ISO 9001:2015 QMS Certified</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>FSSAI Approved Testing Scope</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>ICH Q1A & Q2(R1) Compliant Methods</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Rapid support */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Support & Hotline</h4>
            <ul className="space-y-1 text-xs">
              <li className="text-slate-100 font-semibold">+91 9346619575</li>
              <li>info@adeptpharmabio.com</li>
              <li className="pt-2 text-[10px] text-slate-500 font-mono">
                LIMS SECURED PORTAL v4.11
              </li>
            </ul>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4" id="footer-bottom-row">
          <p>© {new Date().getFullYear()} Adept Pharma & Bioscience Excellence. All analytical rights reserved. Licensed by DCA, State of Telangana.</p>
          <div className="flex space-x-4">
            <span className="hover:text-slate-350 cursor-pointer">Privacy Charter</span>
            <span className="hover:text-slate-350 cursor-pointer">Terms of Inspection</span>
            <span className="hover:text-slate-350 cursor-pointer">cGMP Audit Records</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
