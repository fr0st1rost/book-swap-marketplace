import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Logo } from "@/components/Logo";
import { Globe, Mail, Send } from "lucide-react";

export const Route = createFileRoute("/")({ component: Prelogin });

function Prelogin() {
  return (
    <PhoneFrame>
      <div className="relative flex min-h-screen flex-col justify-between overflow-hidden px-7 pb-10 pt-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary/40 blur-3xl" />
        <div className="absolute -left-16 top-40 h-60 w-60 rounded-full bg-primary/15 blur-3xl" />

        <div className="relative flex flex-1 flex-col items-center justify-center gap-6 text-center">
          <Logo size={88} />
          <div className="space-y-3">
            <h1 className="font-display text-4xl font-semibold leading-tight">
              Read more.<br />Spend less.
            </h1>
            <p className="mx-auto max-w-xs text-sm text-muted-foreground">
              The marketplace where students and book lovers buy, sell and swap second-hand books.
            </p>
          </div>
        </div>

        <div className="relative space-y-3">
          <Link
            to="/login"
            className="block w-full rounded-2xl bg-primary py-4 text-center font-display text-base font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition active:scale-[0.98]"
          >
            Log in
          </Link>
          <Link
            to="/register"
            className="block w-full rounded-2xl border border-primary/20 bg-card py-4 text-center font-display text-base font-semibold text-primary shadow-[var(--shadow-soft)] transition active:scale-[0.98]"
          >
            Create account
          </Link>
          <Link to="/home" className="block py-2 text-center text-sm font-medium text-muted-foreground underline-offset-4 hover:underline">
            Continue as guest
          </Link>
          <div className="flex items-center justify-center gap-5 pt-3 text-muted-foreground">
            <a href="#" aria-label="Instagram" className="rounded-full p-2 hover:text-primary"><Globe className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="rounded-full p-2 hover:text-primary"><Send className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="rounded-full p-2 hover:text-primary"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
