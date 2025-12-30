"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<"es" | "en">("es");

  const translations = {
    es: {
      role: "Desarrollador Web Full Stack",
      aboutTitle: "Sobre mí",
      aboutText:
        "Desarrollador full stack con experiencia en JavaScript (React.js) y Python (Django), creando aplicaciones web robustas y escalables. Hábil en el diseño de APIs REST, manejo de bases de datos relacionales y despliegue de aplicaciones.",
      experienceTitle: "Experiencia",
      exp1: {
        title: "Desarrollador",
        date: "Marzo 2025 - Actualidad",
        company: "Universitario Tecnológico Rumiñahui",
        description:
          "Actualmente me encuentro trabajando como programador, utilizando PostgreSQL, Django, Html, Css y Javascript. He contribuido al desarrollo de módulos clave como salvoconductos, encuestas y otras funcionalidades adaptadas a las necesidades institucionales.",
      },
      exp2: {
        title: "Asistente de Desarrollo",
        date: "Septiembre 2024 - Octubre 2024",
        company: "Universidad Estatal de Milagro",
        description:
          "Desarrollador en la Universidad Estatal de Milagro, especializado en la creación de un módulo de gestión de auditorías usando Django. Implementé funcionalidades para el seguimiento de registros y la generación de reportes detallados.",
      },
      skillsTitle: "Habilidades",
      coursesTitle: "Cursos y Certificaciones",
      projectsTitle: "Proyectos",
      viewDemo: "Ver Demo",
      project1: {
        title: "O SOUNDZ",
        description:
          "Plataforma de música similar a Spotify, crea tu playlist, reproduce música, escucha las mejores 50 músicas del momento.",
      },
      project2: {
        title: "NATOURS",
        description:
          "Aplicación de gestión de reservaciones para realizar un tour.",
      },
      project3: {
        title: "FAST REACT PIZZA",
        description: "Aplicación para buscar tu pizza favorita y ordenarla.",
      },
      footer: "Todos los derechos reservados.",
    },
    en: {
      role: "Full Stack Web Developer",
      aboutTitle: "About Me",
      aboutText:
        "Full stack developer with experience in JavaScript (React.js) and Python (Django), creating robust and scalable web applications. Skilled in REST API design, relational database management, and application deployment.",
      experienceTitle: "Experience",
      exp1: {
        title: "Developer",
        date: "March 2025 - Present",
        company: "Universitario Tecnológico Rumiñahui",
        description:
          "Currently working as a programmer, using PostgreSQL, Django, HTML, CSS, and JavaScript. I have contributed to the development of key modules such as safe conducts, surveys, and other functionalities adapted to institutional needs.",
      },
      exp2: {
        title: "Development Assistant",
        date: "September 2024 - October 2024",
        company: "Universidad Estatal de Milagro",
        description:
          "Developer at Universidad Estatal de Milagro, specialized in creating an audit management module using Django. I implemented functionalities for record tracking and detailed report generation.",
      },
      skillsTitle: "Skills",
      coursesTitle: "Courses and Certifications",
      projectsTitle: "Projects",
      viewDemo: "View Demo",
      project1: {
        title: "O SOUNDZ",
        description:
          "Music platform similar to Spotify, create your playlist, play music, listen to the top 50 songs of the moment.",
      },
      project2: {
        title: "NATOURS",
        description: "Booking management application for tours.",
      },
      project3: {
        title: "FAST REACT PIZZA",
        description: "Application to find your favorite pizza and order it.",
      },
      footer: "All rights reserved.",
    },
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {/* Contenedor tipo hoja A4 */}
      <div className="max-w-[210mm] mx-auto bg-white shadow-lg">
        {/* Header - Datos Personales con Foto */}
        <header className="bg-slate-800 text-white p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Foto de perfil */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
              <Image
                src="/images/MI_FOTO.JPEG"
                alt="Foto de perfil"
                fill
                className="object-cover transform scale-125 -translate-y-4"
                priority
              />
            </div>

            {/* Información personal */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                Marcos Teran
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 mb-4">{t.role}</p>
              <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm justify-center md:justify-start">
                <a
                  href="mailto:mteranc@unemi.edu.ec"
                  className="hover:text-slate-300 transition-colors"
                >
                  📧 mteranc@unemi.edu.ec
                </a>
                <a
                  href="tel:+593961366408"
                  className="hover:text-slate-300 transition-colors"
                >
                  📱 +593 96 136 6408
                </a>
                <span>📍 Guayaquil, Ecuador</span>
                <a
                  href="https://github.com/marcosdaniel2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-300 transition-colors"
                >
                  🔗 github.com/marcosdaniel2002
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Contenido Principal */}
        <div className="p-8 space-y-8">
          {/* Sobre mí */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-slate-800 pb-2 mb-4">
              {t.aboutTitle}
            </h2>
            <p className="text-gray-700 leading-relaxed">{t.aboutText}</p>
          </section>

          {/* Experiencia */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-slate-800 pb-2 mb-4">
              {t.experienceTitle}
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-lg text-gray-700">
                    {t.exp1.title}
                  </h3>
                  <span className="text-sm text-gray-600">{t.exp1.date}</span>
                </div>
                <p className="text-gray-600 italic mb-2">{t.exp1.company}</p>
                <p className="text-gray-700">{t.exp1.description}</p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-lg text-gray-700">
                    {t.exp2.title}
                  </h3>
                  <span className="text-sm text-gray-600">{t.exp2.date}</span>
                </div>
                <p className="text-gray-600 italic mb-2">{t.exp2.company}</p>
                <p className="text-gray-700">{t.exp2.description}</p>
              </div>
            </div>
          </section>

          {/* Habilidades */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-slate-800 pb-2 mb-4">
              {t.skillsTitle}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-gray-800">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Javascript
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    React
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Tailwind
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    TypeScript
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-800">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Django
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    PostgreSQL
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Cursos y Certificaciones */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-slate-800 pb-2 mb-4">
              {t.coursesTitle}
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gray-700">UNEMI</h3>
                <p className="text-gray-600 text-sm">
                  IX JORNADAS ACADÉMICAS & CONGRESO DE CIENCIAS DE LA INGENIERÍA
                  - 2023
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">UDEMY</h3>
                <p className="text-gray-600 text-sm">
                  THE ULTIMATE REACT COURSE 2024: REACT, REDUX & MORE
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">UDEMY</h3>
                <p className="text-gray-600 text-sm">
                  NODE.JS, EXPRESS, MONGODB & MORE: THE COMPLETE BOOTCAMP 2024
                </p>
              </div>
            </div>
          </section>

          {/* Proyectos */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-slate-800 pb-2 mb-4">
              {t.projectsTitle}
            </h2>
            <div className="space-y-4">
              {/* O SOUNDZ */}
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg text-gray-700">
                    {t.project1.title}
                  </h3>
                  <a
                    href="https://o-soundz.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap"
                  >
                    {t.viewDemo}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
                <p className="text-gray-700 mb-3">{t.project1.description}</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                    ReactJS
                  </span>
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                    Redux
                  </span>
                </div>
              </div>

              {/* NATOURS */}
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg text-gray-700">
                    {t.project2.title}
                  </h3>
                  <a
                    href="https://natours-k5xw.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap"
                  >
                    {t.viewDemo}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
                <p className="text-gray-700 mb-3">{t.project2.description}</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                    Node.js
                  </span>
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                    MongoDB
                  </span>
                </div>
              </div>

              {/* FAST REACT PIZZA */}
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg text-gray-700">
                    {t.project3.title}
                  </h3>
                  <a
                    href="https://fast-react-pizza-three.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap"
                  >
                    {t.viewDemo}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
                <p className="text-gray-700 mb-3">{t.project3.description}</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                    ReactJS
                  </span>
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                    Tailwind
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gray-50 p-6 text-center text-gray-600 text-sm">
          <p>© 2025 Marcos Teran. {t.footer}</p>
        </footer>
      </div>

      {/* Botón flotante de idioma */}
      <button
        onClick={() => setLanguage(language === "es" ? "en" : "es")}
        className="fixed bottom-8 right-8 bg-slate-800 hover:bg-slate-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center gap-2 font-medium"
        aria-label="Cambiar idioma"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span className="text-sm">{language === "es" ? "EN" : "ES"}</span>
      </button>
    </div>
  );
}
