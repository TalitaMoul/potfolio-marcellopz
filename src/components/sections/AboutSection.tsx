import { Heading } from "@/components/ui/Heading";
import { BodyText } from "@/components/ui/BodyText";
import { Button } from "@/components/ui/Button";

const expertiseStack = [
  "React & Next.js",
  "TypeScript",
  "TanStack Query",
  "tRPC",
  "AWS Certified",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 border-b border-ghost-100">
      <div className="max-w-screen-2xl mx-auto w-full px-8 md:px-12">
        {/* Section title */}
        <h2 className="font-serif text-gold mb-20 text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
          About Me
        </h2>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-[1fr_1fr] gap-16 items-center">
          {/* Left: geometric monogram card */}
          <div className="relative aspect-square bg-ghost-100 border border-ghost-200 flex items-center justify-center overflow-hidden">
            <div className="absolute w-[65%] h-[65%] border border-gold/15 rotate-18" />
            <div className="absolute w-[50%] h-[50%] border border-gold/20 rotate-[-7deg]" />
            <div className="absolute w-[35%] h-[35%] border border-gold/25 rotate-[5deg]" />
            <span className="font-serif italic text-gold text-[5rem] leading-none select-none relative z-10">
              MZ
            </span>
          </div>

          {/* Right: content */}
          <div className="flex flex-col gap-6">
            <Heading as="h3" className="font-serif italic text-foreground">
              Crafting Digital Experiences
            </Heading>

            <BodyText>
              I&apos;m Marcello — a{" "}
              <span className="text-gold font-medium">
                Mid-Level Software Engineer
              </span>{" "}
              with 5 years of experience specializing in React, TypeScript, and Next.js. Proven track record delivering high-quality front-end features for complex internal platforms and large-scale{" "}
              <span className="text-gold font-medium">
                design systems
              </span>
              . Leveraging an Electrical Engineering background to bring a disciplined, analytical approach to building performant and scalable user experiences.
            </BodyText>

            <div className="w-full h-px bg-ghost-200" />

            <div className="flex flex-col gap-3">
              <span className="text-xs tracking-[0.3em] uppercase text-muted">
                Expertise Stack:
              </span>
              <p className="text-sm text-foreground tracking-wide">
                {expertiseStack.join(" / ")}
              </p>
            </div>

            <a href="#contact" className="mt-2 cursor-pointer">
              <Button variant="ghost">
                Let&apos;s Collaborate &rarr;
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
