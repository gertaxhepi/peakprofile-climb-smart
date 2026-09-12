import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const emailSchema = z
  .string()
  .trim()
  .min(3)
  .max(254)
  .email()
  .transform((v) => v.toLowerCase());

const REPLY_TO = "xhepigerta@gmail.com";

export const joinWaitlist = createServerFn({ method: "POST" })
  .inputValidator((data) => emailSchema.parse(data))
  .handler(async ({ data: email }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // Check first: a duplicate signup must not trigger another confirmation email.
    const { data: existing } = await supabaseAdmin
      .from("waitlist")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (existing) {
      return { ok: true as const, alreadyJoined: true as const };
    }

    const { error } = await supabaseAdmin.from("waitlist").insert({ email });

    // 23505 = unique violation — inserted concurrently; treat as already joined.
    if (error) {
      if (error.code === "23505") {
        return { ok: true as const, alreadyJoined: true as const };
      }
      throw new Error("Could not join the waitlist. Please try again.");
    }

    // Send only after the address is stored. The idempotency key dedupes retries.
    // A failed send never blocks the signup — the address is already stored.
    let emailSent = false;
    try {
      const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
      const result = await sendTemplateEmail("waitlist-confirmation", email, {
        idempotencyKey: `waitlist-confirmation-${email}`,
        replyTo: REPLY_TO,
      });
      emailSent = result.sent;
    } catch (err) {
      console.error("waitlist confirmation email failed", err);
    }

    return { ok: true as const, alreadyJoined: false as const, emailSent };
  });
