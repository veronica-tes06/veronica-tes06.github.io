import { useEffect, useState } from "react";
import { profile, about, experience, leadership, education, projects, skills } from "./content.js";
import cvFile from "./assets/cv.pdf";

const CV_NAME = "Veronica_Tesarova_CV.pdf";
import ExoplanetChart from "./components/ExoplanetChart.jsx";
import CrudShowcase, { CrudVideo } from "./components/CrudShowcase.jsx";
import AppVideo from "./components/AppVideo.jsx";
import EmailActions from "./components/EmailActions.jsx";
import exoVideo from "./assets/exoplanet-disposition-classifier.mp4";
import trackerVideo from "./assets/eurovision-tracker.mp4";

const sections = [
  ["about", "About"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["contact", "Contact"],
];

const SAMPLE_BOARD = `==============================================================
| My Eurovision Scoreboard                                   |
==============================================================
| Points | Country              | Contestant                 |
==============================================================
| 12     | Ireland              | EMMY                       |
| 10     | Albania              | Shkodra Elektronike        |
| 8      | Australia            | Go-Jo                      |
...`;

const visuals = {
  exoplanet: (
    <>
      <AppVideo src={exoVideo} portrait title="Exoplanet Predictor" label="The Tkinter app: training a gradient boosting model, then predicting Kepler objects" />
      <ExoplanetChart />
    </>
  ),
  crud: <CrudShowcase />,
  tracker: (
    <>
      <AppVideo src={trackerVideo} title="Eurovision 2025 Tracker" label="The PyQt5 app: setting my points, then My ScoreBoard confirms in the terminal" />
      <div className="sample-out">
        <h4 className="panel-title">Example output</h4>
        <p className="panel-sub">My ScoreBoard writes the votes to scoreBoard.txt as a formatted ranking</p>
        <pre className="board">{SAMPLE_BOARD}</pre>
      </div>
    </>
  ),
};

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={scrolled ? "nav scrolled" : "nav"}>
      <a href="#top" className="logo" aria-label="Back to top">VT<span>.</span></a>
      <button className="menu-btn" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>
        {open ? "Close" : "Menu"}
      </button>
      <nav id="nav-links" className={open ? "links open" : "links"} aria-label="Sections">
        {sections.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
    </header>
  );
}

function SectionHead({ num, title, id }) {
  return (
    <div className="section-head">
      <span className="num">{num}</span>
      <h2 id={`${id}-title`}>{title}</h2>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="eyebrow">{profile.role}</p>
          <h1>{profile.name}</h1>
          <p className="tagline">{profile.tagline}</p>
          <p className="status"><span className="pulse" aria-hidden="true" />{profile.status}</p>
          <div className="cta">
            <a className="btn" href="#projects">See my work</a>
            {profile.showCv && <a className="btn ghost-light" href={cvFile} download={CV_NAME}>Download CV</a>}
            <a className="btn ghost-light" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <SectionHead num="01" title="About me" id="about" />
      <div className="about-grid">
        <div className="prose">
          {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <dl className="facts">
          {about.facts.map((f) => (
            <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <SectionHead num="02" title="Experience & education" id="experience" />
      <div className="timeline">
        {experience.map((e) => (
          <article key={e.periods[0]} className="t-item">
            <div className="t-meta">
              {e.periods.map((p) => <span key={p}>{p}</span>)}
            </div>
            <div className="t-body">
              <h3>{e.title} <span className="at">· {e.org}, {e.place}</span></h3>
              <p>{e.summary}</p>
              {e.points.length > 0 && <ul className="ticks">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>}
              <ul className="tags">{e.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </article>
        ))}
        <article className="t-item">
          <div className="t-meta"><span>{education.period}</span></div>
          <div className="t-body">
            <h3>{education.title} <span className="at">· {education.org}</span></h3>
            <ul className="ticks">{education.honours.map((h) => <li key={h}>{h}</li>)}</ul>
            <p className="modules"><b>Relevant modules:</b> {education.modules}</p>
            <div className="fyp">
              <p className="fyp-status">{education.fyp.status}</p>
              <h4>{education.fyp.name}</h4>
              <p>{education.fyp.text}</p>
              <ul className="tags">{education.fyp.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </div>
        </article>
      </div>
      <h3 className="sub-head">Leadership & volunteering</h3>
      <div className="lead-grid">
        {leadership.map((l) => (
          <article key={l.title} className="lead">
            {l.when && <span className="lead-when">{l.when}</span>}
            <h4>{l.title}</h4>
            <p>{l.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Project({ p, index }) {
  return (
    <article className={`project p-${p.id}`} id={`project-${p.id}`}>
      <div className="project-head">
        <span className="p-num">{String(index + 1).padStart(2, "0")}</span>
        <div>
          <p className="kicker">{p.kicker}</p>
          <h3>{p.name}</h3>
          <p className="one-liner">{p.oneLiner}</p>
        </div>
      </div>
      <dl className="stats">
        {p.stats.map((s) => (
          <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>
        ))}
      </dl>
      {p.id === "crud" && <CrudVideo />}
      <div className="project-grid">
        <div className="project-story">
          <h4>The problem</h4>
          <p>{p.problem}</p>
          <h4>What I built</h4>
          <ul className="ticks">{p.built.map((b) => <li key={b}>{b}</li>)}</ul>
          <h4>What I learned</h4>
          <p>{p.lesson}</p>
          <h4>What I'd do next</h4>
          <p>{p.next}</p>
          <ul className="tags">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
          <a className="btn small" href={p.repo} target="_blank" rel="noreferrer">View code on GitHub</a>
        </div>
        <div className="project-visual">{visuals[p.id]}</div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <SectionHead num="03" title="Selected projects" id="projects" />
      <p className="lede">Three projects across machine learning, full-stack web and desktop software. Each one has a recording of the real app running next to it.</p>
      {projects.map((p, i) => <Project key={p.id} p={p} index={i} />)}
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <SectionHead num="04" title="Skills" id="skills" />
      <div className="skills">
        {skills.map((s) => (
          <div key={s.group} className="skill-group">
            <h3>{s.group}</h3>
            <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <SectionHead num="05" title="Let's talk" id="contact" />
      <p className="big">I'm looking for a graduate software engineering role starting in 2027. If your team builds things that need to be tested, scaled or explained, I'd love to hear from you.</p>
      {profile.email && <EmailActions email={profile.email} />}
      <div className="cta">
        {profile.linkedin && <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
        <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        {profile.showCv && <a className="btn ghost" href={cvFile} download={CV_NAME}>Download CV</a>}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <div className="wrap">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name} · Built with React and Vite · {profile.location}</p>
      </footer>
    </>
  );
}
