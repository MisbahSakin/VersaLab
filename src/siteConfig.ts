// Single source of truth for contact and site identity.
// Previously these were hardcoded per component, which is how the site ended up
// shipping two different email addresses and two different phone numbers.

export const site = {
  name: 'VersaLab',
  origin: 'https://www.versalab.org',
  email: 'contact@versalab.org',
  phone: '+880 1733 771266',
  phoneHref: 'tel:+8801733771266',
  location: 'Dhaka, Bangladesh',
} as const;

/**
 * EmailJS contact form config.
 *
 * These three values are client-side by design — EmailJS expects the public key
 * in browser code, and any VITE_ env var would be inlined into the bundle
 * anyway, so an env var would buy nothing. Keeping them here means there is no
 * environment variable to configure at deploy time.
 *
 * BECAUSE THESE ARE PUBLIC, the domain whitelist is what protects you:
 * EmailJS dashboard → Account → Security → add versalab.org (and only that).
 * Without it, anyone who reads your JS can send mail through your account.
 */
export const emailjs = {
  serviceId: 'service_e1wzwef',
  templateId: 'template_iettqfh',
  publicKey: 'BWCpNwD73e_B96PSs',
} as const;

/** The template in the EmailJS dashboard must reference exactly these variables. */
export const EMAILJS_TEMPLATE_VARS = [
  'fullName',
  'email',
  'company',
  'projectType',
  'message',
  'time',
] as const;
