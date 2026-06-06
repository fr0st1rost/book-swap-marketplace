import type { ReactNode } from "react";

export function PhoneFrame({ children, withNav = false }: { children: ReactNode; withNav?: boolean }) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[oklch(0.95_0.012_160)] to-[oklch(0.92_0.018_80)] flex justify-center">
      <div className="relative w-full max-w-[480px] min-h-screen bg-background shadow-[var(--shadow-float)]">
        <div className={withNav ? "pb-28" : ""}>{children}</div>
      </div>
    </div>
  );
}
