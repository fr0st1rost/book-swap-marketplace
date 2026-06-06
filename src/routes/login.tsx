import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/login")({ component: LoginPage });

function LoginPage() {
  const nav = useNavigate();
  return (
    <PhoneFrame>
      <div className="flex min-h-screen flex-col px-7 pb-10 pt-12">
        <Link to="/" className="-ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/70 hover:bg-muted">
          <ArrowLeft className="h-5 w-5" />
        </Link>

        <div className="mt-8">
          <h1 className="font-display text-3xl font-semibold">Welcome back</h1>
          <p className="mt-2 text-sm text-muted-foreground">Sign in to continue exploring stories.</p>
        </div>

        <form
          className="mt-10 space-y-5"
          onSubmit={(e) => { e.preventDefault(); nav({ to: "/home" }); }}
        >
          <Field label="Email" type="email" placeholder="you@example.com" />
          <Field label="Password" type="password" placeholder="••••••••" />
          <div className="flex justify-end">
            <a href="#" className="text-xs font-medium text-primary">Forgot password?</a>
          </div>
          <button className="mt-4 w-full rounded-2xl bg-primary py-4 font-display font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition active:scale-[0.98]">
            Log in
          </button>
        </form>

        <p className="mt-auto pt-8 text-center text-sm text-muted-foreground">
          New to BookSwap? <Link to="/register" className="font-semibold text-primary">Create account</Link>
        </p>
      </div>
    </PhoneFrame>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <input
        {...props}
        className="w-full rounded-2xl border border-input bg-card px-4 py-3.5 text-sm shadow-[var(--shadow-soft)] outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
      />
    </label>
  );
}
