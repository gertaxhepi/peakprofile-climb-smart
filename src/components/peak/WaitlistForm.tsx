import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const emailSchema = z
  .string()
  .trim()
  .min(3, { message: "Please enter your email address." })
  .max(254, { message: "That email address is too long." })
  .email({ message: "Please enter a valid email address." });

type Status = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setStatus("error");
      setMessage(parsed.error.issues[0].message);
      return;
    }

    setStatus("submitting");
    setMessage("");

    const { error } = await supabase
      .from("waitlist")
      .insert({ email: parsed.data.toLowerCase() });

    // 23505 = duplicate email; the person is already on the list.
    if (error && error.code !== "23505") {
      console.error(error);
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      return;
    }

    setStatus("success");
    setMessage("You're on the list. I'll let you know when PeakProfile is ready.");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-10 w-full max-w-xl">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="waitlist-email" className="sr-only">
            Your email address
          </label>
          <input
            id="waitlist-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            aria-describedby="waitlist-status"
            aria-invalid={status === "error"}
            className="h-14 w-full rounded-full border border-white/45 bg-white/12 px-6 text-[16px] text-white placeholder:text-white/65 outline-none backdrop-blur-[2px] transition-colors focus-visible:border-white"
          />
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="h-14 shrink-0 rounded-full bg-white px-8 text-[16px] font-medium text-charcoal transition-transform hover:-translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {status === "submitting" ? "Adding you…" : "Notify me"}
        </button>
      </div>

      <p
        id="waitlist-status"
        role="status"
        aria-live="polite"
        className={`mt-4 min-h-[1.5rem] text-[15px] ${
          status === "error" ? "text-ice" : "text-white"
        }`}
      >
        {message}
      </p>

      <p className="mt-1 text-[14px] text-white/70">
        No newsletter. Just the PeakProfile launch update.
      </p>
    </form>
  );
}
