import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Binary, 
  FileSpreadsheet, 
  Globe2, 
  ArrowUpRight, 
  CheckCircle2, 
  Atom, 
  Activity, 
  Cpu, 
  Database,
  ArrowRight
} from 'lucide-react';
import { PageId } from '../types';
import heroBg from '../assets/hero-bg.jpg';

interface HomeProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  const stats = [
    { value: '300+', label: 'Pharmaceutical Clients', description: 'Formulations & API Manufacturers' },
    { value: '15k+', label: 'Analytical Reports', description: 'Released under cGMP guidelines' },
    { value: '99.98%', label: 'Method Accuracy', description: 'Double-blind verified reproducibility' },
    { value: '24-48h', label: 'Urgent Processing', description: 'Fast-track sample turnaround' }
  ];

  const valueProps = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
      title: 'Telangana DCA Approved',
      description: 'Fully licensed and approved by the Drug Control Administration (DCA) of Telangana for pharmaceutical batch testing.'
    },
    {
      icon: <Binary className="h-6 w-6 text-cyan-500" />,
      title: 'High-Accuracy HPLC & GC',
      description: 'Equipped with Shimadzu/Waters HPLC platforms and GC with headspace sampler systems for solvent extraction and impurity identification.'
    },
    {
      icon: <FileSpreadsheet className="h-6 w-6 text-emerald-500" />,
      title: 'ISO 9001:2015 & FSSAI',
      description: 'Maintains an internationally certified Quality Management System (QMS-9104-AP) and FSSAI-approved lab operations.'
    },
    {
      icon: <Globe2 className="h-6 w-6 text-indigo-500" />,
      title: 'Stability Storage Studies',
      description: 'State-of-the-art climate chambers fully compliant with ICH Q1A guidelines for real-time and accelerated shelf-life studies.'
    }
  ];

  const featuredServices = [
    {
      id: 'purity',
      tag: 'METHODOLOGY',
      title: 'Purity & Assay Testing',
      subtitle: 'Quantitative drug and chemical assays via validated HPLC & GC.',
      specs: ['Purity validation up to 99.99%', 'Water content by Karl Fischer', 'Moisture limits and wet assays'],
      bgGradient: 'from-cyan-50 to-blue-50/30'
    },
    {
      id: 'stability',
      tag: 'ICH STABILITY',
      title: 'Stability & Shelf-Life',
      subtitle: 'Environmental stability chambers monitoring temperature and humidity.',
      specs: ['Accelerated studies (40°C / 75% RH)', 'Long-term studies (25°C / 60% RH)', 'Photostability and humidity profiles'],
      bgGradient: 'from-blue-50 to-indigo-50/30'
    },
    {
      id: 'microbiology',
      tag: 'MICROBIOLOGY',
      title: 'Microbial Limit Testing',
      subtitle: 'Aseptic cleanrooms for sterility and safety limit checks.',
      specs: ['Microbial Limit Testing (MLT)', 'Pathogen identification assays', 'Water and environment monitoring'],
      bgGradient: 'from-emerald-50 to-cyan-50/30'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-slate-50/50" id="home-page-container">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-36 bg-[#030712] border-b border-slate-900" id="home-hero">
        {/* Large Hero Background Image on the right side */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 -z-10 overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center transform scale-102"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          {/* Edge-to-edge blending gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/60 to-transparent lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/20 via-[#030712]/90 to-[#030712] lg:hidden block" />
        </div>

        {/* Ambient clinical backglows behind text to keep it high tech */}
        <div className="absolute left-10 top-1/4 -z-10 h-100 w-100 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute left-1/3 bottom-10 -z-10 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl" />

        <div className="mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-6 space-y-6 text-left relative z-10">
              <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider text-cyan-400 bg-cyan-950/40 uppercase border border-cyan-800/40">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>Telangana DCA Approved • ISO 9001:2015 Certified</span>
              </span>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Precision analysis.<br />
                Proven standards.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic font-sans font-medium">Built for safety.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-lg leading-relaxed font-sans">
                Adept Pharma delivers high-precision analytical testing, method validation, and rigorous regulatory compliance reports. Engineered exclusively for pharmaceutical, biotech, and research innovators who demand absolute data integrity.
              </p>

              {/* Call-to-actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <button
                  onClick={() => {
                    setCurrentPage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  id="hero-primary-cta"
                  className="flex items-center justify-center space-x-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-lg shadow-cyan-950/20 hover:scale-102 transition-all cursor-pointer"
                >
                  <span>Request Validation Quote</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('instrumentation');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  id="hero-secondary-cta"
                  className="flex items-center justify-center space-x-1.5 px-7 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80 rounded-lg transition-all"
                >
                  <span>Explore Core Instrumentation</span>
                </button>
              </div>

              {/* Visual Badges row matches the icons in the reference image */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-900" id="hero-badge-grid">
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4.5 w-4.5 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wide">cGMP Lab</p>
                    <p className="text-[10px] text-slate-400">Strict audits</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4.5 w-4.5 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wide">Batch Verified</p>
                    <p className="text-[10px] text-slate-400">Every lot checked</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4.5 w-4.5 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wide">Complete COA</p>
                    <p className="text-[10px] text-slate-400">With full MS spectra</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4.5 w-4.5 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wide">Global Delivery</p>
                    <p className="text-[10px] text-slate-400">Secure storage</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Goals-style Card over background */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end lg:pr-12 pt-8 lg:pt-0" id="hero-floating-card-container">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#090d16]/80 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 shadow-2xl max-w-xs space-y-4 hover:border-cyan-400/50 transition-all duration-300 text-left"
              >
                <div className="h-10 w-10 rounded-xl bg-cyan-950 flex items-center justify-center border border-cyan-500/20 text-cyan-400">
                  <Atom className="h-5 w-5 animate-spin" style={{ animationDuration: '8s' }} />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest">GMP CERTIFIED LAB</span>
                  <h4 className="font-display text-sm font-bold text-white leading-tight">HPLC & Mass Spectrometry Vault</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed pt-1.5 border-t border-slate-800">
                    All validation sequences run under strict installation, operational, and performance credentials.
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Metrics Section (Glassmorphic shelf) */}
      <section className="relative z-20 -mt-10 mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8 xl:px-12" id="metrics-panel">
        <div className="rounded-2xl bg-white/80 border border-slate-200/50 p-6 sm:p-8 backdrop-blur-lg shadow-lg grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:divide-x lg:divide-slate-100">
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-center lg:items-start text-center lg:text-left ${i > 0 && i % 2 === 0 ? 'pt-6 lg:pt-0' : ''} ${i > 1 ? 'pt-6 lg:pt-0' : ''} ${i > 0 ? 'lg:pl-8' : ''}`}>
              <span className="font-display text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">{stat.value}</span>
              <span className="text-sm font-semibold text-slate-800 mt-1.5">{stat.label}</span>
              <span className="text-xs text-slate-500 mt-0.5">{stat.description}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-12 md:py-16 lg:py-20 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12" id="core-capabilities">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">PREMIER PHARMA SERVICES</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Proprietary analytical assays.<br />Documented. Delivered.
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Every analytical validation runs on dedicated instruments calibrated to international pharmacopoeial standards. Rest assured knowing your molecules are processed through ultra-purified systems.
          </p>
        </div>

        {/* Featured capabilities cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12" id="capabilities-grid">
          {featuredServices.map((service) => (
            <div 
              key={service.id}
              onClick={() => {
                setCurrentPage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`rounded-2xl border border-slate-200/70 p-6.5 bg-gradient-to-br ${service.bgGradient} shadow-sm hover:shadow-md transition-all group cursor-pointer hover:scale-101 hover:border-cyan-200 duration-300 flex flex-col justify-between`}
            >
              <div className="space-y-4">
                <span className="inline-block text-[10px] font-bold tracking-wider text-blue-600 bg-blue-100/60 px-2 py-0.5 rounded uppercase">
                  {service.tag}
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{service.subtitle}</p>
                <ul className="space-y-2.5 pt-2 border-t border-slate-100">
                  {service.specs.map((spec, i) => (
                    <li key={i} className="flex items-center text-xs text-slate-600 space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center text-xs font-bold text-slate-700 group-hover:text-blue-600 space-x-1 pt-6">
                <span>View Service Details</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions / Supply Chain Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-slate-900 text-white overflow-hidden relative rounded-3xl mx-4 sm:mx-6 lg:mx-8 px-4 sm:px-12 lg:px-20" id="solutions-section">
        {/* Glow decoration */}
        <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-2xl text-left space-y-3 mb-12">
            <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">BUILT FOR RESEARCH & DEVELOPMENT</span>
            <h2 className="font-display text-2xl sm:text-3.5xl font-bold tracking-tight">
              Solutions for every stage of your drug discovery & product lifecycle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="solutions-grid">
            {valueProps.map((prop, i) => (
              <div key={i} className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5.5 space-y-3 backdrop-blur-sm">
                <div className="h-11 w-11 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
                  {prop.icon}
                </div>
                <h4 className="font-semibold text-slate-100 text-base">{prop.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification & Quality Documents Banner */}
      <section className="py-12 md:py-16 lg:py-20 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12" id="documentation-verification">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Certificate Graphic mockup */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center" id="coa-mockup-visual">
            <div className="relative w-full max-w-sm bg-white border border-slate-200 rounded-xl shadow-md p-6 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500" />
              
              {/* Report Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Adept Pharma</h4>
                  <p className="text-[8px] text-slate-400 font-mono">HPLC VALIDATION RECORD</p>
                </div>
                <div className="h-6 w-6 rounded bg-cyan-50 flex items-center justify-center">
                  <Activity className="h-3 w-3 text-cyan-600" />
                </div>
              </div>

              {/* Sample meta */}
              <div className="grid grid-cols-2 gap-2.5 py-4 border-b border-slate-100 text-left">
                <div>
                  <p className="text-[8px] text-slate-400">SAMPLE ID</p>
                  <p className="text-[10px] font-bold text-slate-700">AD-BPC157-7405</p>
                </div>
                <div>
                  <p className="text-[8px] text-slate-400">ANALYSIS DATE</p>
                  <p className="text-[10px] font-bold text-slate-700">2026-07-11</p>
                </div>
                <div>
                  <p className="text-[8px] text-slate-400">METHODOLOGY</p>
                  <p className="text-[10px] font-bold text-slate-700">RP-HPLC / UV-220nm</p>
                </div>
                <div>
                  <p className="text-[8px] text-slate-400">ACCURACY SCORE</p>
                  <p className="text-[10px] font-bold text-emerald-600">99.94% PURE</p>
                </div>
              </div>

              {/* Simulated spectrum peaks */}
              <div className="py-4 border-b border-slate-100">
                <p className="text-[8px] text-slate-400 text-left mb-2">HPLC CHROMATOGRAM SIGNAL PEAK</p>
                <div className="h-16 w-full bg-slate-50 border border-slate-100 rounded flex items-end px-4 relative">
                  {/* CSS SVG Peaks simulating real chromatography */}
                  <svg className="w-full h-14 text-cyan-500" viewBox="0 0 100 50" preserveAspectRatio="none">
                    <path d="M 0 50 L 20 50 L 25 45 L 30 50 L 50 50 L 55 10 L 60 50 L 75 50 L 80 40 L 85 50 L 100 50" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span className="absolute top-1 right-2 text-[7px] text-slate-400 font-mono">Main Peak: Retention 5.42 min</span>
                </div>
              </div>

              {/* Stamp of approval */}
              <div className="pt-4 flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  <div className="h-4.5 w-4.5 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center">
                    <span className="text-[8px] text-emerald-600 font-bold">✓</span>
                  </div>
                  <span className="text-[9px] text-slate-500">Quality Verified batch</span>
                </div>
                <div className="border border-cyan-200 bg-cyan-50/30 rounded px-2 py-1 text-[8px] font-bold text-cyan-700 font-mono">
                  COA RELEASED
                </div>
              </div>
            </div>
          </div>

          {/* Right: Copy details */}
          <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2" id="verification-copy">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">QUALITY ASSURANCE</span>
            <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
              Documentation that exceeds standard industry protocols.
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Every chemical characterization lot we complete is backed by fully-traceable raw spectra data. We do not just claim quality—we attach the molecular signature of proof. Access comprehensive validation records directly in our interactive clientele vault.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="documentation-checklist">
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-medium text-slate-700">Detailed Chromatograms (HPLC)</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-medium text-slate-700">Mass Spectrometry Verification</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-medium text-slate-700">Water Content Karl Fischer Analysis</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-medium text-slate-700">Trace Heavy Metal Testing</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  setCurrentPage('clientele');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-1 text-sm font-bold text-blue-600 hover:text-blue-800"
              >
                <span>Simulate a Certificate of Analysis Verification</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Partner Banner bottom */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-10 sm:py-14 rounded-2xl mx-4 sm:mx-6 lg:mx-8 px-4 sm:px-12 text-center relative overflow-hidden shadow-xl" id="partner-banner-bottom">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-5">
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">Partner with a clinical laboratory that understands accuracy.</h3>
          <p className="text-blue-100 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Apply to connect with our scientific team. Establish customized validation routines, residual compound assays, or stability study programs.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-white text-blue-700 font-bold rounded-lg shadow-md hover:bg-slate-50 hover:scale-103 transition-all cursor-pointer text-sm"
            >
              Request Custom Study Setup
            </button>
            <button
              onClick={() => {
                setCurrentPage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold text-blue-200 hover:text-white underline underline-offset-4"
            >
              Review Our Laboratory Accreditations
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
