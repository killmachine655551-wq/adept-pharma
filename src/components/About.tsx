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
    'Accredited by OHSAS 18001:2007 (Occupational Health & Safety)'
  ];

  return (
    <div className="relative overflow-hidden bg-slate-50/50" id="about-page-container">
      
      {/* Visual Header */}
      <section className="bg-[#030712] text-white relative py-16 md:py-24" id="about-hero">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-multiply" style={{ backgroundImage: `url(${pageBannerBg})`, opacity: 0.65 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030712]" />
        
        <div className="relative z-10 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-left space-y-4">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">ADEPT PHARMA & BIOSCIENCE EXCELLENCE</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">About Our Company</h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">
            Adept Pharma and Bioscience Excellence Private Limited (APBEPL) is a premier approved contract testing laboratory, delivering high quality scientific assays.
          </p>
        </div>
      </section>

      {/* Intro and Mission Section */}
      <section className="py-12 md:py-16 lg:py-20 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12" id="about-intro">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start text-left">
          
          <div className="space-y-6">
            <h2 className="font-display text-2xl md:text-3.5xl font-bold text-slate-950">
              Contract Testing & <span className="text-cyan-600">Bioscience Solutions</span>
            </h2>
            <p className="text-slate-650 text-base leading-relaxed">
              <strong>Adept Pharma and Bioscience Excellence Private Limited (APBEPL)</strong> is an approved contract testing laboratory, providing high quality laboratory services in the field of Chemical, Instrumental and Microbiological services.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Our founders possess a global network of experienced professionals involved in the pharmaceutical and healthcare industry, giving us the expertise and capacity to provide value-added results and solutions to our clients.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {coreValues.map((val, i) => (
                <div key={i} className="bg-white border border-slate-200/50 rounded-xl p-5 space-y-3 shadow-sm">
                  <div className="h-10 w-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600">
                    {val.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">{val.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{val.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold text-slate-950 flex items-center space-x-2">
              <Award className="h-5 w-5 text-cyan-600" />
              <span>Our Strengths & Competences</span>
            </h3>
            <p className="text-xs text-slate-450 uppercase font-mono tracking-wider">A Global Professional Network</p>
            <ul className="space-y-3">
              {strengths.map((str, i) => (
                <li key={i} className="flex items-start text-xs sm:text-sm text-slate-650 space-x-2.5">
                  <CheckCircle className="h-4.5 w-4.5 text-cyan-500 shrink-0 mt-0.5" />
                  <span>{str}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Certifications Banner */}
      <section className="py-12 md:py-16 bg-slate-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 px-4 sm:px-12 relative overflow-hidden" id="about-qualifications">
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="relative z-10 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-left">
          <div className="max-w-2xl space-y-2 mb-10">
            <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">QUALITY ASSURED OPERATIONS</span>
            <h2 className="font-display text-2xl sm:text-3.5xl font-bold">Standard Certification & Approvals</h2>
            <p className="text-slate-400 text-xs sm:text-sm">We operate strictly under the directives of national and international drug calibration systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="standards-grid">
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

          <div className="lg:col-span-5 bg-slate-50 border border-slate-200/60 rounded-2xl p-6.5 space-y-4">
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

      {/* Hierarchy Chart Section */}
      <section className="py-12 md:py-16 bg-slate-50/50 border-t border-slate-100 text-center relative overflow-hidden" id="about-hierarchy">
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono">ORGANIZATIONAL DESIGN</span>
            <h3 className="font-display text-2xl md:text-3.5xl font-bold text-slate-900 font-bold">Organizational Hierarchy & Reporting Matrix</h3>
            <p className="text-slate-550 text-xs sm:text-sm">
              Our clear, expert-led departmental reporting matrix ensures strict separation of compliance duties, data integrity controls, and operations transparency.
            </p>
          </div>

          {/* Graphical Tree Area */}
          <div className="relative max-w-6xl mx-auto">
            
            {/* Top Level: Managing Director */}
            <div className="flex flex-col items-center mb-10 relative">
              <div className="bg-white border-2 border-blue-500 text-slate-900 rounded-2xl p-5 shadow-md text-center relative z-10 w-full max-w-[280px]">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center shadow border-2 border-white">
                  <User className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-display font-bold text-base mt-2 text-slate-900">Mr. A. Govardhana Reddy</h4>
                <p className="text-[10px] font-mono uppercase tracking-wider text-blue-600 font-bold mt-0.5">Managing Director (MD)</p>
              </div>
              {/* Vertical line going down from MD */}
              <div className="h-10 w-0.5 bg-slate-300"></div>
            </div>

            {/* Horizontal line & vertical drops layout - only on large screens */}
            <div className="hidden lg:block absolute left-[12.5%] right-[12.5%] top-[108px] h-0.5 bg-slate-300"></div>

            {/* Main reporting tree grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-4 lg:pt-0 relative">
              
              {/* Branch 1: Quality Assurance */}
              <div className="flex flex-col items-center relative">
                {/* Vertical connector drop line on desktop */}
                <div className="hidden lg:block h-6 w-0.5 bg-slate-300 mb-4"></div>
                <div className="bg-white border border-slate-200 rounded-2xl p-5.5 w-full shadow-sm hover:shadow-md hover:border-cyan-200/80 transition-all text-left space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                    <div className="h-9 w-9 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono font-bold text-slate-450 uppercase block tracking-wider">HOD QA</span>
                      <h5 className="font-bold text-slate-900 text-sm">M. Srinivas</h5>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider font-mono">QA Division Team</p>
                    <ul className="space-y-1.5 text-xs text-slate-650">
                      <li className="flex items-center space-x-1.5">
                        <div className="h-1 w-1 rounded-full bg-cyan-400" />
                        <span>Shyam Sundar <span className="text-[10px] font-mono text-slate-400 font-bold">(AM)</span></span>
                      </li>
                      <li className="flex items-center space-x-1.5">
                        <div className="h-1 w-1 rounded-full bg-cyan-400" />
                        <span>Sridevi <span className="text-[10px] font-mono text-slate-400 font-bold">(AM)</span></span>
                      </li>
                      <li className="flex items-center space-x-1.5">
                        <div className="h-1 w-1 rounded-full bg-cyan-400" />
                        <span>Ramakrishna <span className="text-[10px] font-mono text-slate-400 font-bold">(AM)</span></span>
                      </li>
                      <li className="pt-1 text-[10px] text-slate-400 font-medium italic pl-2.5">
                        & support staff team
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Branch 2: Quality Control */}
              <div className="flex flex-col items-center relative">
                {/* Vertical connector drop line on desktop */}
                <div className="hidden lg:block h-6 w-0.5 bg-slate-300 mb-4"></div>
                <div className="bg-white border border-slate-200 rounded-2xl p-5.5 w-full shadow-sm hover:shadow-md hover:border-cyan-200/80 transition-all text-left space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                    <div className="h-9 w-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <ClipboardList className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono font-bold text-slate-450 uppercase block tracking-wider">HOD QC</span>
                      <h5 className="font-bold text-slate-900 text-sm">K. Keshava Kishore</h5>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider font-mono">QC Division Managers</p>
                    <ul className="space-y-1.5 text-xs text-slate-650">
                      <li className="flex items-center space-x-1.5">
                        <div className="h-1 w-1 rounded-full bg-blue-400" />
                        <span>R. Anil Kumar <span className="text-[10px] font-mono text-slate-400 font-bold">(Manager)</span></span>
                      </li>
                      <li className="flex items-center space-x-1.5">
                        <div className="h-1 w-1 rounded-full bg-blue-400" />
                        <span>Vishnuvardhan Reddy <span className="text-[10px] font-mono text-slate-400 font-bold">(Manager)</span></span>
                      </li>
                      <li className="flex items-center space-x-1.5">
                        <div className="h-1 w-1 rounded-full bg-blue-400" />
                        <span>Narsimha Reddy <span className="text-[10px] font-mono text-slate-400 font-bold">(Dy Manager)</span></span>
                      </li>
                      <li className="pt-1 text-[10px] text-slate-400 font-medium italic pl-2.5">
                        & laboratory technician team
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Branch 3: Microbiology */}
              <div className="flex flex-col items-center relative">
                {/* Vertical connector drop line on desktop */}
                <div className="hidden lg:block h-6 w-0.5 bg-slate-300 mb-4"></div>
                <div className="bg-white border border-slate-200 rounded-2xl p-5.5 w-full shadow-sm hover:shadow-md hover:border-cyan-200/80 transition-all text-left space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                    <div className="h-9 w-9 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                      <Microscope className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono font-bold text-slate-450 uppercase block tracking-wider">HOD Microbiology</span>
                      <h5 className="font-bold text-slate-900 text-sm">Dr. Satya Babu</h5>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider font-mono">Microbiology Team</p>
                    <ul className="space-y-1.5 text-xs text-slate-650">
                      <li className="flex items-center space-x-1.5">
                        <div className="h-1 w-1 rounded-full bg-teal-400" />
                        <span>Sarada <span className="text-[10px] font-mono text-slate-400 font-bold">(AM)</span></span>
                      </li>
                      <li className="flex items-center space-x-1.5">
                        <div className="h-1 w-1 rounded-full bg-teal-400" />
                        <span>Sekuntala <span className="text-[10px] font-mono text-slate-400 font-bold">(Sr Microbiologist)</span></span>
                      </li>
                      <li className="flex items-center space-x-1.5">
                        <div className="h-1 w-1 rounded-full bg-teal-400" />
                        <span>Srinivas Reddy <span className="text-[10px] font-mono text-slate-400 font-bold">(Microbiologist)</span></span>
                      </li>
                      <li className="pt-1 text-[10px] text-slate-400 font-medium italic pl-2.5">
                        & sterilization support staff
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Branch 4: Support Divisions */}
              <div className="flex flex-col items-center relative">
                {/* Vertical connector drop line on desktop */}
                <div className="hidden lg:block h-6 w-0.5 bg-slate-300 mb-4"></div>
                <div className="w-full flex flex-col space-y-4">
                  
                  {/* HR Card */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4.5 shadow-sm text-left flex items-start space-x-3.5">
                    <div className="h-8.5 w-8.5 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Users className="h-4.5 w-4.5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Human Resources</span>
                      <h6 className="font-bold text-slate-900 text-xs leading-tight">Arikatla Jyothiraditya-Reddy</h6>
                      <p className="text-[10px] text-slate-500 font-medium">HR Manager & Team</p>
                    </div>
                  </div>

                  {/* Business Development Card */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4.5 shadow-sm text-left flex items-start space-x-3.5">
                    <div className="h-8.5 w-8.5 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                      <TrendingUp className="h-4.5 w-4.5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Business Development</span>
                      <h6 className="font-bold text-slate-900 text-xs leading-tight">Sai Kiran.N</h6>
                      <p className="text-[10px] text-slate-500 font-medium">AGM & Team</p>
                    </div>
                  </div>

                  {/* IT Card */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4.5 shadow-sm text-left flex items-start space-x-3.5">
                    <div className="h-8.5 w-8.5 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                      <Laptop className="h-4.5 w-4.5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Information Technology</span>
                      <h6 className="font-bold text-slate-900 text-xs leading-tight">KSM Manoj Kumar</h6>
                      <p className="text-[10px] text-slate-500 font-medium">IT Lead & Team</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Employee Distribution Table Section */}
      <section className="py-12 md:py-16 bg-white border-t border-slate-100 text-left" id="about-distribution">
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Descriptive Summary of Staffing Quality */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono">STAFF METRICS</span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900">Dedicated Technical Manpower</h3>
            <p className="text-slate-655 text-sm leading-relaxed">
              Our lab operations are powered by a robust team of <strong>56 qualified specialists</strong>. Every division is staffed by trained professionals whose skillsets align with the precise analytical technologies they operate.
            </p>
            
            <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6.5 space-y-4">
              <h5 className="font-bold text-slate-900 text-sm">Skills & Capability Highlights</h5>
              <div className="space-y-3.5 text-xs text-slate-650">
                <div className="flex items-start space-x-3">
                  <div className="h-5 w-5 rounded-full bg-cyan-100 flex items-center justify-center shrink-0 text-cyan-600 font-bold text-[10px]">45%</div>
                  <p>Percentage of researchers holding postgraduate or doctorate degrees in chemistry and life sciences.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600 font-bold text-[10px]">100%</div>
                  <p>Annual GxP compliance training completed by our quality control and assurance team members.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-5 w-5 rounded-full bg-teal-100 flex items-center justify-center shrink-0 text-teal-600 font-bold text-[10px]">7+</div>
                  <p>Years average hands-on laboratory experience across our primary analytical instrumentation supervisors.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Table */}
          <div className="lg:col-span-7 w-full overflow-hidden border border-slate-200 rounded-2xl shadow-sm">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-4 flex items-center justify-between border-b border-slate-200">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-blue-100" />
                <h4 className="font-display font-bold text-base">Departmental Staff Distribution</h4>
              </div>
              <span className="text-[10px] font-mono bg-white/20 backdrop-blur px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                Total Staff: 56
              </span>
            </div>
            
            <div className="divide-y divide-slate-150">
              
              {/* Header row */}
              <div className="bg-slate-50 grid grid-cols-12 px-6 py-3.5 text-xs font-bold text-slate-600 font-mono tracking-wider uppercase">
                <div className="col-span-9 text-left">Department</div>
                <div className="col-span-3 text-center">No. of Employees</div>
              </div>

              {/* Rows */}
              {[
                { name: 'Quality Assurance', count: 11, icon: <ShieldCheck className="h-4 w-4 text-cyan-600" /> },
                { name: 'Quality Control (Wet Section)', count: 10, icon: <ClipboardCheck className="h-4 w-4 text-blue-600" /> },
                { name: 'Instrumentation (HPLC, GC & TOC)', count: 7, icon: <Beaker className="h-4 w-4 text-teal-600" /> },
                { name: 'Mass Spectroscopy (AAS, LCMS, ICPMS & GCMS)', count: 6, icon: <Dna className="h-4 w-4 text-purple-600" /> },
                { name: 'Microbiology', count: 11, icon: <Microscope className="h-4 w-4 text-indigo-600" /> },
                { name: 'Information Technology (IT)', count: 2, icon: <Laptop className="h-4 w-4 text-slate-600" /> },
                { name: 'Maintenance Department', count: 1, icon: <Building2 className="h-4 w-4 text-amber-600" /> },
                { name: 'Personnel & Administration', count: 2, icon: <Users className="h-4 w-4 text-sky-600" /> },
                { name: 'Purchase Department', count: 1, icon: <Compass className="h-4 w-4 text-rose-600" /> },
                { name: 'Human Resources (HR)', count: 1, icon: <User className="h-4 w-4 text-violet-600" /> },
                { name: 'Business development', count: 4, icon: <TrendingUp className="h-4 w-4 text-emerald-600" /> }
              ].map((row, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-12 px-6 py-3 text-xs sm:text-sm items-center hover:bg-slate-50/50 transition-colors ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/20'
                  }`}
                >
                  <div className="col-span-9 flex items-center space-x-3 text-slate-700 font-medium">
                    <div className="shrink-0">{row.icon}</div>
                    <span>{row.name}</span>
                  </div>
                  <div className="col-span-3 text-center text-slate-900 font-bold font-mono">
                    {row.count}
                  </div>
                </div>
              ))}

              {/* Total row */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50/30 grid grid-cols-12 px-6 py-4 items-center border-t border-slate-200">
                <div className="col-span-9 flex items-center space-x-3 text-blue-900 font-bold">
                  <div className="shrink-0">
                    <Network className="h-4.5 w-4.5 text-blue-700 animate-pulse" />
                  </div>
                  <span className="uppercase tracking-wider font-mono text-xs">Total Organization Strength</span>
                </div>
                <div className="col-span-3 text-center text-blue-950 font-black font-mono text-base">
                  56
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
