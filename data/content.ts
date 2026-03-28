// ─── Site Metadata ────────────────────────────────────────────────────────────
export const siteConfig = {
  name: "Gayathri Sanyasi",
  title: "B2B Sales Account Manager",
  tagline: "I drive measurable revenue growth through strategic account management.",
  description:
    "Specializing in enterprise technology and hospitality sectors, transforming complex client relationships into long-term strategic partnerships.",
  email: "gayathri@example.com",
  linkedin: "https://linkedin.com/in/gayathrisanyasi",
  cvUrl: "#",
};

// ─── Hero Metrics ─────────────────────────────────────────────────────────────
export const heroMetrics = [
  { value: "$3.03M", label: "Revenue Delivered", color: "text-primary" },
  { value: "105%", label: "Quota Achievement", color: "text-secondary" },
  { value: "60+", label: "Accounts Managed", color: "text-tertiary-container" },
];

// ─── Quick Proof Bar ──────────────────────────────────────────────────────────
export const proofPoints = [
  {
    icon: "workspace_premium",
    title: "ISR of the Quarter (2x)",
    subtitle: "Performance Excellence",
    bg: "bg-primary-fixed",
    iconColor: "text-primary",
  },
  {
    icon: "trending_up",
    title: "150% Adoption Growth",
    subtitle: "Client Success Metric",
    bg: "bg-secondary-fixed",
    iconColor: "text-secondary",
  },
  {
    icon: "security_update_good",
    title: "90% Reduction in Escalations",
    subtitle: "Operational Efficiency",
    bg: "bg-tertiary-fixed",
    iconColor: "text-tertiary-container",
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const experiences = [
  {
    company: "Dell Technologies",
    role: "Inside Sales Representative",
    period: "2021 – PRESENT",
    highlights: [
      "Delivered $3.03M in incremental revenue across a portfolio of 45+ enterprise accounts.",
      "Maintained 105% quota achievement through proactive whitespace analysis.",
      "Orchestrated multi-level stakeholder alignment for hybrid-cloud infrastructure deployments.",
    ],
  },
  {
    company: "Hyatt Place",
    role: "Sales & Account Coordinator",
    period: "2018 – 2021",
    highlights: [
      "Increased corporate account occupancy by 22% YoY through strategic prospecting.",
      "Negotiated high-value group contracts totaling $1.2M in annual recurring value.",
      "Reduced contract turnaround time by 35% through CRM optimization.",
    ],
  },
];

// ─── Case Studies ─────────────────────────────────────────────────────────────
export const caseStudies = [
  {
    slug: "enterprise-storage-upsell",
    badge: "+150%",
    badgeColor: "text-primary",
    title: "Enterprise Storage Upsell",
    summary:
      "Navigated a stagnant account by identifying storage bottlenecks and proposing a phased migration strategy that doubled the account value in 6 months.",
    tags: ["Enterprise", "Storage", "Upsell"],
    featured: true,
    metrics: [
      { label: "Revenue Growth", value: "+150%" },
      { label: "Timeline", value: "6 Months" },
      { label: "Strategy", value: "Account Based" },
    ],
    challenge:
      "The client faced a significant stagnation in North American market penetration. Despite having a market-leading product, the sales cycle had ballooned to 18 months, and competitive churn was at an all-time high of 12%. Key obstacles identified during the initial audit included fractured communication between lead generation and account management, lack of structured value-proposition alignment for C-suite decision-makers, and inefficient CRM utilization leading to a 35% ghosting rate on qualified leads.",
    strategy:
      "Implemented a high-touch engagement model mapping account owners to specific stakeholder personas. Deployed automated intent-data monitoring to trigger outreach at peak buyer readiness. Transitioned the team to an Account-Based Excellence (ABE) framework, developing bespoke Value Blueprints for every target account exceeding $500k ARR potential. Focused on the Consultative Close rather than feature-led selling.",
    outcome:
      "Delivered $3.03M in total revenue with a 45% sales cycle reduction and zero competitive churn. Achieved 240% of target.",
    learnings: [
      "Empathy Over Efficiency: Scaling sales isn't just about more calls; it's about the depth of the relationship before the first pitch.",
      "Data-Led Agility: Real-time CRM feedback loops allowed us to pivot our messaging strategy weekly based on market sentiment.",
    ],
    quote: "Gayathri transformed our entire sales methodology from tactical to highly strategic in under two quarters.",
    quoteAuthor: "VP of Revenue, Fortune 500 Tech Client",
    totalRevenue: "$3.03M",
    cycleReduction: "45%",
    churn: "0%",
    teamSize: "12 Specialists",
    timeline: "14 Months",
  },
  {
    slug: "contract-stabilization",
    badge: "98%",
    badgeColor: "text-secondary",
    title: "Contract Stabilization",
    summary:
      "Secured a 3-year renewal for a critical public sector account by streamlining service-level agreement reporting.",
    tags: ["Public Sector", "Renewal", "SLA"],
    featured: false,
    metrics: [
      { label: "Retention Rate", value: "98%" },
      { label: "Contract Value", value: "$1.2M" },
      { label: "Duration", value: "3 Years" },
    ],
    challenge:
      "A critical public sector account was at risk of churning due to ongoing service-level agreement disputes and lack of executive visibility into performance metrics.",
    strategy:
      "Implemented a structured SLA reporting framework with weekly executive briefings, co-created performance scorecards, and established a direct escalation channel to senior leadership.",
    outcome: "Achieved a 3-year contract renewal worth $1.2M with a 98% retention rate.",
    learnings: [
      "Transparency builds trust faster than any product feature.",
      "Executive alignment is the most underrated retention tool.",
    ],
    quote: "Our account team finally feels like a true strategic partner, not just a vendor.",
    quoteAuthor: "Director of Operations, Public Sector Client",
    totalRevenue: "$1.2M",
    cycleReduction: "30%",
    churn: "2%",
    teamSize: "5 Specialists",
    timeline: "8 Months",
  },
  {
    slug: "crm-pipeline-hygiene",
    badge: "12%",
    badgeColor: "text-tertiary-container",
    title: "CRM Pipeline Hygiene",
    summary:
      "Led a cross-functional initiative to clean up 200+ stale leads, resulting in a 12% increase in sales velocity.",
    tags: ["CRM", "Pipeline", "Operations"],
    featured: false,
    metrics: [
      { label: "Sales Velocity Increase", value: "+12%" },
      { label: "Leads Cleaned", value: "200+" },
      { label: "Cross-Sell Wins", value: "$450K" },
    ],
    challenge:
      "A bloated CRM with 200+ stale and unqualified leads was creating noise, slowing pipeline reviews, and obscuring genuine opportunities.",
    strategy:
      "Deployed a structured lead audit framework using Salesforce reports. Established a weekly pipeline hygiene ritual across the team and introduced Gainsight health scores as a triage mechanism.",
    outcome:
      "Achieved 12% increase in sales velocity, $450K in cross-sell wins, and improved forecast accuracy by 28%.",
    learnings: [
      "Clean data is a competitive advantage. Most teams ignore it.",
      "Systematic pipeline hygiene unlocks revenue that's already in the funnel.",
    ],
    quote: "The clarity we got from Gayathri's CRM overhaul changed how we forecast entirely.",
    quoteAuthor: "Sales Operations Manager",
    totalRevenue: "$450K",
    cycleReduction: "20%",
    churn: "5%",
    teamSize: "8 Specialists",
    timeline: "3 Months",
  },
];

// ─── Strategies ───────────────────────────────────────────────────────────────
export const strategies = [
  {
    icon: "plumbing",
    title: "Pipeline Building",
    description:
      "Using data-driven whitespace analysis to identify untapped opportunities within existing accounts and creating targeted expansion playbooks.",
  },
  {
    icon: "person_celebrate",
    title: "Client Retention",
    description:
      "Building Executive Sponsorship programs that elevate the relationship from vendor to trusted advisor, ensuring near-zero churn.",
  },
  {
    icon: "expansion_panels",
    title: "Solution Expansion",
    description:
      "Simplifying complex technology stacks for business stakeholders to accelerate the adoption of new features and cross-selling business units.",
  },
];

// ─── Skills / Tools ───────────────────────────────────────────────────────────
export const toolCategories = [
  {
    category: "Sales & CRM",
    tools: ["Salesforce CRM", "Gainsight", "Outreach.io", "ZoomInfo"],
  },
  {
    category: "Analytics & Productivity",
    tools: ["Tableau", "Microsoft Excel (Expert)", "PowerBI", "SQL Basics"],
  },
];

// ─── Leadership ───────────────────────────────────────────────────────────────
export const leadershipRoles = [
  {
    icon: "military_tech",
    title: "Vice President",
    subtitle: "Strategic Oversight & Corporate Governance",
    tag: "Strategic Operations & Scaling",
    highlights: [
      "Spearheaded cross-functional teams to optimize departmental workflows and increase enterprise throughput by 25%.",
      "Implemented a standardized reporting framework adopted across 4 regional branches.",
      "Chaired the executive committee for quarterly performance reviews and strategic pivoting.",
    ],
  },
  {
    icon: "corporate_fare",
    title: "Foundation Internship Excellence",
    subtitle: "Enterprise Tech Corp",
    tag: "6 Months Intensive",
    highlights: [
      "Early career immersion in high-growth environments, focusing on account management and client-facing deliverables.",
    ],
  },
];

export const judgeExperience = {
  title: "Advisory & Jury Industry Judge",
  description:
    "Evaluating excellence across tech innovation summits and regional entrepreneurship competitions.",
  events: ["StartUp Pitch 2023", "Innovation Awards"],
  eventsJudged: "15+",
};

export const keyEvents = [
  {
    number: "01",
    title: "Annual Tech Leadership Summit",
    description: "Coordinated logistics for 500+ attendees and international speakers.",
  },
  {
    number: "02",
    title: "B2B Networking Series",
    description: "Conceptualized a monthly engagement model for key accounts.",
  },
  {
    number: "03",
    title: "Diversity in Tech Workshop",
    description: "Secured sponsorship and led the operational planning committee.",
  },
];

// ─── Achievements ─────────────────────────────────────────────────────────────
export const achievements = [
  {
    id: "isr-q3-2023",
    icon: "military_tech",
    badge: "Q3 2023",
    title: "ISR of the Quarter",
    description:
      "Recognized for exceeding quarterly pipeline generation targets by 140% and demonstrating exceptional strategic account mapping within the enterprise segment.",
    tags: ["Sales Growth", "Strategic Lead Gen"],
    featured: true,
    color: "primary",
  },
  {
    id: "hyatt-sales",
    icon: "hotel",
    badge: "Top Performer",
    title: "Hyatt Place Sales Award",
    description:
      "Top performer in regional corporate account acquisitions and RevPAR optimization.",
    tags: ["Hospitality", "Corporate Sales"],
    featured: false,
    color: "secondary",
  },
  {
    id: "isr-consecutive",
    icon: "workspace_premium",
    badge: "Enterprise Division 2022",
    title: "ISR of the Quarter",
    description:
      "Consecutive recognition for maintaining a 95% accuracy rate in lead qualification and fostering high-value stakeholder relationships.",
    tags: ["Milestone"],
    featured: false,
    color: "primary",
  },
  {
    id: "cert-excellence",
    icon: "verified",
    badge: "Global Operations",
    title: "Certificate of Excellence",
    description:
      "Awarded for outstanding operational excellence and commitment to the Customer-First philosophy in multi-market account management.",
    tags: ["Honorable Distinction"],
    featured: false,
    color: "tertiary",
  },
];

export const recognitionPoints = [
  "140% Quota Attainment Consistency",
  "Lead Conversion Excellence Award",
  "Strategic Partnership Recognition",
];

export const certifications = [
  {
    title: "Strategic Account Management",
    issuer: "Enterprise Sales Academy",
    year: "2023",
  },
  {
    title: "Lead Qualification Specialist (LQS)",
    issuer: "Global Sales Institute",
    year: "2022",
  },
  {
    title: "Advanced CRM & Pipeline Integrity",
    issuer: "Certified Salesforce Professional",
    year: "2021",
  },
];

// ─── Gallery ──────────────────────────────────────────────────────────────────
export const galleryItems = [
  {
    id: 1,
    title: "Keynote Speaking",
    subtitle: "Global Enterprise Summit 2024",
    description: "Delivering the opening address on digital transformation ROI.",
    tag: "Leadership",
    size: "large",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    id: 2,
    title: "Strategic Planning Workshop",
    subtitle: "Partnerships",
    description: "",
    tag: "Strategy",
    size: "small",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  },
  {
    id: 3,
    title: "Fortune 500 Agreement",
    subtitle: "Culture",
    description: "",
    tag: "Culture",
    size: "small",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80",
  },
  {
    id: 4,
    title: "Q3 Milestone Celebration",
    subtitle: "Execution",
    description: "",
    tag: "Execution",
    size: "wide",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=900&q=80",
  },
  {
    id: 5,
    title: "Board Advisory Session",
    subtitle: "International Technology Vanguard · Tokyo",
    description:
      "Representing regional excellence at the annual cross-continental innovation exchange.",
    tag: "Engagement",
    size: "medium",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80",
  },
  {
    id: 6,
    title: "Industry Roundtable",
    subtitle: "Mentorship",
    description: "Empowering The Next Gen",
    tag: "Mentorship",
    size: "small",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
  },
];
