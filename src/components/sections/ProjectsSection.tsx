import { Heading } from "@/components/ui/Heading";
import { BodyText } from "@/components/ui/BodyText";

type Project = {
  id: string;
  index: string;
  title: string;
  description: string;
  tags: string[];
  placeholder: string;
};

const projects: Project[] = [
  {
    id: "rpg",
    index: "01",
    title: "RPG Campaign Manager",
    description:
      "Developed a comprehensive web application for managing tabletop RPG campaigns using React, TypeScript, and Firebase, hosted on Vercel.",
    tags: ["React", "TypeScript", "Firebase", "Vercel"],
    placeholder: "RPG",
  },
  {
    id: "league",
    index: "02",
    title: "League of Legends Match Customization & Analytics",
    description:
      "Created a personalized platform for balancing custom matches and tracking player/team statistics. Automated manual processes for team balancing and calculation of win rates and performance metrics.",
    tags: ["React", "Next.js", "Firebase", "Tailwind CSS"],
    placeholder: "LOL",
  },
];

function Tag({ label }: { label: string }) {
  return (
    <span className="text-[10px] tracking-widest uppercase border border-gray-600 px-2 py-0.5 text-gray-300 font-sans">
      {label}
    </span>
  );
}

function ProjectImage({ placeholder }: { placeholder: string }) {
  return (
    <div className="aspect-video border border-ghost-200 flex items-center justify-center">
      <span className="font-serif italic text-muted/30 text-4xl">
        {placeholder}
      </span>
    </div>
  );
}

function ProjectText({ project }: { project: Project }) {
  return (
    <div className="flex flex-col justify-center gap-5 py-4">
      <span className="text-[10px] tracking-[0.3em] uppercase text-gold">
        {project.index}
      </span>
      <Heading as="h3" className="font-serif text-foreground leading-snug">
        {project.title}
      </Heading>
      <BodyText muted className="text-sm leading-relaxed font-sans">
        {project.description}
      </BodyText>
      <div className="flex flex-wrap gap-2 pt-1">
        {project.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="gallery" className="py-24 border-b border-ghost-100">
      <div className="max-w-screen-2xl mx-auto w-full px-8 md:px-12">
        {/* Header */}
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
          Curated Artifacts .001
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-4">
          <h2 className="font-serif text-foreground text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-tight">
            Selected Works
          </h2>
          <div className="flex flex-col gap-1 md:text-right md:pb-2">
            <span className="text-xs tracking-widest uppercase text-muted">
              Loc: Vitória - ES - Brazil
            </span>
            <span className="text-xs tracking-widest uppercase text-muted">
              Role: Front-End Developer
            </span>
            <span className="text-xs tracking-widest uppercase text-muted">
              Spec: React / TS / Next.js
            </span>
          </div>
        </div>

        <BodyText muted className="max-w-lg mb-20 text-sm leading-relaxed">
          An editorial documentation of technical craft, balancing structured
          backends with the fluid artistry of React frontends.
        </BodyText>

        {/* Z-pattern project list */}
        <div className="flex flex-col divide-y divide-ghost-100">
          {projects.map((project, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 items-center"
              >
                {imageLeft ? (
                  <>
                    <ProjectImage placeholder={project.placeholder} />
                    <ProjectText project={project} />
                  </>
                ) : (
                  <>
                    <ProjectText project={project} />
                    <ProjectImage placeholder={project.placeholder} />
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Philosophy block */}
        <div className="grid md:grid-cols-2 gap-16 items-center mt-24 pt-16 border-t border-ghost-100">
          <div className="flex flex-col gap-6">
            <Heading as="h2" className="font-serif italic text-foreground leading-tight">
              The Philosophy of Precision Craft.
            </Heading>
            <BodyText muted className="text-sm leading-relaxed">
              Technical architecture is more than just functional execution; it is
              the curation of logical systems into a cohesive narrative. Every
              line of code, like every typographic choice, contributes to the
              integrity of the whole.
            </BodyText>

            <div className="border border-ghost-200 mt-4">
              <div className="px-4 py-2 border-b border-ghost-200">
                <span className="text-[10px] tracking-widest uppercase text-muted">
                  Archive Status
                </span>
              </div>
              {[
                { key: "Core Systems", value: "Stable" },
                { key: "Experimental Labs", value: "Active" },
                { key: "Version", value: "V.01-2026" },
              ].map((row) => (
                <div
                  key={row.key}
                  className="px-4 py-3 flex justify-between border-b border-ghost-100 last:border-0"
                >
                  <span className="text-xs tracking-wide uppercase text-muted">
                    {row.key}
                  </span>
                  <span className="text-xs tracking-widest uppercase text-foreground">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-video border border-ghost-200 flex items-center justify-center">
            <span className="font-serif italic text-muted/30 text-2xl text-center px-8">
              Precision.<br />Craft.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
