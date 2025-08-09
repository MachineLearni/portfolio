import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText, ChevronUp } from 'lucide-react';

// Use this URL for the resume link
const RESUME_URL = "/Shalini_Resume.docx"; 
const PROFILE_PHOTO_URL = "/ShaliniPrasanna.jpeg";

// The project data provided in your file
const projects = [
  {
    title: "E‑Hospital Management System",
    year: "2024",
    desc: "Full-stack hospital management system with React frontend and MySQL backend. Includes patient registration, appointment scheduling, billing, REST API integration, and role-based authentication.",
    tags: ["React", "REST API", "MySQL", "Form Validation"],
  },
  {
    title: "Online Multiplayer Runner Game (Dashboard)",
    year: "2023",
    desc: "React-based admin dashboard to monitor live game stats with interactive charts, leaderboards, and live data fetching for player management.",
    tags: ["React", "Realtime", "Data Visualization"],
  },
  {
    title: "To-Do App",
    year: "2024",
    desc: "Built with React + Redux; optimized with lazy loading and code splitting to improve performance.",
    tags: ["React", "Redux", "Performance"],
  }
];

// Mock data for other sections to make the portfolio more complete
const skills = [
  "React", "JavaScript (ES6+)", "HTML5", "CSS3",
  "Node.js", "MySQL", "RESTful APIs",
  "Git", "GitHub", "Redux", "Agile Methodologies", "Tailwind CSS"
];

const education = [
    {
    degree: "Master of Science in CyberSecurity",
    university: "university of Alabama, Huntsville",
    
  },
  {
    degree: "Master of Science in Computer Science",
    university: "university of Nottingham, England",
    
  },
  {
    degree: "Bachelor of Science in Information Technology",
    university: "Cummins college of Engineering, Savitribhai Phule University",
    
  }
];

const socialLinks = {
  github: "https://github.com/MachineLearni",
  linkedin: "https://linkedin.com/in/shalini-prasanna",
  email: "mailto:prasannashalini5@gmail.com"
};

// Main App component for the portfolio
export default function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Effect to handle scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      <div className="fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-600 z-50"></div>
      
      {/* Header and Navigation */}
      <header className="sticky top-0 bg-white shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600 hover:text-indigo-800 transition">
            <a href="#hero">Shalini Prasanna</a>
          </h1>
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#projects" className="text-slate-600 hover:text-indigo-600 transition">Projects</a>
            <a href="#skills" className="text-slate-600 hover:text-indigo-600 transition">Skills</a>
            <a href="#education" className="text-slate-600 hover:text-indigo-600 transition">Education</a>
            <a href="#contact" className="text-slate-600 hover:text-indigo-600 transition">Contact</a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-indigo-600 hover:text-indigo-800 transition"
              download
            >
              <FileText className="h-4 w-4 mr-1" /> Resume
            </a>
          </nav>
        </div>
      </header>

      {/* Main content area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Hero Section */}
        <section id="hero" className="flex flex-col md:flex-row items-center justify-between py-20 gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Shalini.</span>
            </h2>
            <p className="mt-4 text-xl sm:text-2xl text-slate-600 font-medium">
              A passionate <span className="text-indigo-600">React Developer</span>
            </p>
            <p className="mt-6 max-w-2xl text-slate-500">
              I build responsive, accessible, and performant web applications. With a focus on clean component architecture and measurable performance improvements, I create seamless user experiences.
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <a href="#projects" className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition transform hover:scale-105">
                View My Work
              </a>
              <a href={socialLinks.email} className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition transform hover:scale-105">
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
            <img 
              src={PROFILE_PHOTO_URL} 
              alt="Shalini Prasanna" 
              className="rounded-full shadow-2xl border-4 border-white object-cover w-full h-full"
            />
            <div className="absolute inset-0 rounded-full border-4 border-indigo-300 animate-pulse"></div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-10 text-center">Selected Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <article key={p.title} className="bg-white p-6 rounded-3xl shadow-lg border-2 border-slate-100 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                <div className="flex items-start justify-between">
                  <h4 className="text-xl font-bold text-indigo-600">{p.title}</h4>
                  <span className="text-sm text-slate-400">{p.year}</span>
                </div>
                <p className="mt-4 text-slate-600">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-10 text-center">My Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span key={skill} className="px-5 py-2 bg-white rounded-full shadow-md text-sm font-medium text-slate-700 hover:bg-indigo-50 transition transform hover:scale-105">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-10 text-center">Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative bg-white p-6 rounded-3xl shadow-lg border-2 border-slate-100 flex items-start gap-6">
                <div>
                  <h4 className="text-xl font-bold text-slate-800">{edu.degree}</h4>
                  <p className="text-lg text-slate-600">{edu.university}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-10 text-center">Get in Touch</h3>
          <div className="flex justify-center gap-6">
            <a href={socialLinks.email} className="flex items-center text-indigo-600 hover:text-indigo-800 transition transform hover:scale-110">
              <Mail className="h-8 w-8" />
            </a>
            <a href={socialLinks.linkedin} className="flex items-center text-indigo-600 hover:text-indigo-800 transition transform hover:scale-110">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href={socialLinks.github} className="flex items-center text-indigo-600 hover:text-indigo-800 transition transform hover:scale-110">
              <Github className="h-8 w-8" />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-center py-6 border-t border-slate-200">
        <p className="text-slate-500 text-sm">
          Designed and Built by Shalini Prasanna
        </p>
      </footer>

      {/* Scroll to top button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
