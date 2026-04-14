import { Heading } from "@/components/ui/Heading";
import { BodyText } from "@/components/ui/BodyText";

type TechGroup = {
  label: string;
  items: string[];
};

const techGroups: TechGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Python", "PHP (Basic)"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["React.js", "Next.js", "Redux", "Zustand", "TanStack Query", "tRPC", "RTL", "Node.js", "Tailwind CSS"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git", "GitLab", "AWS (Solutions Architect)", "Firebase", "Vercel", "Jira", "Figma"],
  },
];

export function TechnologiesSection() {
  return (
    <section id="technologies" className="py-24 border-b border-ghost-100">
      <div className="max-w-screen-2xl mx-auto w-full px-8 md:px-12">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
          // Stack
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <Heading as="h2" className="font-serif text-foreground">
            Technologies
          </Heading>
          <BodyText muted className="max-w-sm text-sm">
            The instruments behind the craft — chosen for precision and
            scalability.
          </BodyText>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-ghost-200">
          {techGroups.map((group, i) => (
            <div
              key={group.label}
              className={`p-8 flex flex-col gap-6 ${i < techGroups.length - 1 ? "border-b md:border-b-0 md:border-r border-ghost-200" : ""}`}
            >
              <span className="text-xs tracking-widest uppercase text-gold">
                {group.label}
              </span>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-px h-4 bg-gold/40 shrink-0" />
                    <span className="text-sm text-foreground tracking-wide">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
