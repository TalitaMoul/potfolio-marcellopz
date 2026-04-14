"use client";

import { useState } from "react";
import { Heading } from "@/components/ui/Heading";
import { BodyText } from "@/components/ui/BodyText";
import { Lightbox } from "@/components/ui/Lightbox";

type Project = {
  id: string;
  index: string;
  title: string;
  description: string;
  tags: string[];
  placeholder: string;
  images: string[];
  graphic?: "freelance";
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
    images: [
      "/img/RPGManager/RPGManager-01.png",
      "/img/RPGManager/RPGManager-02.png",
      "/img/RPGManager/RPGManager-03.png",
    ],
  },
  {
    id: "lol",
    index: "02",
    title: "League of Legends Analytics",
    description:
      "Created a personalized platform for balancing custom matches and tracking player/team statistics. Automated manual processes for team balancing and calculation of win rates.",
    tags: ["React", "Next.js", "Firebase", "Tailwind CSS"],
    placeholder: "LOL",
    images: [
      "/img/x5S3/x5S3-01.png",
      "/img/x5S3/x5S3-02.png",
      "/img/x5S3/x5S3-03.png",
      "/img/x5S3/x5S3-04.png",
      "/img/x5S3/x5S3-05.png",
      "/img/x5S3/x5S3-06.png",
      "/img/x5S3/x5S3-07.png",
    ],
  },
  {
    id: "client-solutions",
    index: "03",
    title: "Custom Client Solutions",
    description:
      "Architected and delivered tailored web applications for independent clients. Managed the end-to-end development lifecycle, from gathering complex requirements to deploying scalable, pixel-perfect interfaces that solve specific business needs.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Freelance"],
    placeholder: "Clients",
    images: [],
    graphic: "freelance",
  },
];

function FreelanceGraphic() {
  return (
    <div className="relative aspect-video bg-ghost-100 border border-ghost-200 flex items-center justify-center overflow-hidden">
      {/* Geometric decoration — mirrors About section style */}
      <div className="absolute w-[85%] h-[120%] border border-gold/10 rotate-18" />
      <div className="absolute w-[70%] h-[100%] border border-gold/15 rotate-[-7deg]" />
      <div className="absolute w-[40%] h-[70%] border border-gold/20 rotate-[10deg]" />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-3 select-none">
        <span className="font-serif text-gold text-[3.5rem] leading-none">
          3+
        </span>
        <div className="w-8 h-px bg-gold/40" />
        <div className="flex flex-col items-center gap-1">
          <span className="text-[9px] tracking-[0.35em] uppercase text-muted">
            Independent
          </span>
          <span className="text-[9px] tracking-[0.35em] uppercase text-gold/70">
            Client Projects
          </span>
        </div>
      </div>

      {/* Corner labels */}
      <span className="absolute top-4 left-5 text-[8px] tracking-[0.3em] uppercase text-muted/40">
        Freelance
      </span>
      <span className="absolute bottom-4 right-5 text-[8px] tracking-[0.3em] uppercase text-muted/40">
        2023 – 2025
      </span>
    </div>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="text-[10px] tracking-widest uppercase border border-gray-600 px-2 py-0.5 text-gray-300 font-sans">
      {label}
    </span>
  );
}

function ProjectImage({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const hasImages = project.images.length > 0;

  if (!hasImages && project.graphic === "freelance") {
    return <FreelanceGraphic />;
  }

  return (
    <div
      className={`relative aspect-video bg-ghost-100/10 overflow-hidden ${hasImages ? "cursor-pointer group" : "border border-ghost-200 flex items-center justify-center"}`}
      onClick={hasImages ? onOpen : undefined}
      role={hasImages ? "button" : undefined}
      tabIndex={hasImages ? 0 : undefined}
      onKeyDown={
        hasImages
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") onOpen();
            }
          : undefined
      }
      aria-label={hasImages ? `View gallery for ${project.title}` : undefined}
    >
      {hasImages ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
          />
          <div className="absolute bottom-4 right-4 bg-black/80 text-white text-[10px] px-3 py-1 uppercase tracking-widest border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
            View Gallery ({project.images.length})
          </div>
        </>
      ) : (
        <span className="font-serif italic text-muted/30 text-4xl">
          {project.placeholder}
        </span>
      )}
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
  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  const handleClose = () => setLightbox(null);
  const handleNext = () =>
    setLightbox((prev) =>
      prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null,
    );
  const handlePrev = () =>
    setLightbox((prev) =>
      prev
        ? {
            ...prev,
            index: (prev.index - 1 + prev.images.length) % prev.images.length,
          }
        : null,
    );

  return (
    <section id="archive" className="py-24 border-b border-ghost-100">
      <div className="max-w-screen-2xl mx-auto w-full px-8 md:px-12">
        {/* Section header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              // Manifesto 03. Selected Works
            </p>
            <h2 className="font-serif text-foreground text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-tight">
              Selected Works
            </h2>
            <BodyText muted className="max-w-md mt-6 text-sm leading-relaxed">
              An editorial documentation of technical craft, balancing
              structured backends with the fluid artistry of React frontends.
            </BodyText>
          </div>
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
                    <ProjectImage
                      project={project}
                      onOpen={() =>
                        setLightbox({ images: project.images, index: 0 })
                      }
                    />
                    <ProjectText project={project} />
                  </>
                ) : (
                  <>
                    <ProjectText project={project} />
                    <ProjectImage
                      project={project}
                      onOpen={() =>
                        setLightbox({ images: project.images, index: 0 })
                      }
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          currentIndex={lightbox.index}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
}
