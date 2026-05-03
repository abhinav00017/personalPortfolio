export type Project = {
  title: string;
  label: string;
  summary: string;
  headline: string;
  tech: string[];
  caseStudyUrl?: string;
};

export type AutomationProject = {
  title: string;
  summary: string;
  tech: string[];
};

export const featuredProjects: Project[] = [
  {
    title: "E&O Application Rebuild",
    label: "Solo full-stack insurance rebuild",
    summary:
      "Rebuilt an unstable insurance application end-to-end in 3 weeks - 12-step form, dynamic underwriting, payments, and automated policy delivery.",
    headline: "~$250K/year in premium revenue now flows through it.",
    tech: ["Python", "Zoho Catalyst", "Vanilla JS", "Webhooks", "MongoDB"],
    caseStudyUrl: "/case-studies/eo-application-rebuild/",
  },
  {
    title: "Certificate of Insurance Platform",
    label: "Template-driven document automation",
    summary:
      "Built a multi-tenant certificate generation system with per-customer templates, version control, preview, and bulk export - across four iterations driven by changing client requirements.",
    headline: "Stable in production with near-zero support tickets after launch.",
    tech: ["Python", "Zoho Catalyst", "MongoDB", "Svelte", "AppSail"],
    caseStudyUrl: "/case-studies/coi-platform/",
  },
  {
    title: "AIM Invoicing System",
    label: "Policy-to-invoice automation",
    summary:
      "Designed and shipped a policy-driven invoicing system with PDF generation, WorkDrive storage, and EMI payment integration via webhooks - built and deployed over a single weekend.",
    headline: "Live in production within 72 hours of project kickoff.",
    tech: ["Python", "Zoho Catalyst", "Zoho Books API", "Webhooks", "PDF"],
    caseStudyUrl: "/case-studies/aim-invoicing/",
  },
  {
    title: "Azure AVD for Insurance Users",
    label: "Cloud infrastructure & migration",
    summary:
      "Set up Azure Virtual Desktop environments for insurance users including ARS and PowerBroker, with SQL Server upgrades and large-scale data migration.",
    headline: "500GB+ migrated server-to-server with zero data loss.",
    tech: ["Azure AVD", "Azure VMs", "SQL Server", "Blob Storage", "Windows Server"],
    caseStudyUrl: "/case-studies/azure-avd-setup/",
  },
];

export const automationProjects: AutomationProject[] = [
  {
    title: "Apollo Lead Sync",
    summary:
      "Daily one-way sync from Apollo lead lists into Zoho Marketing Automation with list mapping and add/remove handling.",
    tech: ["Apollo API", "Zoho Catalyst", "Cron"],
  },
  {
    title: "Renewal Email Notifications",
    summary:
      "Recurring 20-day and 45-day pre-expiry email notifications that work year-over-year until a lead is marked Won.",
    tech: ["Zoho Catalyst", "Zoho CRM"],
  },
  {
    title: "Policy Scan Docs Pipeline",
    summary:
      "Document processing pipeline that bypassed Zoho Flow's 30-second timeout using Catalyst Functions and DataStore triggers.",
    tech: ["Zoho Catalyst", "DataStore", "WorkDrive", "Zoho CRM"],
  },
  {
    title: "Territory Assignment Automation",
    summary:
      "Automated CRM territory assignment by mapping producers through email, seating location, and territory records, with house-producer fallback.",
    tech: ["Zoho CRM", "Zoho People", "Batch APIs"],
  },
  {
    title: "LinkedIn Profile & Company Enrichment",
    summary:
      "Three-function pipeline for profile discovery, company lookup, and website logo extraction - prioritizing match confidence over volume.",
    tech: ["Python", "Zoho Catalyst", "Web extraction"],
  },
  {
    title: "WorkDrive Link Migration",
    summary:
      "Replaced inaccessible US data-center WorkDrive links in CRM tasks with the correct Canada DC links via hierarchical folder matching.",
    tech: ["WorkDrive API", "Zoho CRM API"],
  },
  {
    title: "Zoho Projects Blueprints",
    summary:
      "Configured task review and approval flows with assignment and review notifications using Blueprints and workflow rules.",
    tech: ["Zoho Projects", "Workflow rules"],
  },
];

export const earlierProjects: AutomationProject[] = [
  {
    title: "VisaPro V1 & V2",
    summary:
      "Full-stack visa processing platform with dynamic eligibility checks, authentication, and an OpenAI-powered virtual assistant.",
    tech: ["FastAPI", "React", "SQLite", "OpenAI API", "JWT"],
  },
  {
    title: "Computer Vision Crime Detection",
    summary:
      "Published research on real-time activity recognition in surveillance video using a CNN-LSTM architecture.",
    tech: ["Python", "OpenCV", "TensorFlow", "Keras"],
  },
];
