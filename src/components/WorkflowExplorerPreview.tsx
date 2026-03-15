import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import workflowData from "@/data/workflows.json";

interface Workflow {
  name: string;
  description: string;
  score: number;
  categories: string[];
  tools: string[];
  quality_label: string;
  badge_color: string;
  id: number;
}

const WorkflowExplorerPreview = () => {
  const [search, setSearch] = useState("");
  const workflows = (workflowData as any).workflows as Workflow[];

  const filtered = useMemo(() => {
    if (!search.trim()) return workflows.slice(0, 12);
    const q = search.toLowerCase();
    return workflows
      .filter((w) =>
        w.name.toLowerCase().includes(q) ||
        w.categories.some((c) => c.toLowerCase().includes(q)) ||
        w.tools.some((t) => t.toLowerCase().includes(q))
      )
      .slice(0, 12);
  }, [search, workflows]);

  return (
    <section id="use-cases" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 reveal">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Explore</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Preview Our <span className="text-primary">Workflow Library</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Search through {workflows.length.toLocaleString()} workflows. This is just a preview — the full bundle includes 2,000+.
          </p>
        </div>

        <div className="reveal reveal-delay-1 max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search workflows or tools (e.g., 'Slack', 'AI', 'OpenAI')..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        <div className="reveal reveal-delay-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {filtered.map((w) => (
            <div
              key={w.id}
              className="rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: w.badge_color + "20", color: w.badge_color }}
                >
                  {w.quality_label}
                </span>
                <span className="font-mono text-xs text-muted-foreground">{w.score}/9</span>
              </div>
              <h4 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {w.name}
              </h4>
              <div className="flex flex-wrap gap-1">
                {w.categories.slice(0, 2).map((c) => (
                  <span key={c} className="text-[10px] text-muted-foreground bg-muted rounded-full px-2 py-0.5">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center reveal reveal-delay-3">
          <p className="text-muted-foreground text-sm mb-4">
            Showing {filtered.length} of {workflows.length.toLocaleString()} workflows in preview
          </p>
          <Link to="/workflows">
            <Button variant="outline" className="group">
              Explore All Workflows
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkflowExplorerPreview;
