import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Dna, 
  Binary, 
  FlaskConical, 
  ShieldAlert, 
  FileCheck2, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  Activity,
  Layers,
  Beaker,
  Search,
  CheckCircle
} from 'lucide-react';
import { PageId } from '../types';
import pageBannerBg from '../assets/page-banner-bg.jpg';
import servicesHeroBg from '../assets/services-hero-bg.png';

import chemicalImg from '../assets/services/chemical.jpg';
import physicalImg from '../assets/services/physical.jpg';
import instrumentalImg from '../assets/services/instrumental.jpg';
import microbiologyImg from '../assets/services/microbiology.jpg';
import pesticideImg from '../assets/services/pesticide.jpg';
import preclinicalImg from '../assets/services/preclinical.jpg';
import molecularImg from '../assets/services/molecular.jpg';

interface ServicesProps {
  setCurrentPage: (page: PageId) => void;
  setSelectedServiceCategory: (category: string) => void;
  activeServiceTab?: string;
  setActiveServiceTab?: (tab: string) => void;
}

export default function Services({ 
  setCurrentPage, 
  setSelectedServiceCategory,
  activeServiceTab,
  setActiveServiceTab
}: ServicesProps) {
  const activeServiceId = activeServiceTab || 'chemical';
  const setActiveServiceId = setActiveServiceTab || (() => {});

  const services = [
    {
      id: 'chemical',
      icon: <FlaskConical className="h-6 w-6 text-cyan-600" />,
      title: 'Chemical Services',
      image: chemicalImg,
      description: 'Adept’s experienced team of analytical chemists specializes in the development and validation of stability-indicating methods. These methodologies are used to quantitate drug substance purity and percentage drug content in dosage forms, including impurities and degradation products. Our validation protocols measure conformity to dosage form specifications including dissolution, related substances, and product stability.',
      details: [
        'Reference standard characterization',
        'Drug substance characterization',
        'Analytical methods development & validation',
        'Dissolution testing according to USP',
        'Dosage unit analysis for potency, purity and uniformity',
        'Excipient testing & stability indicating methods',
        'Chemical & physical accelerated stress testing',
        'Impurity profile generation & specs development',
        'Chromatographic system development & optimization',
        'Container / closure compatibility testing & selection'
      ],
      typicalTimeframe: '4-7 business days',
      regulatoryGrade: 'ICH / USP / IP Compliant'
    },
    {
      id: 'physical',
      icon: <Layers className="h-6 w-6 text-blue-600" />,
      title: 'Physical & Physicochemical Testing',
      image: physicalImg,
      description: 'We perform a diversified range of physicochemical tests for safety evaluation and regulatory submission of Pharmaceuticals, Agrochemicals, Biosimilars, and Solvents as per CIPAC, OECD, and ISO guidelines.',
      details: [
        'Color, odor, pH and physical state determination',
        'Melting point, boiling point and density of solids/liquids',
        'Viscosity & surface tension measurements',
        'Conductometry & potentiometry profiling',
        'Oxidizing properties of solids & liquids',
        'Frictional properties & flash point testing',
        'Acidity, alkalinity and suspensibility',
        'Spontaneity of dispersion & partition coefficient',
        'Solubility in water & organic solvents',
        'Accelerated storage stability (14 & 54 days as per CIPAC)',
        'Container content compatibility verification',
        'Soil analysis: Carbon & nitrogen transformation tests (OECD)',
        'Residue analysis: Crop & soil dissipation studies by GC/HPLC'
      ],
      typicalTimeframe: '5-14 business days',
      regulatoryGrade: 'CIPAC / OECD Guidelines'
    },
    {
      id: 'instrumental',
      icon: <Activity className="h-6 w-6 text-teal-600" />,
      title: 'Instrumental Analysis',
      image: instrumentalImg,
      description: 'Quality control validations driven by our fully-calibrated instrumentation suite, operated by certified technicians following rigid pharmacopoeial standards.',
      details: [
        'High Performance Liquid Chromatography (Agilent 1260 Infinity)',
        'UV/Vis Spectrophotometry (Labindia UV 3000+)',
        'Digital Ultrasonic Cleaner LMUC Series & 1 Stage Vacuum Pump',
        'Conductivity Meter 304 & Nephelo-Turbidity Meter 132',
        'Tablet Friability Tester & Melting Point Apparatus',
        'Refractometry, Polarimetry & Disintegration arrays',
        'High-resolution mass spectra integrations'
      ],
      typicalTimeframe: '3-6 business days',
      regulatoryGrade: 'Calibrated Agilent Systems'
    },
    {
      id: 'microbiology',
      icon: <Dna className="h-6 w-6 text-emerald-600" />,
      title: 'Microbiological Services',
      image: microbiologyImg,
      description: 'The Microbiology Department at ADEPT PHARMA undertakes quality inspection and analysis for drugs, cosmetics, pharmaceuticals, disinfectants, and healthcare products, as well as raw and processed food, water, and beverages as per IS / IP / BP / EP / USP-NF / WHO / ASTM standards.',
      details: [
        'Anti-Factor Studies & multi-range Pathogen detection',
        'Bacterial Endotoxins Testing (Qualitative gel-clot & Quantitative methods)',
        'Disinfection Efficacy Studies (Rideal Walker Coefficient)',
        'Preservative Efficacy Studies (USP challenge testing)',
        'Sterility Testing (Membrane filtration & Direct inoculation)',
        'Bio-Burden determination for raw & finished batches',
        'Microbiological Monitoring of indoor air quality',
        'Microbiological Assay of Antibiotics & Vitamins',
        'Total Microbial Count: Standard plate count, Coliforms, Yeast & Moulds'
      ],
      typicalTimeframe: '5-10 business days',
      regulatoryGrade: 'IP / BP / USP-NF / ISO'
    },
    {
      id: 'pesticide',
      icon: <ShieldAlert className="h-6 w-6 text-amber-600" />,
      title: 'Pesticide & Agrochemical Testing',
      image: pesticideImg,
      description: 'Adept Pharma and Bioscience offers safety evaluation services for the purpose of regulatory submissions at leading national and international regulatory authorities. Studies are conducted based on GLP, OECD, ICH, USP, IP, OPPTS, SANCO, CIPAC, and EEC guidelines.',
      details: [
        'Product characterization & structural verification',
        '5-Batch analysis (Impurity Profile) by HPLC/GC',
        'Method development/validation as per SANCO/CIPAC/OPPTS',
        'Assay by HPLC/GC systems',
        'Substance identification by UV/IR/ATR scans',
        'Substance comparison with reference libraries',
        'Related substance and physical parameters'
      ],
      typicalTimeframe: '7-12 business days',
      regulatoryGrade: 'GLP / OECD / SANCO / EPA'
    },
    {
      id: 'preclinical',
      icon: <Beaker className="h-6 w-6 text-indigo-600" />,
      title: 'Pre-clinical Services',
      image: preclinicalImg,
      description: 'Biological assays and safety evaluations conducted by an experienced team of toxicologists to determine toxicity levels and systemic safety.',
      details: [
        'Assay of hormonal products (FSH, HMG & HCG)',
        'Vasopressin assays & Oxytocin identification',
        'Pyrogen, safety toxicity, and reproductive toxicity',
        'Abnormal toxicity & biological reactivity (USP)',
        'Estrogenic activity & Histamine tests',
        'Dermal irritation, skin sensitisation, and ocular studies',
        'In vivo bio-compatibility (ISO) & in vitro absorption',
        'Safety pharmacology: Urine analysis, Hematology, Biochemistry & Histopathology'
      ],
      typicalTimeframe: 'Programmed durations',
      regulatoryGrade: 'ISO / In Vivo Validation'
    },
    {
      id: 'molecular',
      icon: <Search className="h-6 w-6 text-purple-600" />,
      title: 'Molecular Biology',
      image: molecularImg,
      description: 'Our services include commercial Microbial identification, which is unique and offered commercially in India in collaboration with MIDI, Inc., USA.',
      details: [
        'Commercial microbial identification sequences',
        'FAME (Fatty Acid Methyl Ester analysis)',
        'PLFA (Phospholipid Fatty Acid total biomass count)',
        'NLFA (Neutral Lipid Fatty Acid) for AMF abundance',
        'Polyphasic (combined FAME & DNA) reporting',
        'Arbuscular mycorrhizal fungi measurement',
        'Microbial group percentage distribution'
      ],
      typicalTimeframe: '5-9 business days',
      regulatoryGrade: 'MIDI Inc. USA Collaborated'
    }
  ];

  const activeService = services.find(s => s.id === activeServiceId) || services[0];

  return (
    <div className="relative overflow-hidden bg-slate-50/50" id="services-page-container">
      
      <section className="bg-[#030712] text-white relative py-20 md:py-28 overflow-hidden" id="services-hero">
        <div 
          className="absolute inset-y-0 right-0 w-[85%] bg-cover bg-right" 
          style={{ backgroundImage: `url(${servicesHeroBg})`, opacity: 0.85 }} 
        />
        <div 
          className="absolute inset-y-0 left-[15%] w-[20%] bg-gradient-to-r from-[#030712] to-transparent" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030712]" />
        
        <div className="relative z-10 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-left space-y-4">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">GMP ANALYTICAL SOLUTIONS</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Advanced Analytical Assays & Method Validations</h1>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl leading-relaxed">
            Driven by calibrated Agilent instrumentation, cleanroom-grade microbiology, and accredited GLP/cGMP protocols, Adept Pharma establishes the definitive benchmarks to verify molecular purity and satisfy global regulatory standards.
          </p>
        </div>
      </section>

      {/* Main Tab Layout */}
      <section className="py-12 md:py-16 lg:py-20 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12" id="services-listings">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column Sidebar Tabs */}
          <div className="lg:col-span-3 flex overflow-x-auto lg:flex-col lg:overflow-x-visible border-b border-slate-200 lg:border-none pb-2 lg:pb-0 mb-6 lg:mb-0 gap-1 lg:gap-0 sticky top-24 z-10 bg-slate-50 lg:bg-transparent" id="sidebar-tabs">
            <div className="lg:border lg:border-slate-200/60 lg:bg-white lg:rounded-2xl lg:shadow-sm lg:overflow-hidden w-full flex lg:flex-col min-w-max lg:min-w-0">
              <h4 className="hidden lg:block font-display text-xs font-bold text-slate-450 tracking-widest uppercase bg-slate-50/80 px-5 py-4.5 border-b border-slate-250/60 text-left">
                Testing Services
              </h4>
              <div className="flex lg:flex-col w-full">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveServiceId(service.id)}
                    className={`px-4 py-2.5 lg:px-5 lg:py-3.5 text-xs sm:text-sm font-medium transition-all text-left border-b-2 lg:border-b lg:border-slate-100 last:border-0 flex items-center space-x-3 w-auto lg:w-full shrink-0 ${
                      activeServiceId === service.id
                        ? 'border-blue-600 lg:border-l-4 lg:border-l-blue-600 bg-blue-50/50 text-blue-650 font-bold'
                        : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                    }`}
                  >
                    <span>{service.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column Content Area */}
          <div className="lg:col-span-9 space-y-8" id="services-main-content">
            
            {/* Banner Image */}
            <div className="w-full relative aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-6 bg-slate-100">
              <img 
                src={activeService.image} 
                alt={activeService.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-100 border border-slate-700/60 uppercase tracking-widest">
                {activeService.regulatoryGrade}
              </div>
            </div>

            {/* Content Details */}
            <div className="space-y-6 text-left">
              <h2 className="font-display text-2xl md:text-3.5xl font-bold text-slate-950 border-b border-slate-200 pb-3">
                {activeService.title}
              </h2>
              <p className="text-slate-650 text-sm sm:text-base leading-relaxed">
                {activeService.description}
              </p>

              {/* Parameters List */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
                <div className="flex items-center space-x-2 pb-3 border-b border-slate-100">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                  <h3 className="font-display font-bold text-slate-900 text-base sm:text-lg">Testing Parameters & Scope</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeService.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100/70">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                      <span className="text-slate-700 text-xs sm:text-sm leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Action Box */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-slate-900 text-white rounded-2xl mt-8">
                <div className="text-left space-y-1">
                  <h4 className="font-display font-bold text-base text-white">Ready to schedule study sequences?</h4>
                  <p className="text-xs text-slate-400">Submit your protocols to retrieve a formal quote from our lab directors.</p>
                </div>
                <button
                  onClick={() => {
                    setSelectedServiceCategory(activeService.title);
                    setCurrentPage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center space-x-1.5 shrink-0"
                >
                  <span>Inquire Service Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
