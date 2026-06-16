import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Pureza Digital",
  description:
    "How Pureza Digital collects, uses, and protects the personal information you provide when you visit our website or enquire about our services.",
};

const intro: string[] = [
  'Pureza Digital ("we", "our", or "us") respects your privacy and is committed to protecting any personal information you provide.',
  "This Privacy Policy explains how we collect, use, and protect your information when you visit our website or contact us regarding our services.",
];

const sections: LegalSection[] = [
  {
    heading: "Information We Collect",
    blocks: [
      { type: "paragraph", text: "We may collect information you voluntarily provide, including:" },
      {
        type: "list",
        items: [
          "Name",
          "Email address",
          "Phone number",
          "Business name",
          "Project details",
          "Any information submitted through our contact forms",
        ],
      },
      { type: "paragraph", text: "We may also collect basic website analytics data such as:" },
      {
        type: "list",
        items: ["Device type", "Browser type", "Pages visited", "General usage information"],
      },
    ],
  },
  {
    heading: "How We Use Your Information",
    blocks: [
      { type: "paragraph", text: "We use your information to:" },
      {
        type: "list",
        items: [
          "Respond to enquiries",
          "Provide quotes and proposals",
          "Deliver our services",
          "Communicate with clients",
          "Improve our website and services",
          "Maintain business records",
        ],
      },
      { type: "paragraph", text: "We do not sell your personal information to third parties." },
    ],
  },
  {
    heading: "Data Protection",
    blocks: [
      {
        type: "paragraph",
        text: "We take reasonable steps to protect your information from unauthorised access, misuse, or disclosure.",
      },
      {
        type: "paragraph",
        text: "However, no internet transmission or storage method is completely secure, and we cannot guarantee absolute security.",
      },
    ],
  },
  {
    heading: "Third-Party Services",
    blocks: [
      { type: "paragraph", text: "Our website may contain links to third-party websites or services." },
      { type: "paragraph", text: "We are not responsible for the privacy practices of those websites." },
    ],
  },
  {
    heading: "Cookies",
    blocks: [
      {
        type: "paragraph",
        text: "Our website may use cookies or similar technologies to improve user experience and collect analytics data.",
      },
      { type: "paragraph", text: "You may disable cookies through your browser settings." },
    ],
  },
  {
    heading: "Access to Your Information",
    blocks: [
      {
        type: "paragraph",
        text: "You may request access to, correction of, or deletion of your personal information by contacting us.",
      },
    ],
  },
  {
    heading: "Contact",
    blocks: [
      { type: "paragraph", text: "For privacy-related questions, please contact:" },
      { type: "contact" },
    ],
  },
  {
    heading: "Changes",
    blocks: [
      {
        type: "paragraph",
        text: "We may update this Privacy Policy from time to time. Any changes will be published on this page.",
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      titleLead="Privacy"
      titleAccent="Policy"
      lastUpdated="June 2026"
      intro={intro}
      sections={sections}
    />
  );
}
