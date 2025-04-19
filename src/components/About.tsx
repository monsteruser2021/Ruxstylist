"use client";

import React from "react";
import { cn } from "@/lib/utils";
import GlassCard from "./ui/GlassCard";
import AnimatedBadge from "./ui/AnimatedBadge";
import { Users, TrendingUp, Star, Handshake, GraduationCap } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      id="about"
      className={cn(
        "section-padding bg-[#222222] text-white relative overflow-hidden",
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
          <motion.div
            className="md:w-5/12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-24 h-24 border border-[#D4AF37]/30 rounded-sm z-0"></div>
              <div className="absolute -bottom-3 -right-3 w-32 h-32 border border-[#D4AF37]/30 rounded-sm z-0"></div>

              <div className="relative z-10 overflow-hidden rounded-sm">
                <Image
                  src="/About.png"
                  alt="Professional Stylist"
                  className="w-full h-auto object-cover"
                  width={500}
                  height={500}
                />
              </div>

              <div className="absolute -bottom-6 right-6 z-20">
                <GlassCard variant="dark" className="py-3 px-4">
                  <p className="font-serif text-[#D4AF37] text-sm mb-1">
                    Experiencia
                  </p>
                  <p className="text-2xl font-bold">10+ Años</p>
                </GlassCard>
              </div>
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            className="md:w-7/12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <AnimatedBadge text="SOBRE MÍ" className="mb-4" />

            <motion.h2
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              Trayectoria de{" "}
              <span className="[#D4AF37]-text">Excelencia</span> en el Arte de
              la Belleza
            </motion.h2>

            <motion.p
              className="text-white/80 mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              Con más de dos décadas de experiencia en la industria, he tenido el privilegio de trabajar como formador del area y colaborar con  marcas prestigiosas de rubro estilista. Mi enfoque combina técnicas tradicionales con innovación constante para crear estilos que no solo resaltan la belleza natural, sino que también reflejan la personalidad única de cada cliente.
            </motion.p>

            <motion.p
              className="text-white/80 mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              Mi filosofía se centra en  los detalles y  compromiso con un óptimo resultado. Cada servicio es una experiencia única como cada cliente, tomando en cuenta sus necesidades y atributos utilizando productos de comprobable calidad y técnicas adecuadas.
            </motion.p>

            {/* Achievements */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#D4AF37]/10 mb-4">
                  <TrendingUp className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="font-medium text-lg mb-1">Trayectoria</h3>
                <p className="text-white/70 text-sm">+20 años de trayectoria.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#D4AF37]/10 mb-4">
                  <Users className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="font-medium text-lg mb-1">Formación</h3>
                <p className="text-white/70 text-sm">
                  +10 años formando profesionales.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#D4AF37]/10 mb-4">
                  <Star className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="font-medium text-lg mb-1">Marcas</h3>
                <p className="text-white/70 text-sm">
                  Colaborador de 6 marcas comerciales del área.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#D4AF37]/10 mb-4">
                  <Handshake className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="font-medium text-lg mb-1">Asesorías</h3>
                <p className="text-white/70 text-sm">
                  +10 años ofreciendo asesorías profesionales.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#D4AF37]/10 mb-4">
                  <GraduationCap className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="font-medium text-lg mb-1">Estudiantes</h3>
                <p className="text-white/70 text-sm">
                  +3000 profesionales graduados.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;