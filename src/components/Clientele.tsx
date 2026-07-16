import { motion } from 'motion/react';
import pageBannerBg from '../assets/page-banner-bg.jpg';
import clienteleHeroBg from '../assets/clientele-hero-bg.png';

// Import all 37 cropped client logos
import client1 from '../assets/clients/client_1.png';
import client2 from '../assets/clients/client_2.png';
import client3 from '../assets/clients/client_3.png';
import client4 from '../assets/clients/client_4.png';
import client5 from '../assets/clients/client_5.png';
import client6 from '../assets/clients/client_6.png';
import client7 from '../assets/clients/client_7.png';
import client8 from '../assets/clients/client_8.png';
import client9 from '../assets/clients/client_9.png';
import client10 from '../assets/clients/client_10.png';
import client11 from '../assets/clients/client_11.png';
import client12 from '../assets/clients/client_12.png';
import client13 from '../assets/clients/client_13.png';
import client14 from '../assets/clients/client_14.png';
import client15 from '../assets/clients/client_15.png';
import client16 from '../assets/clients/client_16.png';
import client17 from '../assets/clients/client_17.png';
import client18 from '../assets/clients/client_18.png';
import client19 from '../assets/clients/client_19.png';
import client20 from '../assets/clients/client_20.png';
import client21 from '../assets/clients/client_21.png';
import client22 from '../assets/clients/client_22.png';
import client23 from '../assets/clients/client_23.png';
import client24 from '../assets/clients/client_24.png';
import client25 from '../assets/clients/client_25.png';
import client26 from '../assets/clients/client_26.png';
import client27 from '../assets/clients/client_27.png';
import client28 from '../assets/clients/client_28.png';
import client29 from '../assets/clients/client_29.png';
import client30 from '../assets/clients/client_30.png';
import client31 from '../assets/clients/client_31.png';
import client32 from '../assets/clients/client_32.png';
import client33 from '../assets/clients/client_33.png';
import client34 from '../assets/clients/client_34.png';
import client35 from '../assets/clients/client_35.png';
import client36 from '../assets/clients/client_36.png';
import client37 from '../assets/clients/client_37.png';

export default function Clientele() {
  const logos = [
    client1, client2, client3, client4, client5, client6, client7, client8, client9, client10,
    client11, client12, client13, client14, client15, client16, client17, client18, client19, client20,
    client21, client22, client23, client24, client25, client26, client27, client28, client29, client30,
    client31, client32, client33, client34, client35, client36, client37
  ];

  return (
    <div className="relative overflow-hidden bg-slate-50/50" id="clientele-page-container">
      
      <section className="bg-[#030712] text-white relative py-20 md:py-28 overflow-hidden" id="clientele-hero">
        <div 
          className="absolute inset-y-0 right-0 w-[85%] bg-cover bg-right" 
          style={{ backgroundImage: `url(${clienteleHeroBg})`, opacity: 0.85 }} 
        />
        <div 
          className="absolute inset-y-0 left-[15%] w-[20%] bg-gradient-to-r from-[#030712] to-transparent" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030712]" />
        
        <div className="relative z-10 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-left space-y-4">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">TRUSTED CRO PARTNER</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Our Clientele</h1>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl leading-relaxed">
            Trusted by leading global pharmaceutical, biotechnology, and life science enterprises. Delivering certified analytical research, GMP batch authorization, and quality validations.
          </p>
        </div>
      </section>

      {/* Grid of Client Logo Cards */}
      <section className="py-16 md:py-24 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12" id="client-logos-section">
        <div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8" 
          id="client-logos-grid"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 flex items-center justify-center h-28 shadow-sm hover:shadow-md hover:border-cyan-200/85 transition-all duration-300 group cursor-default"
              id={`client-card-${index}`}
            >
              <img 
                src={logo} 
                alt={`Client Logo ${index + 1}`} 
                className="max-w-full max-h-full object-contain filter group-hover:brightness-102 transition-all duration-350"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
