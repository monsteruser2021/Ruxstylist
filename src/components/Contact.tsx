"use client";

import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import AnimatedBadge from "./ui/AnimatedBadge";
import GlassCard from "./ui/GlassCard";
import { Phone, Mail, Instagram, Calendar } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState(""); // Estado para mensajes de éxito o error
  const formRef = useRef<HTMLFormElement | null>(null); // Referencia al formulario

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal-animation");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(""); // Limpiar mensaje previo

    emailjs
      .sendForm(
        "service_o56dhb1",
        "template_4dognhh",
        e.currentTarget, // The form element
        "XdQ9-SZRQpm7003jk"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Mensaje enviado con éxito.");
          formRef.current?.reset(); // Reinicia el formulario
        },
        (error) => {
          console.log(error.text);
          setStatus("Hubo un error al enviar el mensaje. Intenta nuevamente.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="section-padding bg-[#F5F5DC] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
      <div className="absolute top-40 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedBadge text="CONTACTO" className="reveal-animation mb-4" />

          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 reveal-animation reveal-delay-100">
            Comienza Tu <span className="[#D4AF37]-text">Transformación</span>
          </h2>

          <p className="text-[#222222]/80 max-w-2xl mx-auto reveal-animation reveal-delay-200">
            Ponte en contacto para agendar una consulta y descubrir cómo podemos
            elevar tu imagen al siguiente nivel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="reveal-animation reveal-delay-200">
            <GlassCard className="shadow-xl">
              <h3 className="font-serif text-2xl font-bold mb-6">
                Envía tu Mensaje
              </h3>

              <form
                className="space-y-6"
                onSubmit={sendEmail}
                ref={formRef} // Asignar la referencia al formulario
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#222222] mb-1"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 bg-white/50 border border-[#D4AF37]/20 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#222222] mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 bg-white/50 border border-[#D4AF37]/20 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[#222222] mb-1"
                  >
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 bg-white/50 border border-[#D4AF37]/20 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50"
                    placeholder="Asunto de tu mensaje"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#222222] mb-1"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-white/50 border border-[#D4AF37]/20 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50"
                    placeholder="¿En qué puedo ayudarte?"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#222222] text-white font-medium rounded-md hover:bg-[#222222]-dark transition-colors cursor-pointer hover:scale-95 "
                >
                  Enviar Mensaje
                </button>
              </form>

              {status && (
                <p className="text-center mt-4 text-sm font-medium">
                  {status}
                </p>
              )}
            </GlassCard>
          </div>


          {/* Contact Information */}
          <div className="space-y-8 reveal-animation reveal-delay-300">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-6">
                Información de Contacto
              </h3>
              <p className="text-[#222222]/80 mb-8">
                Estoy disponible para consultas, citas y colaboraciones
                profesionales. No dudes en contactarme por cualquiera de los
                siguientes medios:
              </p>
            </div>

            <div className="grid gap-6">
              <GlassCard className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#D4AF37]/10 mr-4">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-sm text-[#222222]/70 mb-1">Teléfono</p>
                  <p className="font-medium">+58 (412) 369-5640</p>
                </div>
              </GlassCard>

              <GlassCard className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#D4AF37]/10 mr-4">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-sm text-[#222222]/70 mb-1">Email</p>
                  <p className="font-medium">ruxstylist@gmail.com</p>
                </div>
              </GlassCard>

              <GlassCard className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#D4AF37]/10 mr-4">
                  <Instagram className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-sm text-[#222222]/70 mb-1">Instagram</p>
                  <p className="font-medium">@ruxstylist</p>
                </div>
              </GlassCard>

              <GlassCard className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#D4AF37]/10 mr-4">
                  <Calendar className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-sm text-[#222222]/70 mb-1">Horario</p>
                  <p className="font-medium">Lunes a Viernes: 9:00 - 18:00</p>
                </div>
              </GlassCard>
            </div>

            {/**
             * <div className="pt-4">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-[#D4AF37] text-[#222222] font-medium rounded-md hover:bg-[#D4AF37]/10 transition-colors"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar una Cita
              </a>
            </div>
             */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;