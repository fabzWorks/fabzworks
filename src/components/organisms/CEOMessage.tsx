"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Container from "@/components/atoms/Container";
import Badge from "@/components/atoms/Badge";
import Bi from "@/components/atoms/Bi";
import { team } from "@/data/team";
import { ui } from "@/lib/i18n";

const ceoQuote = {
  en: "\u201cWe started FabzWorks because too much business software gets built backwards \u2014 shaped by what's easy to sell, not by how a team actually gets work done. Every project we take on starts with a simple question: what would make this person's Monday morning easier? That question has shaped every ERP, every AI feature, and every line of code we've shipped. We're proud of the systems we've built, but we're prouder that people still enjoy using them a year later.\u201d",
  ur: "\u201cہم نے فیبز ورکس اس لیے شروع کیا کیونکہ زیادہ تر بزنس سافٹ ویئر الٹے انداز میں بنایا جاتا ہے — اس بنیاد پر جو بیچنا آسان ہو، نہ کہ اس بنیاد پر کہ ٹیم واقعی کام کیسے کرتی ہے۔ ہمارا ہر منصوبہ ایک سادہ سوال سے شروع ہوتا ہے: اس شخص کی پیر کی صبح کو آسان کیا بنائے گا؟ اسی سوال نے ہمارے ہر ای آر پی، ہر اے آئی فیچر اور ہر لائن کوڈ کو تشکیل دیا ہے۔ ہمیں اپنے بنائے ہوئے نظاموں پر فخر ہے، لیکن اس بات پر زیادہ فخر ہے کہ لوگ ایک سال بعد بھی انہیں استعمال کرنا پسند کرتے ہیں۔\u201d",
};

export default function CEOMessage() {
  const ceo = team[0];
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <Badge className="mx-auto mb-5 w-fit">
              <Bi t={ui.ceoMessageEyebrow} />
            </Badge>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="card-surface relative overflow-hidden rounded-3xl border p-8 sm:p-12"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
              style={{ background: "var(--accent)" }}
            />
            <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-[auto_1fr] sm:items-start">
              <div className="flex flex-col items-center sm:items-start">
                <div className="h-24 w-24 overflow-hidden rounded-3xl shadow-xl ring-1 ring-[var(--border)] sm:h-28 sm:w-28">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ceo.photo} alt={ceo.name} className="h-full w-full object-cover" />
                </div>
                <p className="mt-4 text-center text-sm font-semibold text-[var(--text)] sm:text-left rtl:sm:text-right">
                  {ceo.name}
                </p>
                <p className="text-center text-xs text-[var(--accent)] sm:text-left rtl:sm:text-right">
                  <Bi t={ceo.role} />
                </p>
              </div>
              <div>
                <Quote size={32} className="text-[var(--accent)]" />
                <p className="mt-4 text-balance text-lg leading-relaxed text-[var(--text)] sm:text-xl">
                  <Bi t={ceoQuote} />
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
