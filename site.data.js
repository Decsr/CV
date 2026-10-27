// Public portfolio content. This file is intended to be uploaded to GitHub Pages.
// Do not put passwords, API keys, private addresses, or sensitive documents here.
window.SITE_DATA = {
  name: "Truong Nguyen Hoang Long",
  title: "Software Engineer · Web System Engineer",
  location: "Ho Chi Minh City, Vietnam / Open to new opportunities",
  intro: "Software Engineer with experience in software development and system integration, building reliable software across machines, firmware, and web systems.",
  email: "truongnguyenhoanglong@gmail.com",
  phone: "",
  profileImage: "assets/profile/profile.jpg",
  cv: "cv.pdf",
  links: [
    { label: "GitHub", url: "https://github.com/Decsr" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/decsr/" }
  ],
  about: [
    "I am a Software Engineer working at the boundary between software, hardware, and web systems. At Greystone Data Systems Vietnam I design MQTT communication for industrial machines, write the specifications that connect software, firmware, and web teams, and help bring machines through integration and commissioning. Before that, I built backend features and RESTful APIs for enterprise clients in Japan at FPT Software.",
    "I am adaptable and eager to learn, and I enjoy challenges that push me to explore new technologies and deepen my technical skills. I speak English at a good conversational level for day-to-day work and Vietnamese natively."
  ],
  experience: [
    {
      period: "MAY 2025 — PRESENT",
      role: "Software Engineer",
      company: "Greystone Data Systems Vietnam — R&D department of 100+ engineers, working alongside assembly technicians",
      duties: [
        "Design and implement MQTT (Mosquitto) communication across 8 topics between machine software, firmware, and the web system, connecting 4 industrial machines and enabling real-time status dashboards, centralized log storage, and remote control.",
        "Write software specifications and technical documentation defining how software, hardware, and web components interact, serving as the reference for cross-functional teams.",
        "Develop Qt-based user interfaces for industrial machine control software.",
        "Work with hardware and assembly teams during machine integration and commissioning to verify end-to-end behavior across software, firmware, and web services.",
        "Manage builds and source control with CMake, Git, and GitLab in a Linux environment."
      ],
      tech: ["MQTT", "Mosquitto", "Qt", "C/C++", "CMake", "Linux", "GitLab"]
    },
    {
      period: "APR 2024 — APR 2025",
      role: "Backend Developer",
      company: "FPT Software — offshore team serving the Japanese market, within a business unit of 100+ people",
      duties: [
        "Participated in the software development process for enterprise projects serving Japanese clients, contributing to backend features and RESTful APIs.",
        "Contributed to project documentation and software specifications, and took part in designing project modules, translating requirements into technical solutions.",
        "Carried out project deployment and environment configuration.",
        "Maintained delivered systems, investigating and resolving issues based on customer feedback, and prepared reports on request.",
        "Collaborated with QA and testing teams to investigate issues and support debugging.",
        "Migrated legacy Visual Basic modules to a modern C# application."
      ],
      tech: ["C#", ".NET", "RESTful APIs", "Git"]
    },
    {
      period: "2021 — 2026",
      role: "Bachelor's Degree in Software Engineering",
      company: "FPT University — Campus HCM City",
      duties: [
        "Graduated.",
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
    "Languages": ["C#", "Java", "C/C++", "Python"],
    "Backend": ["ASP.NET Core", "Entity Framework Core", "Spring Boot", "RESTful APIs", "Microservices"],
    "System Integration": ["MQTT (Mosquitto)", "SW–HW–Web communication", "Remote monitoring & control"],
    "Databases": ["SQL Server", "PostgreSQL"],
    "Platforms & Build": ["Linux", "CMake", "Docker"],
    "Tools": ["Qt Creator", "Visual Studio", "VS Code", "Git", "GitLab", "Postman", "JasperReports"],
    "AI Tools": ["Claude", "Codex", "DeepSeek", "GLM"]
  },
  projects: [
    {
      name: "Decsr-Code — Multi-Agent Coding Pipeline",
      short: "An open-source Go tool that drives specialist AI agents through a structured, resumable pipeline from task spec to reviewed code.",
      role: "Author · Open-source solo project",
      stack: ["Go", "Bubble Tea", "SQLite FTS5", "GitHub Actions", "GoReleaser"],
      features: [
        "Agents for PM, Coder, QA, UX Review, and Security working through a pipeline: context pack, task spec negotiation, decomposition, TDD implementation, global build/test/fix, and quality review",
        "Human approval gates before code is written, and resumable runs with sub-tasks tracked as beads",
        "Terminal UI built with Bubble Tea, plus a headless plain-text mode",
        "Runs on CLI runners (OpenCode, Claude CLI, Codex CLI, GitHub Copilot CLI) or local model servers (Ollama, LM Studio, MLX)"
      ],
      challenge: "Keeping a multi-agent pipeline structured and resumable, with human approval before code is written, while the output of the underlying models is unpredictable.",
      contribution: "Author of the whole project: the pipeline orchestration, the Bubble Tea terminal UI and headless mode, the CLI and local-model runners, and project memory in Markdown indexed with SQLite FTS5/BM25 (optional embeddings). Set up GitHub Actions CI (build, vet, gofmt, race tests on Linux and macOS) and GoReleaser releases for Linux, macOS, and Windows on amd64 and arm64. MIT licensed.",
      image: "assets/projects/decsr-code-ui.png",
      github: "https://github.com/Decsr/Decsr-Code",
      demo: ""
    },
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
      github: "https://github.com/Decsr",
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
  contactLine: "I am open to new opportunities in software engineering and system integration, and to conversations about software projects."
};
