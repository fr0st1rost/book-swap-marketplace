import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { Logo } from "@/components/Logo";
import { Search, Bell, MessageCircle } from "lucide-react";
import { books, categories } from "@/lib/books";

export const Route = createFileRoute("/home")({ component: HomePage });

function HomePage() {
  const featured = books.slice(0, 4);
  return (
    <PhoneFrame withNav>
      <header className="sticky top-0 z-30 bg-background/85 px-6 pb-4 pt-12 backdrop-blur">
        <div className="flex items-center justify-between">
          <Logo size={44} />
          <div className="flex items-center gap-1">
            <Link to="/messages" className="relative rounded-full p-2.5 text-foreground/70 hover:bg-muted">
              <MessageCircle className="h-5 w-5" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-secondary" />
            </Link>
            <button className="rounded-full p-2.5 text-foreground/70 hover:bg-muted"><Bell className="h-5 w-5" /></button>
          </div>
        </div>

        <Link to="/catalog" className="mt-5 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 shadow-[var(--shadow-soft)]">
          <Search className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Search title, author, ISBN…</span>
        </Link>
      </header>

      <main className="px-6 pt-2">
        {/* Hero promo */}
        <section className="relative mt-2 overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground shadow-[var(--shadow-card)]">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-secondary/30 blur-2xl" />
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Member offer</p>
          <h2 className="mt-2 font-display text-2xl font-semibold leading-tight">Save 20% on your<br />first swap</h2>
          <button className="mt-4 rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-secondary-foreground">Claim offer</button>
        </section>

        {/* Categories */}
        <Section title="Categories" actionTo="/catalog">
          <div className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((c) => (
              <button key={c.id} className="flex min-w-[88px] flex-col items-center gap-2 rounded-2xl border border-border bg-card px-3 py-3.5 shadow-[var(--shadow-soft)]">
                <span className="text-2xl">{c.emoji}</span>
                <span className="text-xs font-medium">{c.name}</span>
              </button>
            ))}
          </div>
        </Section>

        {/* Featured */}
        <Section title="Featured books" actionTo="/catalog">
          <div className="grid grid-cols-2 gap-4">
            {featured.map((b) => (
              <Link key={b.id} to="/book/$id" params={{ id: b.id }} className="group block">
                <div className="overflow-hidden rounded-2xl bg-muted shadow-[var(--shadow-card)]">
                  <img src={b.cover} alt={b.title} width={512} height={768} loading="lazy" className="aspect-[2/3] h-full w-full object-cover transition group-active:scale-95" />
                </div>
                <div className="mt-2.5 px-1">
                  <p className="line-clamp-1 text-sm font-semibold">{b.title}</p>
                  <p className="line-clamp-1 text-xs text-muted-foreground">{b.author}</p>
                  <p className="mt-1 font-display text-sm font-semibold text-primary">€{b.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </main>

      <BottomNav />
    </PhoneFrame>
  );
}

function Section({ title, actionTo, children }: { title: string; actionTo?: string; children: React.ReactNode }) {
  return (
    <section className="mt-7">
      <div className="mb-3 flex items-end justify-between">
        <h3 className="font-display text-lg font-semibold">{title}</h3>
        {actionTo && <Link to={actionTo as any} className="text-xs font-semibold text-primary">See all</Link>}
      </div>
      {children}
    </section>
  );
}
