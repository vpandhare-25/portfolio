// All of the site's text lives in this one file.
// To update the portfolio, edit the values below. The components read from here.
//
// Images live in public/images/. Logos are in public/images/logos/.
// The portrait is null until you add it, and shows a labeled placeholder until then.

export const profile = {
  firstName: "Vivek",
  lastName: "Pandhare",
  kicker: "Computer Science · Michigan State University",
  // These type out one at a time under the name.
  roles: ["Software Engineer", "MSU Spartan", "Dancer", "Tech Enthusiast"],
  intro:
    "I'm a Computer Science student at Michigan State University interested in building reliable software, solving complex engineering problems, and understanding how systems work under the hood. I enjoy working across backend development, systems programming, and applied AI, and I'm always looking for opportunities to learn and build things that have a real impact.",
  // Your photo: public/images/portrait.jpg -> "/images/portrait.jpg"
  portrait: "/images/portrait.jpg" as string | null,
  copyrightYear: 2026,
};

export const links = {
  github: "https://github.com/vpandhare-25",
  email: "pandhar3@msu.edu",
  linkedin: "https://linkedin.com/in/vivek-pandhare",
  // Put your resume at public/resume.pdf
  resume: "/resume.pdf",
};

export type Experience = {
  company: string;
  role: string;
  logo: string;
};

export const experience: Experience[] = [
  {
    company: "Enginuity Workspace",
    role: "Software Engineering Intern",
    logo: "/images/logos/enginuity.png",
  },
  {
    company: "Pfizer",
    role: "Artificial Intelligence Engineering Extern",
    logo: "/images/logos/pfizer.png",
  },
];

export type Organization = {
  name: string;
  role: string;
  // One short line about what the organization is.
  about: string;
  logo: string;
};

export const organizations: Organization[] = [
  {
    name: "Imagine Software",
    role: "Project Member",
    about: "Student developers turning project ideas into practical applications",
    logo: "/images/logos/imagine-software.png",
  },
  {
    name: "MSU AI Club",
    role: "Advanced Project Member",
    about: "Michigan State's student club for applied AI and machine learning projects",
    logo: "/images/logos/msu-ai-club.png",
  },
  {
    name: "Spartan Virasat",
    role: "Team Member & Tech Chair",
    about: "MSU's competitive South Asian dance team",
    logo: "/images/logos/spartan-virasat.png",
  },
];

export type Project = {
  name: string;
  subtitle: string;
  description: string;
  tech: string[];
  github: string;
  demo: string | null;
};

export const projects: Project[] = [
  {
    name: "LLM Gateway",
    subtitle: "Semantic caching for LLM APIs",
    description:
      "A semantic caching gateway for LLM APIs that uses vector search to identify repeated and paraphrased queries, reducing unnecessary model calls.",
    tech: ["Python", "FastAPI", "ChromaDB", "sentence-transformers", "Docker", "Streamlit"],
    github: "https://github.com/vpandhare-25/llm-gateway",
    demo: null,
  },
  {
    name: "Apex",
    subtitle: "Low-latency trading engine",
    description:
      "A performance-focused trading engine featuring a hybrid order book, smart order routing, and multithreaded market data processing.",
    tech: ["C++20", "CMake", "GoogleTest", "Google Benchmark", "Docker"],
    github: "https://github.com/vpandhare-25/apex-low-latency-trading-infra",
    demo: null,
  },
  {
    name: "Amazon ReviewGuard",
    subtitle: "Detecting computer-generated reviews",
    description:
      "A machine learning classifier designed to identify computer-generated Amazon reviews using linguistic and review-level features.",
    tech: ["Python", "XGBoost", "scikit-learn", "spaCy", "Pandas", "Joblib"],
    github: "https://github.com/vpandhare-25/Amazon_ReviewGuard",
    demo: null,
  },
  {
    name: "Kanban Task Board",
    subtitle: "Full-stack task board with private guest accounts",
    description:
      "A Kanban board where every visitor automatically gets a private guest account, Postgres Row Level Security keeps each guest's tasks separate, and drag-and-drop works with mouse, touch and keyboard.",
    tech: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "dnd-kit"],
    github: "https://github.com/vpandhare-25/kanban-task-board",
    demo: "https://kanban-task-board-mu-ten.vercel.app",
  },
];
