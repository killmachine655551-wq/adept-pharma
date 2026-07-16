import { motion } from 'motion/react';
import { ShieldCheck, Award, FileCheck2, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import pageBannerBg from '../assets/page-banner-bg.jpg';
import accreditationsHeroBg from '../assets/accreditations-hero-bg.png';

import cdscoImg from '../assets/accreditations/cdsco.jpg';
import dcaImg from '../assets/accreditations/dca.jpg';
import ohsasImg from '../assets/accreditations/ohsas.jpg';
import nablImg from '../assets/accreditations/nabl.png';
import isoImg from '../assets/accreditations/iso.jpg';
import dunsImg from '../assets/accreditations/duns.jpg';
import fdaImg from '../assets/accreditations/fda.jpg';

interface AccredationsProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Accredations({ setCurrentPage }: AccredationsProps) {
  const accreditations = [
    {
      title: 'APPROVED TESTING LABORATORY BY CDSCO, NEW DELHI',
      image: cdscoImg,
      subtitle: 'Form 37 Drug Testing Registry',
      icon: <Building2 className="h-5 w-5 text-blue-600" />,
      description: 'Central Drugs Standard Control Organization (CDSCO) approval for carrying out chemical, instrumental, and microbiological testing on active pharmaceutical ingredients (APIs), excipients, and finished dosage formulations.'
    },
    {
      title: 'APPROVED TESTING LABORATORY BY DCA, STATE OF TELANGANA',
      image: dcaImg,
      subtitle: 'Telangana DCA License Compliance',
      icon: <ShieldCheck className="h-5 w-5 text-cyan-600" />,
      description: 'Drug Control Administration (DCA) of Telangana State approved facility for analytical chemistry, instrumentation parameters, and microbiological test validations.'
    },
    {
      title: 'APPROVED TESTING LABORATORY BY National Accreditation for Testing and Calibration Laboratories (NABL)',
      image: nablImg,
      subtitle: 'ISO/IEC 17025 Standard Compliance',
      icon: <Award className="h-5 w-5 text-teal-600" />,
      description: 'National Accreditation Board for Testing and Calibration Laboratories (NABL), Quality Council of India approved testing laboratory. Validates compliance with rigorous ISO/IEC 17025 global benchmarks.'
    },
    {
      title: 'APPROVED TESTING LABORATORY BY ISO 9001:2015',
      image: isoImg,
      subtitle: 'Quality Management Systems (QMS)',
      icon: <FileCheck2 className="h-5 w-5 text-emerald-600" />,
      description: 'ISO 9001:2015 certification for Quality Management Systems, certifying operational trace records logging, analytical calibrations, and complete data integrity protocols.'
    },
    {
      title: 'APPROVED TESTING LABORATORY BY OHSAS 18001:2007',
      image: ohsasImg,
      subtitle: 'Occupational Health & Safety Standard',
      icon: <ShieldCheck className="h-5 w-5 text-red-600" />,
      description: 'Occupational Health and Safety Assessment Series certification, validating strict conformance to workplace safety regulations and hazard-free clinical laboratory operations.'
    },
    {
      title: 'FDA REGISTERED',
      image: fdaImg,
      subtitle: 'U.S. FDA Registration Registry',
      icon: <CheckCircle2 className="h-5 w-5 text-indigo-600" />,
      description: 'United States Food and Drug Administration (FDA) registration registry credentials, supporting international pharmaceutical supply chain audits and contract validations.'
    },
    {
      title: 'DUNS REGISTERED',
      image: dunsImg,
      subtitle: 'D-U-N-S® Global Registry Number',
      icon: <CheckCircle2 className="h-5 w-5 text-slate-600" />,
      description: 'D-U-N-S® numbered global business registry conformance, qualifying Adept Pharma for international client contracting and global CRO testing partnerships.'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-slate-50/50" id="accredations-page-container">
      
      <section className="bg-[#030712] text-white relative py-20 md:py-28 overflow-hidden" id="accredations-hero">
        <div 
          className="absolute inset-y-0 right-0 w-[85%] bg-cover bg-right" 
          style={{ backgroundImage: `url(${accreditationsHeroBg})`, opacity: 0.85 }} 
        />
        <div 
          className="absolute inset-y-0 left-[15%] w-[20%] bg-gradient-to-r from-[#030712] to-transparent" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030712]" />
        
        <div className="relative z-10 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-left space-y-4">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">REGULATORY DECREE</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Accreditations & Licensing</h1>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl leading-relaxed">
            Adept Pharma operates a highly certified, audit-ready laboratory infrastructure. Our facilities are continuously audited and certified by state, national, and global accreditation bodies to guarantee absolute compliance.
          </p>
        </div>
      </section>

      {/* Grid of Accreditations */}
      <section className="py-12 md:py-16 lg:py-20 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12" id="accredations-listings">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left" id="accredations-grid">
          {accertitationsGrid(accreditations)}
        </div>
      </section>

      {/* Bottom Call to Action */}
      <section className="pb-16 md:pb-24 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-left" id="accredations-cta">
        <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-display font-bold text-lg text-white">Need to review original accreditation certificates?</h4>
            <p className="text-xs text-slate-400">Our quality assurance director can share the certified copies of our DCA, NABL, and FDA registrations upon request.</p>
          </div>
          <button
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full md:w-auto px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center space-x-1.5 shrink-0"
          >
            <span>Request Certificate Copies</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

    </div>
  );
}

function accertitationsGrid(accreditations: any[]) {
  return accreditations.map((acc, index) => (
    <div 
      key={index}
      id={`accredation-card-${index}`}
      className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-cyan-200/80 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start"
    >
      {/* Logo container */}
      <div className="w-24 h-24 rounded-xl border border-slate-100 bg-white p-2 flex items-center justify-center shrink-0 mx-auto sm:mx-0 shadow-inner">
        <img 
          src={acc.image} 
          alt={acc.title} 
          className="max-w-full max-h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Information container */}
      <div className="space-y-2.5 flex-1">
        <div className="flex items-center space-x-2">
          {acc.icon}
          <span className="text-[10px] font-mono font-bold text-cyan-600 uppercase tracking-wider">{acc.subtitle}</span>
        </div>
        <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 leading-snug">{acc.title}</h3>
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{acc.description}</p>
      </div>
    </div>
  ));
}
