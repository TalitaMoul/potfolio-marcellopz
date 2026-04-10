import { Heading } from "@/components/ui/Heading";
import { BodyText } from "@/components/ui/BodyText";
import { ContactForm } from "@/components/contact/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-screen-2xl mx-auto w-full px-8 md:px-12">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
          // Manifesto 03. Contact
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div className="flex flex-col gap-6">
            <Heading as="h2" className="font-serif text-foreground leading-tight">
              Let&apos;s Build
              <br />
              <span className="text-gold italic">Something Precise.</span>
            </Heading>
            <BodyText muted className="text-sm leading-relaxed max-w-sm">
              Interested in collaborating on a product, a design system, or a
              challenging engineering problem? Reach out — I read every message.
            </BodyText>

            <div className="border-t border-ghost-100 pt-6 flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] tracking-widest uppercase text-muted">
                  Location
                </span>
                <span className="text-sm text-foreground">Vitória, ES — Remote</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] tracking-widest uppercase text-muted">
                  Availability
                </span>
                <span className="text-sm text-foreground">
                  Open to new opportunities
                </span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
