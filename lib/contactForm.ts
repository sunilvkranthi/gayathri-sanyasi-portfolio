export type ContactFormPayload = {
  name: string;
  email: string;
  message: string;
};

export type ContactFieldErrors = Partial<
  Record<keyof ContactFormPayload, string>
>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Where the browser POSTs the form.
 * - Default: same-origin `/api/contact` (Google Sheet via server — no CORS, secrets stay on server).
 * - Optional `NEXT_PUBLIC_FORM_ENDPOINT`: absolute URL to a different backend.
 */
export function getContactFormSubmitUrl(): string {
  const raw = process.env.NEXT_PUBLIC_FORM_ENDPOINT?.trim();
  if (raw) {
    try {
      return new URL(raw).toString();
    } catch {
      /* fall through to default */
    }
  }
  return "/api/contact";
}

export function validateContactForm(
  data: ContactFormPayload
): { ok: true } | { ok: false; errors: ContactFieldErrors } {
  const errors: ContactFieldErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required.";
  }

  const email = data.email.trim();
  if (!email) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }
  return { ok: true };
}

export type SubmitContactResult =
  | { ok: true }
  | { ok: false; message: string };

/**
 * POST JSON { name, email, message } to getContactFormSubmitUrl().
 */
export async function submitContactForm(
  payload: ContactFormPayload
): Promise<SubmitContactResult> {
  const url = getContactFormSubmitUrl();
  const body = JSON.stringify({
    name: payload.name.trim(),
    email: payload.email.trim(),
    message: payload.message.trim(),
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (!response.ok) {
      let userMessage = `We couldn't send your message (${response.status}). Please try again.`;
      const ct = response.headers.get("content-type");
      if (ct?.includes("application/json")) {
        try {
          const data = (await response.json()) as { message?: string };
          if (typeof data.message === "string" && data.message.trim()) {
            userMessage = data.message.trim();
          }
        } catch {
          /* keep default */
        }
      }
      return { ok: false, message: userMessage };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      message:
        "Network error. Check your connection and try again in a moment.",
    };
  }
}
