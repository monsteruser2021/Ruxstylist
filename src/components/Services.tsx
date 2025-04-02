"use client"

import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import GlassCard from './ui/GlassCard';
import AnimatedBadge from './ui/AnimatedBadge';

interface Service {
  title: string;
  description: string;
  price: string;
  popular?: boolean;
}

interface ServiceCategory {
  name: string;
  description: string;
  services: Service[];
}

const serviceCategories: ServiceCategory[] = [
  {
    name: "Asesorías Personalizadas",
    description: "Consultas especializadas para transformar tu imagen",
    services: [
      {
        title: "Asesoría de Imagen Completa",
        description: "Análisis de colorimetría, morfología y estilo personal con recomendaciones detalladas",
        price: "Consultar precio",
        popular: true
      },
      {
        title: "Análisis de Colorimetría",
        description: "Descubre los colores que mejor complementan tu tono de piel y rasgos naturales",
        price: "Consultar precio"
      },
      {
        title: "Renovación de Estilo",
        description: "Transforma tu guardarropa con selecciones que potencien tu imagen personal",
        price: "Consultar precio"
      }
    ]
  },
  {
    name: "Servicios de Belleza",
    description: "Tratamientos profesionales con técnicas exclusivas",
    services: [
      {
        title: "Corte y Estilizado",
        description: "Diseño personalizado según tu fisonomía y estilo deseado con acabado de lujo",
        price: "Consultar precio"
      },
      {
        title: "Coloración Premium",
        description: "Técnicas avanzadas de coloración utilizando productos de alta gama",
        price: "Consultar precio",
        popular: true
      },
      {
        title: "Tratamiento Capilar Intensivo",
        description: "Regeneración profunda y nutrición para cabellos dañados o debilitados",
        price: "Consultar precio"
      }
    ]
  },
  {
    name: "Formación Profesional",
    description: "Capacitación especializada para profesionales",
    services: [
      {
        title: "Masterclass de Técnicas Avanzadas",
        description: "Formación intensiva en las técnicas más innovadoras del sector",
        price: "Consultar precio",
        popular: true
      },
      {
        title: "Mentoría Personalizada",
        description: "Acompañamiento individual para impulsar tu carrera profesional",
        price: "Consultar precio"
      },
      {
        title: "Curso de Colorimetría Profesional",
        description: "Domina el arte del color y la aplicación para resultados superiores",
        price: "Consultar precio"
      }
    ]
  }
];

const Services = () => {
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
      id="services" 
      className="section-padding bg-[#F5F5DC] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
      <div className="absolute top-40 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedBadge text="SERVICIOS" className="reveal-animation mb-4" />
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 reveal-animation reveal-delay-100">
            Experiencias de <span className="[#D4AF37]-text">Belleza</span> Excepcionales
          </h2>
          
          <p className="text-[#222222]/80 max-w-2xl mx-auto reveal-animation reveal-delay-200">
            Servicios exclusivos diseñados para transformar y realzar tu imagen con las técnicas más avanzadas y productos de lujo
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-16 mb-16">
          {serviceCategories.map((category, index) => (
            <div key={category.name} className={cn(
              "reveal-animation",
              index % 2 === 0 ? "animate-fade-in-left" : "animate-fade-in-right"
            )}>
              <div className="mb-8">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-3">{category.name}</h3>
                <p className="text-[#222222]/70">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <GlassCard 
                    key={service.title}
                    className={cn(
                      "border",
                      service.popular ? "border-[#D4AF37]" : "border-transparent"
                    )}
                    hoverEffect
                  >
                    {service.popular && (
                      <div className="absolute -top-3 right-4">
                        <span className="px-3 py-1 bg-[#D4AF37] text-white text-xs font-medium rounded-full">
                          Popular
                        </span>
                      </div>
                    )}
                    
                    <h4 className="font-serif text-xl font-semibold mb-3">{service.title}</h4>
                    <p className="text-[#222222]/70 text-sm mb-4">{service.description}</p>
                    <p className="font-medium text-[#D4AF37]">{service.price}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20 reveal-animation reveal-delay-300">
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-md bg-[#222222] text-white font-medium hover:bg-[#222222]/80 transition-colors inline-block"
          >
            Solicitar Servicio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;