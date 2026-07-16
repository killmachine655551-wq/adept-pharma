import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Building, 
  Send, 
  ClipboardCheck, 
  AlertCircle,
  Truck,
  FileText
} from 'lucide-react';
import { InquiryFormData } from '../types';
import pageBannerBg from '../assets/page-banner-bg.jpg';

interface ContactProps {
  prefilledCategory: string;
}

export default function Contact({ prefilledCategory }: ContactProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceCategory: 'assay',
    urgency: 'Standard',
    sampleCount: 1,
    additionalNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ receiptId: string; date: string } | null>(null);

  // Apply prefilled service category if coming from Services page Estimator
  useEffect(() => {
    if (prefilledCategory) {
      setFormData(prev => ({
        ...prev,
        additionalNotes: `PRE-FILLED ESTIMATOR OUTLINE:\nTarget Service: ${prefilledCategory}\n`
      }));
    }
  }, [prefilledCategory]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.companyName) {
      alert('Please fill out all mandatory contact details (Name, Company, and Email) before submitting.');
      return;
    }

    setIsSubmitting(true);

    // Simulate clinical registration process
    setTimeout(() => {
      const generatedReceipt = `INQ-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      const currentDate = new Date().toISOString().split('T')[0];
      setSubmittedData({
        receiptId: generatedReceipt,
        date: currentDate
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      serviceCategory: 'assay',
      urgency: 'Standard',
      sampleCount: 1,
      additionalNotes: ''
    });
    setSubmittedData(null);
  };

  return (
    <div className="relative overflow-hidden bg-slate-50/50" id="contact-page-container">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white relative py-16 md:py-24" id="contact-hero">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-multiply" style={{ backgroundImage: `url(${pageBannerBg})`, opacity: 0.65 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90" />
        
        <div className="relative z-10 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-left space-y-4">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">SUBMIT AN INQUIRY OR RUN PROTOCOL</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Initiate Analytical Studies</h1>
          <p className="text-slate-350 text-base md:text-lg max-w-2xl leading-relaxed">
            Contact our regulatory intake desk to discuss study parameters, custom validation designs, or request sample shipment barcodes.
          </p>
        </div>
      </section>

      {/* Main contact grid */}
      <section className="py-12 md:py-16 lg:py-20 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12" id="contact-content-grid">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left: Contact Info & Secure Sample Shipping */}
          <div className="lg:col-span-5 space-y-8" id="contact-information-panel">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">ADEPT CENTRAL REGISTRY</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-950">Intake Logistics</h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                We accept physical molecular samples under strict environmental guidelines. Review our physical shipping protocols below prior to parcel labeling.
              </p>
            </div>

            {/* Direct Contact specs */}
            <div className="space-y-4" id="direct-contact-specs">
              <div className="flex items-start space-x-3 text-slate-600 text-xs sm:text-sm">
                <MapPin className="h-5 w-5 text-cyan-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-800">Adept Pharma Central Facility</p>
                  <p className="mt-0.5">Plot No #30 & 31, Survey No: 196, 197, 198,<br />Rajiv Gandhi Nagar, Moosapet (V),<br />GHMC Kukatpally circle, Balanagar (M),<br />Hyderabad-500037, Telangana, India</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 text-slate-600 text-xs sm:text-sm">
                <Phone className="h-5 w-5 text-cyan-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-800">Analytical Intake Desk</p>
                  <p className="mt-0.5">+91 9346619575 / +91 7995372062<br />Hours: Mon-Sat, 9:30 AM - 6:30 PM IST</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-slate-600 text-xs sm:text-sm">
                <Mail className="h-5 w-5 text-cyan-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-800">Digital Communications</p>
                  <p className="mt-0.5">info@adeptpharmabio.com<br />agr@adeptpharmabio.com / bdm@adeptpharmabio.com</p>
                </div>
              </div>
            </div>

            {/* Shipments requirements card */}
            <div className="p-5 bg-gradient-to-br from-cyan-50 to-blue-50/40 rounded-xl border border-cyan-100 space-y-4" id="shipment-requirements-card">
              <div className="flex items-center space-x-2 text-cyan-800 font-bold text-xs uppercase tracking-wider">
                <Truck className="h-4.5 w-4.5 text-cyan-600" />
                <span>Physical sample shipping rules</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-500 font-bold shrink-0">•</span>
                  <span><strong>Cold Chain:</strong> Lyophilized materials or peptides requiring frozen storage (-20°C) must be shipped in validated dry ice boxes with active temp monitors.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-500 font-bold shrink-0">•</span>
                  <span><strong>SDS Requirement:</strong> All submissions must pack a corresponding Safety Data Sheet (SDS) outside the secondary package sleeve.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-500 font-bold shrink-0">•</span>
                  <span><strong>LIMS Coding:</strong> Do not label vials with full chemical details for proprietary security. Use custom barcodes issued upon inquiry validation.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: The Dynamic Call-to-Action Form */}
          <div className="lg:col-span-7" id="contact-form-portal">
            <AnimatePresence mode="wait">
              {!submittedData ? (
                <motion.div 
                  key="inquiry-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md shadow-slate-100"
                >
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Header */}
                    <div className="pb-4 border-b border-slate-100 flex items-center space-x-2.5">
                      <ClipboardCheck className="h-5.5 w-5.5 text-cyan-600" />
                      <div>
                        <h3 className="font-display font-bold text-slate-900 text-lg">Testing Study Submission Form</h3>
                        <p className="text-[10px] text-slate-400 font-mono">ALL SUBMISSIONS UNDER SECURE NDAs BY DEFAULT</p>
                      </div>
                    </div>

                    {/* Section 1: Contact meta */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">Client Contact Name *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. Dr. Jane Doe"
                          value={formData.fullName}
                          onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                          className="w-full text-sm border border-slate-200 rounded-lg p-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500"
                        />
                      </div>
                      
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">Company / Entity Name *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. BioTherapeutics Inc."
                          value={formData.companyName}
                          onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                          className="w-full text-sm border border-slate-200 rounded-lg p-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">Corporate Email *</label>
                        <input 
                          type="email" 
                          required
                          placeholder="j.doe@biotherapeutics.com"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full text-sm border border-slate-200 rounded-lg p-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">Direct Telephone</label>
                        <input 
                          type="tel" 
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full text-sm border border-slate-200 rounded-lg p-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500"
                        />
                      </div>
                    </div>
                    {/* Inquiry Notes */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Inquiry Details *</label>
                      <textarea 
                        rows={4}
                        required
                        placeholder="Please enter the details of your inquiry here..."
                        value={formData.additionalNotes}
                        onChange={(e) => setFormData(prev => ({ ...prev, additionalNotes: e.target.value }))}
                        className="w-full text-sm border border-slate-200 rounded-lg p-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 font-sans"
                      />
                    </div>

                    {/* Security Declaration */}
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-start space-x-2">
                      <AlertCircle className="h-4.5 w-4.5 text-slate-400 shrink-0 mt-0.5" />
                      <p className="text-[10px] text-slate-500 leading-normal">
                        <strong>Confidentiality Declaration:</strong> All data, structures, synthesis pathways, and results processed through Adept Pharma are protected under our mutual NDA terms. No details are shared or catalogued with third-party networks.
                      </p>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      id="submit-inquiry-form-btn"
                      className="w-full py-3 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:scale-101 hover:shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending inquiry...</span>
                      ) : (
                        <>
                          <Send className="h-4 w-4 text-cyan-300" />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>

                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white border border-emerald-200 rounded-2xl p-6 sm:p-8 shadow-lg shadow-emerald-50/50 text-center space-y-6"
                >
                  <div className="h-14 w-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <ShieldCheck className="h-8 w-8 animate-bounce" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">Inquiry Submitted</h3>
                    <p className="text-slate-500 text-xs sm:text-sm max-w-sm mx-auto">
                      Your inquiry has been successfully sent to the Adept Intake Desk. We will get back to you shortly.
                    </p>
                  </div>

                  {/* Receipt block */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left max-w-md mx-auto space-y-3.5 relative overflow-hidden">
                    {/* Simulated barcode */}
                    <div className="h-10 w-full bg-white border border-slate-100 flex items-center justify-center px-6">
                      {/* Barcode bars */}
                      <div className="w-full h-6 flex justify-between">
                        {[1, 3, 2, 4, 1, 2, 3, 1, 4, 2, 1, 3, 2, 4, 1, 2, 3, 1, 4, 2, 1, 3, 2, 1].map((bar, i) => (
                          <div key={i} className="bg-slate-800" style={{ width: `${bar}px` }} />
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <p className="text-[9px] text-slate-400 font-bold uppercase">SECURE INQUIRY ID</p>
                        <p className="font-mono font-bold text-cyan-600">{submittedData.receiptId}</p>
                      </div>
                      <div>
                        <p className="text-[9px] text-slate-400 font-bold uppercase">SUBMISSION DATE</p>
                        <p className="font-semibold text-slate-800">{submittedData.date}</p>
                      </div>
                      <div>
                        <p className="text-[9px] text-slate-400 font-bold uppercase">CLIENT ENTITY</p>
                        <p className="font-semibold text-slate-800 line-clamp-1">{formData.companyName}</p>
                      </div>
                      <div>
                        <p className="text-[9px] text-slate-400 font-bold uppercase font-sans">INQUIRY STATUS</p>
                        <p className="font-mono font-bold text-slate-800">Pending Review</p>
                      </div>
                    </div>
                  </div>

                  {/* Actions instructions */}
                  <div className="p-4 bg-cyan-50/50 rounded-xl border border-cyan-100/60 text-xs text-left max-w-md mx-auto flex items-start space-x-2.5">
                    <FileText className="h-4.5 w-4.5 text-cyan-600 mt-0.5 shrink-0" />
                    <p className="text-cyan-900 leading-relaxed font-medium">
                      A confirmation email has been dispatched to <strong>{formData.email}</strong>. Our intake team is reviewing your requirements and will reach out to you via email or phone.
                    </p>
                  </div>

                  <div className="pt-4 flex justify-center">
                    <button
                      onClick={resetForm}
                      className="px-6 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

    </div>
  );
}
