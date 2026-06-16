import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Pureza Digital",
  description:
    "The terms that govern your use of the Pureza Digital website and the digital services we provide, including project, payment, hosting, and liability terms.",
};

const intro: string[] = [
  "Welcome to Pureza Digital.",
  "By using our website or engaging our services, you agree to these Terms of Service.",
];

const sections: LegalSection[] = [
  {
    heading: "Services",
    blocks: [
      {
        type: "paragraph",
        text: "Pureza Digital provides digital services including but not limited to:",
      },
      {
        type: "list",
        items: [
          "Website Design",
          "Website Development",
          "Landing Pages",
          "Website Hosting",
          "Website Maintenance",
          "Search Engine Optimisation (SEO)",
          "Digital Consulting",
          "Future digital and automation services",
        ],
      },
      {
        type: "paragraph",
        text: "Specific project details will be outlined in individual agreements or proposals.",
      },
    ],
  },
  {
    heading: "Quotes and Proposals",
    blocks: [
      {
        type: "paragraph",
        text: "All quotes and proposals are valid for the period stated within the proposal unless otherwise specified.",
      },
      {
        type: "paragraph",
        text: "Project scope, pricing, and timelines may vary depending on client requirements.",
      },
    ],
  },
  {
    heading: "Client Responsibilities",
    blocks: [
      { type: "paragraph", text: "Clients agree to provide:" },
      {
        type: "list",
        items: [
          "Accurate information",
          "Required content and materials",
          "Timely feedback",
          "Access to relevant platforms when necessary",
        ],
      },
      { type: "paragraph", text: "Delays in providing information may affect project timelines." },
    ],
  },
  {
    heading: "Payments",
    blocks: [
      { type: "paragraph", text: "Payment terms will be outlined in project agreements or invoices." },
      {
        type: "paragraph",
        text: "Late payments may result in delays, suspension of services, or removal of hosted services until payment is received.",
      },
    ],
  },
  {
    heading: "Hosting and Maintenance",
    blocks: [
      { type: "paragraph", text: "Where hosting or maintenance services are provided:" },
      {
        type: "list",
        items: [
          "Fees may be charged monthly or annually",
          "Services continue while payments remain current",
          "Services may be suspended if payments are overdue",
        ],
      },
    ],
  },
  {
    heading: "Intellectual Property",
    blocks: [
      {
        type: "paragraph",
        text: "Clients retain ownership of their business content, logos, and materials provided to Pureza Digital.",
      },
      {
        type: "paragraph",
        text: "Upon full payment, clients receive ownership of the completed website deliverables as outlined in the project agreement.",
      },
    ],
  },
  {
    heading: "Portfolio Rights",
    blocks: [
      {
        type: "paragraph",
        text: "Unless otherwise agreed in writing, Pureza Digital reserves the right to display completed work in:",
      },
      {
        type: "list",
        items: ["Our portfolio", "Marketing materials", "Social media", "Case studies"],
      },
    ],
  },
  {
    heading: "Limitation of Liability",
    blocks: [
      { type: "paragraph", text: "Pureza Digital is not liable for:" },
      {
        type: "list",
        items: [
          "Loss of profits",
          "Business interruption",
          "Third-party service outages",
          "Search engine ranking changes",
          "Indirect or consequential damages",
        ],
      },
      {
        type: "paragraph",
        text: "Our liability is limited to the amount paid for the specific service provided.",
      },
    ],
  },
  {
    heading: "Third-Party Services",
    blocks: [
      { type: "paragraph", text: "Projects may rely on third-party providers such as:" },
      {
        type: "list",
        items: ["Hosting providers", "Domain registrars", "Payment platforms", "Analytics providers"],
      },
      {
        type: "paragraph",
        text: "Pureza Digital is not responsible for outages or issues caused by third-party services.",
      },
    ],
  },
  {
    heading: "Termination",
    blocks: [
      {
        type: "paragraph",
        text: "Either party may terminate a project or service arrangement in accordance with any agreed project terms.",
      },
      { type: "paragraph", text: "Outstanding fees remain payable upon termination." },
    ],
  },
  {
    heading: "Governing Law",
    blocks: [
      { type: "paragraph", text: "These Terms are governed by the laws of New Zealand." },
    ],
  },
  {
    heading: "Contact",
    blocks: [{ type: "contact" }],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      titleLead="Terms of"
      titleAccent="Service"
      lastUpdated="June 2026"
      intro={intro}
      sections={sections}
    />
  );
}
