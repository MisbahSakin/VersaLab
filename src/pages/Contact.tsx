import React, { useState } from 'react';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { fadeUp, intro } from '../motion';
import { Description } from '../Seo';
import { site, emailjs } from '../siteConfig';

const CONTACT_EMAIL = site.email;

// Value is what we store; label is what goes in the email. Sending the raw
// value meant inquiries arrived reading "web-development".
const PROJECT_TYPES = [
  { value: 'web-development', label: 'Web development' },
  { value: 'app-design', label: 'App design' },
  { value: 'web-application', label: 'Web application' },
  { value: 'product-design', label: 'Product design / UI/UX' },
  { value: 'branding', label: 'Branding systems' },
  { value: 'academic', label: 'Academic companion' },
  { value: 'other', label: 'Other' },
] as const;

const details = [
  { label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { label: 'Phone', value: site.phone, href: site.phoneHref },
  { label: 'Hours', value: 'Mon–Fri, 9am – 6pm' },
  { label: 'Location', value: site.location },
  { label: 'Reply time', value: '1 business day', live: true },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSendFailed(false);

    // Honeypot: bots fill hidden fields, humans can't see them. Unlike Web3Forms,
    // EmailJS has no server-side honeypot handling, so this client-side bail is
    // the only thing stopping a scripted submit — keep it, and keep the EmailJS
    // domain whitelist on as the real defence.
    const botcheck = new FormData(e.currentTarget).get('botcheck');
    if (botcheck) {
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: emailjs.serviceId,
          template_id: emailjs.templateId,
          user_id: emailjs.publicKey,
          template_params: {
            ...formData,
            // Readable label, not the stored value, and a local timestamp for
            // the {{time}} slot in the EmailJS template.
            projectType:
              PROJECT_TYPES.find((t) => t.value === formData.projectType)?.label ??
              formData.projectType,
            company: formData.company.trim() || '—',
            time: new Date().toLocaleString('en-GB', {
              dateStyle: 'medium',
              timeStyle: 'short',
            }),
          },
        }),
      });

      // EmailJS signals failure by status code (and returns a plain-text reason),
      // unlike Web3Forms which returned 200 with {success:false}.
      if (!res.ok) throw new Error(await res.text().catch(() => 'Submission failed'));

      setIsSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        company: '',
        projectType: '',
        message: ''
      });
    } catch {
      setSendFailed(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (fieldId: string) =>
    `w-full bg-cream/60 text-ink text-[0.875rem] px-4 py-3 rounded-xl border outline-none transition-colors ${
      errors[fieldId]
        ? 'border-red-400 focus:border-red-500'
        : 'border-line hover:border-violet/40 focus:border-violet focus:bg-paper'
    }`;

  const labelClasses = 'block text-[0.75rem] font-semibold text-ink mb-2';

  return (
    <div>
      <title>VersaLab | Let's Talk</title>
      <Description text="Tell us about your project. We reply to every inquiry within one business day." />

      {/* ---- HERO ---- */}
      <section className="px-6 pt-28 md:pt-32 pb-10 md:pb-14">
        <motion.div className="mx-auto max-w-6xl" {...intro}>
          <p className="t-eyebrow mb-5">Let's Talk</p>
          <h1 className="t-h1 text-ink mb-6 max-w-[16ch]">
            Tell us what you're <span className="t-accent">building.</span>
          </h1>
          <p className="t-body max-w-[46ch]">
            The more you can say about the objective and the timeline, the more useful our first
            reply will be.
          </p>
        </motion.div>
      </section>

      {/* ---- FORM + DETAILS ---- */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_1.5fr] gap-4">
          {/* Details */}
          <motion.aside
            className="rounded-2xl bg-[linear-gradient(150deg,#f2eeff,#f7f5f1_60%)] border border-line p-6 md:p-8 h-fit"
            {...fadeUp}
          >
            <h2 className="t-h3 text-ink mb-6">Studio details</h2>
            <dl className="space-y-5">
              {details.map((d) => (
                <div key={d.label}>
                  <dt className="t-eyebrow !text-muted mb-1.5">{d.label}</dt>
                  <dd className="text-[0.875rem] font-medium text-ink flex items-center gap-2">
                    {d.live && (
                      <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-violet shrink-0" />
                    )}
                    {d.href ? (
                      <a href={d.href} className="hover:text-violet transition-colors break-all">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.aside>

          {/* Form */}
          <motion.div className="card p-6 md:p-8" {...fadeUp}>
            {isSuccess ? (
              <div className="py-10 md:py-16 text-center">
                <span className="inline-flex w-14 h-14 rounded-2xl bg-violet/10 items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-violet" />
                </span>
                <h2 className="t-h3 text-ink mb-3">Request received</h2>
                <p className="t-small max-w-[40ch] mx-auto">
                  Thanks — we'll review the details and get back to you within one business day.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="btn-ghost mt-8"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {sendFailed && (
                  <div role="alert" className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <p className="text-[0.8125rem] text-red-800 leading-relaxed">
                      We couldn't send that. Please email us directly at{' '}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-red-900">
                        {CONTACT_EMAIL}
                      </a>{' '}
                      and we'll pick it up from there.
                    </p>
                  </div>
                )}

                {/* Honeypot — hidden from humans, irresistible to bots. */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <div>
                  <label htmlFor="fullName" className={labelClasses}>
                    Name <span className="text-violet">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={inputClasses('fullName')}
                    placeholder="Jane Doe"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" role="alert" className="text-red-600 text-xs mt-1.5">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      Work email <span className="text-violet">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses('email')}
                      placeholder="jane@company.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="text-red-600 text-xs mt-1.5">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className={labelClasses}>
                      Company <span className="font-normal text-muted">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClasses('company')}
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className={labelClasses}>
                    Project type <span className="text-violet">*</span>
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`${inputClasses('projectType')} cursor-pointer`}
                    aria-invalid={!!errors.projectType}
                    aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                  >
                    <option value="">Select type</option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p id="projectType-error" role="alert" className="text-red-600 text-xs mt-1.5">
                      {errors.projectType}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className={labelClasses}>
                    Project details <span className="text-violet">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`${inputClasses('message')} resize-none`}
                    placeholder="Objectives, timeline, and anything technical we should know..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" role="alert" className="text-red-600 text-xs mt-1.5">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-1">
                  <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending
                      </>
                    ) : (
                      'Send request'
                    )}
                  </button>
                  <p className="text-[0.75rem] text-muted mt-4 leading-relaxed">
                    We'll only use your details to respond to this inquiry. See our{' '}
                    <Link to="/privacy" className="text-ink underline hover:text-violet transition-colors">
                      privacy policy
                    </Link>
                    .
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
