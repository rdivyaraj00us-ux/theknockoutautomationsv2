import { useState, useMemo } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Link } from "react-router-dom";
import { Search, ArrowLeft, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCheckoutUrl } from "@/lib/constants";
import workflowData from "@/data/workflows.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const ITEMS_PER_PAGE = 24;
const data = workflowData as any;
const allWorkflows: Workflow[] = data.workflows;
const categories: { name: string; count: number }[] = data.categories;

const Workflows = () => {
  usePageMeta("Browse 2,000+ n8n Workflow Templates | The Knockout Automations", "Explore our collection of 2,000+ n8n workflow templates across 19 categories. Find AI, CRM, marketing, e-commerce, and more automation workflows.");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"score" | "name">("score");
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = allWorkflows;
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (w) =>
          w.name.toLowerCase().includes(q) ||
          w.tools.some((t) => t.toLowerCase().includes(q)) ||
          w.categories.some((c) => c.toLowerCase().includes(q))
      );
    }
    if (selectedCategory) {
      result = result.filter((w) => w.categories.includes(selectedCategory));
    }
    result = [...result].sort((a, b) =>
      sortBy === "score" ? b.score - a.score : a.name.localeCompare(b.name)
    );
    return result;
  }, [search, selectedCategory, sortBy]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground text-sm flex items-center gap-1 mb-4">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl font-black mb-2">Workflow Explorer</h1>
            <p className="text-muted-foreground">
              Browse {allWorkflows.length.toLocaleString()} workflows. The full bundle includes 2,000+.
            </p>
          </div>

          {/* Search + controls */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name, tool, or category..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="w-full bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="sm:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-1" /> Filters
              </Button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "score" | "name")}
                className="bg-card border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none"
              >
                <option value="score">Sort: Top Rated</option>
                <option value="name">Sort: A-Z</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {/* Sidebar */}
            <aside className={`${showFilters ? "block" : "hidden"} sm:block w-full sm:w-56 shrink-0 ${showFilters ? "mb-6 sm:mb-0" : ""}`}>
              <h3 className="font-semibold text-sm mb-3">Categories</h3>
              <div className="space-y-1">
                <button
                  onClick={() => { setSelectedCategory(null); setPage(1); }}
                  className={`block w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                    !selectedCategory ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  All ({allWorkflows.length})
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => { setSelectedCategory(cat.name); setPage(1); }}
                    className={`block w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === cat.name ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat.name} ({cat.count})
                  </button>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl border border-primary bg-primary/5">
                <p className="text-sm font-semibold mb-2">Get All 2,000+</p>
                <p className="text-xs text-muted-foreground mb-3">Unlock the full library for just $24.99</p>
                <Button
                  onClick={() => { window.location.href = getCheckoutUrl(); }}
                  size="sm"
                  className="w-full bg-gradient-cta hover:opacity-90 font-bold text-xs"
                >
                  Get Instant Access
                </Button>
              </div>
            </aside>

            {/* Grid */}
            <div className="flex-1">
              <p className="text-muted-foreground text-sm mb-4">{filtered.length} workflows found</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8">
                {paged.map((w) => (
                  <div key={w.id} className="rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: w.badge_color + "20", color: w.badge_color }}
                      >
                        {w.quality_label}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">{w.score}/9</span>
                    </div>
                    <h4 className="font-semibold text-sm mb-2 line-clamp-2">{w.name}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{w.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {w.tools.slice(0, 3).map((t) => (
                        <span key={t} className="text-[10px] font-mono bg-muted text-muted-foreground rounded-full px-2 py-0.5">{t}</span>
                      ))}
                      {w.categories.slice(0, 1).map((c) => (
                        <span key={c} className="text-[10px] bg-primary/10 text-primary rounded-full px-2 py-0.5">{c}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                  >
                    Previous
                  </Button>
                  <span className="text-sm text-muted-foreground px-4">
                    Page {page} of {totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Workflows;
