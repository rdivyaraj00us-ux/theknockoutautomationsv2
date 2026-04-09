import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { usePageMeta } from "@/hooks/usePageMeta";

const RefundPolicy = () => {
  usePageMeta("Refund Policy | The Knockout Automations", "30-day money-back guarantee on all n8n workflow template purchases. No questions asked.");
  return (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="pt-8 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-muted-foreground hover:text-foreground text-sm flex items-center gap-1 mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-black mb-2">Refund Policy</h1>
        <p className="text-muted-foreground mb-12">Your satisfaction is our priority.</p>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground text-sm leading-relaxed">
          <div className="rounded-xl border border-[hsl(var(--success))]/30 bg-[hsl(var(--success))]/5 p-6">
            <h2 className="text-foreground font-bold text-lg mb-2">30-Day Money-Back Guarantee</h2>
            <p>We offer a full 30-day money-back guarantee on all purchases. If you're not satisfied with the product for any reason, simply email us within 30 days of your purchase and we'll issue a complete refund.</p>
          </div>

          <h3 className="text-foreground font-bold text-lg">How to Request a Refund</h3>
          <p>Email us at <a href={`mailto:${BRAND.email}`} className="text-primary hover:underline">{BRAND.email}</a> with your order number and we'll process your refund within 3-5 business days.</p>

          <h3 className="text-foreground font-bold text-lg">Conditions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Refund requests must be made within 30 days of purchase.</li>
            <li>No questions asked — we respect your decision.</li>
            <li>Refunds are processed to the original payment method.</li>
          </ul>

          <h3 className="text-foreground font-bold text-lg">Contact</h3>
          <p>For refund requests or questions, reach us at <a href={`mailto:${BRAND.email}`} className="text-primary hover:underline">{BRAND.email}</a>.</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
};

export default RefundPolicy;
