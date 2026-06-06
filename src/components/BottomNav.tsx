import { Link, useLocation } from "@tanstack/react-router";
import { Home, Heart, Plus, User, BookOpen } from "lucide-react";

const items = [
  { to: "/home", label: "Home", icon: Home },
  { to: "/catalog", label: "Browse", icon: BookOpen },
  { to: "/add-listing", label: "Sell", icon: Plus, primary: true },
  { to: "/favorites", label: "Saved", icon: Heart },
  { to: "/profile", label: "Profile", icon: User },
] as const;

export function BottomNav() {
  const { pathname } = useLocation();
  return (
    <nav className="fixed bottom-0 left-1/2 z-40 w-full max-w-[480px] -translate-x-1/2 border-t border-border bg-card/95 backdrop-blur-lg">
      <ul className="grid grid-cols-5 px-2 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2">
        {items.map(({ to, label, icon: Icon, primary }) => {
          const active = pathname === to || (to !== "/home" && pathname.startsWith(to));
          if (primary) {
            return (
              <li key={to} className="flex items-center justify-center">
                <Link
                  to={to}
                  className="-mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-float)] transition active:scale-95"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </Link>
              </li>
            );
          }
          return (
            <li key={to}>
              <Link
                to={to}
                className={`flex flex-col items-center gap-1 rounded-lg px-2 py-1.5 text-[10px] font-medium transition ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <Icon className={`h-5 w-5 ${active ? "stroke-[2.4]" : ""}`} />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
