import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ArrowLeft, Search } from "lucide-react";

export const Route = createFileRoute("/messages")({ component: MessagesPage });

const convos = [
  { id: "1", name: "Emma R.", initials: "ER", last: "Yes it's still available!", time: "2m", unread: 2 },
  { id: "2", name: "Marco L.", initials: "ML", last: "Can you do €10 with shipping?", time: "1h", unread: 0 },
  { id: "3", name: "Sophia K.", initials: "SK", last: "Perfect, I'll send the address.", time: "Yesterday", unread: 0 },
  { id: "4", name: "Liam T.", initials: "LT", last: "Thank you! ⭐⭐⭐⭐⭐", time: "Mon", unread: 0 },
  { id: "5", name: "Aisha P.", initials: "AP", last: "Is the spine intact?", time: "Sun", unread: 1 },
];

function MessagesPage() {
  return (
    <PhoneFrame>
      <header className="px-6 pb-3 pt-12">
        <div className="flex items-center gap-3">
          <Link to="/home" className="-ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-muted"><ArrowLeft className="h-5 w-5" /></Link>
          <h1 className="font-display text-2xl font-semibold">Messages</h1>
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-soft)]">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input placeholder="Search conversations…" className="w-full bg-transparent text-sm outline-none" />
        </div>
      </header>
      <main className="px-3">
        {convos.map((c) => (
          <button key={c.id} className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition hover:bg-muted/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 font-display text-sm font-semibold text-primary-foreground">{c.initials}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">{c.name}</p>
                <span className="text-[11px] text-muted-foreground">{c.time}</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <p className="truncate text-xs text-muted-foreground">{c.last}</p>
                {c.unread > 0 && (
                  <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-bold text-primary-foreground">{c.unread}</span>
                )}
              </div>
            </div>
          </button>
        ))}
      </main>
    </PhoneFrame>
  );
}
