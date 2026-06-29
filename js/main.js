'use strict';

/* ===== PROJECTS DATA ===== */
const PROJECTS = [
  {
    num: '01', filter: 'enterprise',
    title: 'Employee Leave & Attendance Management System',
    dates: 'Jan 2016 – Oct 2016',
    desc: 'Enterprise application replacing manual leave approvals with an online workflow. Employees applied for leave, managers reviewed requests, and HR tracked balances through a centralized dashboard.',
    techs: ['Java 7', 'JSP', 'Servlets', 'JDBC', 'MySQL', 'Bootstrap', 'Apache Tomcat'],
    github: null
  },
  {
    num: '02', filter: 'enterprise',
    title: 'Hospital Management System',
    dates: 'Jul 2016 – Jun 2017',
    desc: 'Multi-department hospital platform covering patient registration, doctor appointments, laboratory reports, pharmacy, and billing. Eliminated duplicate records and streamlined operations.',
    techs: ['Java 8', 'Spring MVC', 'Hibernate', 'Oracle', 'Maven', 'Bootstrap', 'Jasper Reports'],
    github: 'https://github.com/nagaramnagalla014-ctrl/Hospital-Management-System'
  },
  {
    num: '03', filter: 'enterprise',
    title: 'University Student Information Portal',
    dates: 'Apr 2017 – Feb 2018',
    desc: 'Centralized student portal for course registration, grade viewing, transcript downloads, and notifications. Faculty managed grades and attendance through the same platform.',
    techs: ['Java 8', 'Spring MVC', 'Hibernate', 'Oracle', 'AngularJS', 'REST APIs', 'Jenkins'],
    github: 'https://github.com/nagaramnagalla014-ctrl/University-Student-Information-Portal'
  },
  {
    num: '04', filter: 'microservices',
    title: 'Online Retail Management Platform',
    dates: 'Jan 2018 – Dec 2018',
    desc: 'Complete retail platform for product browsing, order placement, payments, and shipment tracking. Admin portal supported inventory management, promotions, and fulfillment.',
    techs: ['Java 8', 'Spring Boot', 'Angular 5', 'MySQL', 'REST APIs', 'Jenkins', 'Docker'],
    github: 'https://github.com/nagaramnagalla014-ctrl/Online-Retail-Management-Platform'
  },
  {
    num: '05', filter: 'fintech',
    title: 'Banking Loan Origination System',
    dates: 'Aug 2018 – Jul 2019',
    desc: 'Loan processing platform automating the complete lifecycle — application, credit verification, underwriting, document validation, approvals, and disbursement with compliance enforcement.',
    techs: ['Java 8', 'Spring Boot', 'Hibernate', 'Oracle', 'RabbitMQ', 'JWT', 'Docker'],
    github: 'https://github.com/nagaramnagalla014-ctrl/Banking-Loan-Origination-System'
  },
  {
    num: '06', filter: 'fintech',
    title: 'Insurance Claims Processing Platform',
    dates: 'Mar 2019 – Feb 2020',
    desc: 'Digital claims platform where policyholders upload accident documents and track status in real time. Claims adjusters review evidence, communicate with customers, and process settlements.',
    techs: ['Java 11', 'Spring Boot', 'React', 'Oracle', 'Elasticsearch', 'Docker', 'SonarQube'],
    github: 'https://github.com/nagaramnagalla014-ctrl/Insurance-Claims-Processing-Platform'
  },
  {
    num: '07', filter: 'microservices',
    title: 'Freight Claims Automation System',
    dates: 'Jan 2020 – Apr 2021',
    desc: 'Logistics claims platform handling cargo damage reports. Claims automatically moved through verification, validation, investigation, approval, and payment via Kafka event-driven messaging.',
    techs: ['Java 11', 'Spring Boot', 'React', 'Kafka', 'MongoDB', 'Kubernetes', 'AWS EC2'],
    github: 'https://github.com/nagaramnagalla014-ctrl/Freight-Claims-Automation-System'
  },
  {
    num: '08', filter: 'cloud',
    title: 'Digital Identity Verification Platform',
    dates: 'Oct 2020 – Dec 2021',
    desc: 'Secure onboarding platform where users upload identity documents. Backend services validated authenticity, matched customer info, and integrated with third-party verification providers.',
    techs: ['Java 11', 'Spring Boot', 'Angular 12', 'PostgreSQL', 'Redis', 'AWS S3', 'Kubernetes'],
    github: 'https://github.com/nagaramnagalla014-ctrl/Digital-Identity-Verification-Platform'
  },
  {
    num: '09', filter: 'fintech',
    title: 'Loan Decision Engine',
    dates: 'Apr 2021 – Mar 2022',
    desc: 'Rule-based engine evaluating thousands of loan applications daily. Business users updated lending rules without application deployments using Drools, enabling rapid policy changes.',
    techs: ['Java 17', 'Spring Boot', 'Drools', 'PostgreSQL', 'Kafka', 'Kubernetes', 'Redis'],
    github: 'https://github.com/nagaramnagalla014-ctrl/Loan-Decision-Engine'
  },
  {
    num: '10', filter: 'fintech',
    title: 'Global Payment Gateway',
    dates: 'Jan 2022 – Nov 2022',
    desc: 'Multi-currency payment platform supporting domestic and international transactions. Handled authorization, real-time fraud detection, settlement, reconciliation, and transaction monitoring.',
    techs: ['Java 17', 'Spring Boot', 'Kafka', 'Redis', 'PostgreSQL', 'AWS ECS', 'Grafana', 'Prometheus'],
    github: 'https://github.com/nagaramnagalla014-ctrl/Global-Payment-Gateway'
  },
  {
    num: '11', filter: 'microservices',
    title: 'E-Commerce Order Fulfillment Microservices',
    dates: 'Jun 2022 – Aug 2023',
    desc: 'Migrated monolith to 6 independent microservices (orders, inventory, payments, shipping, notifications) using Kafka choreography-based Saga pattern. Improved peak-season scalability.',
    techs: ['Java 17', 'Spring Boot', 'Kafka', 'MySQL', 'Kubernetes', 'Jenkins', 'AWS'],
    github: 'https://github.com/nagaramnagalla014-ctrl/E-Commerce-Order-Fulfillment-Microservices'
  },
  {
    num: '12', filter: 'fintech',
    title: 'Real-Time Fraud Detection Platform',
    dates: 'Jan 2023 – Feb 2024',
    desc: 'Real-time platform analyzing millions of payment transactions daily. Combined ML scores, historical behavior, and business rules to flag suspicious activities within milliseconds.',
    techs: ['Java 17', 'Kafka Streams', 'Apache Flink', 'Redis', 'Cassandra', 'Elasticsearch', 'AWS MSK'],
    github: null
  },
  {
    num: '13', filter: 'microservices',
    title: 'Enterprise Event Streaming Platform',
    dates: 'Aug 2023 – Jun 2024',
    desc: 'Enterprise-wide streaming platform replacing nightly batch jobs with real-time data exchange. Supported hundreds of producers and consumers with message durability and fault tolerance.',
    techs: ['Java 21', 'Apache Kafka', 'Kafka Connect', 'Kafka Streams', 'Schema Registry', 'Kubernetes', 'Grafana'],
    github: null
  },
  {
    num: '14', filter: 'cloud',
    title: 'Cloud-Native Customer Analytics Platform',
    dates: 'Feb 2024 – Jan 2025',
    desc: 'Analytics solution collecting customer interactions from multiple channels and transforming them into interactive dashboards for monitoring engagement, predicting sales trends, and executive reporting.',
    techs: ['Java 21', 'Spring Boot', 'React', 'PostgreSQL', 'Python', 'Apache Airflow', 'Power BI', 'AWS Lambda'],
    github: null
  },
  {
    num: '15', filter: 'cloud',
    title: 'AI Recruitment & Resume Intelligence Platform',
    dates: 'Oct 2024 – Present',
    desc: 'AI-assisted recruitment platform extracting skills, analyzing experience, and ranking candidates against job descriptions. Generates interview questions, candidate summaries, and hiring insights.',
    techs: ['Java 21', 'Spring Boot', 'React 19', 'PostgreSQL', 'Redis', 'LangChain', 'OpenAI API', 'AWS ECS'],
    github: null
  }
];

/* ===== RENDER PROJECTS ===== */
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';
  PROJECTS.forEach((p, i) => {
    const show = filter === 'all' || p.filter === filter;
    const techsHtml = p.techs.map(t => `<span class="proj-tech">${t}</span>`).join('');
    const githubBtn = p.github
      ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="proj-link" title="View on GitHub"><i class="fab fa-github"></i></a>`
      : '';
    const card = document.createElement('div');
    card.className = `proj-card reveal${show ? '' : ' hidden'}`;
    card.style.animationDelay = `${(i % 3) * 80}ms`;
    card.innerHTML = `
      <div class="proj-card-top">
        <span class="proj-num">Project ${p.num}</span>
        <div class="proj-links">${githubBtn}</div>
      </div>
      <div>
        <div class="proj-title">${p.title}</div>
        <div class="proj-dates">${p.dates}</div>
      </div>
      <p class="proj-desc">${p.desc}</p>
      <div class="proj-techs">${techsHtml}</div>`;
    grid.appendChild(card);
  });
  // Trigger reveal for newly rendered cards
  setTimeout(() => {
    grid.querySelectorAll('.reveal:not(.hidden)').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 60);
    });
  }, 50);
}

/* ===== FILTER BUTTONS ===== */
document.querySelectorAll('.fbtn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.f);
  });
});

/* ===== TYPEWRITER ===== */
const TITLES = [
  'Java Full Stack Developer',
  'Microservices Architect',
  'Cloud Solutions Engineer',
  'Spring Boot Specialist',
  'AI Platform Developer'
];
let tIdx = 0, cIdx = 0, deleting = false;
const twEl = document.getElementById('typewriter');

function typeWrite() {
  const word = TITLES[tIdx];
  if (!deleting) {
    twEl.textContent = word.slice(0, cIdx + 1);
    cIdx++;
    if (cIdx === word.length) { deleting = true; setTimeout(typeWrite, 2000); return; }
  } else {
    twEl.textContent = word.slice(0, cIdx - 1);
    cIdx--;
    if (cIdx === 0) { deleting = false; tIdx = (tIdx + 1) % TITLES.length; }
  }
  setTimeout(typeWrite, deleting ? 60 : 100);
}
setTimeout(typeWrite, 800);

/* ===== COUNTER ANIMATION ===== */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  let count = 0;
  const step = Math.max(1, Math.ceil(target / 30));
  const timer = setInterval(() => {
    count = Math.min(count + step, target);
    el.textContent = count;
    if (count >= target) clearInterval(timer);
  }, 50);
}

/* ===== SCROLL REVEAL ===== */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Counter animation
      if (entry.target.classList.contains('hstat-n')) animateCounter(entry.target);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

function observeReveal() {
  document.querySelectorAll('.reveal, .hstat-n').forEach(el => revealObs.observe(el));
}

/* ===== NAVBAR SCROLL & ACTIVE LINK ===== */
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  // Sticky style
  if (window.scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');

  // Active link
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

/* ===== MOBILE NAV ===== */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  hamburger.classList.toggle('open');
});
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

/* ===== INIT ===== */
renderProjects();
observeReveal();
