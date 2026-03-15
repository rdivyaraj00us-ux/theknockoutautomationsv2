import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import { BRAND } from "@/lib/constants";

const Footer = () => (
  <footer className="border-t border-border bg-card/30 py-12 pb-24 md:pb-12 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg mb-3">
            <Zap className="h-5 w-5 text-primary" />
            Knockout
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            2,000+ production-ready n8n workflow templates to automate your entire business.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-3">Product</h4>
          <div className="space-y-2">
            <Link to="/workflows" className="block text-muted-foreground text-sm hover:text-foreground transition-colors">Workflow Explorer</Link>
            <a href="#pricing" className="block text-muted-foreground text-sm hover:text-foreground transition-colors">Pricing</a>
            <a href="#faq" className="block text-muted-foreground text-sm hover:text-foreground transition-colors">FAQ</a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-3">Resources</h4>
          <div className="space-y-2">
            <Link to="/docs" className="block text-muted-foreground text-sm hover:text-foreground transition-colors">Documentation</Link>
            <Link to="/contact" className="block text-muted-foreground text-sm hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-3">Legal</h4>
          <div className="space-y-2">
            <Link to="/refund-policy" className="block text-muted-foreground text-sm hover:text-foreground transition-colors">Refund Policy</Link>
            <Link to="/privacy" className="block text-muted-foreground text-sm hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="block text-muted-foreground text-sm hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
        <p>CIN: {BRAND.cin}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
