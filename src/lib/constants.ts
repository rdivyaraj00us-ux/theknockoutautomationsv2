export const SHOPIFY_CHECKOUT_URL = "https://theknockoutautomations.myshopify.com/cart/51439558426935:1";

export const PRICING = {
  original: 149,
  sale: 24.99,
  discount: 83,
  perWorkflow: "0.01",
};

export const STATS = {
  workflows: "2,000+",
  categories: "19",
  hoursSaved: "20+",
  tools: "74+",
};

export const BRAND = {
  name: "The Knockout Automations",
  tagline: "2,000+ Ready-to-Use n8n Workflow Templates",
  cin: "U58199GJ2025PTC169791",
  email: "theknockoutacademy@gmail.com",
};

export function getCheckoutUrl(discount?: string): string {
  if (typeof window === "undefined") return SHOPIFY_CHECKOUT_URL;
  const params = new URLSearchParams(window.location.search);
  const utm = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  const utmParams = new URLSearchParams();
  utm.forEach((key) => {
    const val = params.get(key);
    if (val) utmParams.set(key, val);
  });
  if (discount) utmParams.set("discount", discount);
  const utmString = utmParams.toString();
  return utmString ? `${SHOPIFY_CHECKOUT_URL}?${utmString}` : SHOPIFY_CHECKOUT_URL;
}

export const WORKFLOW_CATEGORIES = [
  "AI & Machine Learning",
  "Messaging & Chatbots",
  "Data & Analytics",
  "Email & Communication",
  "CRM & Sales",
  "Social Media",
  "DevOps & IT",
  "E-commerce",
  "Marketing & SEO",
  "Finance & Accounting",
  "HR & Recruiting",
  "Project Management",
  "Content Creation",
  "Customer Support",
  "Lead Generation",
  "File Management",
  "Scheduling & Calendar",
  "Reporting & Dashboards",
  "Security & Compliance",
];

export const FAQ_DATA = [
  {
    q: "What exactly do I get for $24.99?",
    a: "You get instant access to 2,000+ ready-to-use n8n workflow templates covering 19 categories — from AI & automation to CRM, marketing, e-commerce, and more. Every workflow is a downloadable JSON file you can import directly into n8n.",
  },
  {
    q: "Do I need coding skills to use these workflows?",
    a: "No! These are pre-built templates. Just import the JSON file into your n8n instance, configure your API credentials, and you're running. Each workflow is designed to work out of the box.",
  },
  {
    q: "What is n8n and do I need to pay for it?",
    a: "n8n is a powerful open-source workflow automation tool (like Zapier, but free and self-hosted). You can run it for free on your own server, or use n8n Cloud for a hosted solution.",
  },
  {
    q: "Is this a subscription or one-time payment?",
    a: "One-time payment. Pay $24.99 once and you own all 2,000+ workflows forever. No recurring charges, no hidden fees, no upsells.",
  },
  {
    q: "What tools and integrations are included?",
    a: "Workflows cover 74+ tools including OpenAI, Google Sheets, Slack, Telegram, Shopify, HubSpot, Notion, GitHub, Gmail, WordPress, LinkedIn, Discord, Stripe, and many more.",
  },
  {
    q: "How do I access the workflows after purchase?",
    a: "Immediately after checkout, you'll receive a download link via email. You'll get a complete package with all workflow JSON files organized by category, ready to import.",
  },
  {
    q: "Can I use these for my clients or agency?",
    a: "Absolutely! Many customers are agencies and freelancers who customize these workflows for their clients. There's no restriction on commercial use.",
  },
  {
    q: "What if a workflow doesn't work for my use case?",
    a: "Every workflow is a starting template. You can modify, combine, and customize them to fit your exact needs. Plus, our 30-day money-back guarantee means zero risk.",
  },
  {
    q: "Why is it so cheap? What's the catch?",
    a: "No catch. We're a registered company (TKOA Private Limited, CIN: U58199GJ2025PTC169791) offering launch pricing to build our reputation. This is a limited-time investment in our customer base — the price will increase.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes! We offer a 30-day no-questions-asked money-back guarantee. If you're not satisfied for any reason, just email us and we'll refund you in full.",
  },
];

export const INTEGRATIONS = [
  "OpenAI", "Google Sheets", "Slack", "Telegram", "Google Drive", "Airtable",
  "Notion", "YouTube", "GitHub", "Gmail", "HubSpot", "WordPress", "LinkedIn",
  "Google Gemini", "Shopify", "Mattermost", "Google Calendar", "Pipedrive",
  "Jira", "Discord", "PostgreSQL", "Twitter/X", "WhatsApp", "WooCommerce",
  "Typeform", "Supabase", "Zendesk", "Spotify", "Outlook", "Stripe",
  "TikTok", "Trello", "Asana", "Salesforce", "Mailchimp", "SendGrid",
  "Twilio", "Zoom", "Microsoft Teams", "Dropbox", "Figma", "Calendly",
  "Intercom", "Freshdesk", "ClickUp", "Monday.com", "Basecamp", "Webflow",
  "Firebase", "AWS S3", "Cloudflare", "Vercel", "Docker", "Kubernetes",
  "Redis", "MongoDB", "MySQL", "Elasticsearch", "Grafana", "Prometheus",
];
