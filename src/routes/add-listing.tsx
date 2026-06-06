import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ImagePlus, X } from "lucide-react";
import { categories } from "@/lib/books";
import { useState } from "react";

export const Route = createFileRoute("/add-listing")({ component: AddListing });

function AddListing() {
  const nav = useNavigate();
  const [cat, setCat] = useState("Fiction");

  return (
    <PhoneFrame withNav>
      <header className="flex items-center justify-between px-6 pb-2 pt-12">
        <h1 className="font-display text-2xl font-semibold">New listing</h1>
        <button onClick={() => nav({ to: "/home" })} className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-muted"><X className="h-5 w-5" /></button>
      </header>
      <form className="space-y-4 px-6 pt-4" onSubmit={(e) => { e.preventDefault(); nav({ to: "/home" }); }}>
        <div className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <button type="button" className="flex h-24 w-24 shrink-0 flex-col items-center justify-center gap-1 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 text-primary">
            <ImagePlus className="h-6 w-6" />
            <span className="text-[10px] font-semibold">Add photo</span>
          </button>
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-muted text-[10px] text-muted-foreground">Cover</div>
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-muted text-[10px] text-muted-foreground">Back</div>
        </div>

        <Field label="Book title" placeholder="e.g. Atomic Habits" />
        <Field label="Author" placeholder="e.g. James Clear" />

        <div>
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Category</span>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                type="button"
                key={c.id}
                onClick={() => setCat(c.name)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium ${cat === c.name ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}
              >
                {c.emoji} {c.name}
              </button>
            ))}
          </div>
        </div>

        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Description</span>
          <textarea
            rows={4}
            placeholder="Condition details, why you're selling…"
            className="w-full resize-none rounded-2xl border border-input bg-card px-4 py-3.5 text-sm shadow-[var(--shadow-soft)] outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
          />
        </label>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Price (€)" type="number" placeholder="9.50" />
          <Field label="Condition" placeholder="Like new" />
        </div>

        <button className="mt-3 w-full rounded-2xl bg-primary py-4 font-display font-semibold text-primary-foreground shadow-[var(--shadow-card)]">Publish listing</button>
      </form>
      <BottomNav />
    </PhoneFrame>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <input {...props} className="w-full rounded-2xl border border-input bg-card px-4 py-3.5 text-sm shadow-[var(--shadow-soft)] outline-none focus:border-primary focus:ring-2 focus:ring-primary/15" />
    </label>
  );
}
