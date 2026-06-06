import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { Search, SlidersHorizontal, ArrowLeft } from "lucide-react";
import { books, categories } from "@/lib/books";
import { useState } from "react";

export const Route = createFileRoute("/catalog")({ component: CatalogPage });

function CatalogPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const filtered = books.filter((b) => {
    const matchesQ = !q || b.title.toLowerCase().includes(q.toLowerCase()) || b.author.toLowerCase().includes(q.toLowerCase());
    const matchesC = !cat || b.category.toLowerCase() === cat.toLowerCase();
    return matchesQ && matchesC;
  });

  return (
    <PhoneFrame withNav>
      <header className="sticky top-0 z-30 bg-background/90 px-6 pb-4 pt-12 backdrop-blur">
        <div className="flex items-center gap-3">
          <Link to="/home" className="-ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/70 hover:bg-muted">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="font-display text-xl font-semibold">Browse</h1>
        </div>
        <div className="mt-4 flex gap-2">
          <div className="flex flex-1 items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-soft)]">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search books…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-card)]">
            <SlidersHorizontal className="h-4 w-4" />
          </button>
        </div>
        <div className="-mx-6 mt-4 flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Chip active={!cat} onClick={() => setCat(null)}>All</Chip>
          {categories.map((c) => (
            <Chip key={c.id} active={cat === c.name} onClick={() => setCat(c.name)}>
              {c.emoji} {c.name}
            </Chip>
          ))}
        </div>
      </header>

      <main className="px-6 pt-3">
        <p className="mb-3 text-xs text-muted-foreground">{filtered.length} results</p>
        <div className="grid grid-cols-2 gap-4">
          {filtered.map((b) => (
            <Link key={b.id} to="/book/$id" params={{ id: b.id }} className="block">
              <div className="overflow-hidden rounded-2xl bg-muted shadow-[var(--shadow-card)]">
                <img src={b.cover} alt={b.title} width={512} height={768} loading="lazy" className="aspect-[2/3] w-full object-cover" />
              </div>
              <div className="mt-2.5 px-1">
                <p className="line-clamp-1 text-sm font-semibold">{b.title}</p>
                <p className="line-clamp-1 text-xs text-muted-foreground">{b.author}</p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="font-display text-sm font-semibold text-primary">€{b.price.toFixed(2)}</span>
                  <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">{b.condition}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <BottomNav />
    </PhoneFrame>
  );
}

function Chip({ active, onClick, children }: { active?: boolean; onClick?: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-medium transition ${
        active
          ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
          : "border-border bg-card text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
