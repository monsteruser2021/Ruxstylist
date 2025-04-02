"use client"

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import AnimatedBadge from './ui/AnimatedBadge';
import Image from 'next/image';

// Portfolio categories and items
const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'cortes', name: 'Cortes' },
  { id: 'coloracion', name: 'Coloración' },
  { id: 'eventos', name: 'Eventos' },
  { id: 'asesorias', name: 'Asesorías' },
];

// Portfolio items data
const portfolioItems = [
  {
    id: 1,
    title: 'Transformación Total',
    category: 'cortes',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    description: 'Corte de precisión con texturizado y estilizado personalizado',
  },
  {
    id: 2,
    title: 'Balayage Dorado',
    category: 'coloracion',
    image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    description: 'Técnica de degradado con tonos cálidos para un brillo natural',
  },
  {
    id: 3,
    title: 'Estilismo para Gala',
    category: 'eventos',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    description: 'Peinado de alto impacto para evento de alfombra roja',
  },
  {
    id: 4,
    title: 'Renovación de Imagen',
    category: 'asesorias',
    image: 'https://images.unsplash.com/photo-1516914589923-f105f1535f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    description: 'Consultoría completa de estilo con análisis de colorimetría',
  },
  {
    id: 5,
    title: 'Corte Pixie Estructurado',
    category: 'cortes',
    image: 'https://images.unsplash.com/photo-1541421853792-87b21882f371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80',
    description: 'Corte geométrico con textura y volumen controlado',
  },
  {
    id: 6,
    title: 'Color Fantasía',
    category: 'coloracion',
    image: 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    description: 'Técnica avanzada de coloración con tonos vibrantes',
  },
  {
    id: 7,
    title: 'Estilismo Nupcial',
    category: 'eventos',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80',
    description: 'Peinado y tocado personalizado para el día especial',
  },
  {
    id: 8,
    title: 'Consultoría Ejecutiva',
    category: 'asesorias',
    image: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    description: 'Asesoría de imagen profesional para entorno corporativo',
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);
  
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
      id="portfolio" 
      className="section-padding bg-[#222222] text-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedBadge text="PORTAFOLIO" className="reveal-animation mb-4" />
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 reveal-animation reveal-delay-100">
            Galería de <span className="[#D4AF37]-text">Transformaciones</span>
          </h2>
          
          <p className="text-white/80 max-w-2xl mx-auto reveal-animation reveal-delay-200">
            Explora una selección de trabajos que reflejan mi pasión por la excelencia y el compromiso con resultados excepcionales
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal-animation reveal-delay-200">
          {categories.map(category => (
            <button
              key={category.id}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category.id 
                  ? "bg-[#D4AF37] text-[#222222]" 
                  : "bg-[#222222]-light text-white/80 hover:bg-[#D4AF37]/20"
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Portfolio grid */}
        <div className="portfolio-grid reveal-animation reveal-delay-300">
          {filteredItems.map(item => (
            <div key={item.id} className="portfolio-item">
              <Image src={item.image} alt={item.title} />
              <div className="portfolio-overlay">
                <h3 className="text-xl font-serif font-semibold mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* If no items match the filter */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-white/70">No se encontraron trabajos en esta categoría.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;