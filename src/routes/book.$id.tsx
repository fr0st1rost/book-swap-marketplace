import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ArrowLeft, Heart, MessageCircle, Share2, Star } from "lucide-react";
import { getBook } from "@/lib/books";
import { useState } from "react";

export const Route = createFileRoute("/book/$id")({
  component: BookDetail,
  notFoundComponent: () => <div className="p-10 text-center">Book not found</div>,
});

function BookDetail() {
  const { id } = Route.useParams();
  const book = getBook(id);
  const router = useRouter();
  const [fav, setFav] = useState(false);
  if (!book) return <div className="p-10">Not found.</div>;

  return (
    <PhoneFrame withNav>
      <div className="relative">
        <div className="relative h-[420px] overflow-hidden bg-gradient-to-b from-primary/15 to-background">
          <img src={book.cover} alt={book.title} width={512} height={768} className="absolute inset-0 h-full w-full scale-110 object-cover opacity-30 blur-2xl" />
          <div className="relative flex h-full items-center justify-between px-6 pt-12">
            <button onClick={() => router.history.back()} className="flex h-10 w-10 items-center justify-center rounded-full bg-card/90 shadow-[var(--shadow-soft)] backdrop-blur">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              <button onClick={() => setFav((f) => !f)} className="flex h-10 w-10 items-center justify-center rounded-full bg-card/90 shadow-[var(--shadow-soft)] backdrop-blur">
                <Heart className={`h-5 w-5 ${fav ? "fill-destructive text-destructive" : "text-foreground"}`} />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-card/90 shadow-[var(--shadow-soft)] backdrop-blur">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-center pb-4">
            <img src={book.cover} alt="" width={512} height={768} className="h-72 w-48 rounded-2xl object-cover shadow-[var(--shadow-float)]" />
          </div>
        </div>

        <div className="-mt-2 rounded-t-3xl bg-background px-6 pb-32 pt-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="font-display text-2xl font-semibold leading-tight">{book.title}</h1>
              <p className="mt-1 text-sm text-muted-foreground">by {book.author}</p>
            </div>
            <div className="text-right">
              <p className="font-display text-2xl font-bold text-primary">€{book.price.toFixed(2)}</p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">incl. tax</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>{book.category}</Pill>
            <Pill>{book.condition}</Pill>
            <Pill><Star className="mr-1 inline h-3 w-3 fill-secondary text-secondary" /> 4.8</Pill>
          </div>

          <div className="mt-6">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">Description</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85">{book.description}</p>
          </div>

          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 font-display font-semibold text-primary">
              {book.seller.charAt(0)}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">{book.seller}</p>
              <p className="text-xs text-muted-foreground">Seller · ⭐ 4.9 · 32 sales</p>
            </div>
            <Link to="/messages" className="rounded-full border border-primary/25 px-3 py-1.5 text-xs font-semibold text-primary">View</Link>
          </div>
        </div>

        <div className="fixed bottom-20 left-1/2 z-30 w-full max-w-[480px] -translate-x-1/2 border-t border-border bg-card/95 px-6 py-3 backdrop-blur">
          <div className="flex gap-3">
            <button onClick={() => setFav((f) => !f)} className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border">
              <Heart className={`h-5 w-5 ${fav ? "fill-destructive text-destructive" : ""}`} />
            </button>
            <Link to="/messages" className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 font-display text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)]">
              <MessageCircle className="h-4 w-4" /> Message seller
            </Link>
          </div>
        </div>
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/80">{children}</span>;
}
