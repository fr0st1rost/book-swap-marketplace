import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ArrowLeft } from "lucide-react";
import { books } from "@/lib/books";

type Tx = { id: string; bookId: string; type: "Bought" | "Sold"; date: string; status: "Completed" | "Shipping" | "Pending" };

const txs: Tx[] = [
  { id: "t1", bookId: "2", type: "Bought", date: "12 May 2026", status: "Completed" },
  { id: "t2", bookId: "1", type: "Sold",   date: "08 May 2026", status: "Completed" },
  { id: "t3", bookId: "3", type: "Bought", date: "02 May 2026", status: "Shipping" },
  { id: "t4", bookId: "5", type: "Sold",   date: "28 Apr 2026", status: "Completed" },
  { id: "t5", bookId: "6", type: "Bought", date: "21 Apr 2026", status: "Pending" },
];

const statusStyle: Record<Tx["status"], string> = {
  Completed: "bg-primary/10 text-primary",
  Shipping: "bg-secondary/30 text-secondary-foreground",
  Pending: "bg-muted text-muted-foreground",
};

export const Route = createFileRoute("/transactions")({ component: TxPage });

function TxPage() {
  return (
    <PhoneFrame withNav>
      <header className="px-6 pb-2 pt-12">
        <div className="flex items-center gap-3">
          <Link to="/profile" className="-ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-muted"><ArrowLeft className="h-5 w-5" /></Link>
          <h1 className="font-display text-2xl font-semibold">History</h1>
        </div>
      </header>
      <main className="space-y-3 px-6 pt-4">
        {txs.map((t) => {
          const book = books.find((b) => b.id === t.bookId)!;
          return (
            <div key={t.id} className="flex gap-3 rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-soft)]">
              <img src={book.cover} alt={book.title} width={512} height={768} loading="lazy" className="h-20 w-14 rounded-xl object-cover" />
              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="line-clamp-1 text-sm font-semibold">{book.title}</p>
                    <p className="line-clamp-1 text-xs text-muted-foreground">{book.author}</p>
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${statusStyle[t.status]}`}>{t.status}</span>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground">{t.type} · {t.date}</span>
                  <span className="font-display text-sm font-semibold text-primary">€{book.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </main>
      <BottomNav />
    </PhoneFrame>
  );
}
