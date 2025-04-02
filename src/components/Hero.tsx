"use client"

import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import AnimatedBadge from './ui/AnimatedBadge';

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {}

const Hero = ({ className, ...props }: HeroProps) => {
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
      id="hero" 
      className={cn(
        'relative min-h-screen flex flex-col justify-center items-center overflow-hidden',
        className
      )}
      {...props}
    >
      {/* Background with subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5DC] to-[#F5F5DC]/70 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-12 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedBadge text="ESTILISTA PROFESIONAL" className="reveal-animation mb-6 " />
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 reveal-animation reveal-delay-100">
            <span className="block">Creando</span>
            <span className="gold text-3xl md:text-5xl ">Belleza Excepcional</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#222222]/80 mb-10 max-w-2xl mx-auto reveal-animation reveal-delay-200">
            Transformando visiones en realidad con técnicas innovadoras y un estilo único que ha definido tendencias en la industria de la belleza
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 reveal-animation reveal-delay-300">
            <a 
              href="#portfolio" 
              className="px-8 py-3 rounded-md bg-[#222222] text-white font-medium hover:bg-[#222222]/90 transition-colors"
            >
              Ver Portafolio
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-md bg-transparent border border-[#D4AF37] text-[#222222] font-medium hover:bg-[#D4AF37]/10 transition-colors"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5F5DC] to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
    </section>
  );
};

export default Hero;