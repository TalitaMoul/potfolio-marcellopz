import { Button } from "@/components/ui/Button";
import { BodyText } from "@/components/ui/BodyText";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-20 pb-16 border-b border-ghost-100"
    >
      <div className="max-w-screen-2xl mx-auto w-full px-8 md:px-12">
        {/* Label */}
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-8">
          // Manifesto 01. Index
        </p>

        {/* Name + metadata grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Left: Name */}
          <div>
            <h1 className="font-serif italic text-foreground leading-none text-[clamp(3rem,8vw,7rem)] tracking-tight">
              Marcello Pimentel
            </h1>
            <h1 className="font-serif text-gold leading-none text-[clamp(3rem,8vw,7rem)] tracking-tight">
              Zanandrea
            </h1>
          </div>

          {/* Right: metadata */}
          <div className="flex flex-col gap-1 md:text-right md:pb-2">
            {[
              "Front-End Developer",
              "React & TypeScript",
              "Vitória - ES - Brazil",
              "Remote / Global",
            ].map((item) => (
              <span
                key={item}
                className="text-xs tracking-widest uppercase text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-ghost-200 my-10" />

        {/* Tagline + CTAs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <BodyText className="max-w-lg text-muted text-base leading-relaxed">
            Building meaningful user experiences through architectural code and
            visual precision.
          </BodyText>

          <div className="flex items-center gap-4">
            <a href="#gallery">
              <Button variant="ghost" className="border-gold text-gold hover:brightness-110">Explore Archive</Button>
            </a>
            <a href="#contact">
              <Button variant="ghost">Get in Touch</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
