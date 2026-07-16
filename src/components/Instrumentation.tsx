import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Activity, 
  Search, 
  Settings2, 
  X, 
  Gauge, 
  Calendar, 
  CheckCircle,
  FileText,
  Wrench,
  SearchCode
} from 'lucide-react';
import { Instrument } from '../types';
import pageBannerBg from '../assets/page-banner-bg.jpg';

import hplcImg from '../assets/instruments/hplc.jpg';
import lcmsImg from '../assets/instruments/lcms.jpg';
import gcImg from '../assets/instruments/gc.jpg';
import icpmsImg from '../assets/instruments/icpms.jpg';
import particleSizeImg from '../assets/instruments/particle_size.jpg';
import ftirImg from '../assets/instruments/ftir.jpg';
import karlFischerImg from '../assets/instruments/karl_fischer.jpg';
import dissolutionImg from '../assets/instruments/dissolution.jpg';
import tocImg from '../assets/instruments/toc.jpg';
import hiacImg from '../assets/instruments/hiac.jpg';
import laminarImg from '../assets/instruments/laminar.jpg';
import incubatorImg from '../assets/instruments/incubator.jpg';

export default function Instrumentation() {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedInstrument, setSelectedInstrument] = useState<Instrument | null>(null);

  const instruments: Instrument[] = [
    {
      id: 'hplc-waters-agilent',
      name: 'High Performance Liquid Chromatography (HPLC)',
      model: '2690 Alliance / 1100 / 1260 Infinity',
      manufacturer: 'Waters / Agilent',
      category: 'chromatography',
      description: 'High-resolution chromatographic validation system with fully automated injection paths. Configured with UV & Photo-Diode Array (PDA) detectors for pharmaceutical potency verification and related substance profiles.',
      capacity: 'Waters 2690, Agilent 1100, and Agilent 1260 Infinity systems',
      image: hplcImg,
      specifications: [
        'Detector range: UV/Vis & Photo-Diode Array (PDA)',
        'Fully-automated autosamplers with temperature controls',
        'Precise multi-channel solvent delivery modules',
        'Continuous peak integration software'
      ],
      utility: 'API Assay quantitation, stability sample profiling, related substances, and method validations.'
    },
    {
      id: 'lcms-triple-quad',
      name: 'Liquid Chromatography Mass Spectrometer (LC-MS/MS)',
      model: 'Shimadzu Triple Quadrupole 8045',
      manufacturer: 'Shimadzu',
      category: 'chromatography',
      description: 'Ultra-sensitive liquid chromatograph coupled with a triple quadrupole mass spectrometer. Engineered for trace-level impurity scans, genotoxic assays, and molecular weight determinations.',
      capacity: 'Parts-per-billion (ppb) scanning limits',
      image: lcmsImg,
      specifications: [
        'Shimadzu LCMS-8045 Triple Quadrupole System',
        'Ultra-fast scanning (UFMS) electronics',
        'Equipped with ESI and APCI ion sources',
        'Automated peak profiling and library match algorithms'
      ],
      utility: 'Trace impurity identification, genotoxic impurity determination, and bio-equivalence research studies.'
    },
    {
      id: 'gc-headspace-shimadzu',
      name: 'Gas Chromatography with Headspace (GC-HS)',
      model: 'GC 2010 Plus / Nexis / GC-2900A',
      manufacturer: 'Shimadzu / Netel',
      category: 'chromatography',
      description: 'High-resolution gas chromatographs equipped with automated static headspace samplers. Optimized for residual solvents quantitation and volatile trace compound profiling.',
      capacity: 'Integrated multi-vial headspace sampler',
      image: gcImg,
      specifications: [
        'Flame Ionization Detector (FID)',
        'Shimadzu Nexis / Netel Analyte GC-2900A modules',
        'Electronic Flow Control (EPC) for gas delivery paths',
        'Wide temperature range column ovens'
      ],
      utility: 'USP <467> residual solvent profiling, volatile organic impurities, and agrochemical validations.'
    },
    {
      id: 'icp-ms-perkin-elmer',
      name: 'ICP-MS Elemental Impurities Analyzer',
      model: 'Nexion 2000 with MDS',
      manufacturer: 'Perkin Elmer',
      category: 'spectroscopy',
      description: 'Inductively Coupled Plasma Mass Spectrometer integrated with Microwave Digestion System (MDS). Definitive standard for elemental assays and heavy metal screenings.',
      capacity: 'Multi-element trace assays in ppt range',
      image: icpmsImg,
      specifications: [
        'Nexion 2000 multi-element scan interface',
        'Microwave Digestion System (MDS) sample prep',
        'Parts-per-trillion (ppt) elemental sensitivity limits',
        'Collision and reaction cell interference removal'
      ],
      utility: 'USP <232>/<233> elemental impurities validations, catalyst metal analysis, and trace heavy metals.'
    },
    {
      id: 'particle-size-malvern',
      name: 'Laser Diffraction Particle Size Analyzer',
      model: 'MS-3000',
      manufacturer: 'Malvern',
      category: 'spectroscopy',
      description: 'Laser diffraction particle sizing system. Critical for drug solubility profiling, dissolution kinetics, and batch particle conformance reviews.',
      capacity: '0.01 µm to 3500 µm range',
      image: particleSizeImg,
      specifications: [
        'Malvern Mastersizer 3000 optical cell',
        'Dry powder and wet suspension cell modules',
        'Rapid sample dispersion and clean-up features',
        'Automated size distribution software profiling'
      ],
      utility: 'Particle size distribution checking on active substances, excipients, and raw materials.'
    },
    {
      id: 'ftir-bruker-alpha',
      name: 'FT-IR Spectrometer',
      model: 'Bruker ALPHA',
      manufacturer: 'Bruker',
      category: 'spectroscopy',
      description: 'Compact Fourier Transform Infrared Spectrometer equipped with Attenuated Total Reflection (ATR) modules. Enables fast, non-destructive chemical identity validation.',
      capacity: 'Solid, liquid, and paste ATR sample plates',
      image: ftirImg,
      specifications: [
        'Bruker ALPHA FT-IR optical bench',
        'High-performance Attenuated Total Reflection (ATR)',
        'RockSolid permanent-aligned interferometer core',
        'Direct spectral library comparison algorithms'
      ],
      utility: 'Raw material chemical identification, excipient conformance verification, and chemical structural checks.'
    },
    {
      id: 'karl-fischer-analytics',
      name: 'Karl Fischer Moisture Titrator & Coulometer',
      model: 'Titroline 7750 / 7500 KF Trac',
      manufacturer: 'SI Analytics',
      category: 'wet-analytics',
      description: 'High-precision volumetric and coulometric titrators for moisture analysis. Essential for hygroscopic formulations where trace water triggers degradation.',
      capacity: '10 ppm to 100% water content tracking',
      image: karlFischerImg,
      specifications: [
        'Titroline 7750 Volumetric titrator assembly',
        '7500 KF Trac Coulometer for trace moisture titration',
        'Hermetically sealed glass titration cells',
        'Automatic drift compensation algorithm'
      ],
      utility: 'Water content determination in APIs, excipients, moisture-sensitive tablets, and organic solvents.'
    },
    {
      id: 'dissolution-lab-india',
      name: '8-Station Dissolution Tester',
      model: 'DS8000',
      manufacturer: 'Lab India',
      category: 'wet-analytics',
      description: 'USP apparatus testing bath supporting paddles and baskets. Essential for evaluating active release curves of capsules and tablets.',
      capacity: '8-vessel assembly with automated sampling lines',
      image: dissolutionImg,
      specifications: [
        'Lab India DS8000 compendial testing array',
        'Paddles (USP Type 2) & Baskets (USP Type 1) accessories',
        'Precise temp controls (±0.1°C range)',
        'Programmable multi-interval sampling cycles'
      ],
      utility: 'In-vitro active dissolution profile validation, dosage release kinetic scans, and quality batch release.'
    },
    {
      id: 'toc-shimadzu-carbon',
      name: 'Total Organic Carbon (TOC) Analyzer',
      model: 'LCPH E200 ROHS',
      manufacturer: 'Shimadzu',
      category: 'wet-analytics',
      description: 'Shimadzu TOC analyzer for trace carbon determination in purified water and cleaning validation rinse samples.',
      capacity: 'Sub-ppb carbon verification limit',
      image: tocImg,
      specifications: [
        'Shimadzu LCPH E200 RoHS compliant analyzer',
        'Highly precise wet oxidation & combustion paths',
        'Automatic inorganic carbon removal',
        'Supports small volume liquid injection'
      ],
      utility: 'Purified water chemical verification, cleaning validation scans, and process water monitoring.'
    },
    {
      id: 'hiac-particle-counter',
      name: 'Liquid Particle Borne Counter (HIAC)',
      model: 'HIAC 9703+',
      manufacturer: 'HIAC COMPANY',
      category: 'spectroscopy',
      description: 'Laser particle counter for sub-visible particulate matter evaluation in injectables and ophthalmic solutions as per USP <788>.',
      capacity: '1.3 µm to 600 µm particle size scans',
      image: hiacImg,
      specifications: [
        'HIAC 9703+ micro particulate counting system',
        'Traceable NIST standard verification controls',
        'Small volume injectables (SVI) sample attachments',
        'Integrated USP <788> reporting software'
      ],
      utility: 'USP <788> sub-visible particulate count assays in parenterals, injections, and ophthalmics.'
    },
    {
      id: 'laminar-biosafety-chambers',
      name: 'Sterile Benches & Biosafety Cabinets',
      model: 'FA/LF/6/1236 & FA/BSC/7/1239',
      manufacturer: 'Jayasri / Biotechnics India',
      category: 'stability-micro',
      description: 'HEPA-filtered laminar benches and Class II Biosafety cabinets for sterile microbiological work and inoculation procedures.',
      capacity: 'ISO Class 5 sterile workspaces',
      image: laminarImg,
      specifications: [
        'Jayasri Laminar Flow Bench JS/LF/6/1236',
        'Biotechnics Biosafety Cabinet FA/BSC/7/1239',
        'HEPA filter efficiency: 99.97% down to 0.3 µm',
        'Continuous air velocity monitors and UV cycles'
      ],
      utility: 'Sterility assays, raw sample inoculations, microbial limit testing, and bioburden validations.'
    },
    {
      id: 'incubators-autoclaves-micro',
      name: 'GMP Incubators, Autoclaves & BOD Chambers',
      model: 'JS/B.I/G.M.P & JS/B.O.D/G.M.P',
      manufacturer: 'Jayasri Lab Instruments',
      category: 'stability-micro',
      description: 'Precision temperature chambers and high-pressure steam sterilizers for culture incubation, storage validation, and media prep.',
      capacity: 'Calibrated G.M.P standard enclosures',
      image: incubatorImg,
      specifications: [
        'Jayasri Bacteriological Incubator JS/B.I/G.M.P',
        'Jayasri BOD Incubator JS/B.O.D/G.M.P',
        'Jayasri vertical autoclave sterilization units',
        'Continuous temperature recording and alarm trails'
      ],
      utility: 'Microbial culture incubation, biological validation controls, sterilization, and storage validation.'
    }
  ];

  // The full list of 42 instruments from the live site (facilities.php?id=2)
  const fullInventory = [
    { name: 'HPLC with UV & PDA Detector & Auto Sampler', make: 'WATERS', model: '2690', category: 'chromatography' },
    { name: 'HPLC with UV & PDA Detector & Auto Sampler', make: 'AGILENT', model: '1100', category: 'chromatography' },
    { name: 'HPLC with UV & PDA Detector & Auto Sampler', make: 'AGILENT', model: '1260-INFINITY', category: 'chromatography' },
    { name: 'LCMS/MS (Liquid Chromatography Mass Spec)', make: 'SHIMADZU', model: 'Triple Quadrupole 8045', category: 'chromatography' },
    { name: 'GC - HSS (Gas Chromatograph Headspace)', make: 'SHIMADZU', model: 'GC 2010', category: 'chromatography' },
    { name: 'GC - HSS (Gas Chromatograph Headspace)', make: 'NETEL', model: 'ANALYTE GC-2900A', category: 'chromatography' },
    { name: 'GC-HS (Gas Chromatography Nexis)', make: 'SHIMADZU', model: 'Nexis', category: 'chromatography' },
    { name: 'Ionic Chromatography', make: 'IC_Compact', model: 'NA', category: 'chromatography' },
    { name: 'RI Detector', make: 'SHIMADZU', model: 'NA', category: 'chromatography' },
    { name: 'Laser Diffraction Particle Size Analyzer', make: 'MALVERN', model: 'MS-3000', category: 'spectroscopy' },
    { name: 'ICP-MS (Elemental Impurities)', make: 'PERKIN ELMER', model: 'Nexion 2000 with MDS', category: 'spectroscopy' },
    { name: 'FT-IR Spectrometer', make: 'BRUKER', model: 'ALPHA', category: 'spectroscopy' },
    { name: 'Double Beam UV-VIS Spectrophotometer', make: 'LAB INDIA', model: 'UV 3000+', category: 'spectroscopy' },
    { name: 'Digital Polarimeter', make: 'ATAGO', model: 'SAC-I', category: 'spectroscopy' },
    { name: 'Refractometer', make: 'SISCO', model: 'NA', category: 'spectroscopy' },
    { name: 'Liquid Particle Borne Counter (HIAC)', make: 'HIAC COMPANY', model: 'HIAC 9703+', category: 'spectroscopy' },
    { name: 'DISSOLUTION TEST APPARATUS', make: 'LAB INDIA', model: 'DS8000', category: 'wet-analytics' },
    { name: 'DISINTEGRATION APPARATUS', make: 'LAB INDIA', model: 'FT1020', category: 'wet-analytics' },
    { name: 'MELTING POINT APPARATUS', make: 'SISCO', model: 'NA', category: 'wet-analytics' },
    { name: 'FRIABILITY TESTING APPARATUS', make: 'REMI', model: 'FT 10', category: 'wet-analytics' },
    { name: 'pH METER', make: 'SYSTRONICS', model: '361', category: 'wet-analytics' },
    { name: 'KARL FISHER TITRATOR', make: 'S I ANALYTICS', model: 'TITROLINE 7750', category: 'wet-analytics' },
    { name: 'COULOMETER KF', make: 'SI ANALYTICS', model: '7500 KF trac', category: 'wet-analytics' },
    { name: 'CONDUCTIVITY METER', make: 'SYSTRONICS', model: 'CM-304', category: 'wet-analytics' },
    { name: 'MUFFLE FURNACE', make: 'HITECH INDIA', model: 'NA', category: 'wet-analytics' },
    { name: 'HOT AIR OVEN', make: 'HITECH INDIA', model: 'NA', category: 'wet-analytics' },
    { name: 'TOC (Total Organic Carbon) ANALYZER', make: 'SHIMADZU', model: 'LCPH E200 ROHS', category: 'wet-analytics' },
    { name: 'NEPHELO TURBIDITY METER', make: 'ELICO', model: 'CL 52D', category: 'wet-analytics' },
    { name: 'DIGITAL ULTRASONIC CLEANER', make: 'LABMAN', model: 'LMUC SERIES', category: 'wet-analytics' },
    { name: 'WATER BATH', make: 'JAYASRI LAB INSTRUMENTS', model: 'NA', category: 'wet-analytics' },
    { name: 'STATIONARY BILAYER TABLET PRESS', make: 'KANAVETHIRIMEK', model: 'MINIPRESS-2 DL', category: 'wet-analytics' },
    { name: 'BACTERIOLOGICAL INCUBATOR', make: 'JAYASRI LAB INSTRUMENTS', model: 'JS/B.I/G.M.P', category: 'stability-micro' },
    { name: 'AUTO CLAVE', make: 'JAYASRI LAB INSTRUMENTS', model: 'JS/B.I/G.M.P', category: 'stability-micro' },
    { name: 'LAMINAR AIR FLOW UNIT', make: 'JAYASRI LAB INSTRUMENTS', model: 'FA/LF/6/1236', category: 'stability-micro' },
    { name: 'REFRIGERATED CENTRIFUGE', make: 'INDOSATI', model: 'IS/AZR/02', category: 'stability-micro' },
    { name: 'ANTI BIOTIC ZONE READER', make: 'INDOSATI', model: 'IS/MS/01', category: 'stability-micro' },
    { name: 'DIGITAL COLONY COUNTER', make: 'INDOSATI', model: 'IS/DCC/01', category: 'stability-micro' },
    { name: 'BOD INCUBATOR', make: 'JAYASRI LAB INSTRUMENTS', model: 'JS/B.O.D/G.M.P', category: 'stability-micro' },
    { name: 'DEEP FREEZER', make: 'JAYASRI LAB INSTRUMENTS', model: 'JS/D.F/G.M.P', category: 'stability-micro' },
    { name: 'ACTIVE AIR SAMPLER', make: 'LIGHTHOUSE WORLDWIDE', model: 'ACTIVE COUNT 100', category: 'stability-micro' },
    { name: 'BIOSAFETY CABINET', make: 'BIOTECHNICS INDIA', model: 'FA/BSC/7/1239', category: 'stability-micro' },
    { name: 'PHOTO STABILITY CHAMBER', make: 'AD PHARMA', model: 'AD2', category: 'stability-micro' }
  ];

  // Filtering Logic
  const filteredInstruments = instruments.filter(inst => {
    const matchesCategory = filter === 'all' || inst.category === filter;
    const matchesSearch = inst.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          inst.model.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          inst.manufacturer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredInventory = fullInventory.filter(item => {
    const matchesCategory = filter === 'all' || item.category === filter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.make.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.model.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative overflow-hidden bg-slate-50/50" id="instrumentation-page-container">
      
      {/* Header Banner */}
      <section className="bg-[#030712] text-white relative py-16 md:py-24" id="instruments-hero">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-multiply" style={{ backgroundImage: `url(${pageBannerBg})`, opacity: 0.65 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030712]" />
        
        <div className="relative z-10 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-left space-y-4">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">GMP LAB FACILITIES</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Our Instrumentation Facility</h1>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl leading-relaxed">
            Our company features a state-of-the-art instrumentation suite. Major systems available in the complete facility are fully calibrated and qualified for pharmaceutical, biosimilar, and agrochemical research.
          </p>
        </div>
      </section>

      {/* Main Filter Section & Grid */}
      <section className="py-12 md:py-16 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12" id="instruments-grid-section">
        
        {/* Controls Layout */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-left">
            <div className="flex items-center space-x-2">
              <Settings2 className="h-5 w-5 text-cyan-600 animate-spin" style={{ animationDuration: '8s' }} />
              <span className="font-display font-semibold text-slate-800 text-base">Filter Instrumentation</span>
            </div>
            
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="Search name, make, or model..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-slate-250/70 rounded-full text-xs bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500"
              />
              <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2" id="instruments-filter-tabs">
            {[
              { id: 'all', label: 'All Inventory' },
              { id: 'chromatography', label: 'Chromatography & MS' },
              { id: 'spectroscopy', label: 'Spectroscopy & Particle' },
              { id: 'wet-analytics', label: 'Wet Chem & Testing' },
              { id: 'stability-micro', label: 'Microbiology & Stability' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`text-xs py-2 px-4 rounded-full border font-medium transition-all duration-200 ${
                  filter === tab.id
                    ? 'bg-blue-700 text-white border-blue-700 shadow-sm'
                    : 'bg-white text-slate-650 border-slate-250/70 hover:bg-slate-100/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Instruments Card Grid (Primary Flagships) */}
        {filteredInstruments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10" id="instruments-grid">
            {filteredInstruments.map((instrument) => (
              <div 
                key={instrument.id}
                id={`instrument-card-${instrument.id}`}
                onClick={() => setSelectedInstrument(instrument)}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-cyan-200/80 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Image container filling edge-to-edge */}
                  <div className="h-56 bg-slate-100 relative overflow-hidden border-b border-slate-100">
                    <img 
                      src={instrument.image} 
                      alt={instrument.name} 
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur px-2.5 py-1 rounded text-[9px] font-bold text-cyan-400 uppercase tracking-wider font-mono border border-slate-700/60">
                      {instrument.manufacturer}
                    </div>
                  </div>

                  <div className="p-6 text-left space-y-3">
                    <span className="text-[10px] font-mono font-semibold text-slate-400 block uppercase tracking-wider">{instrument.model}</span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{instrument.name}</h3>
                    <p className="text-slate-500 text-xs sm:text-sm line-clamp-3 leading-relaxed">{instrument.description}</p>
                  </div>
                </div>

                {/* Card footer details */}
                <div className="p-6 pt-0 border-t border-slate-50 flex items-center justify-between mt-auto">
                  <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full flex items-center space-x-1.5 border border-emerald-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>CALIBRATION ACTIVE</span>
                  </span>
                  
                  <span className="text-xs font-bold text-slate-500 group-hover:text-blue-600 flex items-center space-x-1 transition-colors">
                    <span>Specifications</span>
                    <Activity className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center text-slate-400 bg-white border border-slate-200/80 rounded-2xl mt-10">
            <SearchCode className="h-10 w-10 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-medium">No primary instruments match your filter criteria.</p>
          </div>
        )}
      </section>

      {/* Comprehensive Inventory List Table */}
      <section className="pb-16 md:pb-24 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-left" id="instruments-inventory-section">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="pb-4 border-b border-slate-100 mb-6">
            <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl">Complete Instrument Inventory</h3>
            <p className="text-xs text-slate-500 mt-1">Full registry of active instrumentation operating inside our Hyderabad analytics suite.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm border-collapse text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-600 border-b border-slate-200 font-semibold">
                  <th className="py-3 px-4 font-bold">Particulars / Instrument Name</th>
                  <th className="py-3 px-4 font-bold">Make / Manufacturer</th>
                  <th className="py-3 px-4 font-bold">Model Number</th>
                  <th className="py-3 px-4 font-bold text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredInventory.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-4 font-medium text-slate-900">{item.name}</td>
                    <td className="py-3 px-4 text-slate-600">{item.make}</td>
                    <td className="py-3 px-4 font-mono text-slate-500">{item.model}</td>
                    <td className="py-3 px-4 text-right">
                      <span className="inline-flex items-center space-x-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 font-mono">
                        <span>Active</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 italic">
            <span>*Total registry size: {fullInventory.length} calibrated instruments</span>
            <span>Accredited for CDSCO & Telangana State DCA audits</span>
          </div>
        </div>
      </section>

      {/* Details Modal popup */}
      <AnimatePresence>
        {selectedInstrument && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setSelectedInstrument(null)}
            id="instrument-details-modal"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden text-left border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedInstrument(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors z-20"
                id="close-modal-btn"
              >
                <X className="h-4 w-4 text-slate-500" />
              </button>

              <div className="h-48 sm:h-56 bg-slate-100 relative">
                <img 
                  src={selectedInstrument.image} 
                  alt={selectedInstrument.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                <div className="absolute bottom-5 left-6 text-white space-y-1">
                  <p className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest">{selectedInstrument.manufacturer}</p>
                  <h3 className="font-display text-lg sm:text-xl font-bold">{selectedInstrument.name}</h3>
                </div>
              </div>

              <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto">
                <div className="space-y-1.5 text-left">
                  <span className="text-[10px] bg-cyan-50 px-2.5 py-0.5 rounded text-cyan-600 font-bold border border-cyan-100 font-mono">MODEL: {selectedInstrument.model}</span>
                  <p className="text-slate-600 text-sm leading-relaxed pt-2">{selectedInstrument.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100 text-left">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center space-x-1.5">
                      <Gauge className="h-4 w-4 text-cyan-500" />
                      <span>System Specifications</span>
                    </span>
                    <ul className="space-y-1.5">
                      {selectedInstrument.specifications.map((spec, i) => (
                        <li key={i} className="text-xs text-slate-650 flex items-start space-x-1.5">
                          <span className="text-cyan-500 font-bold">•</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center space-x-1.5">
                      <Calendar className="h-4 w-4 text-cyan-500" />
                      <span>Capacity & Loading</span>
                    </span>
                    <p className="text-xs text-slate-650 leading-relaxed">{selectedInstrument.capacity}</p>

                    <div className="bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100 mt-2">
                      <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Calibration Compliance</p>
                      <p className="text-[10px] text-emerald-600 mt-0.5">Calibrated under master NIST guidelines. Last certified: Current month. Due: In 6 months.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 text-left">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center space-x-1.5 mb-2">
                    <FileText className="h-4 w-4 text-cyan-500" />
                    <span>Lab Utility & Application</span>
                  </span>
                  <p className="text-xs text-slate-650 leading-relaxed">{selectedInstrument.utility}</p>
                </div>
              </div>

              <div className="bg-slate-50 px-6 py-4 flex justify-end border-t border-slate-100">
                <button 
                  onClick={() => setSelectedInstrument(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 border border-slate-200 bg-white hover:bg-slate-50 rounded-lg transition-colors"
                >
                  Close Specifications Sheet
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
