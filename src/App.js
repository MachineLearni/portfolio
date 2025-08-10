import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, FileText, ChevronUp, GraduationCap, Award, Code, Folder, MessageCircle, Trophy, FolderOpen, ArrowDown, ChevronDown, Terminal } from 'lucide-react';

// Use this URL for the resume link
const RESUME_URL = "https://machinelearni.github.io/portfolio/Shalini_Resume.docx";
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

// Data for certifications section
const certifications = [
  {
    name: "Create an Advanced Web App with React and Redux",
    issuer: "Codeacademy",
    year: "2024"
  },
  {
    name: "Create a Front-End App with React",
    issuer: "Codeacademy",
    year: "2024"
  },
  {
    name: "Learn Javascript",
    issuer: "Codeacademy",
    year: "2025"
  }
];

const education = [
    {
    degree: "Master of Science in CyberSecurity",
    university: "University of Alabama, Huntsville",
    
  },
  {
    degree: "Master of Science in Computer Science",
    university: "University of Nottingham, England",
    
  },
  {
    degree: "Bachelor of Computer Engineering",
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
  const [certificationsVisible, setCertificationsVisible] = useState(false);
  const [educationVisible, setEducationVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  const certificationsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

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

  // Effect to handle intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'certifications') {
              setCertificationsVisible(true);
            }
            if (entry.target.id === 'education') {
              setEducationVisible(true);
            }
            if (entry.target.id === 'contact') {
              setContactVisible(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (certificationsRef.current) {
      observer.observe(certificationsRef.current);
    }
    if (educationRef.current) {
      observer.observe(educationRef.current);
    }
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (certificationsRef.current) {
        observer.unobserve(certificationsRef.current);
      }
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getIcon = (key) => {
    switch (key) {
      case 'github':
        return <Github className="h-8 w-8" />;
      case 'linkedin':
        return <Linkedin className="h-8 w-8" />;
      case 'email':
        return <Mail className="h-8 w-8" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      <style>
        {`
          @keyframes leaf-pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.7;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.3;
            }
          }
          .leaf-glow-1 {
            animation: leaf-pulse 4s infinite ease-in-out;
            transform: rotate(30deg);
          }
          .leaf-glow-2 {
            animation: leaf-pulse 4s infinite ease-in-out 1s;
            transform: rotate(120deg);
          }
          .leaf-glow-3 {
            animation: leaf-pulse 4s infinite ease-in-out 2s;
            transform: rotate(240deg);
          }

          /* CSS for pop-in animation (for other sections) */
          .pop-in-effect {
            opacity: 0;
            transform: scale(0.8);
            animation: popIn 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
          }

          @keyframes popIn {
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          /* New CSS for fade-in-up animation on contact icons */
          .fade-in-up-contact {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.8s ease-out forwards;
          }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
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
            <a href="#certifications" className="text-slate-600 hover:text-indigo-600 transition">Certifications</a>
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
              <a href="#projects" className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold shadow-lg hover:bg-green-700 transition transform hover:scale-105 flex items-center gap-2">
                View My Work <ChevronDown className="h-4 w-4" />
              </a>
              <a href={socialLinks.email} className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-full font-semibold hover:bg-green-50 transition transform hover:scale-105 flex items-center gap-2">
                Contact Me <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
            {/* The new leaf-like glow effect with white colors */}
            <div className="relative w-full h-full rounded-full p-2">
              <div className="absolute inset-0 rounded-full bg-gray-200 opacity-60 blur-xl z-0 leaf-glow-1"></div>
              <div className="absolute inset-0 rounded-full bg-gray-100 opacity-60 blur-2xl z-0 leaf-glow-2"></div>
              <div className="absolute inset-0 rounded-full bg-gray-50 opacity-60 blur-3xl z-0 leaf-glow-3"></div>
              <img 
                src={require('./ShaliniPrasanna.jpeg')} 
                alt="Shalini Prasanna" 
                className="relative z-10 w-full h-full rounded-full shadow-2xl object-cover"
              />
            </div>
            {/* New code icon overlay */}
            <div className="absolute bottom-2 right-2 bg-indigo-500 p-2 rounded-full shadow-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="flex items-center justify-center gap-2 mb-10">
            <Folder className="w-8 h-8 text-indigo-600" />
            <h3 className="text-3xl font-bold text-slate-900">Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <article key={p.title} className="bg-white p-6 rounded-3xl shadow-lg border-2 border-indigo-200 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FolderOpen className="w-6 h-6 text-indigo-600" />
                    <h4 className="text-xl font-bold text-indigo-600">{p.title}</h4>
                  </div>
                  <span className="text-sm text-slate-400">{p.year}</span>
                </div>
                <p className="mt-4 text-slate-600">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">
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
          <div className="flex items-center justify-center gap-2 mb-10">
            <Code className="w-8 h-8 text-indigo-600" />
            <h3 className="text-3xl font-bold text-slate-900">My Skills</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span key={skill} className="flex items-center gap-2 px-5 py-2 bg-orange-50 text-orange-700 rounded-full shadow-md text-sm font-medium hover:bg-orange-100 transition transform hover:scale-105">
                <Terminal className="h-4 w-4 text-orange-600" />
                {skill}
              </span>
            ))}
          </div>
        </section>
        
        {/* Certifications Section */}
        <section id="certifications" ref={certificationsRef} className="py-20">
          <div className="flex items-center justify-center gap-2 mb-10">
            <Trophy className="w-8 h-8 text-indigo-600" />
            <h3 className="text-3xl font-bold text-slate-900">Certifications</h3>
          </div>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className={`relative bg-rose-50 p-6 rounded-3xl shadow-lg border-2 border-rose-100 flex items-start gap-6 transition-all duration-700 ${certificationsVisible ? 'pop-in-effect' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-12 h-12 bg-rose-600 text-white rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xl">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xl font-bold text-slate-800">{cert.name}</h4>
                    <span className="text-sm text-slate-400">{cert.year}</span>
                  </div>
                  <p className="text-lg text-slate-600">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" ref={educationRef} className="py-20">
          <div className="flex items-center justify-center gap-2 mb-10">
            <GraduationCap className="w-8 h-8 text-indigo-600" />
            <h3 className="text-3xl font-bold text-slate-900">Education</h3>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className={`relative bg-teal-50 p-6 rounded-3xl shadow-lg border-2 border-teal-100 flex items-start gap-6 transition-all duration-700 ${educationVisible ? 'pop-in-effect' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xl">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800">{edu.degree}</h4>
                  <p className="text-lg text-slate-600">{edu.university}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={contactRef} className="py-20">
          <div className="flex items-center justify-center gap-2 mb-10">
            <MessageCircle className="w-8 h-8 text-indigo-600" />
            <h3 className="text-3xl font-bold text-slate-900">Get in Touch</h3>
          </div>
          <div className="flex justify-center gap-6">
            {Object.entries(socialLinks).map(([key, value], index) => (
              <a 
                key={key} 
                href={value} 
                className={`flex items-center text-indigo-600 hover:text-indigo-800 transition transform hover:scale-110 ${contactVisible ? 'fade-in-up-contact' : 'opacity-0'}`} 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {getIcon(key)}
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-center py-6 border-t border-slate-200">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 font-bold text-md">
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
