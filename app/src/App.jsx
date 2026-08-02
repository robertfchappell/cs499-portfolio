import { useEffect, useState } from 'react';
import {
  FaAndroid,
  FaArrowRight,
  FaBolt,
  FaBriefcase,
  FaChartLine,
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFileArchive,
  FaFilePdf,
  FaGithub,
  FaGraduationCap,
  FaLayerGroup,
  FaLinkedin,
  FaReact,
  FaServer,
  FaTools,
} from 'react-icons/fa';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'self-assessment', label: 'Assessment' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'capstone', label: 'Capstone' },
  { id: 'artifacts', label: 'Artifacts' },
  { id: 'contact', label: 'Contact' },
];

const skillGroups = [
  {
    title: 'Programming Languages',
    icon: <FaCode />,
    skills: ['Java', 'JavaScript', 'Python', 'SQL', 'C++', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks',
    icon: <FaReact />,
    skills: ['React', 'Node.js', 'npm'],
  },
  {
    title: 'Enterprise',
    icon: <FaServer />,
    skills: [
      'Databricks',
      'Power Apps',
      'Power Automate',
      'Unity Catalog',
      'SQL Server',
      'SQLite',
    ],
  },
  {
    title: 'Developer Tools',
    icon: <FaTools />,
    skills: ['Git', 'GitHub', 'Android Studio', 'VS Code'],
  },
];

const assessmentSections = [
  {
    eyebrow: '01',
    title: 'Professional Growth',
    body: [
      "My Bachelor of Science in Computer Science program at Southern New Hampshire University has helped me connect academic computer science concepts with the professional engineering work I perform in enterprise environments. Across the program, I strengthened my ability to analyze requirements, evaluate tradeoffs, write maintainable code, and communicate technical decisions clearly to both technical and nontechnical audiences.",
      "The capstone experience gave me the opportunity to revisit previous work with a more mature engineering perspective. Instead of viewing a project as complete after it runs, I evaluated how the architecture, data model, algorithms, validation strategy, and user experience could be improved for long-term support. That reflection is central to how I now approach software development: reliable solutions require thoughtful design, measurable improvement, and a willingness to refine earlier decisions.",
    ],
  },
  {
    eyebrow: '02',
    title: 'Collaboration and Communication',
    body: [
      "My professional role as a Senior Digital Associate at Amgen has reinforced the importance of stakeholder collaboration throughout the software development lifecycle. I regularly work with business partners to understand operational needs, translate those needs into technical requirements, and deliver applications and automation that support enterprise workflows.",
      "The Computer Science program strengthened that same communication discipline by requiring clear documentation, structured project narratives, and thoughtful code review. I learned to explain not only what a solution does, but why a design choice is appropriate, how it supports maintainability, and how it creates value for users.",
    ],
  },
  {
    eyebrow: '03',
    title: 'Software Engineering and Design',
    body: [
      "The software design enhancement in this portfolio focuses on improving an Inventory Management Android Application originally created in CS360. The enhancement emphasized maintainability, reusable components, validation, error handling, and clearer separation of responsibilities. These changes make the application easier to understand, test, and expand.",
      "This work reflects an important shift in my development approach. I now evaluate code for readability, adaptability, fault tolerance, and production support, not just for basic functionality. That mindset aligns directly with the enterprise application development work I perform using Power Apps, Power Automate, React, Node.js, SQL, and Databricks.",
    ],
  },
  {
    eyebrow: '04',
    title: 'Algorithms and Data Structures',
    body: [
      "The algorithms and data structures enhancement focused on improving how inventory records are represented, searched, sorted, and organized. By using a clearer InventoryItem object model and improving data handling patterns, the application became easier to reason about and more efficient for common user actions.",
      "This enhancement demonstrates my ability to choose structures that support the behavior of the application. In professional software work, data organization directly affects usability, performance, debugging, and maintainability. The skills developed through this enhancement translate to broader data engineering work, where clean structure and efficient querying are essential.",
    ],
  },
  {
    eyebrow: '05',
    title: 'Databases and Data Engineering',
    body: [
      "The database enhancement strengthened the application's SQLite implementation through schema improvements, indexes, transactions, parameterized SQL, timestamp fields, aggregate queries, and database optimization. These changes improved reliability, data integrity, query performance, and long-term maintainability.",
      "This area connects strongly to my professional experience with SQL, Databricks, Unity Catalog, and enterprise data solutions. I understand that database design is not simply a storage concern; it shapes application reliability, reporting capability, security posture, and operational scalability.",
    ],
  },
  {
    eyebrow: '06',
    title: 'Security, Testing, and Quality',
    body: [
      "Throughout the program and capstone enhancements, I continued to develop a stronger quality mindset. Validation, error handling, parameterized queries, and testing are all part of building software that users can trust. Secure and reliable systems require defensive design choices at the interface, application, and database layers.",
      "My professional work also requires testing, deployment planning, maintenance, and support after release. The capstone portfolio reflects that same lifecycle awareness by showing how a project can evolve from an academic artifact into a more professional, maintainable application.",
    ],
  },
  {
    eyebrow: '07',
    title: 'Forward Direction',
    body: [
      "Completing this portfolio represents both a milestone and a starting point. My goal is to continue building solutions across enterprise software development, automation, cloud computing, artificial intelligence, and data engineering. I plan to begin the Master of Science in Computer Science program after completing the bachelor's degree so I can continue deepening my technical foundation and expanding my ability to design modern software systems.",
    ],
  },
];

const experienceBullets = [
  'Enterprise Application Development',
  'Automation',
  'Power Apps',
  'Power Automate',
  'Databricks',
  'React',
  'Node.js',
  'SQL',
  'Stakeholder collaboration',
  'Testing',
  'Deployment',
  'Maintenance',
];

const enhancementCards = [
  {
    title: 'Software Design Enhancement',
    icon: <FaLayerGroup />,
    description:
      'Refined the application structure to improve reliability, support future features, and reduce maintenance friction.',
    items: ['CRUD', 'Validation', 'Error Handling', 'Maintainability', 'Reusable Components'],
  },
  {
    title: 'Algorithms & Data Structures',
    icon: <FaChartLine />,
    description:
      'Improved how inventory records are modeled, organized, searched, and sorted for clearer application behavior.',
    items: [
      'InventoryItem Object',
      'Search',
      'Sort',
      'Better Data Organization',
      'Improved Efficiency',
    ],
  },
  {
    title: 'Database Enhancement',
    icon: <FaDatabase />,
    description:
      'Strengthened persistence, query performance, and data integrity through a more deliberate SQLite design.',
    items: [
      'SQLite Schema Improvements',
      'Indexes',
      'Transactions',
      'Parameterized SQL',
      'Timestamp Fields',
      'Aggregate Queries',
      'Database Optimization',
    ],
  },
];

const artifactCards = [
  {
    title: 'Professional Self Assessment',
    type: 'Embedded',
    href: '#self-assessment',
    icon: <FaFilePdf />,
    description: 'Full self-assessment embedded directly on this page.',
  },
  {
    title: 'Code Review',
    type: 'PDF Placeholder',
    href: 'artifacts/code-review.pdf',
    icon: <FaFilePdf />,
    description: 'Code review walkthrough and enhancement planning artifact.',
  },
  {
    title: 'Original Artifact',
    type: 'ZIP Placeholder',
    href: 'artifacts/original-artifact.zip',
    icon: <FaFileArchive />,
    description: 'Original CS360 Inventory Management Android Application.',
  },
  {
    title: 'Enhanced Artifact',
    type: 'ZIP Placeholder',
    href: 'artifacts/enhanced-artifact.zip',
    icon: <FaFileArchive />,
    description: 'Enhanced capstone version with design, algorithm, and database improvements.',
  },
  {
    title: 'Software Design Narrative',
    type: 'PDF Placeholder',
    href: 'artifacts/software-design-narrative.pdf',
    icon: <FaFilePdf />,
    description: 'Narrative describing the software engineering and design enhancement.',
  },
  {
    title: 'Algorithms Narrative',
    type: 'PDF Placeholder',
    href: 'artifacts/algorithms-narrative.pdf',
    icon: <FaFilePdf />,
    description: 'Narrative describing algorithm and data structure improvements.',
  },
  {
    title: 'Database Narrative',
    type: 'PDF Placeholder',
    href: 'artifacts/database-narrative.pdf',
    icon: <FaFilePdf />,
    description: 'Narrative describing database design and optimization work.',
  },
  {
    title: 'Resume',
    type: 'PDF Placeholder',
    href: 'artifacts/resume.pdf',
    icon: <FaFilePdf />,
    description: 'Professional resume placeholder for the final portfolio.',
  },
];

const contactLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/robertfchappell',
    icon: <FaGithub />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/replace-with-your-profile',
    icon: <FaLinkedin />,
  },
  {
    label: 'Email',
    href: 'mailto:replace-with-your-email@example.com',
    icon: <FaEnvelope />,
  },
];

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-28% 0px -58% 0px',
        threshold: 0.01,
      },
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    document.querySelectorAll('[data-reveal]').forEach((element) => {
      revealObserver.observe(element);
    });

    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Robert Chappell home">
          RC
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a
              className={activeSection === item.id ? 'active' : ''}
              href={`#${item.id}`}
              key={item.id}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-background" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="hero-content">
            <p className="eyebrow">Computer Science Capstone Portfolio</p>
            <h1>Robert Chappell</h1>
            <div className="hero-subtitle">
              <span>Computer Science Student</span>
              <span>Senior Digital Associate at Amgen</span>
              <span>Data Engineer | Enterprise Application Developer | Power Platform Developer</span>
            </div>
            <p className="hero-copy">
              I build enterprise applications, automation, and data solutions that turn complex
              operational needs into maintainable software.
            </p>
            <div className="hero-actions" aria-label="Hero actions">
              <a className="button primary" href="#capstone">
                View Capstone <FaArrowRight />
              </a>
              <a className="button secondary" href="#contact">
                Contact Me <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="hero-meta" data-reveal>
            <div>
              <strong>React + Vite</strong>
              <span>Modern front-end portfolio</span>
            </div>
            <div>
              <strong>Enterprise Systems</strong>
              <span>Automation, apps, and data</span>
            </div>
            <div>
              <strong>CS499</strong>
              <span>Capstone enhancements</span>
            </div>
          </div>
        </section>

        <section className="section-shell content-section" id="about">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">About Me</p>
            <h2>Enterprise-minded software development with a data engineering foundation.</h2>
          </div>
          <div className="about-grid">
            <article className="glass-panel about-copy" data-reveal>
              <p>
                I am currently completing my Bachelor of Science in Computer Science at Southern
                New Hampshire University while working as a Senior Digital Associate at Amgen. My
                professional work focuses on building enterprise software solutions that support
                operational teams through application development, automation, and data engineering.
              </p>
              <p>
                I work with technologies including Power Apps, Power Automate, Databricks, SQL,
                React, Node.js, JavaScript, HTML, and CSS. My responsibilities require direct
                stakeholder collaboration, requirements gathering, solution design, testing,
                deployment, and long-term maintenance for business-critical applications.
              </p>
              <p>
                This portfolio brings together my academic growth and professional experience. It
                demonstrates my ability to improve existing software, design better data structures,
                strengthen database implementations, and communicate technical value in a clear,
                professional format.
              </p>
            </article>
            <aside className="focus-panel" data-reveal>
              <div className="focus-item">
                <FaBolt />
                <span>Automation strategy and workflow delivery</span>
              </div>
              <div className="focus-item">
                <FaDatabase />
                <span>Data engineering and SQL-centered problem solving</span>
              </div>
              <div className="focus-item">
                <FaReact />
                <span>Modern front-end engineering with React</span>
              </div>
              <div className="focus-item">
                <FaBriefcase />
                <span>Stakeholder-centered enterprise development</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="section-shell content-section" id="self-assessment">
          <div className="section-heading wide" data-reveal>
            <p className="eyebrow">Professional Self Assessment</p>
            <h2>Reflecting on technical growth, professional practice, and capstone outcomes.</h2>
          </div>
          <div className="assessment-stack">
            {assessmentSections.map((section) => (
              <article className="assessment-section" data-reveal key={section.title}>
                <span>{section.eyebrow}</span>
                <div>
                  <h3>{section.title}</h3>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell content-section" id="skills">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Technical Skills</p>
            <h2>A practical stack for software, automation, and data delivery.</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" data-reveal key={group.title}>
                <div className="card-icon">{group.icon}</div>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell content-section" id="experience">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Professional Experience</p>
            <h2>Building and supporting enterprise digital solutions.</h2>
          </div>
          <div className="timeline" data-reveal>
            <div className="timeline-marker" aria-hidden="true" />
            <article className="timeline-card">
              <div className="timeline-topline">
                <div>
                  <h3>Senior Digital Associate</h3>
                  <p>Amgen</p>
                </div>
                <FaBriefcase />
              </div>
              <div className="experience-tags">
                {experienceBullets.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section-shell content-section" id="capstone">
          <div className="section-heading wide" data-reveal>
            <p className="eyebrow">Featured Capstone Project</p>
            <h2>Inventory Management Android Application</h2>
          </div>
          <article className="project-feature" data-reveal>
            <div className="project-icon">
              <FaAndroid />
            </div>
            <div>
              <p>
                Originally created in CS360 and enhanced during CS499, this Android inventory
                application demonstrates growth across software design, algorithms and data
                structures, and database development. The enhancements focus on making the
                application more maintainable, efficient, reliable, and ready for continued
                improvement.
              </p>
              <div className="project-meta">
                <span>CS360 Original Artifact</span>
                <span>CS499 Enhanced Artifact</span>
                <span>Android + SQLite</span>
              </div>
            </div>
          </article>
          <div className="enhancement-grid">
            {enhancementCards.map((card) => (
              <article className="enhancement-card" data-reveal key={card.title}>
                <div className="card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <ul>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell content-section" id="artifacts">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Artifacts</p>
            <h2>Capstone materials organized for review.</h2>
          </div>
          <div className="artifact-grid">
            {artifactCards.map((artifact) => (
              <a
                className="artifact-card"
                data-reveal
                href={artifact.href}
                key={artifact.title}
                target={artifact.href.startsWith('#') ? undefined : '_blank'}
                rel={artifact.href.startsWith('#') ? undefined : 'noreferrer'}
              >
                <div className="artifact-icon">{artifact.icon}</div>
                <div>
                  <span>{artifact.type}</span>
                  <h3>{artifact.title}</h3>
                  <p>{artifact.description}</p>
                </div>
                <FaExternalLinkAlt className="artifact-arrow" />
              </a>
            ))}
          </div>
        </section>

        <section className="section-shell content-section" id="career">
          <div className="section-heading wide" data-reveal>
            <p className="eyebrow">Career Goals</p>
            <h2>Continuing to build across enterprise software, automation, and data.</h2>
          </div>
          <article className="glass-panel career-panel" data-reveal>
            <FaGraduationCap />
            <p>
              My career goals include continuing to grow in enterprise software development,
              automation, cloud computing, artificial intelligence, and data engineering. After
              completing the Bachelor of Science in Computer Science program, I plan to begin the
              Master of Science in Computer Science program to deepen my technical foundation and
              expand my ability to design scalable, secure, and intelligent software systems for
              modern organizations.
            </p>
          </article>
        </section>

        <section className="section-shell content-section contact-section" id="contact">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Contact</p>
            <h2>Connect for software engineering, automation, and data opportunities.</h2>
          </div>
          <div className="contact-grid">
            {contactLinks.map((link) => (
              <a className="contact-card" data-reveal href={link.href} key={link.label}>
                {link.icon}
                <span>{link.label}</span>
                <FaExternalLinkAlt />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <span>Robert Chappell</span>
        <span>Computer Science Capstone Portfolio</span>
      </footer>
    </>
  );
}

export default App;
