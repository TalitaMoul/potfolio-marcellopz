import { Heading } from "@/components/ui/Heading";
import { BodyText } from "@/components/ui/BodyText";

type ExperienceEntry = {
  index: string;
  company: string;
  period: string;
  role: string;
  context: string;
  description: string;
  tags: string[];
  logo?: string;
  logoAlt?: string;
  logoHeight?: string;
  featured?: string;
};

const experiences: ExperienceEntry[] = [
  {
    index: "01",
    company: "BASK Health",
    period: "DEC 2025 – PRESENT",
    role: "Software Engineer (Mid Level)",
    context: "HEALTHCARE · STARTUP",
    description:
      "Engineered end-to-end type-safe front-end features for core administration tools using Next.js and tRPC, accelerating continuous release cycles in a fast-paced startup environment. Designed and deployed intuitive interfaces for the Customer Success and Admin portals with high autonomy.",
    tags: ["Next.js", "tRPC", "TypeScript"],
    logo: "/img/ExpLogo/logo-bask.svg",
    logoAlt: "BASK Health",
    logoHeight: "h-8", // <-- Ajustado para h-8
  },
  {
    index: "02",
    company: "FullStack Labs",
    period: "MAY 2025 – DEC 2025",
    role: "Software Engineer (Mid Level)",
    context: "CLIENTS: FLOQAST · MGM RESORTS",
    description:
      "Engineered accessible, themeable React components using Styled Components for FloQast; contributed to the modernization of design systems across dozens of repositories. Partnered with a cross-functional team to deliver high-quality web experiences for MGM Resorts.",
    tags: ["React", "Styled Components", "Next.js", "Design Systems"],
    logo: "/img/ExpLogo/logo-fullstack-labs.svg",
    logoAlt: "FullStack Labs",
    logoHeight: "h-5.5", // <-- Ajustado para h-5
    featured: "MGM Resorts",
  },
  {
    index: "03",
    company: "senhasegura",
    period: "FEB 2022 – DEC 2024",
    role: "React Developer (Pleno/Mid-Level)",
    context: "IDENTITY & ACCESS MANAGEMENT",
    description:
      "Drove the front-end development of a cloud identity management platform using React and TypeScript. Directed the full-scale migration of a primary application from JavaScript to TypeScript, refactoring 150+ files to boost developer velocity.",
    tags: ["React", "TypeScript", "Cloud Architecture"],
    logo: "/img/ExpLogo/logo-senhasegura.svg",
    logoAlt: "senhasegura",
    logoHeight: "h-12", // <-- Adicionado h-12
  },
  {
    index: "04",
    company: "senhasegura",
    period: "JUN 2021 – FEB 2022",
    role: "PHP Back-End Intern",
    context: "BACKEND · INTERNSHIP",
    description:
      "Gained foundational backend experience contributing to projects using PHP and the Symfony framework.",
    tags: ["PHP", "Symfony", "Backend"],
    logo: "/img/ExpLogo/logo-senhasegura.svg",
    logoAlt: "senhasegura",
    logoHeight: "h-12", // <-- Adicionado h-12
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-b border-ghost-100">
      <div className="max-w-screen-2xl mx-auto w-full px-8 md:px-12">
        {/* Section header */}
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-20">
          // Manifesto 02. Experience
        </p>

        {/* Experience entries */}
        <div className="flex flex-col gap-24">
          {experiences.map((exp) => (
            <div
              key={exp.index}
              className="grid md:grid-cols-[2fr_5fr] gap-8 items-start"
            >
              {/* Left: company info */}
              <div className="flex flex-col gap-3">
                <span className="text-[4rem] leading-none font-serif text-ghost-200 select-none">
                  {exp.index}
                </span>
                {exp.logo ? (
                  <div className="flex items-center justify-start">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={exp.logo}
                      alt={exp.logoAlt ?? exp.company}
                      className={`${exp.logoHeight ?? "h-8"} w-auto object-contain object-left`}
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>
                ) : (
                  <Heading as="h3" className="font-serif text-foreground">
                    {exp.company}
                  </Heading>
                )}
                <span className="text-xs tracking-widest uppercase text-gold">
                  {exp.period}
                </span>
              </div>

              {/* Right: role details */}
              <div className="flex flex-col gap-5">
                <Heading
                  as="h3"
                  className="font-serif text-foreground leading-snug"
                >
                  {exp.role}
                </Heading>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs tracking-widest uppercase text-muted">
                    {exp.context}
                  </span>
                  {exp.featured && (
                    <span className="text-[10px] tracking-widest uppercase border border-gold/50 text-gold px-2 py-0.5">
                      {exp.featured}
                    </span>
                  )}
                </div>
                <BodyText muted className="text-sm leading-relaxed">
                  {exp.description}
                </BodyText>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-widest uppercase border border-gray-600 px-2 py-0.5 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
