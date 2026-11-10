// All of the site's text lives in this one file.
// To update the portfolio, edit the values below. The components read from here.
//
// Images: put files in public/images/ and set the matching field to "/images/<file>".
// Anything left as null shows a labeled placeholder until you add the real photo.

export const profile = {
  firstName: "Vivek",
  lastName: "Pandhare",
  kicker: "Computer Science · Michigan State University",
  intro:
    "I'm a Computer Science student at Michigan State University interested in building reliable software, solving complex engineering problems, and understanding how systems work under the hood. I enjoy working across backend development, systems programming, and applied AI, and I'm always looking for opportunities to learn and build things that have a real impact.",
  // Your photo: public/images/portrait.jpg -> "/images/portrait.jpg"
  portrait: null as string | null,
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
  description: string;
};

export const experience: Experience[] = [
  {
    company: "Enginuity Workspace",
    role: "Software Engineering Intern",
    description:
      "Worked on the backend of an AI tutoring platform, implementing REST APIs with Node.js and PostgreSQL, improving document ingestion pipelines, and resolving application bugs affecting user signups and performance.",
  },
  {
    company: "Pfizer",
    role: "Artificial Intelligence Engineering Extern",
    description:
      "Worked on document intelligence workflows, developing Python-based OCR and document extraction pipelines for pharmaceutical PDFs. Benchmarked OCR engines and explored semantic search using LlamaIndex and vector databases.",
  },
];

export type Organization = {
  name: string;
  role: string;
  description: string;
  // e.g. "/images/orgs/imagine-software.jpg"
  image: string | null;
  imageAlt: string;
};

export const organizations: Organization[] = [
  {
    name: "Imagine Software",
    role: "Project Member",
    description:
      "Contributed to software development projects, collaborating with other members to build and improve applications.",
    image: null,
    imageAlt: "Imagine Software project team",
  },
  {
    name: "MSU AI Club",
    role: "Advanced Project Member",
    description:
      "Selected as one of two new members for an advanced project team, contributing to technical work involving AI and data-driven applications.",
    image: null,
    imageAlt: "MSU AI Club advanced project team",
  },
  {
    name: "Spartan Virasat",
    role: "Team Member / Tech Chair",
    description:
      "Michigan State's cultural dance team, where I combine technical responsibilities with team activities and performances.",
    image: null,
    imageAlt: "Spartan Virasat dance team",
  },
];

export type Project = {
  name: string;
  subtitle: string;
  description: string;
  // The headline numbers, shown large.
  metrics: { value: string; label: string }[];
  // Anything else worth a line.
  also: string;
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
    metrics: [
      { value: "39%", label: "lower estimated API cost" },
      { value: "38%", label: "cache-hit rate over 500 benchmark queries" },
      { value: "50 s → 14 ms", label: "repeat-query latency" },
    ],
    also: "Cache expiration, privacy filters, a Streamlit dashboard and Docker Compose deployment.",
    tech: ["Python", "FastAPI", "ChromaDB", "sentence-transformers", "Docker", "Streamlit"],
    github: "https://github.com/vpandhare-25/llm-gateway",
    demo: null,
  },
  {
    name: "Apex",
    subtitle: "Low-latency trading engine",
    description:
      "A performance-focused trading engine featuring a hybrid order book, smart order routing, and multithreaded market data processing.",
    metrics: [
      { value: "1.93×", label: "throughput vs a std::map order book" },
      { value: "375 → 250 ns", label: "p99 update latency" },
      { value: "268.7M", label: "NASDAQ ITCH messages processed" },
    ],
    also: "1.73× end-to-end speedup from profiling and a multithreaded pipeline.",
    tech: ["C++20", "CMake", "GoogleTest", "Google Benchmark", "Docker"],
    github: "https://github.com/vpandhare-25/apex-low-latency-trading-infra",
    demo: null,
  },
  {
    name: "Amazon ReviewGuard",
    subtitle: "Detecting computer-generated reviews",
    description:
      "A machine learning classifier designed to identify computer-generated Amazon reviews using linguistic and review-level features.",
    metrics: [
      { value: "76%", label: "classification accuracy" },
      { value: "0.85", label: "ROC-AUC" },
      { value: "36K+", label: "reviews in a balanced dataset" },
    ],
    also: "18 features engineered with Pandas and spaCy; tuned with 5-fold cross-validation over 768 configurations.",
    tech: ["Python", "XGBoost", "scikit-learn", "spaCy", "Pandas", "Joblib"],
    github: "https://github.com/vpandhare-25/Amazon_ReviewGuard",
    demo: null,
  },
];
