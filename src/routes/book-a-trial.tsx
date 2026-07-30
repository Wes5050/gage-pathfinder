import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { ArrowRight, Check } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/book-a-trial")({
  head: () => ({
    meta: [
      { title: "Book a Free Trial Class | GAGE Center Blue Springs" },
      {
        name: "description",
        content:
          "Reserve a free trial gymnastics, tumbling or ninja class at GAGE Center in Blue Springs, MO. Three quick steps, confirmed the same business day.",
      },
      { property: "og:title", content: "Book a Free Trial Class | GAGE Center" },
      {
        property: "og:description",
        content: "Three quick steps to reserve your child's free trial class at GAGE Center.",
      },
    ],
  }),
  component: BookTrial,
});

const AGES = ["1–2", "3–5", "6–9", "10–14"];
const PROGRAMS = ["Preschool Gymnastics", "Recreational Gymnastics", "Tumbling", "Dragon Ninja"];
const TIMES = [
  "Mon 4:00 PM",
  "Tue 5:15 PM",
  "Wed 10:00 AM",
  "Wed 5:00 PM",
  "Thu 4:30 PM",
  "Sat 9:00 AM",
];

const schema = z.object({
  age: z.string().min(1, "Choose an age range"),
  program: z.string().min(1, "Choose a program"),
  time: z.string().min(1, "Choose a trial time"),
  childName: z.string().trim().min(1, "Child's name is required").max(80),
  parentName: z.string().trim().min(1, "Your name is required").max(80),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
});

function BookTrial() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    age: "",
    program: "",
    time: "",
    childName: "",
    parentName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    navigate({
      to: "/book-a-trial/confirmation",
      search: { child: result.data.childName, time: result.data.time },
    });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-accent">
          Free trial class
        </p>
        <h1 className="mt-3 font-display text-3xl font-black uppercase leading-tight tracking-tight text-ink sm:text-5xl">
          Book the first <span className="text-primary">brave step.</span>
        </h1>
        <p className="mt-3 max-w-lg text-muted-foreground">
          Three quick steps. We confirm your spot the same business day.
        </p>

        <ol className="mt-10 grid grid-cols-3 gap-2" aria-label="Progress">
          {["Child", "Class", "Details"].map((label, i) => (
            <li key={label} className="min-w-0">
              <div
                className={cn(
                  "h-1 rounded-full",
                  i <= step ? "bg-primary" : "bg-border",
                )}
              />
              <span
                className={cn(
                  "mt-2 block truncate font-display text-xs font-bold uppercase tracking-wide",
                  i <= step ? "text-ink" : "text-muted-foreground",
                )}
              >
                {i + 1}. {label}
              </span>
            </li>
          ))}
        </ol>

        <form onSubmit={submit} className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8">
          {step === 0 && (
            <fieldset>
              <legend className="font-display text-xl font-extrabold uppercase tracking-tight text-ink">
                How old is your child?
              </legend>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {AGES.map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => {
                      set("age", a);
                      setStep(1);
                    }}
                    className={cn(
                      "rounded-xl border px-4 py-5 font-display text-lg font-bold transition-colors",
                      form.age === a
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary",
                    )}
                  >
                    {a}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                We use age to show only the classes your child can actually join.
              </p>
            </fieldset>
          )}

          {step === 1 && (
            <fieldset>
              <legend className="font-display text-xl font-extrabold uppercase tracking-tight text-ink">
                Pick a program and time
              </legend>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {PROGRAMS.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => set("program", p)}
                    className={cn(
                      "rounded-xl border px-4 py-4 text-left font-display text-sm font-bold uppercase tracking-wide transition-colors",
                      form.program === p
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary",
                    )}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <h2 className="mt-8 font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Available trial times
              </h2>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {TIMES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => set("time", t)}
                    className={cn(
                      "rounded-xl border px-3 py-3 text-sm font-semibold transition-colors",
                      form.time === t
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary",
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="rounded-full border border-border px-6 py-3 font-display text-sm font-bold uppercase tracking-wide"
                >
                  Back
                </button>
                <button
                  type="button"
                  disabled={!form.program || !form.time}
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-primary-foreground disabled:opacity-40"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </fieldset>
          )}

          {step === 2 && (
            <fieldset>
              <legend className="font-display text-xl font-extrabold uppercase tracking-tight text-ink">
                Where should we send the confirmation?
              </legend>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { k: "childName", label: "Child's first name", type: "text" },
                  { k: "parentName", label: "Your name", type: "text" },
                  { k: "email", label: "Email", type: "email" },
                  { k: "phone", label: "Mobile phone", type: "tel" },
                ].map((f) => (
                  <div key={f.k} className="min-w-0">
                    <label
                      htmlFor={f.k}
                      className="block font-display text-xs font-bold uppercase tracking-widest text-muted-foreground"
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.k}
                      type={f.type}
                      maxLength={255}
                      value={form[f.k as keyof typeof form]}
                      onChange={(e) => set(f.k, e.target.value)}
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                    />
                    {errors[f.k] && (
                      <p className="mt-1 text-xs font-medium text-destructive">{errors[f.k]}</p>
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-5 flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                No payment today. The trial class is free and there's no obligation to enroll.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="rounded-full border border-border px-6 py-3 font-display text-sm font-bold uppercase tracking-wide"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  Reserve my trial
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </fieldset>
          )}
        </form>

        <p className="mt-6 text-sm text-muted-foreground">
          Prefer to talk?{" "}
          <a href="tel:+18162297775" className="font-semibold text-primary">
            Call (816) 229-7775
          </a>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
