// Public portfolio content. This file is intended to be uploaded to GitHub Pages.
// Do not put passwords, API keys, private addresses, or sensitive documents here.
window.SITE_DATA = {
  name: "Truong Nguyen Hoang Long",
  title: "Fresher Backend Developer",
  location: "Ho Chi Minh City, Vietnam / Available for work",
  intro: "Software Engineering major focused on backend development, RESTful APIs, database design, and practical problem-solving.",
  email: "truongnguyenhoanglong@gmail.com",
  phone: "0899894527",
  profileImage: "assets/profile/profile.jpg",
  cv: "cv.pdf",
  links: [
    { label: "GitHub", url: "https://github.com/decsr" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/decsr/" }
  ],
  about: [
    "I am a dedicated Software Engineering major with a foundation in backend development, problem-solving, and critical thinking. I enjoy turning requirements into reliable services and working closely with teammates to investigate issues and deliver practical solutions.",
    "My experience includes C#, Java, C/C++, ASP.NET Core, Spring Boot, Entity Framework Core, microservices, RESTful APIs, and SQL Server. I am looking for a backend role where I can keep learning while contributing with care and consistency."
  ],
  experience: [
    {
      period: "JAN 2025 — APR 2025",
      role: "Backend Developer Intern",
      company: "FPT Software",
      duties: [
        "Developed and maintained backend features for enterprise software projects.",
        "Collaborated with QA and testing teams to investigate and resolve backend issues.",
        "Migrated legacy Visual Basic modules to a modern C# application.",
        "Created log reports for debugging and issue tracking in an Agile Git workflow."
      ],
      tech: ["C#", ".NET", "Git", "Agile"]
    },
    {
      period: "2021 — 2026",
      role: "Software Engineering Major",
      company: "FPT University — Campus HCM City",
      duties: [
        "Built a foundation in software development, system design, testing, and documentation.",
        "Completed the Novelle multilingual book platform as a final capstone project.",
        "Internship evaluation: A, with an overall score of 8.5/10."
      ],
      tech: ["Software Engineering", "System Design", "Testing"]
    },
    {
      period: "2020 — 2021",
      role: "Awards & Achievements",
      company: "Informatics competitions and academic programs",
      duties: [
        "Third Prize in the Provincial Informatics Competition (2021).",
        "Consolation Prize in the North Central Delta Olympic Competition (2020).",
        "Top 100 Summer Camps in the Central Region (2021).",
        "Encouragement Prize in the Young Informatics Competition in the Central Highlands and Central Region (2021)."
      ],
      tech: ["Problem Solving", "Informatics", "Competition"]
    }
  ],
  skills: {
    "Languages": ["C#", "Java", "C/C++"],
    "Backend": ["ASP.NET Core", "Spring Boot", "RESTful API", "Microservices"],
    "Data": ["SQL Server", "Entity Framework Core", "Database design"],
    "Tools & Testing": ["Git", "Docker", "Postman", "TestNG"]
  },
  projects: [
    {
      name: "Novelle — AI-Powered Multilingual Novel Platform",
      short: "A scalable microservice platform for publishing, translating, and monetizing digital novels.",
      role: "Backend Developer",
      stack: [".NET 10", "ASP.NET Core", "PostgreSQL", "Redis", "RabbitMQ", "gRPC", "Docker"],
      features: [
        "Publishing, AI and human translation, glossary, and file storage services",
        "Translation marketplace with bidding, proposals, escrow, revisions, and approvals",
        "Chapter purchases, wallets, double-entry ledgers, revenue sharing, and payouts",
        "Identity, notifications, community interaction, and audit logging"
      ],
      challenge: "Coordinating distributed workflows across publishing, translation, marketplace, payment, notification, and audit services while keeping transactions reliable.",
      contribution: "Built layered API, BLL, and DAL services; implemented gRPC communication with shared Protocol Buffer contracts; used RabbitMQ for domain events and background workers; integrated PostgreSQL, Entity Framework Core, Redis, SeaweedFS/S3, and Docker Compose. Applied JWT authentication, gateway authorization, idempotency checks, health checks, Swagger/OpenAPI, and wrote xUnit, Moq, and FluentAssertions tests.",
      image: "assets/projects/AI Translate.gif",
      github: "https://github.com/decsr",
      demo: ""
    }
  ],
  process: ["Understand", "Design", "Implement", "Test", "Document", "Improve"],
  processNote: "I work from the requirement to the root cause: understand the behavior, design the smallest clear solution, test it carefully, and document what changed.",
  photography: {
    intro: "A separate visual journal of people, places, and details. Photography will be added here when the image collection is ready.",
    categories: ["Street", "Portrait", "Events"],
    photos: []
  },
  contactLine: "I am open to fresher backend opportunities, internships, and conversations about software projects."
};
