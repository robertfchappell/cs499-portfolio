import { useEffect, useState } from 'react';
import {
  FaAndroid,
  FaChartLine,
  FaDatabase,
  FaDownload,
  FaExternalLinkAlt,
  FaFileArchive,
  FaFilePdf,
  FaFileWord,
  FaGraduationCap,
  FaLayerGroup,
  FaVideo,
} from 'react-icons/fa';
import editInventoryItem from './assets/screenshots/edit-inventory-item.png';
import inventoryDashboard from './assets/screenshots/inventory-dashboard.png';
import loginScreen from './assets/screenshots/login-screen.png';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'self-assessment', label: 'Assessment' },
  { id: 'capstone', label: 'Capstone' },
  { id: 'artifacts', label: 'Artifacts' },
  { id: 'career', label: 'Career Goals' },
];

const assessmentSections = [
  {
    eyebrow: '01',
    title: 'Program Growth and Confidence',
    body: [
      "Working toward my Bachelor of Science in Computer Science has made me more confident. During the program, I learned how to do software engineering, databases, algorithms, data structures, software tests, secure coding, networking, systems design, and making mobile apps. Each class taught me something new on its own, but the final project put all of those skills together into a single work that shows how much I've learned in terms of technology. By making my ePortfolio, I was able to look over old work, find things that could be done better, and use what I've learned in the class to make a more complete and professional software application. This process has helped me build a portfolio that shows potential employers what I can do and set me up for further career growth.",
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
      "Working toward this degree has helped me get ready for the next step in my work. I learned both technical and professional skills that are directly useful in modern software development during the program. I can evaluate existing software, find ways to make it better, make improvements that matter, and communicate technical decisions clearly thanks to the experience I got through this capstone. I will keep building on the skills I've learned in this Computer Science program as I go to graduate school and move up in my career as a software engineer and data engineer. The information and experiences in this ePortfolio show not only what I learned in college, but also how committed I am to continuing to learn and grow as a worker.",
    ],
  },
];

const enhancementCards = [
  {
    title: 'Software Design Enhancement',
    icon: <FaLayerGroup />,
    narrativeHref: 'artifacts/Milestone Two Narrative Chappell Robert.docx',
    summary: [
      'The software design enhancement expanded the Inventory Management Android Application into a more complete, maintainable application experience. The work focused on full CRUD functionality, stronger input validation, clearer error handling, and reusable application components that make the code easier to understand and support.',
      'This enhancement demonstrates practical software engineering skills, including object-oriented design, user-centered interface flow, defensive programming, and maintainable component structure. By improving reliability and reducing duplicated logic, the application becomes easier to test, extend, and maintain over time.',
    ],
    skills: ['CRUD', 'Validation', 'Error Handling', 'Maintainability', 'Reusable Components'],
  },
  {
    title: 'Algorithms & Data Structures',
    icon: <FaChartLine />,
    narrativeHref: 'artifacts/CS499 Milestone Three Narrative - Chappell Robert.docx',
    summary: [
      'The algorithms and data structures enhancement improved how inventory information is represented, searched, sorted, and displayed. Replacing loosely related data collections with a structured InventoryItem object made the application data easier to manage and reduced the complexity of inventory operations.',
      'This work demonstrates the ability to choose appropriate data structures, design efficient search and sort behavior, and organize application data around real user workflows. The result is a faster, clearer, and more scalable inventory experience for users managing multiple records.',
    ],
    skills: [
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
    narrativeHref: 'artifacts/Milestone Four Narrative.docx',
    summary: [
      'The database enhancement strengthened the application persistence layer by improving the SQLite schema, adding timestamp fields, supporting migrations, indexing frequently queried data, and using parameterized SQL. Transactions and reusable database methods were also added to better protect data integrity.',
      'This enhancement demonstrates relational database design, query optimization, secure SQL practices, and data engineering discipline. The improvements make the app more reliable, safer to update, and better prepared for reporting, filtering, and future feature growth.',
    ],
    skills: [
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

const screenshotGallery = [
  {
    title: 'Login Screen',
    image: loginScreen,
    captions: ['Login Screen'],
    description: 'Authentication entry point with username, password, and account creation flows.',
  },
  {
    title: 'Inventory Dashboard',
    image: inventoryDashboard,
    captions: ['Inventory Dashboard', 'Add Inventory Item', 'Search and Sort Features'],
    description:
      'Main inventory workspace with item creation, live search, sorting, item state, and SMS alert access.',
  },
  {
    title: 'Edit Inventory Item',
    image: editInventoryItem,
    captions: ['Edit Inventory Item'],
    description: 'Focused edit dialog for changing item details, saving updates, canceling, or deleting an item.',
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
                <div className="enhancement-summary">
                  {card.summary.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="skill-tags compact">
                  {card.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
                <div className="enhancement-actions">
                  <a className="text-button" href={card.narrativeHref} target="_blank" rel="noreferrer">
                    View Full Narrative <FaExternalLinkAlt />
                  </a>
                  <a className="text-button" href={card.narrativeHref} download>
                    Download Narrative <FaDownload />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="screenshot-showcase" data-reveal>
            <div className="showcase-heading">
              <p className="eyebrow">Application Screenshots</p>
              <h3>Android inventory workflows in context.</h3>
            </div>
            <div className="screenshot-gallery" aria-label="Inventory application screenshots">
              {screenshotGallery.map((screenshot) => (
                <article className="screenshot-card" key={screenshot.title}>
                  <div className="phone-frame">
                    <img src={screenshot.image} alt={`${screenshot.title} screenshot`} />
                  </div>
                  <div className="screenshot-copy">
                    <h4>{screenshot.title}</h4>
                    <p>{screenshot.description}</p>
                    <div className="screenshot-captions">
                      {screenshot.captions.map((caption) => (
                        <span key={caption}>{caption}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
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
                download={artifact.href.startsWith('#') ? undefined : true}
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
      </main>

      <footer>
        <span>Robert Chappell</span>
        <span>Computer Science Capstone Portfolio</span>
      </footer>
    </>
  );
}

export default App;
