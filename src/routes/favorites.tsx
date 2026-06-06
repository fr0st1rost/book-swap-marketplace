import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { Heart, Trash2 } from "lucide-react";
import { books } from "@/lib/books";

export const Route = createFileRoute("/favorites")({ component: FavoritesPage });

function FavoritesPage() {
  const favs = books.slice(0, 4);
  return (
    <PhoneFrame withNav>
      <header className="px-6 pb-2 pt-12">
        <h1 className="font-display text-2xl font-semibold">Saved</h1>
        <p className="mt-1 text-sm text-muted-foreground">{favs.length} books in your wishlist</p>
      </header>
      <main className="space-y-3 px-6 pt-4">
        {favs.map((b) => (
          <div key={b.id} className="flex gap-3 rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-soft)]">
            <Link to="/book/$id" params={{ id: b.id }} className="shrink-0">
              <img src={b.cover} alt={b.title} width={512} height={768} loading="lazy" className="h-24 w-16 rounded-xl object-cover shadow-[var(--shadow-soft)]" />
            </Link>
            <div className="flex flex-1 flex-col">
              <Link to="/book/$id" params={{ id: b.id }} className="text-sm font-semibold line-clamp-1">{b.title}</Link>
              <p className="text-xs text-muted-foreground line-clamp-1">{b.author}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{b.condition}</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-display text-base font-semibold text-primary">€{b.price.toFixed(2)}</span>
                <div className="flex gap-1">
                  <button className="flex h-8 w-8 items-center justify-center rounded-full text-destructive hover:bg-muted"><Trash2 className="h-4 w-4" /></button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full text-primary hover:bg-muted"><Heart className="h-4 w-4 fill-current" /></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
      <BottomNav />
    </PhoneFrame>
  );
}
