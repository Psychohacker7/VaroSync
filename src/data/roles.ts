export interface Role {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  about: string[];
  responsibilities: string[];
  qualifications: string[];
  preferred: string[];
  applyNote: string;
}

export const APPLY_EMAIL = "jobs@varosync.com";

export const ROLES: Role[] = [
  {
    slug: "bd-lifesciences",
    title: "Business Development Partner",
    department: "Life Sciences R&D",
    location: "Remote",
    type: "Independent Partnership",
    about: [
      "Varosync's computational platform reaches biotech, pharmaceutical, and contract research organizations through direct engagement with R&D leadership. This role carries full responsibility for those relationships: identifying organizations with active discovery and translational programs, initiating technical and commercial conversations, and guiding engagements from origination through execution.",
      "The position is structured as an independent, performance-based partnership.",
    ],
    responsibilities: [
      "Cultivate and sustain relationships with R&D leadership across biotech, pharmaceutical, and CRO organizations with active pipeline programs",
      "Identify and qualify computational engagement opportunities, including discovery sprints, embedded research programs, and translational analyses",
      "Represent Varosync in technical and commercial settings, including industry conferences and direct-channel outreach",
      "Collaborate with internal teams on engagement strategy, commercial positioning, and deal execution",
      "Maintain awareness of pipeline activity, organizational changes, and emerging computational needs across target accounts",
    ],
    qualifications: [
      "Have established, demonstrable relationships across biotech, pharmaceutical, or CRO organizations, with direct access to R&D decision-makers",
      "Have independently originated and closed business in pharmaceutical services, R&D outsourcing, or scientific consulting",
      "Can hold senior-level conversations around R&D strategy, pipeline evaluation, and translational science",
      "Can operate independently with minimal oversight or predefined structure",
    ],
    preferred: [
      "Prior experience in biotech or pharmaceutical business development, alliance management, or scientific consulting sales",
      "An active presence at major industry conferences such as BIO, AACR, ASCO, and the JPM Healthcare Conference",
      "Working knowledge of pharmaceutical procurement and external innovation functions",
      "Breadth across multiple modalities or therapeutic areas",
    ],
    applyNote:
      "Include a brief introduction, one engagement you originated in biotech or pharma, and three R&D relationships you would activate in your first 30 days.",
  },
  {
    slug: "bd-capital",
    title: "Business Development Partner",
    department: "Institutional Capital",
    location: "Remote",
    type: "Independent Partnership",
    about: [
      "Varosync supports institutional investors conducting scientific diligence on biotech assets, including clinical-stage pipeline evaluation, mechanism-of-action analysis, and translational risk assessment. This role develops and manages relationships across hedge funds, private equity, venture capital, family offices, and biotech-focused institutional allocators.",
      "The position is structured as an independent, performance-based partnership. All engagements are confidential and involve sophisticated counterparties with active biotech exposure.",
    ],
    responsibilities: [
      "Develop relationships with fund analysts, portfolio managers, and deal teams investing in biotech and life sciences assets",
      "Identify and qualify scientific diligence opportunities, including fast-turn analyses around pipeline events, clinical readouts, and transactions",
      "Represent Varosync across investor and deal-flow environments with discretion and precision",
      "Collaborate with internal teams on engagement strategy, pricing, and execution",
      "Monitor fund activity, transaction flow, and emerging diligence requirements across your network",
    ],
    qualifications: [
      "Have established relationships across the buyside, including hedge funds, private equity, venture capital, family offices, or institutional allocators with healthcare exposure",
      "Have independently originated business, whether through a consulting practice, sell-side coverage, or investor relations",
      "Can speak fluently to biotech asset valuation, clinical data interpretation, and pipeline risk frameworks",
      "Can operate independently with minimal oversight or predefined structure",
      "Bring absolute discretion to confidential engagements with sophisticated, information-sensitive counterparties",
    ],
    preferred: [
      "Prior experience on the sell-side, in investor relations, or in healthcare-focused investment banking",
      "Relationships with deal teams at healthcare-focused funds, PE firms, or biotech-focused family offices",
      "A presence at investor conferences and deal-flow networks, including JPM Healthcare, RESI, and BIO CEO & Investor Conference",
      "An understanding of how institutional funds staff and procure scientific diligence on biotech assets",
    ],
    applyNote:
      "Include a brief introduction, one fund or LP relationship you would activate, and the deal environment you know best.",
  },
  {
    slug: "strategic-alliances",
    title: "Strategic Alliances",
    department: "Life Sciences Ecosystem",
    location: "Remote",
    type: "Independent Partnership",
    about: [
      "This role works across the technology and research ecosystem that surrounds modern drug discovery, managing relationships with cloud providers, AI platforms, data companies, and research consortia. It carries those partnerships end to end, from the first conversation through negotiated scope and ongoing delivery.",
      "The position is structured as an independent, performance-based partnership.",
    ],
    responsibilities: [
      "Manage relationships with cloud and AI infrastructure teams across the life sciences ecosystem",
      "Coordinate co-sell programs, marketplace listings, and technology alliances",
      "Negotiate partnership scope, data access agreements, and co-development initiatives",
      "Coordinate across internal teams and external stakeholders to move partnerships from agreement to delivery",
      "Surface ecosystem insights to research and commercial teams",
    ],
    qualifications: [
      "Have experience managing complex technical partnerships in life sciences or scientific computing",
      "Have worked with cloud partner programs, co-sell motions, or marketplace procurement",
      "Are comfortable in both technical and commercial conversations with platform teams",
      "Can manage a relationship end to end, from negotiating scope to running day-to-day delivery",
    ],
    preferred: [
      "Experience at a cloud provider, life sciences SaaS company, or platform technology company",
      "Familiarity with ISV programs and marketplace mechanics",
      "Relationships with cloud or AI platform teams covering healthcare accounts",
    ],
    applyNote:
      "Send a brief introduction and one ecosystem relationship you have managed.",
  },
  {
    slug: "research-associate",
    title: "Research Associate",
    department: "Biology & Chemistry",
    location: "New York, NY",
    type: "Full-Time",
    about: [
      "As a Research Associate, you will run experiments, generate and interpret data, and work alongside the computational team on translational projects. The work spans synthesis, assays, and characterization across active research programs, and contributions are expected to result in co-authored publications.",
      "This is a hands-on, on-site laboratory role based in New York.",
    ],
    responsibilities: [
      "Design and execute experiments across synthesis, assays, and characterization",
      "Collaborate with the computational team to validate models and generate experimental data",
      "Maintain rigorous experimental documentation and laboratory records",
      "Manage day-to-day laboratory operations, including ordering, safety, and compliance",
      "Contribute to data interpretation and manuscript preparation",
    ],
    qualifications: [
      "Have a background in biology, chemistry, biochemistry, or a related field",
      "Have hands-on laboratory experience, whether from coursework, independent study, or research rotations",
      "Are self-directed and identify problems without waiting for direction",
      "Care about doing meaningful research and building a publication record",
      "Want direct involvement in active research programs",
    ],
    preferred: [
      "Experience running experiments independently, beyond structured coursework",
      "Familiarity with drug discovery, medicinal chemistry, or translational research",
      "Publications, preprints, or conference presentations",
      "Experience working alongside computational or data science teams",
    ],
    applyNote:
      "Send a brief introduction, one project or experiment you are proud of, and your current availability.",
  },
  {
    slug: "scientific-marketing",
    title: "Scientific Marketing & Communications",
    department: "Brand & Editorial",
    location: "Remote",
    type: "Flexible",
    about: [
      "This role works across scientific editorial, social, and community channels in biotech, pharma, and life sciences. It owns how the science is written about and where it reaches, from long-form analysis to the day-to-day voice on public channels.",
      "The position is remote with a flexible arrangement.",
    ],
    responsibilities: [
      "Produce and edit scientific editorial content, including long-form analysis, mechanism deep-dives, and recurring series",
      "Distribute content across LinkedIn, X, scientific communities, and direct channels",
      "Execute content strategy for research publications, announcements, and industry moments",
      "Write in a voice that is technically credible, editorially sharp, and accessible to non-scientists",
      "Track audience engagement, sentiment, and channel performance",
    ],
    qualifications: [
      "Have produced scientific or technical content with real audience traction",
      "Have managed social and editorial channels for a scientific or technical organization",
      "Have strong scientific literacy and can engage credibly with mechanism-level content",
      "Have exceptional writing range across long-form editorial and short-form social",
    ],
    preferred: [
      "Background in science communications, science journalism, or editorial at a research institution",
      "Visual design skills, including layout, data visualization, and publication graphics",
      "Familiarity with biotech, drug development, or computational biology",
      "Experience with audience analytics and content performance measurement",
    ],
    applyNote:
      "Send your portfolio and one piece of scientific content you produced that earned real traction.",
  },
];
