import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Silvia Raju Marihal',
  description: "Personal portfolio website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Silvia Raju Marihal`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Software Engineer with experience building developer platforms and infrastructure tooling, specializing in Java, React/TypeScript, Spring Boot, PHP 
(Ent), GraphQL, and Python. Focused on designing scalable systems and LLM-assisted, agentic workflows that automate developer operations, improve 
reliability, and reduce manual effort. 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me hiking and exploring beautiful parts of San Diego.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Silvia_Raju_Marihal.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
    I’m a software engineer passionate about building thoughtful, impactful digital experiences and
    continuously learning through hands-on creation. I enjoy working independently on challenging
    projects and exploring new technologies. I was recognized by RingCentral in the{' '}
    <a
    className="text-sky-400 underline hover:text-sky-300"
      href="https://www.ringcentral.com/us/en/blog/season-of-innovation-winter-interns/"
      rel="noopener noreferrer"
      target="_blank"
    >
      Season of Innovators
    </a>{' '}
    for my contributions and actively sharpen my skills through LeetCode.
 </>
  ),
  aboutItems: [
    {label: 'Study', text: 'Wichita State University, WestCliff University, Visvesvaraya Technological University', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
  name:'Programming Languages',
  skills:[
    {name:'Java',level:9},
    {name:'Python',level:9},
    {name:'TypeScript',level:9},
    {name:'JavaScript (ES6+)',level:9},
    {name:'C++',level:5},
    {name:'Rust',level:6},
    {name:'Ruby',level:6},
    {name:'PHP (Hack/Ent)',level:6},
  ],
},
{
  name:'AI / LLM & Agentic Systems',
  skills:[
    {name:'LLM-assisted Workflows',level:8},
    {name:'Agentic Automation Pipelines',level:8},
    {name:'Semantic Classification & Triage',level:7},
  ],
},
{
  name:'Frontend & UI',
  skills:[
    {name:'React',level:9},
    {name:'Redux',level:8},
    {name:'TypeScript',level:9},
    {name:'Vue.js',level:6},
    {name:'Responsive Design',level:8},
    {name:'Web Accessibility (WCAG)',level:8},
  ],
},
{
  name:'Backend & APIs',
  skills:[
    {name:'Spring Boot',level:9},
    {name:'RESTful APIs',level:9},
    {name:'GraphQL',level:8},
    {name:'Microservices Architecture',level:9},
    {name:'Authentication & Authorization',level:8},
    {name:'OAuth & JWT',level:8},
  ],
},
{
  name:'DevOps & Cloud',
  skills:[
    {name:'AWS',level:8},
    {name:'Docker',level:8},
    {name:'Kubernetes',level:7},
    {name:'Jenkins',level:7},
    {name:'CI/CD Pipelines',level:8},
    {name:'Terraform',level:6},
  ],
},
{
  name:'Testing & Debugging',
  skills:[
    {name:'JUnit',level:8},
    {name:'Mockito',level:8},
    {name:'Postman',level:8},
    {name:'Cypress',level:8},
    {name:'Selenium WebDriver',level:7},
  ],
},
{
  name:'Version Control & Tooling',
  skills:[
    {name:'Git',level:9},
    {name:'Bitbucket',level:8},
    {name:'GitLab',level:8},
    {name:'Webpack',level:7},
    {name:'Babel',level:7},
  ],
},
{
  name:'Specialties',
  skills:[
    {name:'Developer Environment Automation',level:9},
    {name:'Secure API Design',level:9},
    {name:'Cloud-Native Solutions',level:8},
    {name:'Interoperability of Connected Devices',level:8},
  ],
},

 
 
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Portfolio Website',
    description: 'ReactJS based portfolio website built by breaking the Ceevee template by Styleshout and breaking up their template into isolated React components. Data was fed directly from a JSON File.',
    url: 'https://github.com/Silviaraju/Silviaportfolio',
    image: porfolioImage4,
  },
  {
    title: 'User Manipulation Form - Frontend',
    description: 'ReactJS based user form to perform some manipulation like adding, editing and deleting the users. Data is fed through RESTFul APIs, MYSQL and POSTMAN.',
    url: 'https://github.com/Silviaraju/frontend',
    image: porfolioImage2,
  },
  {
    title: 'User Manipulation Form - Backend',
    description: 'Backend is written using Java and maven.',
    url: 'https://github.com/Silviaraju/backend',
    image: porfolioImage2,
  },
  {
    title: 'Reactive Spring Application',
    description: 'Reactive application that supports asynchronous, non-blocking, and event-driven applications easily scalable for an employee database. The application can retrieve a particular database based on employee id.',
    url: 'https://github.com/Silviaraju/Reactive-Spring-Programming',
    image: porfolioImage10,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2018 - May 2020',
    location: 'Wichita, Kansas',
    title: 'Master of Science in Computer Science, Wichita State University',
    content: <p>GPA: 3.7</p>
   
  },
  {
    date: 'June 2023 - June 2025',
    location: 'Irvine, California',
    title: 'Master of Business Administration, WestCliff University',
    content: <p>GPA: 3.9</p>
  },
  {
    date: 'August 2013 - June 2017',
    location: 'Bengaluru, India',
    title: 'Bachelor of Engineering in Information Science, Visvesvaraya Technological University',
    content: <p>GPA: 3.8</p>
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2023 - Present',
    location: 'Meta via Sigma Connectivity, Carlsbad, CA',
    title: 'Software Engineer',
    content: (
    <div>
  <p className="font-semibold mb-2">
  </p>

  <ul className="list-disc list-inside space-y-2">
    <li>
      Architected and automated Windows Developer Environment setup using Chef, Chocolatey, and RL CLI,
      reducing developer onboarding time by 40% and improving build reproducibility for Horizon Social VR projects.
    </li>
    <li>
      Designed and implemented an agentic workflow for automated issue intake using a two-stage LLM-assisted
      triage pipeline, combining keyword-based filtering with MetaGen (LLM) semantic analysis to classify,
      prioritize, and route Windows developer environment issues from Workplace into automated task workflows.
    </li>
    <li>
      Built and maintained internal full-stack OKR and SLA management tools using React, TypeScript, GraphQL,
      Hack/PHP, and JavaScript, including date-range filtering, team selectors, and data visualization dashboards
      powered by HighCharts and Scuba.
    </li>
    <li>
      Developed scalable, accessible React applications optimized for cross-browser compatibility, performance,
      and long-term maintainability in a large internal platform ecosystem.
    </li>
    <li>
      Partnered closely with backend and infrastructure teams to improve API performance, SLA instrumentation,
      and telemetry pipelines, reducing response times by 30% and improving system observability.
    </li>
    <li>
      Wrote Python automation scripts to streamline developer workflows, validate data pipelines, and integrate
      metrics into dashboards; deployed and operated these services on AWS-based infrastructure.
    </li>
    <li>
      Improved CI/CD reliability by writing optimized Presto queries to analyze build and deployment metrics, 
      surfacing failure trends through custom dashboard widgets that reduced mean time to detect (MTTD) and 
      improved pipeline transparency across engineering teams.
    </li>
    <li>
      Actively collaborated in Agile Scrum teams, participating in sprint planning, standups, retrospectives,
      and technical design reviews, while tracking work and documentation through Jira and Confluence.
    </li>
  </ul>
</div>

    ),
  },
 {
  date: 'September 2022 – July 2023',
  location: 'XIFIN, San Diego, CA',
  title: 'Software Engineer',
  content: (
    <ul className="list-disc list-inside space-y-2">
      <li>
        Developed and maintained backend services using Java Spring Boot within a microservices
        architecture to support healthcare revenue cycle management workflows.
      </li>
      <li>
        Designed and optimized RESTful APIs in Java for secure and efficient communication across
        distributed services.
      </li>
      <li>
        Worked with MySQL databases, implementing indexing and query optimization strategies to
        improve performance and scalability for high-volume healthcare data.
      </li>
      <li>
        Enhanced the Client Statements Engine by introducing asynchronous batch processing and
        database tuning, reducing billing statement processing time.
      </li>
      <li>
        Collaborated with frontend teams to integrate backend APIs with React applications, reducing
        load times while ensuring WCAG 2.1 accessibility compliance.
      </li>
      <li>
        Increased automated test coverage to 95% using Jest, React Testing Library, and Cypress, while
        supporting DevOps pipelines with AWS, Docker, and Kubernetes.
      </li>
    </ul>
  ),
},
{
  date: 'April 2021 – September 2022',
  location: 'RingCentral, Belmont, CA',
  title: 'Software Engineer',
  content: (
    <ul className="list-disc list-inside space-y-2">
      <li>
        Contributed to the Media Redirection SDK and Web Adapter integrations using TypeScript,
        React.js, and sip.js to enable high-performance communications in Citrix and VMware
        environments.
      </li>
      <li>
        Implemented embedded browser functionality using Chromium Embedded Framework (CEF) in C++ to
        support third-party application interoperability.
      </li>
      <li>
        Developed backend microservices using Java and Spring Boot to support scalable and
        fault-tolerant webphone integrations for Linux and Virtual Desktop Environments.
      </li>
      <li>
        Designed API endpoints for real-time call handling, authentication, and session management,
        ensuring secure and reliable communication flows.
      </li>
      <li>
        Participated in Agile development and promoted test-driven development through focused unit
        testing to isolate and resolve complex issues.
      </li>
    </ul>
  ),
},
{
  date: 'January 2021 – April 2021',
  location: 'RingCentral, Fort Lauderdale, FL',
  title: 'Junior Front-End Engineer Intern',
  content: (
    <ul className="list-disc list-inside space-y-2">
      <li>
        Enhanced the RingCentral application by implementing the “Add Note to Note Results” feature
        using React and TypeScript.
      </li>
      <li>
        Delivered a complete solution including unit tests, end-to-end (E2E) tests, and TestCafe-based
        automation while contributing to technical debt evaluation and problem-solving efforts.
      </li>
    </ul>
  ),
},
{
  date: 'June 2020 – December 2020',
  location: 'Brightfield, New York, NY',
  title: 'Full Stack Developer',
  content: (
    <ul className="list-disc list-inside space-y-2">
      <li>
        Developed frontend architecture using React, TypeScript, and Redux for the Talent Data
        Exchange, improving user experience and application performance.
      </li>
      <li>
        Designed and implemented Java-based microservices to process high-volume workforce data,
        integrating relational databases and external APIs.
      </li>
      <li>
        Used Maven for dependency management and build automation to streamline development and
        deployment workflows.
      </li>
      <li>
        Deployed Java applications into containerized environments and application servers to support
        scalable infrastructure.
      </li>
      <li>
        Contributed to automated testing frameworks across frontend and backend services, reducing
        defects and improving system reliability.
      </li>
      <li>
        Identified and resolved backend performance bottlenecks through profiling and code
        optimization, improving response times and data throughput.
      </li>
    </ul>
  ),
},
{
  date: 'July 2017 – August 2018',
  location: 'Hexaware, India',
  title: 'Software Engineer',
  content: (
    <ul className="list-disc list-inside space-y-2">
      <li>
        Orchestrated application state management by updating shared stores and subscribed components,
        ensuring smooth operation and optimal performance.
      </li>
      <li>
        Built highly reusable TypeScript components and services using a component-based architecture
        to consume REST APIs efficiently.
      </li>
      <li>
        Conducted rigorous unit testing with PowerMockito to establish a robust, reliable, and
        high-quality codebase.
      </li>
    </ul>
  ),
},

];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Simon Johanson',
      text: 'I had the pleasure of being Silvia\'s team lead at Sigma Connectivity Inc. on contract with Meta Inc. She is a skilled software engineer, capable of fast context switching and solving complex technical challenges. She is a natural team player and communicator, and I highly recommend her for any organization seeking a talented and driven professional.',
    },
    {
      name: 'Twesha Patel',
      text: 'Great, versatile engineer with strong ownership & communication skills. A pleasure to work with!',
     
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I enjoy collaborating with passionate teams across business and technology to create meaningful, well-designed solutions that make a real impact. If you’re interested in collaborating to build thoughtful, impactful solutions that make a difference, let’s connect.',
  items: [
    {
      type: ContactType.Email,
      text: 'silvia.rajumarihal@gmail.com',
      href: 'mailto:silvia.rajumarihal@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'San Diego, California',
    },
    {
      type: ContactType.Github,
      text: 'silviaraju',
      href: 'https://github.com/Silviaraju',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Silviaraju'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/silviaraju/'},
];
