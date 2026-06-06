import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ChevronRight, Heart, History, BookMarked, Settings, LogOut, Pencil } from "lucide-react";

export const Route = createFileRoute("/profile")({ component: ProfilePage });

function ProfilePage() {
  return (
    <PhoneFrame withNav>
      <header className="relative overflow-hidden bg-primary px-6 pb-20 pt-14 text-primary-foreground">
        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-secondary/30 blur-2xl" />
        <h1 className="relative font-display text-xl font-semibold">Profile</h1>
      </header>

      <div className="-mt-14 px-6">
        <div className="flex items-center gap-4 rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 font-display text-2xl font-semibold text-primary-foreground">
            JD
          </div>
          <div className="flex-1">
            <p className="font-display text-lg font-semibold">Jane Doe</p>
            <p className="text-xs text-muted-foreground">jane.doe@university.edu</p>
            <div className="mt-1 flex items-center gap-3 text-[11px] text-muted-foreground">
              <span>⭐ 4.9</span><span>·</span><span>27 sales</span>
            </div>
          </div>
          <Link to="/edit-profile" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Pencil className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3 text-center">
          <Stat label="Listings" value="12" />
          <Stat label="Sold" value="27" />
          <Stat label="Saved" value="42" />
        </div>

        <nav className="mt-6 space-y-2">
          <Row to="/edit-profile" icon={Pencil} label="Edit profile" />
          <Row to="/favorites" icon={Heart} label="Favorites" />
          <Row to="/transactions" icon={History} label="Transaction history" />
          <Row to="/add-listing" icon={BookMarked} label="My listings" />
          <Row to="/edit-profile" icon={Settings} label="Settings" />
        </nav>

        <Link to="/" className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-destructive/25 bg-card py-3.5 font-display text-sm font-semibold text-destructive">
          <LogOut className="h-4 w-4" /> Log out
        </Link>
      </div>

      <BottomNav />
    </PhoneFrame>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card py-3 shadow-[var(--shadow-soft)]">
      <p className="font-display text-xl font-semibold text-primary">{value}</p>
      <p className="text-[11px] text-muted-foreground">{label}</p>
    </div>
  );
}

function Row({ to, icon: Icon, label }: { to: string; icon: typeof Heart; label: string }) {
  return (
    <Link to={to as any} className="flex items-center gap-4 rounded-2xl border border-border bg-card px-4 py-3.5 shadow-[var(--shadow-soft)]">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <span className="flex-1 text-sm font-medium">{label}</span>
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </Link>
  );
}
