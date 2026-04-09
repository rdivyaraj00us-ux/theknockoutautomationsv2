import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Clock } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { usePageMeta } from "@/hooks/usePageMeta";

const Contact = () => {
  usePageMeta("Contact Us | The Knockout Automations", "Get in touch with The Knockout Automations team. Email support for n8n workflow templates.");
  return (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="pt-8 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <Link to="/" className="text-muted-foreground hover:text-foreground text-sm flex items-center gap-1 mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-black mb-2">Contact Us</h1>
        <p className="text-muted-foreground mb-12">We're here to help. Reach out and we'll respond promptly.</p>

        <div className="grid gap-6">
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold">Email Support</h2>
            </div>
            <p className="text-muted-foreground text-sm mb-2">For any questions, refund requests, or technical support:</p>
            <a href={`mailto:${BRAND.email}`} className="text-primary font-semibold hover:underline">{BRAND.email}</a>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold">Response Time</h2>
            </div>
            <p className="text-muted-foreground text-sm">
              We typically respond within 24 hours on business days. For urgent refund requests, please include your order number.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <h2 className="text-xl font-bold mb-4">Company Details</h2>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><span className="text-foreground font-medium">Company:</span> {BRAND.name}</p>
              <p><span className="text-foreground font-medium">CIN:</span> {BRAND.cin}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
};

export default Contact;
