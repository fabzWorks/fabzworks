import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Container from "@/components/atoms/Container";
import PageHero from "@/components/molecules/PageHero";
import ContactForm from "@/components/organisms/ContactForm";
import { contactDetails } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with FabzWorks about your next project.",
};

const infoItems = [
  { icon: Mail, label: "Email us", value: contactDetails.email, href: `mailto:${contactDetails.email}` },
  { icon: Phone, label: "Call us", value: contactDetails.phone, href: `tel:${contactDetails.phone}` },
  { icon: MapPin, label: "Visit us", value: contactDetails.address },
  { icon: Clock, label: "Office hours", value: contactDetails.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Tell us what's slowing your team down, we'll come back with a clear, honest plan."
      />
      <section className="py-14 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="card-surface flex items-start gap-4 rounded-2xl border p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                  <item.icon size={17} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-faint)]">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium text-[var(--text)] hover:text-[var(--accent)]">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-[var(--text)]">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <ContactForm />
        </Container>
      </section>
    </>
  );
}
