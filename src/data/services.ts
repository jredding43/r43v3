export type Service = {
  id: string;
  title: string;
  summary: string;
  deliverables: string[];
  outcomes: string[];
  notes?: string[];
};

export const services: Service[] = [
  {
    id: "web-hosting",
    title: "Websites & Hosting",
    summary:
      "Modern, responsive websites built for speed and clarity. Reliable hosting with backups, SSL, and monitoring.",
    deliverables: [
      "Design & build (responsive, accessible UI)",
      "Domain, DNS, SSL configuration",
      "Performance tuning (assets, caching)",
      "Deployment pipeline & backups",
      "Analytics + basic SEO setup",
      "Documentation & handoff"
    ],
    outcomes: [
      "Fast site that works on every device",
      "Security by default (HTTPS, up-to-date stack)",
      "Clear ownership of accounts and assets",
      "Straightforward updates and support"
    ],
    notes: [
      "Typical timeline: 2–4 weeks for small sites",
      "Ongoing care plans available"
    ]
  },
  {
    id: "setup-support",
    title: "Business Setup & Support",
    summary:
      "Get the basics right: email, devices, accounts, permissions, and vendor coordination—fully documented.",
    deliverables: [
      "Email, identity, and device onboarding",
      "Account creation and role-based access",
      "Policies for passwords, updates, backups",
      "Printer, Wi-Fi, and network basics",
      "Vendor coordination (ISP, domain, etc.)",
      "Runbook documentation"
    ],
    outcomes: [
      "Clean, consistent setup across the team",
      "Less downtime; fewer surprises",
      "You know how things are configured"
    ],
    notes: ["Monthly support options available"]
  },
  {
    id: "pos",
    title: "Point-of-Sale (POS)",
    summary:
      "Select, deploy, and train on a POS that fits your shop—hardware, printers, permissions, and reporting.",
    deliverables: [
      "Vendor selection guidance",
      "Hardware setup (registers, scanners, printers)",
      "Tax, catalog, and receipt configuration",
      "User roles & training",
      "Backup/export procedures"
    ],
    outcomes: [
      "Faster checkouts and fewer errors",
      "Staff trained; permissions locked in",
      "Reports you can actually use"
    ],
    notes: ["Can integrate with accounting and inventory tools where supported"]
  },
  {
    id: "task-manager",
    title: "Task Manager",
    summary:
      "Lightweight team tasking with statuses, history, and reports. Simple enough that people actually use it.",
    deliverables: [
      "Project spaces and roles",
      "Task templates & custom fields",
      "Status workflows and notifications",
      "Reports & exports",
      "User training + quick reference"
    ],
    outcomes: [
      "Shared visibility on work in progress",
      "Repeatable workflows",
      "Useful, filterable history"
    ]
  },
  {
    id: "localdocs",
    title: "LocalDocs (On-Prem Files)",
    summary:
      "On-prem document access with structure, metadata, and sensible permissions—backed up and searchable.",
    deliverables: [
      "Folder architecture and metadata plan",
      "Permissions and group policy",
      "Backup/restore and retention",
      "Search & indexing (where applicable)",
      "Change log & doc standards"
    ],
    outcomes: [
      "People find what they need quickly",
      "Confidential files stay confidential",
      "Recoverable when something goes wrong"
    ]
  },
  {
    id: "blazor",
    title: "Blazor Business Apps",
    summary:
      "Heavier tracking apps for operations: role-based access, dashboards, and audit-friendly data models.",
    deliverables: [
      "Discovery & domain modeling",
      "UI/UX flows and security design",
      "Blazor front-end + .NET API",
      "Data storage (SQL) and migrations",
      "Auth, roles, and auditing",
      "Docs, test data, and deployment"
    ],
    outcomes: [
      "Operational visibility (dashboards, KPIs)",
      "Traceable, auditable records",
      "A platform you can extend over time"
    ],
    notes: ["Phased delivery recommended for larger scopes"]
  }
];
