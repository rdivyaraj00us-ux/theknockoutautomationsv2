import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { usePageMeta } from "@/hooks/usePageMeta";

const Privacy = () => {
  usePageMeta("Privacy Policy | The Knockout Automations");
  return (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="pt-8 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-muted-foreground hover:text-foreground text-sm flex items-center gap-1 mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-black mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last updated: March 2026</p>

        <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
          <div>
            <h3 className="text-foreground font-bold text-lg mb-2">Information We Collect</h3>
            <p>When you purchase from us, we collect your name, email address, and payment information necessary to process your order. Payment processing is handled securely by Shopify.</p>
          </div>
          <div>
            <h3 className="text-foreground font-bold text-lg mb-2">How We Use Your Information</h3>
            <p>We use your information solely to process your order, deliver the product, and provide customer support. We do not sell, trade, or share your personal information with third parties.</p>
          </div>
          <div>
            <h3 className="text-foreground font-bold text-lg mb-2">Cookies</h3>
            <p>We use essential cookies and localStorage to provide site functionality (e.g., countdown timers). We do not use tracking cookies for advertising purposes.</p>
          </div>
          <div>
            <h3 className="text-foreground font-bold text-lg mb-2">Data Security</h3>
            <p>All transactions are processed through Shopify's secure checkout. We do not store your credit card information on our servers.</p>
          </div>
          <div>
            <h3 className="text-foreground font-bold text-lg mb-2">Contact</h3>
            <p>For privacy-related inquiries, email us at <a href={`mailto:${BRAND.email}`} className="text-primary hover:underline">{BRAND.email}</a>.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Privacy;
