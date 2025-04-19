"use client";

import React from "react";
import { cn } from "@/lib/utils";
import GlassCard from "./ui/GlassCard";
import AnimatedBadge from "./ui/AnimatedBadge";
import { motion } from "framer-motion";

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
    description: "Consultas especializadas para transformar tu imagen.",
    services: [
      {
        title: "Asesoría de Imagen Completa",
        description:
          "Análisis de colorimetría, morfología y estilo personal con recomendaciones detalladas.",
        price: "A consultar",
        popular: true,
      },
      {
        title: "Análisis de Colorimetría",
        description:
          "Descubre los colores que mejor complementan tu tono de piel y rasgos naturales.",
        price: "A consultar",
      },
    ],
  },
  {
    name: "Servicios de Belleza",
    description: "Tratamientos profesionales con técnicas exclusivas.",
    services: [
      {
        title: "Corte y Estilizado",
        description:
          "Diseño personalizado según tu fisonomía y estilo deseado con acabado de lujo.",
        price: "A consultar",
      },
      {
        title: "Coloración Premium",
        description:
          "Técnicas avanzadas de coloración utilizando productos premium.",
        price: "A consultar",
        popular: true,
      },
      {
        title: "Tratamiento Capilar Intensivo",
        description:
          "Regeneración profunda y nutrición para cabellos dañados o debilitados.",
        price: "A consultar",
      },
    ],
  },
  {
    name: "Formación Profesional",
    description: "Capacitación especializada para profesionales.",
    services: [
      {
        title: "Masterclass de Técnicas Avanzadas",
        description:
          "Formación intensiva en las técnicas más innovadoras del sector.",
        price: "A consultar",
        popular: true,
      },
      {
        title: "Mentoría Personalizada",
        description:
          "Acompañamiento individual para impulsar tu carrera profesional.",
        price: "A consultar",
      },
      {
        title: "Curso de Colorimetría Profesional",
        description:
          "Domina el arte del color y la aplicación para resultados superiores.",
        price: "A consultar",
      },
    ],
  },
];

const Services = () => {
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
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AnimatedBadge text="SERVICIOS" className="mb-4" />

          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Experiencias de Belleza Excepcionales
          </h2>

          <p className="text-[#222222]/80 max-w-2xl mx-auto">
            Servicios exclusivos diseñados para transformar y realzar tu imagen
            con las técnicas más avanzadas y productos premium.
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 gap-16 mb-16">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className="mb-8"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              {/* Category Header */}
              <div className="mb-8">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-3">
                  {category.name}
                </h3>
                <p className="text-[#222222]/70">{category.description}</p>
              </div>

              {/* Services */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
              >
                {category.services.map((service) => (
                  <GlassCard
                    key={service.title}
                    className={cn(
                      "border relative",
                      service.popular ? "border-[#D4AF37]" : "border-[#cacaca]"
                    )}
                    hoverEffect
                  >
                    {service.popular && (
                      <div className="absolute top-3 right-4">
                        <span className="px-3 py-1 bg-[#D4AF37] text-white text-xs font-medium rounded-full">
                          Popular
                        </span>
                      </div>
                    )}

                    <h4 className="font-serif text-xl font-semibold mb-3">
                      {service.title}
                    </h4>
                    <p className="text-[#222222]/70 text-sm mb-4">
                      {service.description}
                    </p>
                    <p className="font-medium text-[#D4AF37]">
                      {service.price}
                    </p>
                  </GlassCard>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <a
            href="#contact"
            className="px-8 py-3 rounded-md bg-[#222222] text-white font-medium hover:bg-[#222222]/80 transition-colors inline-block"
          >
            Solicitar Servicio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;