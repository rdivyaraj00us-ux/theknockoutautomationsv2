import { useEffect } from "react";

export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (description) {
      if (meta) {
        meta.setAttribute("content", description);
      } else {
        const tag = document.createElement("meta");
        tag.name = "description";
        tag.content = description;
        document.head.appendChild(tag);
      }
    }
    return () => {
      document.title = "The Knockout Automations | 2,000+ n8n Workflow Templates";
      if (meta) meta.setAttribute("content", "Get 2,000+ production-ready n8n workflow templates for just $24.99. Includes OpenClaw integration guide. Automate AI, CRM, marketing, e-commerce & more.");
    };
  }, [title, description]);
}
