import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/register")({ component: RegisterPage });

function RegisterPage() {
  const nav = useNavigate();
  return (
    <PhoneFrame>
      <div className="flex min-h-screen flex-col px-7 pb-10 pt-12">
        <Link to="/" className="-ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/70 hover:bg-muted">
          <ArrowLeft className="h-5 w-5" />
        </Link>

        <div className="mt-8">
          <h1 className="font-display text-3xl font-semibold">Create account</h1>
          <p className="mt-2 text-sm text-muted-foreground">Join thousands of readers swapping books.</p>
        </div>

        <form
          className="mt-8 space-y-4"
          onSubmit={(e) => { e.preventDefault(); nav({ to: "/home" }); }}
        >
          <div className="grid grid-cols-2 gap-3">
            <Field label="First name" placeholder="Jane" />
            <Field label="Last name" placeholder="Doe" />
          </div>
          <Field label="Email" type="email" placeholder="you@example.com" />
          <Field label="Password" type="password" placeholder="••••••••" />
          <Field label="Confirm password" type="password" placeholder="••••••••" />
          <button className="mt-4 w-full rounded-2xl bg-primary py-4 font-display font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition active:scale-[0.98]">
            Create account
          </button>
        </form>

        <p className="mt-auto pt-6 text-center text-sm text-muted-foreground">
          Already a member? <Link to="/login" className="font-semibold text-primary">Log in</Link>
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
