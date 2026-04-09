import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { usePageMeta } from "@/hooks/usePageMeta";

const Terms = () => {
  usePageMeta("Terms of Service | The Knockout Automations");
  return (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="pt-8 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-muted-foreground hover:text-foreground text-sm flex items-center gap-1 mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-black mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Last updated: March 2026</p>

        <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
          <div>
            <h3 className="text-foreground font-bold text-lg mb-2">License</h3>
            <p>Upon purchase, you receive a perpetual, non-exclusive license to use all workflow templates for personal and commercial purposes. You may modify, adapt, and use the workflows in client projects.</p>
          </div>
          <div>
            <h3 className="text-foreground font-bold text-lg mb-2">Restrictions</h3>
            <p>You may not resell, redistribute, or share the workflow files as a standalone product or bundle. You may not claim the original templates as your own creation for resale.</p>
          </div>
          <div>
            <h3 className="text-foreground font-bold text-lg mb-2">Delivery</h3>
            <p>Products are delivered digitally via email after purchase. Access is instant and available immediately upon payment confirmation.</p>
          </div>
          <div>
            <h3 className="text-foreground font-bold text-lg mb-2">Refunds</h3>
            <p>We offer a 30-day money-back guarantee. See our <Link to="/refund-policy" className="text-primary hover:underline">Refund Policy</Link> for details.</p>
          </div>
          <div>
            <h3 className="text-foreground font-bold text-lg mb-2">Disclaimer</h3>
            <p>Workflows are provided "as is." Results depend on your specific implementation, API configurations, and business context. We provide templates and support, but cannot guarantee specific business outcomes.</p>
          </div>
          <div>
            <h3 className="text-foreground font-bold text-lg mb-2">Contact</h3>
            <p>For questions about these terms, contact us at <a href={`mailto:${BRAND.email}`} className="text-primary hover:underline">{BRAND.email}</a>.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Terms;
