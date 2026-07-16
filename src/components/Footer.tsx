import { MapPin, Mail, Phone, Facebook, Twitter, Youtube, Globe } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (id: PageId) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800" id="adept-footer">
      <div className="mx-auto w-full max-w-full px-4 py-12 sm:px-6 lg:px-8 xl:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-800 text-left">
          
          {/* Column 1: ADEPT PHARMA */}
          <div className="md:col-span-5 space-y-6">
            <h4 className="text-base font-bold text-cyan-400 uppercase tracking-wider pb-1 inline-block font-display">
              Adept Pharma
            </h4>
            
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-slate-350">
              <button onClick={() => handleNavClick('home')} className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors text-left">
                <span className="text-slate-500 font-mono text-[10px]">&rarr;</span> <span>Home</span>
              </button>
              <button onClick={() => handleNavClick('about')} className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors text-left">
                <span className="text-slate-500 font-mono text-[10px]">&rarr;</span> <span>About us</span>
              </button>
              <button onClick={() => handleNavClick('services')} className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors text-left">
                <span className="text-slate-500 font-mono text-[10px]">&rarr;</span> <span>Services</span>
              </button>
              <button onClick={() => handleNavClick('services')} className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors text-left">
                <span className="text-slate-500 font-mono text-[10px]">&rarr;</span> <span>Facilities</span>
              </button>
              <button onClick={() => handleNavClick('accredations')} className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors text-left">
                <span className="text-slate-500 font-mono text-[10px]">&rarr;</span> <span>Accreditations</span>
              </button>
              <button onClick={() => handleNavClick('home')} className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors text-left">
                <span className="text-slate-500 font-mono text-[10px]">&rarr;</span> <span>Clientele</span>
              </button>
              <button onClick={() => handleNavClick('home')} className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors text-left">
                <span className="text-slate-500 font-mono text-[10px]">&rarr;</span> <span>News Events</span>
              </button>
              <button onClick={() => handleNavClick('about')} className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors text-left">
                <span className="text-slate-500 font-mono text-[10px]">&rarr;</span> <span>Gallery</span>
              </button>
              <button onClick={() => handleNavClick('contact')} className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors text-left">
                <span className="text-slate-500 font-mono text-[10px]">&rarr;</span> <span>Contact Us</span>
              </button>
            </div>

            <div className="pt-4 border-t border-slate-800/80">
              <div className="text-3xl font-black font-mono text-cyan-400 tracking-wider">
                1749554
              </div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mt-0.5">
                Total Visitors
              </div>
            </div>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-base font-bold text-cyan-400 uppercase tracking-wider pb-1 inline-block font-display">
              Quick Links
            </h4>
            
            <div className="flex flex-col space-y-2 text-xs text-slate-350">
              {[
                'Chemical',
                'Physical',
                'Instrumental Analysis',
                'Microbiological Services',
                'Pesticide & Agrochemical Testing',
                'Pre-Clinical Services',
                'Molecular Biology'
              ].map((link, idx) => (
                <button 
                  key={idx} 
                  onClick={() => handleNavClick('services')}
                  className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors text-left"
                >
                  <span className="text-slate-500 font-mono text-[10px]">&rarr;</span> <span>{link}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: GET IN TOUCH */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-base font-bold text-cyan-400 uppercase tracking-wider pb-1 inline-block font-display">
              Get In Touch
            </h4>
            
            <div className="space-y-4 text-xs text-slate-350">
              
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Plot No #30 & 31, Survey No: 196, 197, 198, Rajiv Gandhi Nagar, Moosapet (V), GHMC Kukatpally circle, Balanagar (M), Hyderabad-500037
                </p>
              </div>

              {/* Emails */}
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p><a href="mailto:agr@adeptpharmabio.com" className="hover:text-cyan-400 transition-colors">agr@adeptpharmabio.com</a></p>
                  <p><a href="mailto:info@adeptpharmabio.com" className="hover:text-cyan-400 transition-colors">info@adeptpharmabio.com</a></p>
                  <p><a href="mailto:hr@adeptpharmabio.com" className="hover:text-cyan-400 transition-colors">hr@adeptpharmabio.com</a></p>
                  <p><a href="mailto:bdm@adeptpharmabio.com" className="hover:text-cyan-400 transition-colors">bdm@adeptpharmabio.com</a></p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p><a href="tel:+919346619575" className="hover:text-cyan-400 transition-colors">+91 9346619575</a></p>
                  <p><a href="tel:+917995372062" className="hover:text-cyan-400 transition-colors">+91 7995372062</a></p>
                </div>
              </div>

            </div>

            {/* Social Media Links */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center space-x-2.5">
              <a href="#" className="h-7 w-7 rounded bg-slate-850 hover:bg-cyan-500 hover:text-white flex items-center justify-center transition-colors text-slate-400">
                <Facebook className="h-3.5 w-3.5" />
              </a>
              <a href="#" className="h-7 w-7 rounded bg-slate-850 hover:bg-cyan-500 hover:text-white flex items-center justify-center transition-colors text-slate-400">
                <Twitter className="h-3.5 w-3.5" />
              </a>
              <a href="#" className="h-7 w-7 rounded bg-slate-850 hover:bg-cyan-500 hover:text-white flex items-center justify-center transition-colors text-slate-400 text-[10px] font-bold font-mono">
                G+
              </a>
              <a href="#" className="h-7 w-7 rounded bg-slate-850 hover:bg-cyan-500 hover:text-white flex items-center justify-center transition-colors text-slate-400 text-[10px] font-bold font-mono">
                S
              </a>
              <a href="#" className="h-7 w-7 rounded bg-slate-850 hover:bg-cyan-500 hover:text-white flex items-center justify-center transition-colors text-slate-400">
                <Youtube className="h-3.5 w-3.5" />
              </a>
              <a href="#" className="h-7 w-7 rounded bg-slate-850 hover:bg-cyan-500 hover:text-white flex items-center justify-center transition-colors text-slate-400">
                <Globe className="h-3.5 w-3.5" />
              </a>
            </div>

          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4" id="footer-bottom-row">
          <p>Copyright &copy; 2017 Adept Pharma. All right reserved.</p>
          <div className="text-slate-600">
            Powered By:
          </div>
        </div>

      </div>
    </footer>
  );
}
