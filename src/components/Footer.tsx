import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { PageId } from '../types';
import AdeptLogo from './AdeptLogo';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
  setActiveServiceTab?: (tab: string) => void;
  visitorCount?: number;
}

export default function Footer({ setCurrentPage, setActiveServiceTab, visitorCount }: FooterProps) {
  const handleNavClick = (id: PageId) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#004aad] text-white border-t border-white/10" id="adept-footer">
      <div className="mx-auto w-full max-w-full px-4 py-12 sm:px-6 lg:px-8 xl:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/15 text-left">
          
          {/* Column 1: ADEPT PHARMA */}
          <div className="md:col-span-3 space-y-6">
            <div className="pb-1">
              <AdeptLogo theme="dark" className="h-12 w-auto" />
            </div>
            
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-white/80">
              <button onClick={() => handleNavClick('home')} className="flex items-center space-x-1.5 hover:text-white transition-colors text-left">
                <span className="text-white/40 font-mono text-[10px]">&rarr;</span> <span>Home</span>
              </button>
              <button onClick={() => handleNavClick('accredations')} className="flex items-center space-x-1.5 hover:text-white transition-colors text-left">
                <span className="text-white/40 font-mono text-[10px]">&rarr;</span> <span>Accreditations</span>
              </button>
              <button onClick={() => handleNavClick('about')} className="flex items-center space-x-1.5 hover:text-white transition-colors text-left">
                <span className="text-white/40 font-mono text-[10px]">&rarr;</span> <span>About us</span>
              </button>
              <button onClick={() => handleNavClick('services')} className="flex items-center space-x-1.5 hover:text-white transition-colors text-left">
                <span className="text-white/40 font-mono text-[10px]">&rarr;</span> <span>Services</span>
              </button>
              <button onClick={() => handleNavClick('contact')} className="flex items-center space-x-1.5 hover:text-white transition-colors text-left">
                <span className="text-white/40 font-mono text-[10px]">&rarr;</span> <span>Contact Us</span>
              </button>
            </div>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-base font-bold text-white uppercase tracking-wider pb-1 inline-block font-display">
              Quick Links
            </h4>
            
            <div className="flex flex-col space-y-2 text-xs text-white/80">
              {[
                { label: 'Chemical', tab: 'chemical' },
                { label: 'Physical', tab: 'physical' },
                { label: 'Instrumental Analysis', tab: 'instrumental' },
                { label: 'Microbiological Services', tab: 'microbiology' },
                { label: 'Pesticide & Agrochemical Testing', tab: 'pesticide' },
                { label: 'Pre-Clinical Services', tab: 'preclinical' },
                { label: 'Molecular Biology', tab: 'molecular' }
              ].map((item, idx) => (
                <button 
                  key={idx} 
                  onClick={() => {
                    if (setActiveServiceTab) {
                      setActiveServiceTab(item.tab);
                    }
                    handleNavClick('services');
                  }}
                  className="flex items-center space-x-1.5 hover:text-white transition-colors text-left"
                >
                  <span className="text-white/40 font-mono text-[10px]">&rarr;</span> <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: GET IN TOUCH */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-base font-bold text-white uppercase tracking-wider pb-1 inline-block font-display">
              Get In Touch
            </h4>
            
            <div className="space-y-4 text-xs text-white/80">
              
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-white shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Plot No #30 & 31, Survey No: 196, 197, 198, Rajiv Gandhi Nagar, Moosapet (V), GHMC Kukatpally circle, Balanagar (M), Hyderabad-500037
                </p>
              </div>

              {/* Emails */}
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-white shrink-0 mt-0.5" />
                <div className="space-y-1 text-white">
                  <p><a href="mailto:info@adeptpharmabio.com" className="hover:underline transition-all">info@adeptpharmabio.com</a></p>
                  <p><a href="mailto:agr@adeptpharmabio.com" className="hover:underline transition-all">agr@adeptpharmabio.com</a></p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-white shrink-0 mt-0.5" />
                <div className="space-y-1 text-white">
                  <p><a href="tel:+919346619575" className="hover:underline transition-all">+91 9346619575</a></p>
                  <p><a href="tel:+917995372062" className="hover:underline transition-all">+91 7995372062</a></p>
                </div>
              </div>

            </div>

            {/* Social Media Links */}
            <div className="pt-4 border-t border-white/15 flex items-center space-x-2.5">
              <a href="https://www.facebook.com/APBE2012/" target="_blank" rel="noopener noreferrer" className="h-7 w-7 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" title="Facebook">
                <Facebook className="h-3.5 w-3.5" />
              </a>
              <a href="https://www.instagram.com/adeptpharmabio/" target="_blank" rel="noopener noreferrer" className="h-7 w-7 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" title="Instagram">
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a href="#" className="h-7 w-7 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" title="X (Twitter)">
                <Twitter className="h-3.5 w-3.5" />
              </a>
              <a href="https://in.linkedin.com/in/adept-pharma-apbepl-7420991a7" target="_blank" rel="noopener noreferrer" className="h-7 w-7 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" title="LinkedIn">
                <Linkedin className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Column 4: OUR LOCATION */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-base font-bold text-white uppercase tracking-wider pb-1 inline-block font-display">
              Our Location
            </h4>
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden border border-white/15 bg-white/5 h-40 relative shadow-inner">
                <iframe
                  src="https://maps.google.com/maps?q=Adept%20Pharma%20and%20Bioscience%20Excellence%20Private%20Limited%20Moosapet%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Adept Pharma Google Map Location"
                />
              </div>
              <a 
                href="https://share.google/dqS37xC9GTty8IQNq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-2 bg-white hover:bg-white/90 text-[#004aad] rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 shadow-md shadow-blue-900/10"
              >
                <MapPin className="h-3.5 w-3.5 text-[#004aad]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-white/60 gap-4" id="footer-bottom-row">
          <p>Copyright &copy; 2026 Adept Pharma. All right reserved.</p>
          <div className="flex items-center space-x-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-white font-mono text-[10px]" id="bottom-visitor-counter">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse shrink-0" />
            <span>VISITORS: <strong className="text-white font-bold">{visitorCount || 1749554}</strong></span>
          </div>
          <div className="text-white/60">
            Powered By: <a href="https://madroidix.com" target="_blank" rel="noopener noreferrer" className="hover:text-white font-medium transition-colors hover:underline">Madroidix Technologies Private Limited</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
