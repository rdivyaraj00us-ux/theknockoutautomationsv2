import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, Settings, Play, Wrench } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const sections = [
  {
    icon: Download,
    title: "1. Getting Started",
    content: [
      "Purchase the Knockout Automations bundle from our checkout page.",
      "You'll receive an instant download link via email after purchase.",
      "Download and extract the ZIP file — you'll find all workflows organized by category.",
    ],
  },
  {
    icon: Settings,
    title: "2. Setting Up n8n",
    content: [
      "If you don't have n8n yet, install it for free: npx n8n or use Docker.",
      "Alternatively, sign up for n8n Cloud for a hosted solution.",
      "Access your n8n instance at http://localhost:5678 (self-hosted) or your cloud URL.",
    ],
  },
  {
    icon: Play,
    title: "3. Importing Workflows",
    content: [
      "In n8n, click the menu (☰) → Import from File.",
      "Select any .json workflow file from the downloaded package.",
      "The workflow will appear in your canvas, ready to configure.",
    ],
  },
  {
    icon: Wrench,
    title: "4. Configuring Credentials",
    content: [
      "Each workflow uses specific tool integrations (e.g., Slack, OpenAI, Google Sheets).",
      "Click on any node to see its required credentials.",
      "Add your API keys in n8n Settings → Credentials. Each tool has setup guides in n8n docs.",
    ],
  },
];

const Docs = () => {
  usePageMeta("Documentation | The Knockout Automations", "Learn how to import, customize, and deploy n8n workflow templates. Quick-start guide and setup instructions.");
  return (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="pt-8 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-muted-foreground hover:text-foreground text-sm flex items-center gap-1 mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-black mb-2">Documentation</h1>
        <p className="text-muted-foreground mb-12">Everything you need to get started with your workflow templates.</p>

        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <s.icon className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-bold">{s.title}</h2>
              </div>
              <ul className="space-y-3">
                {s.content.map((line, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                    <span className="text-primary font-bold mt-0.5">→</span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
};

export default Docs;
