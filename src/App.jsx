import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export default function App() {
  const projects = [
    { title: "Project One", desc: "React dashboard with live APIs.", link: "https://link-to-live-site.com", github: "https://github.com" },
    { title: "Project Two", desc: "E-commerce UI with state management.", link: "https://link-to-live-site.com", github: "https://github.com" }
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <header>
        <h1>Hi, I'm [Your Name] 🚀</h1>
        <p>React Developer specialized in building fast, responsive web applications.</p>
      </header>
      
      <section style={{ margin: '3rem 0' }}>
        <h2>Featured Projects</h2>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {projects.map((proj, i) => (
            <div key={i} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <a href={proj.link} target="_blank" rel="noreferrer" style={{ marginRight: '1rem' }}>Live Demo</a>
              <a href={proj.github} target="_blank" rel="noreferrer">GitHub Code</a>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>Connect with me: <a href="mailto:your.email@example.com">Email</a> | <a href="https://linkedin.com">LinkedIn</a></p>
      </footer>
    </div>
  );
}
