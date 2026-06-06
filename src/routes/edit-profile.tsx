import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ArrowLeft, Camera } from "lucide-react";

export const Route = createFileRoute("/edit-profile")({ component: EditProfile });

function EditProfile() {
  const nav = useNavigate();
  return (
    <PhoneFrame>
      <div className="flex min-h-screen flex-col px-6 pb-10 pt-12">
        <div className="flex items-center gap-3">
          <Link to="/profile" className="-ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-muted"><ArrowLeft className="h-5 w-5" /></Link>
          <h1 className="font-display text-xl font-semibold">Edit profile</h1>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 font-display text-3xl font-semibold text-primary-foreground shadow-[var(--shadow-card)]">JD</div>
            <button className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-secondary text-secondary-foreground"><Camera className="h-4 w-4" /></button>
          </div>
        </div>

        <form className="mt-8 space-y-4" onSubmit={(e) => { e.preventDefault(); nav({ to: "/profile" }); }}>
          <div className="grid grid-cols-2 gap-3">
            <Field label="First name" defaultValue="Jane" />
            <Field label="Last name" defaultValue="Doe" />
          </div>
          <Field label="Email" type="email" defaultValue="jane.doe@university.edu" />
          <Field label="Phone" type="tel" defaultValue="+33 6 12 34 56 78" />
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Bio</span>
            <textarea
              rows={3}
              defaultValue="Lit student. I trade fiction & memoirs."
              className="w-full resize-none rounded-2xl border border-input bg-card px-4 py-3.5 text-sm shadow-[var(--shadow-soft)] outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
            />
          </label>
          <button className="mt-4 w-full rounded-2xl bg-primary py-4 font-display font-semibold text-primary-foreground shadow-[var(--shadow-card)]">Save changes</button>
        </form>
      </div>
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
