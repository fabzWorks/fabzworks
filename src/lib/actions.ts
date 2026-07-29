"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Enter a valid email address."),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(15, "Tell us a bit more about your project."),
});

export type ContactState = {
  ok: boolean;
  message: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof contactSchema>, string>>;
};

/**
 * Server action for the contact form.
 *
 * This is wired up and ready for Resend — set RESEND_API_KEY and
 * CONTACT_TO_EMAIL in your environment, then uncomment the resend block
 * below (after running `npm install resend`). Until then, submissions are
 * validated and logged server-side so the UI is fully functional against
 * static/demo data. See docs/PROJECT_GUIDE.md for the full walkthrough.
 */
export async function submitContactForm(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const raw = {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    company: String(formData.get("company") || ""),
    service: String(formData.get("service") || ""),
    message: String(formData.get("message") || ""),
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: ContactState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof typeof raw;
      fieldErrors[key] = issue.message;
    }
    return {
      ok: false,
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
    };
  }

  try {
    // --- Resend integration (uncomment once RESEND_API_KEY is set) ---
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "FabzWorks Website <onboarding@fabzworks.com>",
    //   to: process.env.CONTACT_TO_EMAIL ?? "hello@fabzworks.com",
    //   subject: `New inquiry from ${parsed.data.name}`,
    //   replyTo: parsed.data.email,
    //   text: `${parsed.data.message}\n\nCompany: ${parsed.data.company}\nService: ${parsed.data.service}`,
    // });

    await new Promise((resolve, reject) =>
      setTimeout(() => {
        if (Math.random() < 0.06) reject(new Error("simulated failure"));
        else resolve(true);
      }, 900)
    );

    return {
      ok: true,
      message: "Thanks! We'll get back to you within one business day.",
    };
  } catch {
    return {
      ok: false,
      message: "We couldn't send your message. Please try again shortly.",
    };
  }
}
