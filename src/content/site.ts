// All of the site's text lives in this one file.
// To update the portfolio, edit the values below. The components read from here.
//
// Images: put files in public/images/ and set the matching field to "/images/<file>".
// Anything left as null shows a simple placeholder tile with initials.

export const profile = {
  name: "Vivek Pandhare",
  monogram: "vp",
  // Your photo: public/images/portrait.jpg -> "/images/portrait.jpg"
  portrait: null as string | null,
  // Each string is one paragraph in the About section.
  about: [
    "Hi, I'm Vivek!",
    "I'm studying Computer Science at Michigan State University.",
    "I'm interested in building reliable software, solving complex engineering problems, and understanding how systems work under the hood.",
    "I enjoy working across backend development, systems programming, and applied AI.",
    "Always looking for opportunities to learn and build things that have a real impact.",
  ],
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
  dates: string;
  location: string;
  description: string;
  logo: string | null;
};

export const experience: Experience[] = [
  {
    company: "Enginuity Workspace",
    role: "Software Engineering Intern",
    dates: "May 2026 – Aug 2026",
    location: "Troy, MI",
    description:
      "Built REST APIs with Node.js and PostgreSQL for an AI tutoring platform, improved document ingestion pipelines, and fixed bugs affecting signups and performance.",
    logo: null,
  },
  {
    company: "Pfizer",
    role: "Artificial Intelligence Engineering Extern",
    dates: "May 2026 – Jul 2026",
    location: "Remote",
    description:
      "Built Python OCR and document extraction pipelines for pharmaceutical PDFs, benchmarked OCR engines, and explored semantic search with LlamaIndex and vector databases.",
    logo: null,
  },
];

export type Organization = {
  name: string;
  role: string;
  description: string;
  image: string | null;
};

export const organizations: Organization[] = [
  {
    name: "Imagine Software",
    role: "Project Member",
    description:
      "Contributed to software development projects, collaborating with other members to build and improve applications.",
    image: null,
  },
  {
    name: "MSU AI Club",
    role: "Advanced Project Member",
    description:
      "Selected as one of two new members for an advanced project team, contributing to technical work involving AI and data-driven applications.",
    image: null,
  },
  {
    name: "Spartan Virasat",
    role: "Team Member / Tech Chair",
    description:
      "Michigan State's cultural dance team, where I combine technical responsibilities with team activities and performances.",
    image: null,
  },
];

export type Project = {
  name: string;
  subtitle: string;
  description: string;
  tech: string;
  github: string;
  demo: string | null;
  image: string | null;
};

export const projects: Project[] = [
  {
    name: "LLM Gateway",
    subtitle: "Semantic caching for LLM APIs",
    description:
      "A gateway that uses vector search to recognize repeated and paraphrased questions and answer them from a cache. Cut estimated API cost by 39% with a 38% hit rate on 500 benchmark queries, and repeat-query latency from ~50 s to 14 ms.",
    tech: "Python · FastAPI · ChromaDB · sentence-transformers · Docker · Streamlit",
    github: "https://github.com/vpandhare-25/llm-gateway",
    demo: null,
    image: null,
  },
  {
    name: "Apex",
    subtitle: "Low-latency trading engine",
    description:
      "A C++ trading engine with a hybrid order book, smart order routing and a multithreaded market-data pipeline. 1.93× the throughput of a std::map book, p99 latency down from 375 ns to 250 ns, and 268.7M real NASDAQ messages processed 1.73× faster.",
    tech: "C++20 · CMake · GoogleTest · Google Benchmark · Docker",
    github: "https://github.com/vpandhare-25/apex-low-latency-trading-infra",
    demo: null,
    image: null,
  },
  {
    name: "Amazon ReviewGuard",
    subtitle: "Detecting computer-generated reviews",
    description:
      "An XGBoost classifier that flags computer-generated Amazon reviews using 18 engineered linguistic features. 76% accuracy and 0.85 ROC-AUC on a balanced set of 36,000+ reviews, tuned over 768 configurations with 5-fold cross-validation.",
    tech: "Python · XGBoost · scikit-learn · spaCy · Pandas",
    github: "https://github.com/vpandhare-25/Amazon_ReviewGuard",
    demo: null,
    image: null,
  },
];
