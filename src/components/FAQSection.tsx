import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ_DATA } from "@/lib/constants";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="faq" className="py-20 sm:py-28 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Got Questions? We've Got <span className="text-primary">Answers</span>
          </h2>
        </div>
        <div className="reveal reveal-delay-1">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_DATA.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className={`border border-border rounded-xl px-6 bg-card ${
                  i >= 5 && !showAll ? "hidden md:block" : ""
                }`}
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Show More button — only visible on mobile when collapsed */}
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="mt-4 w-full py-3 text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center justify-center gap-1.5 md:hidden"
            >
              Show {FAQ_DATA.length - 5} More Questions
              <ChevronDown className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
