import React from 'react';
import { Instagram, Facebook, Mail, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-16 px-8 relative">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Logo and brief description */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#D4AF37] mb-4">RUXSTYLIST</h2>
            <p className="text-white/60 mb-6 max-w-xs">
              Transformando visiones en realidad con técnicas innovadoras y un estilo único en la industria de la belleza.
            </p>
            
            {/* Social media links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors">
                <Instagram className="w-5 h-5" /> {/**Incluir tik tok */}
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#contact" className="w-10 h-10 rounded-full flex items-center justify-center border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="md:text-right">
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-white/60 hover:text-[#D4AF37] transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#about" className="text-white/60 hover:text-[#D4AF37] transition-colors">Sobre Mí</a>
              </li>
              <li>
                <a href="#services" className="text-white/60 hover:text-[#D4AF37] transition-colors">Servicios</a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/60 hover:text-[#D4AF37] transition-colors">Portafolio</a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-[#D4AF37] transition-colors">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} RUXSTYLIST. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;