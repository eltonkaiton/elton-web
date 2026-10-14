
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const skills = [
  {
    category: "Frontend Development",
    items: ["JavaScript", "React", "React Native", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Mobile Development",
    items: ["React Native", "Flutter", "Kotlin"],
  },
  {
    category: "Programming",
    items: ["JavaScript", "Python", "C++"],
  },
  {
    category: "IT Support & Networking",
    items: [
      "Windows Administration",
      "LAN & Wi-Fi",
      "Troubleshooting",
      "Hardware & Software Support",
      "System Documentation",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "REST APIs"],
  },
];

const projects = [
  {
    name: "ComradeHub",
    type: "Student Community Platform",
    image: "/comradehub.png",
    description:
      "A student-focused digital platform for community engagement, campus marketplace listings, accommodation, transport, and other services.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/eltonkaiton/comrade-hub",
  },
  {
    name: "Mombasa Ferry Services",
    type: "Mobile Application & Admin Web System",
    image: "/mombasa.png",
    description:
      "A ferry service solution designed to improve passenger communication through schedules, safety notices, service information, and updates.",
    technologies: ["React Native", "Node.js", "MongoDB"],
    link: "https://github.com/eltonkaiton/mombasa-apk",
  },
  {
    name: "Sterling Marine Loss Adjustors",
    type: "Administration System",
    image: "/sterling.png",
    description:
      "A web-based administration solution for organizing documentation, managing cases, and supporting reporting in maritime insurance.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/eltonkaiton",
  },
  {
    name: "Fanaka Arts",
    type: "Arts Management Platform",
    image: "/fanaka.png",
    description:
      "A digital platform for managing actors, bookings, events, content, and administrative activities through web and mobile interfaces.",
    technologies: ["React", "React Native", "Node.js", "MongoDB"],
    link: "https://github.com/eltonkaiton",
  },
  {
    name: "Spinners Web Kenya",
    type: "E-commerce Platform",
    image: "/spinners.png",
    description:
      "An online commerce solution designed to support product catalogues, order management, and user authentication.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/eltonkaiton",
  },
];

const creativeGallery = [
  {
    title: "Campus Event Poster",
    category: "Graphic Design",
    icon: "🎨",
    description:
      "Promotional poster for a school or community event with bold typography and branded creative direction.",
    tags: ["Poster Design", "Marketing", "Branding"],
    accent: "linear-gradient(135deg, #132f4a, #0e9b80)",
  },
  {
    title: "Graduation Flyer",
    category: "Graphic Design",
    icon: "🎓",
    description:
      "Clean, polished graduation design created to highlight achievements, event details, and sponsor information.",
    tags: ["Event Design", "Print", "Social Media"],
    accent: "linear-gradient(135deg, #4d1d7a, #355c7d)",
  },
  {
    title: "Portrait Retouch",
    category: "Photo Editing",
    icon: "📸",
    description:
      "Professional portrait enhancement with color balancing, skin tone refinement, and polished final styling.",
    tags: ["Retouching", "Color Correction", "Editing"],
    accent: "linear-gradient(135deg, #7b2d26, #f59e0b)",
  },
  {
    title: "Travel Promo Reel",
    category: "Video Editing",
    icon: "🎬",
    description:
      "Short-form marketing video with transitions, text overlays, and music pacing for product or event promotion.",
    tags: ["Reels", "Motion", "Promo"],
    accent: "linear-gradient(135deg, #0f766e, #1d4ed8)",
  },
  {
    title: "Mobile App Interface",
    category: "Software Development",
    icon: "📱",
    description:
      "UI-focused application screens designed for usability, responsiveness, and clear user interaction flows.",
    tags: ["UI/UX", "Mobile", "Responsive"],
    accent: "linear-gradient(135deg, #0f172a, #22c55e)",
  },
  {
    title: "Client Dashboard Mockup",
    category: "Software Development",
    icon: "💻",
    description:
      "Dashboard wireframe and interface concept for managing reports, records, and operations in a web product.",
    tags: ["Dashboard", "Web", "Product Design"],
    accent: "linear-gradient(135deg, #111827, #1f2937)",
  },
];

const certifications = [
  "Python Programming",
  "Website Development",
  "Mobile and Web App Full-Stack Development",
  "Programming Essentials in C++",
  "Advanced Programming in C++",
  "Introduction to Cybersecurity",
  "Cybersecurity Essentials",
];

const styles = `
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
  }

  body {
    font-family: Inter, "Segoe UI", Arial, sans-serif;
  }

  .portfolio-navbar {
    background: #101827;
  }

  .portfolio-brand {
    color: #66e3c4 !important;
    letter-spacing: -0.5px;
  }

  .portfolio-hero {
    background:
      radial-gradient(ellipse at 85% 25%, #153d48 0%, transparent 38%),
      linear-gradient(135deg, #101827 0%, #142337 65%, #102d39 100%);
    color: white;
    min-height: 610px;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .hero-label {
    color: #66e3c4;
    letter-spacing: 3px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .hero-title {
    font-size: clamp(2.7rem, 6vw, 5rem);
    letter-spacing: -2px;
    line-height: 1.08;
  }

  .hero-highlight {
    color: #66e3c4;
  }

  .hero-panel {
    border: 1px solid #34505c;
    border-radius: 22px;
    background: #152637;
    padding: 28px;
    box-shadow: 0 20px 55px #0003;
  }

  .hero-code {
    color: #b2c9d5;
    font-family: Consolas, monospace;
    line-height: 2;
    overflow-wrap: anywhere;
  }

  .section-padding {
    padding: 90px 0;
  }

  .section-kicker {
    color: #098d76;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 0.76rem;
    font-weight: 700;
  }

  .section-title {
    color: #101827;
    font-weight: 800;
    letter-spacing: -1px;
  }

  .muted-copy {
    color: #657184;
    line-height: 1.85;
  }

  .skill-card,
  .experience-card,
  .education-card,
  .gallery-card,
  .profile-photo-card {
    height: 100%;
    border: 1px solid #e5eaf0;
    border-radius: 16px;
    background: white;
    padding: 25px;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .profile-photo-card {
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #102230, #0e9b80);
    padding: 14px;
    border: none;
  }

  .profile-photo {
    width: 100%;
    height: 430px;
    object-fit: cover;
    border-radius: 12px;
    display: block;
  }

  .profile-photo-badge {
    position: absolute;
    left: 30px;
    bottom: 30px;
    background: rgba(16, 24, 39, 0.82);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 999px;
    padding: 8px 14px;
    font-size: 0.72rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 700;
  }

  .skill-card:hover,
  .project-card:hover,
  .gallery-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 35px #15233712;
  }

  .gallery-card {
    overflow: hidden;
    padding: 0;
  }

  .gallery-visual {
    min-height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .gallery-body {
    padding: 22px 22px 18px;
  }

  .gallery-tag {
    display: inline-block;
    background: #edf8f6;
    color: #0c6f60;
    border-radius: 999px;
    font-size: 0.72rem;
    font-weight: 700;
    padding: 6px 10px;
    margin: 0 8px 8px 0;
  }

  .skill-chip,
  .tech-chip {
    display: inline-block;
    background: #e9f8f4;
    color: #126c5d;
    border-radius: 6px;
    font-size: 0.79rem;
    padding: 6px 10px;
    margin: 4px 4px 0 0;
  }

  .project-card {
    height: 100%;
    overflow: hidden;
    border: 1px solid #e6eaf0;
    border-radius: 16px;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .project-image {
    height: 210px;
    width: 100%;
    object-fit: cover;
    background: #eaf0f5;
  }

  .project-card .card-body {
    padding: 24px;
  }

  .timeline-dot {
    width: 12px;
    height: 12px;
    background: #0e9b80;
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 7px;
  }

  .btn-accent {
    background: #66e3c4;
    border-color: #66e3c4;
    color: #101827;
    font-weight: 700;
  }

  .btn-accent:hover {
    background: #46c9aa;
    border-color: #46c9aa;
    color: #101827;
  }

  .btn-outline-light:hover {
    color: #101827;
  }

  .contact-panel {
    background: #101827;
    border-radius: 22px;
    padding: clamp(25px, 5vw, 55px);
    color: white;
  }

  .portfolio-footer {
    background: #0b1220;
    color: #c3cedb;
  }

  .portfolio-footer a {
    color: #66e3c4;
    text-decoration: none;
  }

  @media (max-width: 767px) {
    .portfolio-hero {
      min-height: auto;
      padding: 85px 0;
    }

    .section-padding {
      padding: 65px 0;
    }

    .hero-title {
      letter-spacing: -1px;
    }
  }
`;

export default function Portfolio() {
  const email = "eltonkaiton@gmail.com";
  const github = "https://github.com/eltonkaiton";
  const linkedin = "https://www.linkedin.com/in/elton-kaiton-675948252/";
  const phone = "0797133131";

  return (
    <div className="bg-white text-dark">
      <style>{styles}</style>

      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark portfolio-navbar sticky-top shadow-sm">
        <div className="container py-2">
          <a className="navbar-brand fw-bold fs-4 portfolio-brand" href="#home">
            EK<span className="text-white">.</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#portfolioNav"
            aria-controls="portfolioNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="portfolioNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              {[
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Experience", "#experience"],
                ["Projects", "#projects"],
                ["Creative Services", "#creative-services"],
                ["Education", "#education"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li className="nav-item" key={label}>
                  <a className="nav-link" href={href}>
                    {label}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <a
                  className="btn btn-accent btn-sm px-3 mt-2 mt-lg-0"
                  href="/cv.pdf"
                  rel="noopener noreferrer"
                >
                  View CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="home" className="portfolio-hero">
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <p className="hero-label mb-3">
                IT SUPPORT · SOFTWARE DEVELOPMENT · DESIGN
              </p>

              <h1 className="hero-title fw-bold mb-4">
                Elton Kaiton Tinega
              </h1>

              <p className="fs-5 text-light mb-4" style={{ maxWidth: 650 }}>
                Software Developer | IT Support Specialist | Graphic Designer &
                Video Editor
              </p>

              <p className="fs-6 text-light mb-4" style={{ maxWidth: 760 }}>
                I build functional digital solutions and create compelling visual
                content. My work combines full-stack web and mobile development,
                IT support, graphic design, poster creation, photo editing, and
                video editing to help businesses and individuals bring their
                ideas to life.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a className="btn btn-accent btn-lg" href="#projects">
                  Explore My Projects
                </a>
                <a
                  className="btn btn-outline-light btn-lg"
                  href={`mailto:${email}`}
                >
                  Contact Me
                </a>
              </div>

              <div className="d-flex flex-wrap gap-4 mt-4 small text-light">
                <span>📍 Kenya</span>
                <span>💻 Full-Stack Development</span>
                <span>🛠 IT Support</span>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="hero-panel">
                <p className="hero-label mb-3">Developer Profile</p>
                <div className="hero-code">
                  <div>
                    <span className="text-info">const</span> developer = {"{"}
                  </div>
                  <div className="ps-3">
                    name: <span className="text-warning">"Elton Kaiton"</span>,
                  </div>
                  <div className="ps-3">
                    role: <span className="text-warning">"IT Specialist"</span>,
                  </div>
                  <div className="ps-3">
                    focus: <span className="text-warning">"Software"</span>,
                  </div>
                  <div className="ps-3">
                    learning: <span className="text-warning">"Always"</span>
                  </div>
                  <div>{"};"}</div>
                  <div className="mt-4 text-white">
                    // Turning ideas into practical solutions.
                  </div>
                </div>
                <hr style={{ borderColor: "#34505c" }} />
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                  style={{ color: "#66e3c4" }}
                >
                  Explore my GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="section-padding">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <p className="section-kicker">A little about me</p>
              <h2 className="section-title display-5 mb-4">
                Technology, problem-solving and continuous learning.
              </h2>
              <p className="muted-copy">
                I am a motivated and detail-oriented IT Support Analyst and
                Software Developer with practical experience in full-stack
                development, networking, system support and troubleshooting.
              </p>
              <p className="muted-copy">
                My experience includes installing and maintaining Windows
                systems, resolving LAN and Wi-Fi connectivity issues, assisting
                users, documenting technical procedures and developing web and
                mobile applications.
              </p>
              <p className="muted-copy">
                I value competence, integrity, accountability, teamwork and
                continuous professional growth. My goal is to contribute to
                organizations through reliable IT services and impactful,
                technology-driven solutions.
              </p>
              <a href="#experience" className="btn btn-dark px-4">
                My Experience
              </a>
            </div>

            <div className="col-lg-7">
              <div className="profile-photo-card mb-4">
                <img
                  src="/me.jpg"
                  alt="Elton Kaiton Tinega"
                  className="profile-photo"
                />
                <div className="profile-photo-badge">Available for projects</div>
              </div>

              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="education-card">
                    <div className="fs-2 mb-3">💻</div>
                    <h5 className="fw-bold">Software Development</h5>
                    <p className="muted-copy mb-0">
                      Building web and mobile applications with modern
                      development tools and databases.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="education-card">
                    <div className="fs-2 mb-3">🖥️</div>
                    <h5 className="fw-bold">IT Support</h5>
                    <p className="muted-copy mb-0">
                      Troubleshooting Windows systems, software, hardware and
                      network connectivity.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="education-card">
                    <div className="fs-2 mb-3">🌐</div>
                    <h5 className="fw-bold">Networking</h5>
                    <p className="muted-copy mb-0">
                      Practical support for LAN, Wi-Fi, system configuration
                      and connectivity.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="education-card">
                    <div className="fs-2 mb-3">📊</div>
                    <h5 className="fw-bold">Analytical Thinking</h5>
                    <p className="muted-copy mb-0">
                      Applying mathematical thinking and structured
                      problem-solving to technical challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-kicker">Technical capabilities</p>
            <h2 className="section-title display-5">My Skills</h2>
            <p className="muted-copy">
              Technologies and practical capabilities listed in my CV.
            </p>
          </div>

          <div className="row g-4">
            {skills.map((skill) => (
              <div className="col-md-6 col-lg-4" key={skill.category}>
                <div className="skill-card">
                  <h5 className="fw-bold mb-3">{skill.category}</h5>
                  <div>
                    {skill.items.map((item) => (
                      <span className="skill-chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section-padding">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <p className="section-kicker">Professional background</p>
              <h2 className="section-title display-5">Work Experience</h2>
              <p className="muted-copy">
                Practical ICT support and system maintenance experience in an
                educational environment.
              </p>
            </div>

            <div className="col-lg-8">
              <div className="experience-card">
                <div className="d-flex gap-3">
                  <div className="timeline-dot"></div>
                  <div>
                    <h4 className="fw-bold">ICT Assistant</h4>
                    <h6 className="text-success mb-3">
                      Kaaga Boys Senior School
                    </h6>
                    <p className="muted-copy">
                      IT Support & Systems Support — Practical / Project-Based
                      Experience
                    </p>
                    <ul className="muted-copy ps-3">
                      <li>
                        Installed, configured and maintained Windows 10
                        desktop and laptop systems.
                      </li>
                      <li>
                        Troubleshot LAN/Wi-Fi connectivity, driver issues and
                        software errors.
                      </li>
                      <li>
                        Assisted users with system setup and application use.
                      </li>
                      <li>
                        Supported installation of Microsoft Office, LibreOffice
                        and productivity software.
                      </li>
                      <li>
                        Assisted with system documentation and troubleshooting
                        procedures.
                      </li>
                      <li>
                        Practiced system security basics, software updates and
                        antivirus checks.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-kicker">Selected work</p>
            <h2 className="section-title display-5">Featured Projects</h2>
            <p className="muted-copy mx-auto" style={{ maxWidth: 700 }}>
              Software solutions developed across student services,
              transportation, administration, creative arts and e-commerce.
            </p>
          </div>

          <div className="row g-4">
            {projects.map((project) => (
              <div className="col-md-6 col-lg-4" key={project.name}>
                <article className="card project-card">
                  <img
                    src={project.image}
                    className="project-image"
                    alt={`${project.name} project preview`}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="card-body d-flex flex-column">
                    <p className="section-kicker mb-2">{project.type}</p>
                    <h4 className="fw-bold">{project.name}</h4>
                    <p className="muted-copy">{project.description}</p>
                    <div className="mb-4">
                      {project.technologies.map((tech) => (
                        <span className="tech-chip" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <a
                        href={project.link}
                        className="text-success fw-bold text-decoration-none"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Explore project / GitHub →
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark px-4 py-2"
            >
              View More on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Creative Services */}
      <section id="creative-services" className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-kicker">Beyond software development</p>
            <h2 className="section-title display-5">Design & Creative Services</h2>
            <p className="muted-copy mx-auto" style={{ maxWidth: 700 }}>
              I combine technology and creativity to develop digital
              experiences and visual content for brands, businesses, and
              individuals.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "🎨",
                title: "Graphic Design",
                description:
                  "Promotional posters, social media graphics, event designs, and business advertisements.",
              },
              {
                icon: "📸",
                title: "Photo Editing",
                description:
                  "Portrait enhancement, photo retouching, color correction, and creative image editing.",
              },
              {
                icon: "🎬",
                title: "Video Editing",
                description:
                  "Social media videos, promotional clips, project demonstrations, and event highlights.",
              },
              {
                icon: "💻",
                title: "Web & App Development",
                description:
                  "Responsive websites, mobile applications, APIs, and database-driven systems.",
              },
            ].map((service) => (
              <div className="col-md-6 col-lg-3" key={service.title}>
                <div className="skill-card">
                  <div className="fs-1 mb-3">{service.icon}</div>
                  <h5 className="fw-bold">{service.title}</h5>
                  <p className="muted-copy mb-0">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <a href="#contact" className="btn btn-dark btn-lg px-4">
              Discuss a Project
            </a>
          </div>
        </div>
      </section>

      {/* Creative Portfolio Gallery */}
      <section id="creative-gallery" className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-kicker">Selected creative work</p>
            <h2 className="section-title display-5">Creative Portfolio Gallery</h2>
            <p className="muted-copy mx-auto" style={{ maxWidth: 700 }}>
              A sample of promotional design, photo retouching, video editing,
              and digital product work that complements my software development
              practice.
            </p>
          </div>

          <div className="row g-4">
            {creativeGallery.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.title}>
                <div className="gallery-card h-100">
                  <div
                    className="gallery-visual"
                    style={{ background: item.accent }}
                    aria-label={`${item.title} preview`}
                  >
                    {item.icon}
                  </div>
                  <div className="gallery-body">
                    <p className="section-kicker mb-2">{item.category}</p>
                    <h4 className="fw-bold mb-3">{item.title}</h4>
                    <p className="muted-copy mb-3">{item.description}</p>
                    <div>
                      {item.tags.map((tag) => (
                        <span className="gallery-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-kicker">Academic background</p>
            <h2 className="section-title display-5">
              Education & Professional Training
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="education-card">
                <p className="section-kicker">2021–2026</p>
                <h4 className="fw-bold">Kenya Methodist University</h4>
                <p className="muted-copy mb-2">
                  Bachelor of Science in Pure Mathematics & Computer Science
                </p>
                <span className="badge text-bg-light border">
                  Education as stated in CV
                </span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="education-card">
                <p className="section-kicker">2022–Present · CV</p>
                <h4 className="fw-bold">Cisco Networking Academy</h4>
                <p className="muted-copy">
                  Professional learning in programming, website development,
                  full-stack applications and cybersecurity.
                </p>
                <div>
                  {certifications.map((certification) => (
                    <span
                      className="skill-chip"
                      key={certification}
                    >
                      {certification}
                    </span>
                  ))}
                </div>
                <p className="small text-secondary mt-3 mb-0">
                  Training topics are listed as recorded in my CV; individual
                  completion status can be confirmed against the relevant
                  certificates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-light">
        <div className="container">
          <div className="contact-panel">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <p className="hero-label">Let's connect</p>
                <h2 className="display-5 fw-bold mb-3">
                  Have a project or opportunity?
                </h2>
                <p className="text-light mb-0" style={{ lineHeight: 1.8 }}>
                  I welcome opportunities in IT support, software development,
                  technology projects and professional collaboration.
                  Feel free to get in touch.
                </p>
              </div>

              <div className="col-lg-5">
                <div className="d-grid gap-3">
                  <a
                    href={`mailto:${email}`}
                    className="btn btn-accent btn-lg"
                  >
                    Email: {email}
                  </a>
                  <a
                    href={`tel:${phone}`}
                    className="btn btn-outline-light btn-lg"
                  >
                    Call: {phone}
                  </a>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light"
                  >
                    LinkedIn Profile
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer py-4">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
            <p className="mb-0">
              © {new Date().getFullYear()} Elton Kaiton Tinega. All rights
              reserved.
            </p>
            <a href="#home">Back to top ↑</a>
          </div>
          <p className="text-center small mt-3 mb-0">
            Designed and developed by Elton Kaiton Tinega.
          </p>
        </div>
      </footer>
    </div>
  );
}
