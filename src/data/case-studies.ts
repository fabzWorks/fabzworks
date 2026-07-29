import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "retailflow-inventory-erp",
    industry: "Retail",
    client: "RetailFlow Group",
    title: "Unifying 14 Store Locations Under One Inventory System",
    summary:
      "Replaced spreadsheet-based inventory tracking across 14 retail locations with a real-time multi-branch ERP, cutting stock discrepancies by 92%.",
    cover: "🏬",
    gradient: "from-[#b8862f]/30 to-[#5b6472]/10",
    challenge:
      "RetailFlow's 14 stores each tracked inventory in separate spreadsheets that were manually reconciled at head office once a week. Stock discrepancies were common, transfers between branches were untracked, and management had no real-time view of company-wide inventory.",
    solution:
      "We built a multi-branch ERP module with a shared product catalog, real-time stock levels per location, and an approvals workflow for inter-branch transfers. Store staff use a simplified point-of-sale-linked interface, while head office gets a live company-wide dashboard.",
    results: [
      { label: "Stock discrepancies", value: "-92%" },
      { label: "Weekly reconciliation time", value: "-18 hrs" },
      { label: "Branches unified", value: "14" },
    ],
    services: ["ERP Solutions", "API Integrations"],
  },
  {
    slug: "northbridge-crm-automation",
    industry: "Financial Services",
    client: "Northbridge Advisors",
    title: "Automating Lead Follow-Up for a Growing Advisory Firm",
    summary:
      "Built a custom CRM with automated lead scoring and follow-up sequences, increasing qualified lead conversion by 41%.",
    cover: "📈",
    gradient: "from-[#0f6e93]/30 to-[#5b6472]/10",
    challenge:
      "Northbridge's advisors were manually tracking leads in shared spreadsheets, with no consistent follow-up process. High-value leads were sometimes contacted days late, while low-priority leads consumed disproportionate time.",
    solution:
      "We implemented a custom CRM with automated lead scoring based on engagement signals, triggered follow-up sequences by lead tier, and a unified pipeline view for the whole advisory team, integrated directly with their email system.",
    results: [
      { label: "Qualified lead conversion", value: "+41%" },
      { label: "Average first response time", value: "-76%" },
      { label: "Advisor hours saved / week", value: "22" },
    ],
    services: ["CRM Platforms", "Automation"],
  },
  {
    slug: "cargoline-logistics-app",
    industry: "Logistics",
    client: "CargoLine Express",
    title: "A Driver App That Cut Delivery Confirmation Time in Half",
    summary:
      "Designed and built a cross-platform driver app with real-time tracking and proof-of-delivery, halving delivery confirmation turnaround.",
    cover: "🚚",
    gradient: "from-[#0d7a5f]/30 to-[#5b6472]/10",
    challenge:
      "CargoLine's drivers relied on phone calls and paper delivery slips to confirm completed deliveries, causing delays in invoicing and frequent disputes over delivery status.",
    solution:
      "We built a cross-platform mobile app for drivers with real-time GPS tracking, digital proof-of-delivery (photo and signature capture), and instant sync back to the dispatch dashboard, removing paper from the process entirely.",
    results: [
      { label: "Delivery confirmation time", value: "-52%" },
      { label: "Delivery disputes", value: "-67%" },
      { label: "Drivers onboarded", value: "180+" },
    ],
    services: ["Mobile App Development", "API Integrations"],
  },
  {
    slug: "brightdesk-support-ai",
    industry: "SaaS",
    client: "BrightDesk",
    title: "An AI Support Assistant That Resolved 38% of Tickets Without a Human",
    summary:
      "Deployed a support chat assistant trained on BrightDesk's documentation, resolving over a third of incoming tickets automatically.",
    cover: "💬",
    gradient: "from-[#b6532f]/30 to-[#5b6472]/10",
    challenge:
      "BrightDesk's support team was overwhelmed by repetitive tickets, password resets, billing questions, basic setup issues, that consumed hours better spent on complex customer problems.",
    solution:
      "We built a chat assistant grounded in BrightDesk's own documentation and ticket history, deployed first internally for the support team, then rolled out to customers with clear escalation to a human agent whenever confidence was low.",
    results: [
      { label: "Tickets resolved automatically", value: "38%" },
      { label: "Average response time", value: "-81%" },
      { label: "Support team hours saved / month", value: "160" },
    ],
    services: ["AI Solutions", "Custom Software Development"],
  },
  {
    slug: "harvestpoint-farm-management",
    industry: "Agriculture",
    client: "HarvestPoint Co-operative",
    title: "Replacing Paper Field Logs With a Digital Farm Management Platform",
    summary:
      "Custom software connecting 60+ member farms to shared crop planning, yield tracking, and reporting, replacing entirely paper-based records.",
    cover: "🌾",
    gradient: "from-[#0f6e93]/30 to-[#0d7a5f]/10",
    challenge:
      "HarvestPoint's 60+ member farms tracked planting schedules, yields, and input usage entirely on paper, making co-operative-wide reporting and planning nearly impossible.",
    solution:
      "We designed a custom platform for field data entry (usable on low-connectivity mobile devices), automatic yield and input tracking, and co-operative-wide reporting dashboards, with offline-first sync for areas with unreliable internet.",
    results: [
      { label: "Farms digitized", value: "60+" },
      { label: "Reporting time (season-end)", value: "-85%" },
      { label: "Data entry errors", value: "-70%" },
    ],
    services: ["Custom Software Development", "Mobile App Development"],
  },
];
