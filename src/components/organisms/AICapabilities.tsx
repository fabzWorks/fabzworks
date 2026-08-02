"use client";

import { motion } from "framer-motion";
import { MessageSquareText, FileSearch, TrendingUp, Workflow } from "lucide-react";
import Container from "@/components/atoms/Container";
import SectionHeading from "@/components/atoms/SectionHeading";
import Bi from "@/components/atoms/Bi";
import { ui } from "@/lib/i18n";

const capabilities = [
  {
    icon: MessageSquareText,
    title: { en: "Conversational AI", ur: "گفتگو پر مبنی اے آئی" },
    desc: {
      en: "Chat assistants grounded in your own data, deployed internally first, then to customers.",
      ur: "آپ کے اپنے ڈیٹا پر مبنی چیٹ اسسٹنٹس، پہلے اندرونی طور پر پھر کسٹمرز کے لیے۔",
    },
  },
  {
    icon: FileSearch,
    title: { en: "Document Intelligence", ur: "دستاویزی ذہانت" },
    desc: {
      en: "Extract structured data from invoices, forms, and receipts with measurable accuracy.",
      ur: "قابلِ پیمائش درستگی کے ساتھ انوائسز اور فارمز سے منظم ڈیٹا نکالنا۔",
    },
  },
  {
    icon: TrendingUp,
    title: { en: "Predictive Analytics", ur: "پیش گوئی تجزیات" },
    desc: {
      en: "Forecast demand, churn, or staffing needs from your historical data.",
      ur: "آپ کے تاریخی ڈیٹا سے طلب، کسٹمر چھوڑنے یا عملے کی ضرورت کی پیش گوئی۔",
    },
  },
  {
    icon: Workflow,
    title: { en: "Intelligent Automation", ur: "ذہین آٹومیشن" },
    desc: {
      en: "Agentic workflows that handle multi-step tasks with clear human checkpoints.",
      ur: "ایسے ورک فلو جو کئی مراحل پر مشتمل کام واضح انسانی نگرانی کے ساتھ سنبھالتے ہیں۔",
    },
  },
];

const nodes = [
  { x: 60, y: 60 }, { x: 200, y: 30 }, { x: 340, y: 70 },
  { x: 60, y: 160 }, { x: 200, y: 130 }, { x: 340, y: 170 },
  { x: 130, y: 220 }, { x: 270, y: 230 },
];
const edges: [number, number][] = [
  [0, 1], [1, 2], [0, 3], [1, 4], [2, 5], [3, 4], [4, 5], [3, 6], [4, 6], [4, 7], [5, 7], [6, 7],
];

function NeuralVisual() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-md">
      <svg viewBox="0 0 400 280" className="h-full w-full">
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="var(--accent)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.35 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.06 }}
          />
        ))}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={i === 4 ? 9 : 6}
            fill="var(--accent)"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
          >
            <animate
              attributeName="opacity"
              values="0.6;1;0.6"
              dur={`${2.2 + (i % 3) * 0.5}s`}
              repeatCount="indefinite"
            />
          </motion.circle>
        ))}
      </svg>
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--accent)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
    </div>
  );
}

export default function AICapabilities() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-[var(--bg-elevated)] border-y border-[var(--border)]">
      <Container>
        <SectionHeading
          eyebrow={<Bi t={ui.aiCapabilitiesEyebrow} />}
          title={<Bi t={ui.aiCapabilitiesTitle} />}
          description={<Bi t={ui.aiCapabilitiesDesc} />}
        />
      </Container>

      <Container className="mt-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <NeuralVisual />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title.en}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-surface rounded-2xl border p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                  <c.icon size={18} />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-[var(--text)]">
                  <Bi t={c.title} />
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--text-muted)]">
                  <Bi t={c.desc} />
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
