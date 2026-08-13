import { motion } from 'motion/react';
import { 
  Building2, 
  Users, 
  Award, 
  FileCheck2, 
  Dna, 
  Beaker, 
  ClipboardCheck, 
  Flame, 
  Compass, 
  CheckCircle,
  Target,
  Eye,
  ShieldAlert,
  User,
  ShieldCheck,
  ClipboardList,
  Microscope,
  TrendingUp,
  Laptop,
  Network
} from 'lucide-react';
import pageBannerBg from '../assets/page-banner-bg.jpg';
import aboutHeroBg from '../assets/about-hero-bg.png';

export default function About() {
  const coreValues = [
    {
      icon: <Building2 className="h-6 w-6 text-cyan-600" />,
      title: 'Approved Laboratory Services',
      description: 'Adept Pharma and Bioscience Excellence Private Limited (APBEPL) is an approved contract testing laboratory providing high-quality chemical, instrumental, and microbiological services.'
    },
    {
      icon: <Target className="h-6 w-6 text-blue-600" />,
      title: 'Our Mission',
      description: 'To provide contract testing services in the fields of Pharmaceutical, Food, Packaged Drinking Water, and Chemical Industries.'
    },
    {
      icon: <Eye className="h-6 w-6 text-teal-600" />,
      title: 'Our Vision',
      description: 'To be seen as an Indian organization with a global perspective that has created an integrated, quality-driven, customer-sensitive Contract Research and Testing centre that is the most comprehensive of its kind across the globe.'
    }
  ];

  const strengths = [
    'Deep technical expertise',
    'A strong base of technology disciplines',
    'Highly qualified staff members',
    'A core competence in transferring technologies to businesses',
    'Employees who enjoy the richness of a broad, technical environment',
    'With strong technical support, ADEPT is able to identify process/quality improvement opportunities and recommend suitable solutions',
    'Knowledge, experience, and commitment of our team ensure that we provide value-added results and solutions to our clients'
  ];

  const qualityStandards = [
    'Approved Testing Laboratory by National Accreditation Board for Testing and Calibration Laboratories (NABL)',
    'Approved Testing Laboratory by CDSCO, New Delhi',
    'Approved Testing Laboratory by DCA, State of Telangana',
    'GLP-Certified Laboratory Operations',
    'Accredited by ISO 9001:2015 Standards',
    'Accredited by ISO 45001:2018 (Occupational Health & Safety)'
  ];

  return (
    <div className="relative overflow-hidden bg-slate-50/50" id="about-page-container">
      
      <section className="bg-[#030712] text-white relative py-20 md:py-28 overflow-hidden" id="about-hero">
        <div 
          className="absolute inset-y-0 right-0 w-[85%] bg-cover bg-right" 
          style={{ backgroundImage: `url(${aboutHeroBg})`, opacity: 0.85 }} 
        />
        <div 
          className="absolute inset-y-0 left-[15%] w-[20%] bg-gradient-to-r from-[#030712] to-transparent" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030712]" />
        
        <div className="relative z-10 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-left space-y-4">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">ADEPT PHARMA & BIOSCIENCE EXCELLENCE</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">About Our Company</h1>
          <p className="text-slate-400 text-base md:text-lg max-w-4xl leading-relaxed">
            Adept Pharma and Bioscience Excellence Private Limited (APBEPL) is a premier approved contract testing laboratory, delivering high quality scientific assays.
          </p>
        </div>
      </section>

      {/* Intro and Mission Section */}
      <section className="py-12 md:py-16 lg:py-20 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12" id="about-intro">
        <div className="w-full space-y-8 text-center">
          <h2 className="font-display text-2xl md:text-3.5xl font-bold text-slate-950">
            Contract Testing & <span className="text-cyan-600">Bioscience Solutions</span>
          </h2>
          <p className="text-slate-650 text-base md:text-lg leading-relaxed max-w-full">
            <strong>Adept Pharma and Bioscience Excellence Private Limited (APBEPL)</strong> is an approved contract testing laboratory, providing high quality laboratory services in the field of Chemical, Instrumental and Microbiological services.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-full">
            Our founders possess a global network of experienced professionals involved in the pharmaceutical and healthcare industry, giving us the expertise and capacity to provide value-added results and solutions to our clients.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left">
            {coreValues.map((val, i) => (
              <div key={i} className="bg-white border border-slate-200/50 rounded-xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600">
                  {val.icon}
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{val.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths & Competences Cards Section */}
      <section className="py-12 md:py-16 bg-slate-50 border-t border-b border-slate-100" id="about-strengths">
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <div className="w-full mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono">A GLOBAL PROFESSIONAL NETWORK</span>
            <h2 className="font-display text-2xl md:text-3.5xl font-bold text-slate-950">Our Strengths & Competences</h2>
            <p className="text-slate-500 text-xs sm:text-sm">We leverage deep technical expertise and structured disciplines to deliver high-value analytical results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full text-left">
            {strengths.map((str, i) => (
              <div key={i} className="bg-white border border-slate-200/60 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-cyan-200/80 transition-all flex items-start space-x-4">
                <div className="h-8 w-8 rounded-lg bg-cyan-50 shrink-0 flex items-center justify-center text-cyan-600 mt-0.5 animate-pulse">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <p className="text-slate-750 text-sm font-medium leading-relaxed">{str}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="py-12 md:py-16 bg-slate-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-12 relative overflow-hidden" id="about-qualifications">
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="relative z-10 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-left">
          <div className="w-full space-y-2 mb-10">
            <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">QUALITY ASSURED OPERATIONS</span>
            <h2 className="font-display text-2xl sm:text-3.5xl font-bold">Standard Certification & Approvals</h2>
            <p className="text-slate-400 text-xs sm:text-sm">We operate strictly under the directives of national and international drug calibration systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="standards-grid">
            {qualityStandards.map((std, i) => (
              <div key={i} className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-5 flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-slate-200 text-xs sm:text-sm font-medium leading-relaxed">{std}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team intro block */}
      <section className="py-12 md:py-16 lg:py-20 bg-white border-t border-slate-100 text-left" id="about-management">
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">EXPERT COMMAND</span>
            <h2 className="font-display text-2xl md:text-3.5xl font-bold text-slate-950">Our Management Team</h2>
            <p className="text-slate-655 text-sm md:text-base leading-relaxed">
              Adept Pharma Bioscience Excellence Private Limited is operated by <strong>highly skilled, qualified, and experienced professionals</strong> to offer advanced training and testing assays in the pharmaceutical and health sciences.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our founders possess deep domain knowledge, maintaining active roles in day-to-day operations and validating laboratory methods against international pharmacopoeial standards.
            </p>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-200/60 rounded-2xl p-6.5 space-y-4 w-full">
            <h4 className="font-display font-bold text-slate-900 text-base">Key Leadership Focus Areas</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2.5 text-xs text-slate-700">
                <div className="h-2 w-2 rounded-full bg-cyan-500" />
                <span>Advanced testing in pharmaceutical and health sciences</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-slate-700">
                <div className="h-2 w-2 rounded-full bg-cyan-500" />
                <span>Global network of experienced healthcare professionals</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-slate-700">
                <div className="h-2 w-2 rounded-full bg-cyan-500" />
                <span>Standard verification of data integrity & reproducibility</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
