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
  FaFileWord,
  FaGithub,
  FaGraduationCap,
  FaLayerGroup,
  FaLinkedin,
  FaReact,
  FaServer,
  FaTools,
  FaVideo,
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
    title: 'Program Growth and Confidence',
    body: [
      "Getting my Bachelor of Science in Computer Science has made me more confident. During the program, I learned how to do software engineering, databases, algorithms, data structures, software tests, secure coding, networking, systems design, and making mobile apps. Each class taught me something new on its own, but the final project put all of those skills together into a single work that shows how much I've learned in terms of technology. By making my ePortfolio, I was able to look over old work, find things that could be done better, and use what I've learned in the class to make a more complete and professional software application. This process has helped me build a portfolio that shows potential employers what I can do and set me up for further career growth.",
    ],
  },
  {
    eyebrow: '02',
    title: 'Collaboration and Communication',
    body: [
      'One of the most important things I learned in the program was how important it is to work together and talk to each other. Software development rarely happens by itself, and for projects to be successful, developers, managers, and business partners must be able to talk to each other clearly. As part of my coursework, I had peer discussions, code reviews, project planning, and wrote technical documentation that stressed how to clearly explain technical ideas to different groups of people. In my current job, I regularly work with business stakeholders to understand their needs, come up with solutions, create software, test applications, and offer ongoing support after the software has been deployed. These events made me realize that along with technical understanding, good communication skills are also needed for software projects to be successful.',
    ],
  },
  {
    eyebrow: '03',
    title: 'Software Engineering and Design',
    body: [
      'The Computer Science program also helped me learn more about the basics of software engineering. Planning, the software development life cycle, object-oriented programming, testing, maintainability, and safe coding were all stressed in different courses. These ideas are shown in my capstone project, which is an improvement to my Android Inventory Management app that makes it better structured, usable, valid, and easy to manage. Instead of just adding new features, I worked on making the app more reliable and easy to manage by adding full CRUD functionality, making validation better, handling errors better, and separating the code into parts that can be used again and again. These changes are examples of good software engineering techniques that can be used in the real world.',
    ],
  },
  {
    eyebrow: '04',
    title: 'Algorithms and Data Structures',
    body: [
      'Algorithms and data structures were another important area of growth. During the program, I learned how choosing the right data structures and making algorithms that work well can make applications run faster and be easier to manage. As part of my capstone project, I switched out parallel collections for an object-oriented InventoryItem class. This made it easier to handle inventory data. I also added searching and multiple sorting choices that made the application easier to use and made managing inventory records faster. These changes showed that careful choices about algorithms and data structures can improve both the quality of software and the experience of using it.',
    ],
  },
  {
    eyebrow: '05',
    title: 'Databases and Data Engineering',
    body: [
      'Managing and designing databases became another important skill I gained through my coursework. I learned SQL, relational databases, and database normalization, which helped me build a better SQLite database for my capstone project. For the database enhancement, I added timestamp fields to the database schema, set up logic for database migration, added indexes to speed up queries, changed searching to parameterized SQL queries, made aggregate database functions, set up transactions to protect data integrity, and turned database operations that were done over and over into methods that could be used again. These improvements showed that good database design is more than just storing data; it also includes keeping data safe, making programs run faster, and making sure that they can be updated as they get bigger.',
    ],
  },
  {
    eyebrow: '06',
    title: 'Security and Quality Mindset',
    body: [
      "Another important thing that came out of the Computer Science school was the development of a security mindset. Instead of adding security as an afterthought, secure software needs to be carefully planned at every stage of development. Ideas like input validation, secure authentication, parameterized queries, and defensive programming techniques were taught in classes like Secure Coding. I used these ideas in my capstone improvements by checking user input, using parameterized database queries, handling exceptions better, keeping the database's integrity through transactions, and thinking about how changes in the future might impact the app's overall security and maintainability. These techniques help make software more reliable by lowering the number of security holes it has.",
    ],
  },
  {
    eyebrow: '07',
    title: 'Portfolio Outcomes and Career Readiness',
    body: [
      "The things in my ePortfolio show how my knowledge has grown as I've gone through the Computer Science school. The review of the code gives an overview of the original application and finds ways to make it better. The improvement in software engineering shows better software design, usefulness, validation, and maintainability. The improvements to algorithms and data structures focus on better searching and sorting, as well as better organization of program data. The database upgrade shows more advanced database design by making the schema better and by improving queries, indexing, transactions, and data management. These improvements show how different areas of computer science work together to make software that is reliable, easy to maintain, and effective.",
      "Getting this degree has helped me get ready for the next step in my work. I learned both technical and professional skills that are directly useful in modern software development during the program. I can evaluate existing software, find ways to make it better, make improvements that matter, and communicate technical decisions clearly thanks to the experience I got through this capstone. I will keep building on the skills I've learned in this Computer Science program as I go to graduate school and move up in my career as a software engineer and data engineer. The information and experiences in this ePortfolio show not only what I learned in college, but also how committed I am to continuing to learn and grow as a worker.",
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
    type: 'MP4 Video',
    href: 'artifacts/CS499- Code Review Robert Chappell.mp4',
    icon: <FaVideo />,
    description: 'Code review walkthrough and enhancement planning artifact.',
  },
  {
    title: 'Original Artifact',
    type: 'ZIP Archive',
    href: 'artifacts/InventoryApp - Robert (Original).zip',
    icon: <FaFileArchive />,
    description: 'Original CS360 Inventory Management Android Application.',
  },
  {
    title: 'Enhanced Artifact',
    type: 'ZIP Archive',
    href: 'artifacts/InventoryApp - Robert (Enhanced).zip',
    icon: <FaFileArchive />,
    description: 'Enhanced capstone version with design, algorithm, and database improvements.',
  },
  {
    title: 'Software Design Narrative',
    type: 'DOCX Narrative',
    href: 'artifacts/Milestone Two Narrative Chappell Robert.docx',
    icon: <FaFileWord />,
    description: 'Narrative describing the software engineering and design enhancement.',
  },
  {
    title: 'Algorithms Narrative',
    type: 'DOCX Narrative',
    href: 'artifacts/CS499 Milestone Three Narrative - Chappell Robert.docx',
    icon: <FaFileWord />,
    description: 'Narrative describing algorithm and data structure improvements.',
  },
  {
    title: 'Database Narrative',
    type: 'DOCX Narrative',
    href: 'artifacts/Milestone Four Narrative.docx',
    icon: <FaFileWord />,
    description: 'Narrative describing database design and optimization work.',
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
    href: 'https://www.linkedin.com/in/robert-chappell-92026221a/',
    icon: <FaLinkedin />,
  },
  {
    label: 'Email',
    href: 'mailto:robertfchappell@gmail.com',
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
