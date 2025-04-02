"use client"

import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import GlassCard from './ui/GlassCard';
import AnimatedBadge from './ui/AnimatedBadge';
import { Users, TrendingUp, Star, Handshake, GraduationCap } from 'lucide-react';
import Image from 'next/image';

const About = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-animation');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    revealElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      revealElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section 
      id="about" 
      className={cn(
        'section-padding bg-[#222222] text-white relative overflow-hidden',
        className
      )}
      {...props}
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left column - Image */}
          <div className="md:w-5/12 reveal-animation">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-24 h-24 border border-[#D4AF37]/30 rounded-sm z-0"></div>
              <div className="absolute -bottom-3 -right-3 w-32 h-32 border border-[#D4AF37]/30 rounded-sm z-0"></div>
              
              <div className="relative z-10 overflow-hidden rounded-sm">
                <Image 
                  src="About.png" 
                  alt="Professional Stylist" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 right-6 z-20">
                <GlassCard variant="dark" className="py-3 px-4">
                  <p className="font-serif text-[#D4AF37] text-sm mb-1">Experiencia</p>
                  <p className="text-2xl font-bold">10+ Años</p>
                </GlassCard>
              </div>
            </div>
          </div>
          
          {/* Right column - Content */}
          <div className="md:w-7/12">
            <AnimatedBadge text="SOBRE MÍ" className="reveal-animation mb-4" />
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 reveal-animation reveal-delay-100">
              Trayectoria de <span className="[#D4AF37]-text">Excelencia</span> en el Arte de la Belleza
            </h2>
            
            <p className="text-white/80 mb-8 reveal-animation reveal-delay-200">
              Con más de una década de experiencia en la industria, he tenido el privilegio de trabajar con celebridades, participar en desfiles de moda internacionales y colaborar con las marcas más prestigiosas del sector. Mi enfoque combina técnicas tradicionales con innovación constante para crear estilos que no solo resaltan la belleza natural, sino que también reflejan la personalidad única de cada cliente.
            </p>
            
            <p className="text-white/80 mb-8 reveal-animation reveal-delay-200">
              Mi filosofía se centra en la atención meticulosa a los detalles y un compromiso inquebrantable con la excelencia. Cada servicio que ofrezco está personalizado para satisfacer las necesidades individuales, utilizando productos de la más alta calidad y técnicas de vanguardia.
            </p>
            
            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 reveal-animation reveal-delay-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#D4AF37]/10 mb-4">
                  <TrendingUp className="w-6 h-6 text-[#D4AF37]"/>
                </div>
                <h3 className="font-medium text-lg mb-1">Trayectoria</h3>
                <p className="text-white/70 text-sm">+20 años de trayectoria.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#D4AF37]/10 mb-4">
                  <Users className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="font-medium text-lg mb-1">Formación</h3>
                <p className="text-white/70 text-sm">+10 años formando profesionales.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#D4AF37]/10 mb-4">
                  <Star className="w-6 h-6 text-[#D4AF37]"/>
                </div>
                <h3 className="font-medium text-lg mb-1">Marcas</h3>
                <p className="text-white/70 text-sm">Colaborador de 6 marcas comerciales del área.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#D4AF37]/10 mb-4">
                  <Handshake className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="font-medium text-lg mb-1">Asesorías</h3>
                <p className="text-white/70 text-sm">+10 años ofreciendo asesorías profesionales.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#D4AF37]/10 mb-4">
                  <GraduationCap className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="font-medium text-lg mb-1">Estudiantes</h3>
                <p className="text-white/70 text-sm">+3000 profesionales graduados.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;