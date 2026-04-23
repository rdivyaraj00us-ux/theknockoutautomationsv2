export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating?: number;
  avatarUrl?: string;
};

export const starterTestimonials: Testimonial[] = [
  {
    id: "aarav-s",
    name: "Aarav S.",
    role: "Digital Consultant",
    rating: 5,
    quote:
      "I've bought at least 15 courses before this — all hype, no execution. This is the first time I actually implemented something within 24 hours. The systems are plug-and-play, not theory.",
  },
  {
    id: "michael-r",
    name: "Michael R.",
    role: "Ecom Operator",
    rating: 5,
    quote:
      "I replaced 3 VA tasks using just 2 workflows. What used to take me hours every day now runs automatically. This is not content — it's infrastructure.",
  },
  {
    id: "neha-p",
    name: "Neha P.",
    role: "Student",
    rating: 5,
    quote:
      "I had zero background in automation or AI and still managed to deploy my first workflow in one evening. Everything is broken down in a way that just makes sense.",
  },
  {
    id: "daniel-k",
    name: "Daniel K.",
    role: "SaaS Founder",
    rating: 5,
    quote:
      "This isn't made for beginners looking for motivation. This is for people who want leverage. If you understand systems, you'll immediately see the value.",
  },
  {
    id: "josh-m",
    name: "Josh M.",
    role: "Affiliate Marketer",
    rating: 5,
    quote:
      "One of the funnels I implemented paid for the entire program within 3 days. I didn't expect this level of practicality.",
  },
  {
    id: "kevin-l",
    name: "Kevin L.",
    role: "Growth Hacker",
    rating: 5,
    quote:
      "The agent-based workflows feel like having a small team running in the background. If this is where things are going, I'm glad I got in early.",
  },
];
