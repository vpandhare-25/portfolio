import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import {
  SiAngular,
  SiCmake,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiFastapi,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNodedotjs,
  SiOpencv,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiSpacy,
  SiStreamlit,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import {
  TbBrandAws,
  TbBrandCSharp,
  TbBrandOpenai,
  TbSql,
} from "react-icons/tb";
import { skills } from "@/content/site";
import SectionHead from "./SectionHead";

// Logo for each skill. A skill only shows if it has a logo here.
const icons: Record<string, IconType> = {
  "C++": SiCplusplus,
  Python: SiPython,
  Java: FaJava,
  "C#": TbBrandCSharp,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  SQL: TbSql,
  HTML: SiHtml5,
  CSS: SiCss,
  React: SiReact,
  Angular: SiAngular,
  "Node.js": SiNodedotjs,
  FastAPI: SiFastapi,
  Streamlit: SiStreamlit,
  PyTorch: SiPytorch,
  "scikit-learn": SiScikitlearn,
  Pandas: SiPandas,
  spaCy: SiSpacy,
  OpenCV: SiOpencv,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  MongoDB: SiMongodb,
  Git: SiGit,
  Docker: SiDocker,
  Linux: SiLinux,
  AWS: TbBrandAws,
  CMake: SiCmake,
  "OpenAI API": TbBrandOpenai,
};

// Skills: three panels (languages, technologies, tools), each a grid of logos with names.
export default function Skills() {
  return (
    <section aria-labelledby="skills" className="mx-auto max-w-[1360px] px-5 pt-24 md:px-10 md:pt-36">
      <SectionHead id="skills" title="Skills" />

      <div className="mt-10 grid gap-6 md:mt-14 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.title}
            className="border-2 border-transparent bg-paper-2 p-6 transition-colors duration-300 hover:border-ink dark:hover:border-signal md:p-8"
          >
            <h3 className="wide border-b border-ink pb-4 text-lg font-extrabold uppercase tracking-[-0.01em]">
              {group.title}
            </h3>
            <ul className="mt-6 grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-4 lg:grid-cols-3">
              {group.items.filter((name) => icons[name]).map((name) => {
                const Icon = icons[name];
                return (
                  <li key={name} className="group flex flex-col items-center gap-2 text-center">
                    <Icon aria-hidden className="size-8 text-ink transition-colors duration-300 group-hover:text-signal" />
                    <span className="text-xs leading-tight text-ink-2">{name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
