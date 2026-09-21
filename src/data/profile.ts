import type {
  ArchitectureTopic,
  EducationItem,
  ExperienceItem,
  JourneyItem,
  NavItem,
  ProjectItem,
  SkillGroup,
  SocialLink,
} from '@/types/portfolio'

export const profile = {
  name: 'Kiran Das',
  shortName: 'KD',
  title: 'Software Engineer',
  location: 'Ernakulam, Kerala, India',
  phone: '+91 8075521336',
  email: 'kirandaskdas1@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kiran-das-881269241',
  resumePath: '/Kiran-Das-Resume.pdf',
  yearsExperienceLabel: '4+',
  tagline:
    'Building scalable, reliable, and maintainable enterprise applications with modern .NET, Azure, and well-structured APIs.',
  intro:
    'Software Engineer with 4+ years delivering full-stack solutions — from .NET Core 8 and REST APIs to SQL Server, Azure, and legacy modernization.',
  summary:
    'I am a software engineer with 4+ years of industry experience delivering high-quality solutions across the full software development lifecycle. My work spans modern and legacy stacks: ASP.NET Core 8, Web APIs, SQL Server, Azure, React, Angular, and VB6. I focus on maintainable architecture, database performance, and dependable delivery in Agile environments.',
  aboutBody: [
    'I currently work as a Software Engineer at Comply India, contributing to product integration, full-stack application development, and technical solution planning. Before that, I spent more than three years at Thoughtline Technologies building Azure-hosted .NET applications, improving database performance, and modernizing older systems that still needed to run in production.',
    'I like work that sits close to the backend: APIs, data models, layered services, and the practical details of moving a system from legacy code to a cleaner .NET Core design without breaking the business process around it.',
  ],
  seoTitle: 'Kiran Das | Software Engineer',
  seoDescription:
    'Portfolio of Kiran Das, a Software Engineer with 3+ years of experience building enterprise applications using ASP.NET Core, Web APIs, Azure, SQL Server, and modern frontend frameworks.',
  stats: [
    { label: 'Years Experience', value: '4+' },
    { label: 'Companies', value: '3' },
    { label: 'Projects Delivered', value: '10+' },
  ],
} as const

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    kind: 'linkedin',
  },
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    kind: 'email',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    icon: 'server',
    items: [
      'C#',
      'ASP.NET',
      'ASP.NET MVC',
      '.NET Core',
      'Web API',
      'ADO.NET',
      'Entity Framework',
      'EF Core',
      'Visual Basic 6.0',
      'Windows Services',
      'Worker Services',
    ],
  },
  {
    title: 'Frontend',
    icon: 'layout',
    items: ['React', 'Angular', 'Vue.js', 'React Native'],
  },
  {
    title: 'Database & Data',
    icon: 'database',
    items: ['SQL Server', 'Stored Procedures', 'JSON', 'XML', 'IronXL', 'Excel Automation'],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'cloud',
    items: [
      'Microsoft Azure',
      'CI/CD Pipelines',
      'Jenkins',
      'Octopus Deploy',
      'Azure Repos',
    ],
  },
  {
    title: 'APIs & Integration',
    icon: 'plug',
    items: [
      'REST APIs',
      'Microservices',
      'JWT',
      'OAuth2',
      'API Gateway',
      'Swagger',
      'Postman',
      'Third-party API Integration',
    ],
  },
  {
    title: 'Architecture & Practices',
    icon: 'blocks',
    items: [
      'OOP',
      'MediatR',
      'CQRS',
      'Layered Design',
      'High-Level Design',
      'Low-Level Design',
      'Agile & Scrum',
    ],
  },
  {
    title: 'Tools',
    icon: 'wrench',
    items: [
      'Visual Studio',
      'CurserAi',
      'Claude',
      'Antigravity',
      'VS Code',
      'Git',
      'Bitbucket',
      'GitHub',
      'TortoiseSVN',
      'JIRA',
    ],
  },
]

export const experience: ExperienceItem[] = [
  {
    id: 'comply-india',
    company: 'Comply India',
    title: 'Software Engineer',
    period: 'March 2026 — Present',
    summary:
      'Contributing to product integration and full-stack development across .NET backends and modern frontend platforms.',
    highlights: [
      'Contributing to product integration and consolidation initiatives across platforms.',
      'Building full-stack applications with a .NET backend and React, Angular, and Vue.js frontends.',
      'Participating in system architecture design and technical solution planning.',
      'Researching AI-assisted development techniques and setting up AI workstations to support engineering workflows.',
    ],
    technologies: ['.NET', 'React', 'Angular', 'Vue.js', 'System Architecture'],
  },
  {
    id: 'thoughtline',
    company: 'Thoughtline Technologies Pvt Ltd',
    title: 'Software Developer',
    period: 'December 2022 — February 2026',
    summary:
      'Delivered end-to-end Agile software for enterprise systems spanning modern .NET Core, Azure, and legacy platforms.',
    highlights: [
      'Led Agile-based end-to-end software development and project delivery.',
      'Built scalable applications using .NET Core 8, ASP.NET MVC, Web APIs, and Azure.',
      'Maintained and enhanced VB6 and older .NET applications while modernizing legacy systems.',
      'Optimized database performance and protected code quality through testing and reviews.',
      'Developed responsive applications using Angular, React, and React Native.',
    ],
    technologies: [
      '.NET Core 8',
      'ASP.NET MVC',
      'Web API',
      'Azure',
      'SQL Server',
      'VB6',
      'Angular',
      'React',
      'React Native',
    ],
  },
  {
    id: 'luminar',
    company: 'Luminar Technolab',
    title: 'Internship — ASP.NET MVC with Angular (Full Stack)',
    period: 'July 2022 — December 2022',
    summary:
      'Full-stack internship focused on web applications built with ASP.NET MVC and Angular.',
    highlights: [
      'Built web applications using ASP.NET MVC and Angular.',
      'Designed and implemented frontend and backend components.',
      'Practiced industry-oriented full-stack development and delivery habits.',
    ],
    technologies: ['ASP.NET MVC', 'Angular', 'Full Stack'],
  },
]

export const projects: ProjectItem[] = [
  {
    id: 'sfmc-migration',
    name: 'Communication Service Migration to SFMC',
    shortDescription:
      'Migrated a legacy communication service to Salesforce Marketing Cloud on a modern .NET Core 8 architecture hosted in Azure.',
    purpose:
      'Replace a legacy communication service with a scalable design that integrates cleanly with Salesforce Marketing Cloud while remaining reliable under larger data volumes.',
    contribution: [
      'Redesigned the service in .NET Core 8.0 and hosted it on Azure.',
      'Built Worker Services and API services to support the new communication flow.',
      'Designed new database structures, stored procedures, and error-handling for scale.',
      'Applied MediatR and CQRS to keep service logic organized and easier to extend.',
    ],
    technologies: [
      '.NET Core 8',
      'Worker Services',
      'Web API',
      'MediatR',
      'CQRS',
      'SQL Server',
      'Azure',
      'Salesforce Marketing Cloud',
    ],
    highlights: [
      'Legacy service redesigned as Azure-hosted APIs and workers',
      'CQRS with MediatR for cleaner command/query separation',
      'Database structures and stored procedures built for volume',
    ],
  },
  {
    id: 'enterprise-modernization',
    name: 'Enterprise Development, Migration & Maintenance',
    shortDescription:
      'Ongoing development and modernization work across legacy VB6 systems and current .NET Core 8 applications.',
    purpose:
      'Keep production systems running while adding features, fixing complex defects, and moving older applications toward a more maintainable .NET stack.',
    contribution: [
      'Developed and maintained applications ranging from VB6.0 to .NET Core 8.0.',
      'Implemented new features, resolved complex bugs, and supported both older and modernized systems.',
      'Enhanced Angular applications with new features, reusable services, and integration fixes.',
    ],
    technologies: [
      'VB6',
      '.NET Core 8',
      'ASP.NET',
      'Angular',
      'SQL Server',
      'REST APIs',
    ],
    highlights: [
      'Legacy VB6 maintenance alongside modern .NET Core delivery',
      'Feature work and defect resolution in production systems',
      'Reusable Angular services and frontend integration improvements',
    ],
  },
]

export const architectureTopics: ArchitectureTopic[] = [
  {
    title: 'Layered Design',
    icon: 'layers',
    description:
      'I structure services with clear folder boundaries so presentation, application, and data concerns stay separated and easier to change.',
  },
  {
    title: 'CQRS with MediatR',
    icon: 'git-branch',
    description:
      'Commands and queries are handled through MediatR to keep API controllers thin and service logic easier to follow.',
  },
  {
    title: 'REST APIs & Microservices',
    icon: 'plug',
    description:
      'I build and integrate HTTP APIs with JWT/OAuth2 authentication, Swagger documentation, and API gateway patterns where needed.',
  },
  {
    title: 'Azure-hosted Services',
    icon: 'cloud',
    description:
      'Application services and workers are designed to run on Microsoft Azure, with CI/CD through Jenkins and Octopus Deploy.',
  },
  {
    title: 'SQL Server Design',
    icon: 'database',
    description:
      'I design tables, stored procedures, and query paths with performance in mind, especially when data volume starts to grow.',
  },
  {
    title: 'Legacy Modernization',
    icon: 'refresh-cw',
    description:
      'I maintain VB6 and older .NET systems while moving communication and business services toward .NET Core 8, APIs, and workers.',
  },
]

export const education: EducationItem[] = [
  {
    program: 'B.Com (Computer Application)',
    institution: 'Mahatma Gandhi University',
    period: 'June 2019 — March 2022',
  },
]

export const journey: JourneyItem[] = [
  {
    id: 'internship',
    period: 'Jul — Dec 2022',
    title: 'Full-Stack Internship',
    organization: 'Luminar Technolab',
    type: 'internship',
  },
  {
    id: 'thoughtline-role',
    period: 'Dec 2022 — Feb 2026',
    title: 'Software Developer',
    organization: 'Thoughtline Technologies',
    type: 'role',
  },
  {
    id: 'comply-role',
    period: 'Mar 2026 — Present',
    title: 'Software Engineer',
    organization: 'Comply India',
    type: 'role',
  },
]
