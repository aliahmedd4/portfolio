const projects = [
  {
    id: 1,
    title: "AI-Powered Internship Finder",
    category: "AI · Full-Stack",
    tags: ["JavaScript", "AI Integration", "Full-Stack"],
    description:
      "Full-stack web platform using AI to match students with internships based on skills and preferences. Features a recommendation engine with real-time dynamic filtering.",
    featured: true,
  },
  {
    id: 2,
    title: "Metabolic Syndrome Risk Classifier",
    category: "Machine Learning · Classification",
    tags: ["Python", "Scikit-learn", "Pandas", "Data Preprocessing"],
    description:
      "ML pipeline on a messy clinical dataset with missing values and mixed features. Benchmarked Logistic Regression, Random Forest, and SVM — evaluated with cross-validation and F1-score.",
    featured: true,
  },
  {
    id: 3,
    title: "Unsupervised Clustering Model",
    category: "ML · Unsupervised",
    tags: ["Python", "K-Means", "PCA", "Scikit-learn"],
    description:
      "K-Means and hierarchical clustering to identify hidden patterns in data. Applied PCA for dimensionality reduction and visualized cluster distributions.",
    featured: false,
  },
  {
    id: 4,
    title: "Football Player Performance Analysis",
    category: "Data Analysis · Sports",
    tags: ["Python", "Pandas", "Matplotlib", "Statistics"],
    description:
      "Analyzed player metrics — goals, assists, pass accuracy, defensive contributions — across positions and seasons to identify top performers and trends.",
    featured: false,
  },
  {
    id: 5,
    title: "HR Database System",
    category: "Database · Full-Stack",
    tags: ["SQL", "ER Modelling", "Web Dev", "Database Design"],
    description:
      "Normalized relational HR database covering employees, departments, salaries, and contracts. Web interface for CRUD operations, report generation, and role-based data access.",
    featured: true,
  },
  {
    id: 6,
    title: "MapReduce Document Processor",
    category: "Python · Distributed Systems",
    tags: ["Python", "MapReduce", ".docx Processing"],
    description:
      "Python web tool applying the MapReduce paradigm to process and analyze large .doc file collections. Map and reduce functions extract, aggregate, and summarize content.",
    featured: false,
  },
  {
    id: 7,
    title: "DES Encryption Implementation",
    category: "Security · Cryptography",
    tags: ["Python", "Cryptography", "Symmetric Encryption"],
    description:
      "DES algorithm from scratch — key scheduling, permutation tables, and 16-round Feistel structure. Validated against known test vectors.",
    featured: false,
  },
  {
    id: 8,
    title: "RSA Encryption Implementation",
    category: "Security · Cryptography",
    tags: ["Python", "RSA", "Public-Key Crypto"],
    description:
      "RSA system with prime generation, modular exponentiation, and full key-pair creation. Demonstrates mastery of asymmetric encryption mathematics.",
    featured: false,
  },
  {
    id: 9,
    title: "Jackroo – Strategy Board Game",
    category: "Java · Game Development",
    tags: ["Java", "OOP", "Algorithm Design", "Game Logic"],
    description:
      "Full Jackroo strategy board game in Java with all rules, turn management, and win-condition detection using OOP design patterns.",
    featured: false,
  },
  {
    id: 10,
    title: "3D Game – Unity Engine",
    category: "C# · Game Development",
    tags: ["C#", "Unity", "Game Physics", "3D Development"],
    description:
      "3D interactive Unity game with physics-based mechanics, scene management, and player control systems. Optimized rendering performance.",
    featured: false,
  },
];

const skillGroups = [
  {
    group: "Languages",
    icon: "< />",
    skills: ["Python", "Java", "C++", "JavaScript", "SQL", "NoSQL", "C#"],
  },
  {
    group: "ML & Data Science",
    icon: "⬡",
    skills: [
      "Scikit-learn",
      "Pandas",
      "Matplotlib",
      "K-Means",
      "PCA",
      "Classification",
      "Clustering",
    ],
  },
  {
    group: "Security & Cryptography",
    icon: "◈",
    skills: [
      "DES Encryption",
      "RSA Encryption",
      "Symmetric Crypto",
      "Public-Key Infrastructure",
    ],
  },
  {
    group: "Tools & Platforms",
    icon: "⚙",
    skills: ["Git & GitHub", "Unity", "MySQL", "VS Code", "MS Office"],
  },
  {
    group: "Web & Systems",
    icon: "◻",
    skills: [
      "Full-Stack Dev",
      "REST APIs",
      "Database Design",
      "OOP Design Patterns",
      "Agile/UML",
    ],
  },
  {
    group: "Soft Skills",
    icon: "◈",
    skills: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Analytical Thinking",
    ],
  },
];

const languages = [
  { name: "Arabic", level: "Native", percent: 100 },
  { name: "English", level: "Fluent", percent: 92 },
  { name: "French", level: "Conversational", percent: 55 },
  { name: "German", level: "A2", percent: 28 },
];

const profile = {
  name: "Ali Ahmed Mohamed Hassan",
  roles: [
    "CS Student",
    "ML & Full-Stack Developer",
    "Based in Cairo, Egypt",
  ],
  summary: "Computer Science student at the German International University (GIU) with hands-on experience in Python, Java, SQL, machine learning, and cryptography. Builds end-to-end solutions across AI-powered web platforms, ML models, data analysis pipelines, security systems, and full-stack apps.",
  location: "Cairo, Egypt",
  email: "ali4.hassan6@gmail.com",
  phone: "+20 1013837800",
  portfolioUrl: "ali-hassan.dev",
  university: "German International University (GIU)",
  degree: "B.Sc. Computer Science",
  enrollYear: "2024–Present",
  highSchool: "Nefertari American International School",
  diploma: "American Diploma (2024)",
  gpa: "4.0",
  est1: "1320",
  est2: "1160",
  github: "https://github.com/aliahmedd4",
  linkedin: "https://www.linkedin.com/in/ali-ahmed46",
};

const extracurriculars = [
  {
    org: "El Ganan Orphanage",
    role: "Volunteer",
    period: "2022 – 2023",
    description: "Supported children's educational and recreational activities as part of a community outreach initiative, contributing to tutoring sessions and social development programs.",
  },
];

module.exports = { projects, skillGroups, languages, profile, extracurriculars };
