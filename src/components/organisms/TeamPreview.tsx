"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import SectionHeading from "@/components/atoms/SectionHeading";
import Bi from "@/components/atoms/Bi";
import { LinkButton } from "@/components/atoms/Button";
import { team } from "@/data/team";
import { ui } from "@/lib/i18n";

export default function TeamPreview() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--bg-elevated)] border-y border-[var(--border)]">
      <Container>
        <SectionHeading
          eyebrow={<Bi t={ui.teamEyebrow} />}
          title={<Bi t={ui.teamHomeTitle} />}
          description={<Bi t={ui.teamHomeDesc} />}
        />
        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {team.map((m, i) => (
            <motion.div
              key={m.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
            >
              <Link href={`/team/${m.slug}`} className="group block text-center">
                <div className="mx-auto h-20 w-20 overflow-hidden rounded-2xl shadow-lg ring-1 ring-[var(--border)] transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-24">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt={m.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <p className="mt-3 text-sm font-semibold text-[var(--text)]">{m.name}</p>
                <p className="text-xs text-[var(--text-faint)]">
                  <Bi t={m.role} />
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <LinkButton href="/team" variant="outline" size="md">
            <Bi t={ui.meetFullTeam} />
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
