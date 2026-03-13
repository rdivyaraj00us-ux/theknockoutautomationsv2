import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ_DATA } from "@/lib/constants";

const FAQSection = () => (
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
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
