"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  validateContactForm,
  submitContactForm,
  type ContactFieldErrors,
  type ContactFormPayload,
} from "@/lib/contactForm";

const emptyForm: ContactFormPayload = {
  name: "",
  email: "",
  message: "",
};

function inputErrorClass(hasError: boolean) {
  return hasError
    ? "border-error/60 focus:border-error focus:ring-error/25"
    : "border-outline-variant/30 focus:border-primary focus:ring-primary/20";
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormPayload>(emptyForm);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    id: number;
    message: string;
    variant: "success" | "error";
  } | null>(null);
  const [showSuccessPulse, setShowSuccessPulse] = useState(false);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dismissToast = useCallback(() => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
      toastTimerRef.current = null;
    }
    setToast(null);
  }, []);

  const showToast = useCallback(
    (message: string, variant: "success" | "error") => {
      dismissToast();
      const id = Date.now();
      setToast({ id, message, variant });
      toastTimerRef.current = setTimeout(() => {
        setToast((t) => (t?.id === id ? null : t));
        toastTimerRef.current = null;
      }, 4800);
    },
    [dismissToast]
  );

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => {
      if (!prev[name as keyof ContactFieldErrors]) return prev;
      const next = { ...prev };
      delete next[name as keyof ContactFieldErrors];
      return next;
    });
    setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const validation = validateContactForm(form);
    if (!validation.ok) {
      setFieldErrors(validation.errors);
      return;
    }
    setFieldErrors({});

    setLoading(true);
    try {
      const result = await submitContactForm(form);
      if (!result.ok) {
        setSubmitError(result.message);
        showToast(result.message, "error");
        return;
      }

      setForm(emptyForm);
      setShowSuccessPulse(true);
      window.setTimeout(() => setShowSuccessPulse(false), 2200);
      showToast("Message sent. Thank you — I'll reply soon.", "success");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className={`fixed bottom-6 left-4 right-4 z-[100] mx-auto flex max-w-md items-start gap-3 rounded-2xl border px-4 py-3 shadow-xl backdrop-blur-md sm:left-auto sm:right-6 ${
              toast.variant === "success"
                ? "border-secondary/30 bg-surface-container-lowest/95 text-on-background"
                : "border-error/25 bg-error-container/90 text-on-error-container"
            }`}
          >
            <span
              className={`material-symbols-outlined mt-0.5 shrink-0 text-xl ${
                toast.variant === "success" ? "text-secondary" : "text-error"
              }`}
              style={
                toast.variant === "success"
                  ? { fontVariationSettings: "'FILL' 1" }
                  : undefined
              }
            >
              {toast.variant === "success" ? "check_circle" : "error"}
            </span>
            <p className="flex-1 text-sm font-medium leading-snug">
              {toast.message}
            </p>
            <button
              type="button"
              onClick={dismissToast}
              className="rounded-lg p-1 opacity-70 transition-opacity hover:opacity-100 touch-manipulation"
              aria-label="Dismiss notification"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={
          showSuccessPulse
            ? { boxShadow: "0 0 0 4px rgba(53, 37, 205, 0.15)" }
            : { boxShadow: "0 0 0 0px rgba(53, 37, 205, 0)" }
        }
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="rounded-2xl"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-surface-container-lowest rounded-2xl p-6 sm:p-10 ambient-shadow space-y-6"
          noValidate
        >
          {submitError && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="overflow-hidden rounded-xl border border-error/30 bg-error-container/50 px-4 py-3 text-sm text-on-error-container"
              role="alert"
            >
              {submitError}
            </motion.div>
          )}

          <div className="space-y-2">
            <label
              htmlFor="contact-name"
              className="text-xs font-bold text-outline uppercase tracking-widest"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              autoComplete="name"
              disabled={loading}
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby={fieldErrors.name ? "name-error" : undefined}
              className={`w-full rounded-xl border bg-surface-container-low px-4 py-3.5 text-sm text-on-surface placeholder:text-outline/50 transition-all focus:outline-none focus:ring-2 disabled:opacity-60 ${inputErrorClass(
                Boolean(fieldErrors.name)
              )}`}
            />
            {fieldErrors.name && (
              <p id="name-error" className="text-xs font-medium text-error">
                {fieldErrors.name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="contact-email"
              className="text-xs font-bold text-outline uppercase tracking-widest"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              autoComplete="email"
              disabled={loading}
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? "email-error" : undefined}
              className={`w-full rounded-xl border bg-surface-container-low px-4 py-3.5 text-sm text-on-surface placeholder:text-outline/50 transition-all focus:outline-none focus:ring-2 disabled:opacity-60 ${inputErrorClass(
                Boolean(fieldErrors.email)
              )}`}
            />
            {fieldErrors.email && (
              <p id="email-error" className="text-xs font-medium text-error">
                {fieldErrors.email}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="contact-message"
              className="text-xs font-bold text-outline uppercase tracking-widest"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              rows={6}
              disabled={loading}
              aria-invalid={Boolean(fieldErrors.message)}
              aria-describedby={
                fieldErrors.message ? "message-error" : undefined
              }
              className={`w-full resize-none rounded-xl border bg-surface-container-low px-4 py-3.5 text-sm text-on-surface placeholder:text-outline/50 transition-all focus:outline-none focus:ring-2 disabled:opacity-60 ${inputErrorClass(
                Boolean(fieldErrors.message)
              )}`}
            />
            {fieldErrors.message && (
              <p id="message-error" className="text-xs font-medium text-error">
                {fieldErrors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {loading ? (
              <>
                <svg
                  className="h-4 w-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <span className="material-symbols-outlined text-base">
                  send
                </span>
              </>
            )}
          </button>
        </form>
      </motion.div>
    </>
  );
}
