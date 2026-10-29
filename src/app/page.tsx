"use client";
import Image from "next/image";
import { useState } from "react";

type Experience = {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
  highlights: string[];
};

type Project = {
  title: string;
  description: string;
  url: string;
  tags: string[];
};

const skills = {
  frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Redux", "Tailwind", "HTML", "CSS"],
  backend: ["Python", "Django", "Node.js", "NestJS", "PostgreSQL", "Prisma", "APIs RESTful"],
  mobile: ["Flutter", "Android", "iOS"],
  data: ["Apache Kafka", "Apache Superset", "Moodle"],
};

const certificates = [
  { issuer: "UNEMI", name: "IX JORNADAS ACADÉMICAS & CONGRESO DE CIENCIAS DE LA INGENIERÍA", year: "2019" },
  { issuer: "UDEMY", name: "THE ULTIMATE REACT COURSE 2024: REACT, REDUX & MORE", year: "2023" },
  { issuer: "UDEMY", name: "NODE.JS, EXPRESS, MONGODB & MORE: THE COMPLETE BOOTCAMP 2024", year: "2024" },
];

const projectLinks = [
  { url: "https://template.stockreact-ec.com/", tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL"] },
  { url: "https://o-soundz.vercel.app/", tags: ["ReactJS", "Redux"] },
  { url: "https://world-wise-mu.vercel.app/", tags: ["React", "Tailwind"] },
  { url: "https://prychat-mauve.vercel.app/auth/login", tags: ["Next.js", "Tailwind", "PostgreSQL", "Node.js"] },
];

// Convierte los fragmentos marcados con **texto** en negrilla
function richText(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-gray-900">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export default function Home() {
  const [language, setLanguage] = useState<"es" | "en">("es");

  const translations = {
    es: {
      role: "Desarrollador Web Full Stack",
      aboutTitle: "Sobre mí",
      aboutText:
        "Desarrollador **Full Stack** con experiencia en **JavaScript (React.js) y Python (Django)**, creando aplicaciones web robustas y escalables bajo arquitecturas de software como **n-tier, hexagonal y clean architecture**, con sólida aplicación de **patrones de microservicios y micro frontends** para sistemas desacoplados y mantenibles. Hábil en el diseño de **APIs RESTful**, manejo de **bases de datos relacionales (PostgreSQL)** y **despliegue de aplicaciones**, aplicando **TDD (Test-Driven Development)** para garantizar calidad y cobertura desde las primeras etapas del desarrollo. Metodologías ágiles **Scrum**, colaborando en equipos multidisciplinarios con entregas iterativas y enfoque en mejora continua.",
      experienceTitle: "Experiencia",
      experiences: [
        {
          title: "Desarrollador Web",
          company: "Tecnológico Rumiñahui",
          location: "Sangolquí, Pichincha",
          date: "Diciembre 2024 - Actualidad",
          description:
            "Desarrollé módulos estratégicos con **PostgreSQL, Django, HTML, CSS y JavaScript**, incluyendo **salvoconductos, encuestas institucionales, integración con Moodle, dashboards analíticos y paneles administrativos**, asumiendo la **responsabilidad técnica de extremo a extremo**.",
          highlights: [
            "**Reduje en un 35%** el tiempo de gestión de salvoconductos al digitalizar y automatizar el flujo completo.",
            "Aumenté la participación estudiantil en encuestas, alcanzando **más de 500 respuestas** con una interfaz optimizada e intuitiva.",
            "**Automaticé alrededor de 15 tareas recurrentes** del personal administrativo mediante dashboards y paneles centralizados.",
            "Mejoré la adopción de la plataforma Moodle al **integrar 3 procesos académicos clave**.",
            "Logré una **valoración positiva de 4 de cada 5 usuarios** internos con módulos alineados a sus necesidades operativas.",
          ],
        },
        {
          title: "Desarrollador Web Freelancer",
          company: "Universidad de Cuenca",
          location: "Cuenca, Azuay",
          date: "Agosto 2026 - Noviembre 2026",
          description:
            "Contribuí a la evolución del **sistema gestor documental Quipux** como **referente técnico** en el diseño e implementación de módulos críticos de **backup automatizado, envío de correos personalizados, gestión dinámica de destinatarios** y rediseño del flujo de creación de usuarios.",
          highlights: [
            "**Reduje en un 40%** el tiempo de alta de usuarios y **disminuí en un 25%** las solicitudes de soporte asociadas.",
            "**Bajé en un 35%** los incidentes por pérdida o corrupción de información con el sistema de backups automatizados.",
            "**Aumenté en un 50%** la eficiencia del envío de notificaciones institucionales, **reduciendo errores de entrega en un 30%**.",
          ],
        },
        {
          title: "Desarrollador Mobile Freelancer",
          company: "Tecnológico Rumiñahui",
          location: "Sangolquí, Pichincha",
          date: "Mayo 2026 - Agosto 2026",
          description:
            "Desarrollé y publiqué una **app móvil** con **Flutter** para **Android** e **iOS** orientada a la **gestión de acceso institucional**: los estudiantes inician sesión, visualizan su carnet digital y consultan sus clases; los administrativos generan **códigos QR** y los guardias los escanean desde la misma app para **registrar entradas y salidas**.",
          highlights: [],
        },
        {
          title: "Asistente de Desarrollo",
          company: "Universidad Estatal de Milagro",
          location: "Milagro, Guayas",
          date: "Septiembre 2024 - Diciembre 2024",
          description:
            "Como desarrollador especializado en **Django**, participé en la creación de un módulo de **gestión de auditorías**, asumiendo el diseño e implementación de funcionalidades de **seguimiento de registros y generación de reportes** detallados.",
          highlights: [
            "Integré **Apache Kafka** como **microservicio** para el streaming de eventos de auditoría en tiempo real, **reduciendo en un 40%** el tiempo de generación de reportes.",
            "Implementé **Apache Superset** para habilitar **dashboards interactivos** que facilitan el seguimiento y la trazabilidad de las auditorías.",
            "**Optimicé consultas** e integración con la base de datos, mejorando la eficiencia del sistema y la precisión del análisis.",
          ],
        },
      ] as Experience[],
      educationTitle: "Educación",
      education: [
        {
          school: "Universidad Estatal de Milagro",
          degree: "Maestría en Tecnologías de la Información, mención Transformación Digital e Innovación",
          date: "2025 - Actualidad",
        },
        {
          school: "Universidad Estatal de Milagro",
          degree: "Ingeniería de Software",
          date: "2019 - 2023",
        },
      ],
      skillsTitle: "Habilidades",
      skillGroups: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        data: "Datos e Integraciones",
        practices: "Arquitectura y Metodologías",
      },
      practices: ["Clean Architecture", "Hexagonal", "N-tier", "Microservicios", "Micro Frontends", "TDD", "Scrum"],
      coursesTitle: "Cursos y Certificaciones",
      languagesTitle: "Idiomas",
      languages: "Español – Nativo / Inglés – Intermedio",
      projectsTitle: "Proyectos",
      viewDemo: "Ver Demo",
      projects: [
        {
          title: "STOCKREACT",
          description:
            "Sistema de manejo de inventario con facturación electrónica, notas de crédito y retenciones. Incluye control de entrada y salida de existencias para una gestión completa del stock.",
        },
        {
          title: "O SOUNDZ",
          description:
            "Plataforma de música similar a Spotify, crea tu playlist, reproduce música, escucha las mejores 50 músicas del momento.",
        },
        {
          title: "WORLD WISE",
          description:
            "Un mapa mundial que rastrea tus pasos en cada ciudad que puedas imaginar. Nunca olvides tus maravillosas experiencias y muéstrale a tus amigos cómo has recorrido el mundo.",
        },
        {
          title: "PRYCHAT",
          description:
            "Aplicación de mensajería instantánea donde puedes comunicarte con amigos y contactos en tiempo real de forma rápida y sencilla.",
        },
      ],
      footer: "Todos los derechos reservados.",
    },
    en: {
      role: "Full Stack Web Developer",
      aboutTitle: "About Me",
      aboutText:
        "**Full Stack** Developer with experience in **JavaScript (React.js) and Python (Django)**, building robust and scalable web applications using software architectures such as **n-tier, hexagonal and clean architecture**, with solid use of **microservices and micro frontends patterns** for decoupled, maintainable systems. Skilled in **RESTful API** design, **relational databases (PostgreSQL)** and **application deployment**, applying **TDD (Test-Driven Development)** to ensure quality and coverage from the earliest stages of development. Experienced with Agile **Scrum**, collaborating in cross-functional teams with iterative delivery and a focus on continuous improvement.",
      experienceTitle: "Experience",
      experiences: [
        {
          title: "Web Developer",
          company: "Tecnológico Rumiñahui",
          location: "Sangolquí, Pichincha",
          date: "December 2024 - Present",
          description:
            "Built strategic modules with **PostgreSQL, Django, HTML, CSS and JavaScript**, including **safe-conduct passes, institutional surveys, Moodle integration, analytics dashboards and admin panels**, taking **end-to-end technical ownership**.",
          highlights: [
            "**Cut safe-conduct processing time by 35%** by digitizing and automating the entire workflow.",
            "Increased student survey participation to **over 500 responses** with an optimized, intuitive interface.",
            "**Automated around 15 recurring administrative tasks** through centralized dashboards and panels.",
            "Improved Moodle adoption by **integrating 3 key academic processes**.",
            "Achieved **positive ratings from 4 out of 5 internal users** with modules aligned to their operational needs.",
          ],
        },
        {
          title: "Freelance Web Developer",
          company: "Universidad de Cuenca",
          location: "Cuenca, Azuay",
          date: "August 2026 - November 2026",
          description:
            "Contributed to the evolution of the **Quipux document management system** as **technical lead** for the design and implementation of critical modules: **automated backups, personalized email delivery, dynamic recipient management** and a redesigned user onboarding flow.",
          highlights: [
            "**Reduced user onboarding time by 40%** and related support requests **by 25%**.",
            "Lowered data loss and corruption incidents **by 35%** with the automated backup system.",
            "Increased institutional notification efficiency **by 50%**, **reducing delivery errors by 30%**.",
          ],
        },
        {
          title: "Freelance Mobile Developer",
          company: "Tecnológico Rumiñahui",
          location: "Sangolquí, Pichincha",
          date: "May 2026 - August 2026",
          description:
            "Built and published a **Flutter mobile app** for **Android** and **iOS** for **institutional access control**: students sign in, view their digital ID card and check their classes; staff generate **QR codes**, and security guards scan them from the same app to **log entries and exits**.",
          highlights: [],
        },
        {
          title: "Development Assistant",
          company: "Universidad Estatal de Milagro",
          location: "Milagro, Guayas",
          date: "September 2024 - December 2024",
          description:
            "As a **Django**-focused developer, I helped build an **audit management** module, owning the design and implementation of **record tracking and detailed report generation** features.",
          highlights: [
            "Integrated **Apache Kafka** as a **microservice** for real-time audit event streaming, **reducing report generation time by 40%**.",
            "Implemented **Apache Superset** to deliver **interactive dashboards** for audit tracking and traceability.",
            "**Optimized database queries** and integration, improving system efficiency and analysis accuracy.",
          ],
        },
      ] as Experience[],
      educationTitle: "Education",
      education: [
        {
          school: "Universidad Estatal de Milagro",
          degree: "Master's in Information Technology, major in Digital Transformation and Innovation",
          date: "2025 - Present",
        },
        {
          school: "Universidad Estatal de Milagro",
          degree: "Software Engineering",
          date: "2019 - 2023",
        },
      ],
      skillsTitle: "Skills",
      skillGroups: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        data: "Data & Integrations",
        practices: "Architecture & Methodologies",
      },
      practices: ["Clean Architecture", "Hexagonal", "N-tier", "Microservices", "Micro Frontends", "TDD", "Scrum"],
      coursesTitle: "Courses and Certifications",
      languagesTitle: "Languages",
      languages: "Spanish – Native / English – Intermediate",
      projectsTitle: "Projects",
      viewDemo: "View Demo",
      projects: [
        {
          title: "STOCKREACT",
          description:
            "Inventory management system with electronic invoicing, credit notes, and tax withholdings. Includes stock entry and exit tracking for complete inventory control.",
        },
        {
          title: "O SOUNDZ",
          description:
            "Music platform similar to Spotify, create your playlist, play music, listen to the top 50 songs of the moment.",
        },
        {
          title: "WORLD WISE",
          description:
            "A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show your friends how you have wandered the world.",
        },
        {
          title: "PRYCHAT",
          description:
            "Instant messaging application where you can communicate with friends and contacts in real time, quickly and easily.",
        },
      ],
      footer: "All rights reserved.",
    },
  };

  const t = translations[language];

  const projects: Project[] = t.projects.map((p, i) => ({ ...p, ...projectLinks[i] }));

  const skillGroups: { label: string; items: string[]; color: string }[] = [
    { label: t.skillGroups.frontend, items: skills.frontend, color: "bg-blue-100 text-blue-800" },
    { label: t.skillGroups.backend, items: skills.backend, color: "bg-green-100 text-green-800" },
    { label: t.skillGroups.mobile, items: skills.mobile, color: "bg-purple-100 text-purple-800" },
    { label: t.skillGroups.data, items: skills.data, color: "bg-amber-100 text-amber-800" },
  ];

  const sectionTitle =
    "text-2xl font-bold text-slate-800 border-b-2 border-slate-800 pb-2 mb-4";

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
                  href="mailto:me@marcosteran.dev"
                  className="hover:text-slate-300 transition-colors"
                >
                  📧 me@marcosteran.dev
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
                <a
                  href="https://www.linkedin.com/in/marcos-t-a58537221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-300 transition-colors"
                >
                  💼 in/marcos-t-a58537221
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Contenido Principal */}
        <div className="p-8 space-y-8">
          {/* Sobre mí */}
          <section>
            <h2 className={sectionTitle}>{t.aboutTitle}</h2>
            <p className="text-gray-700 leading-relaxed">{richText(t.aboutText)}</p>
          </section>

          {/* Experiencia */}
          <section>
            <h2 className={sectionTitle}>{t.experienceTitle}</h2>
            <div className="space-y-6">
              {t.experiences.map((exp) => (
                <div key={`${exp.title}-${exp.date}`}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                    <h3 className="font-semibold text-lg text-gray-700">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-gray-600">{exp.date}</span>
                  </div>
                  <p className="text-gray-600 italic mb-2">
                    {exp.company} · {exp.location}
                  </p>
                  <p className="text-gray-700">{richText(exp.description)}</p>
                  {exp.highlights.length > 0 && (
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 text-sm">
                      {exp.highlights.map((h) => (
                        <li key={h}>{richText(h)}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Educación */}
          <section>
            <h2 className={sectionTitle}>{t.educationTitle}</h2>
            <div className="space-y-3">
              {t.education.map((edu) => (
                <div key={edu.degree}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <h3 className="font-semibold text-gray-700">{edu.degree}</h3>
                    <span className="text-sm text-gray-600">{edu.date}</span>
                  </div>
                  <p className="text-gray-600 italic text-sm">{edu.school}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Habilidades */}
          <section>
            <h2 className={sectionTitle}>{t.skillsTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <h4 className="font-semibold mb-2 text-gray-800">{group.label}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className={`${group.color} px-3 py-1 rounded-full text-sm`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="sm:col-span-2">
                <h4 className="font-semibold mb-2 text-gray-800">
                  {t.skillGroups.practices}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {t.practices.map((practice) => (
                    <span
                      key={practice}
                      className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm"
                    >
                      {practice}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Cursos y Certificaciones */}
          <section>
            <h2 className={sectionTitle}>{t.coursesTitle}</h2>
            <div className="space-y-3">
              {certificates.map((cert) => (
                <div key={cert.name}>
                  <h3 className="font-semibold text-gray-700">{cert.issuer}</h3>
                  <p className="text-gray-600 text-sm">
                    {cert.name} - {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Idiomas */}
          <section>
            <h2 className={sectionTitle}>{t.languagesTitle}</h2>
            <p className="text-gray-700">{t.languages}</p>
          </section>

          {/* Proyectos */}
          <section>
            <h2 className={sectionTitle}>{t.projectsTitle}</h2>
            <div className="space-y-4">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-lg text-gray-700">
                      {project.title}
                    </h3>
                    <a
                      href={project.url}
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
                  <p className="text-gray-700 mb-3">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gray-50 p-6 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Marcos Teran. {t.footer}</p>
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
