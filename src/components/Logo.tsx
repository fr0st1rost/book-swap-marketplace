export function Logo({ size = 56 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-card)]"
        style={{ width: size, height: size }}
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-1/2 w-1/2">
          <path d="M4 5a2 2 0 0 1 2-2h5v18H6a2 2 0 0 1-2-2V5Z" fill="currentColor" opacity=".95" />
          <path d="M13 3h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5V3Z" fill="var(--secondary)" />
        </svg>
      </div>
      <div className="font-display text-2xl font-semibold tracking-tight">
        Book<span className="text-primary">Swap</span>
      </div>
    </div>
  );
}
