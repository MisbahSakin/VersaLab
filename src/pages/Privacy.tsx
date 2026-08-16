import { motion } from 'motion/react';
import { fadeUp, intro } from '../motion';
import { Description } from '../Seo';
import { site } from '../siteConfig';

export default function Privacy() {
  return (
    <div>
      <title>VersaLab | Privacy</title>
      <Description text="What VersaLab collects, why, and how to have it deleted." />

      <section className="px-6 pt-28 md:pt-32 pb-12 md:pb-16">
        <motion.div className="mx-auto max-w-6xl" {...intro}>
          <p className="t-eyebrow mb-5">Privacy</p>
          <h1 className="t-h1 text-ink mb-6 max-w-[16ch]">
            The <span className="t-accent">short</span> version.
          </h1>
          <p className="t-body max-w-[52ch]">
            We collect what you type into our contact form, we use it to reply to you, and we don't
            sell or share it.
          </p>
        </motion.div>
      </section>

      <section className="px-6 pb-16 md:pb-24">
        <motion.div className="mx-auto max-w-6xl grid sm:grid-cols-2 gap-4" {...fadeUp}>
          <article className="card p-6 md:p-8">
            <h2 className="t-h3 text-ink mb-3">What we collect</h2>
            <p className="t-small leading-relaxed">
              Only what you submit through the contact form: your name, email address, and
              optionally your company, project type, and whatever you write in the
              message field. Nothing else. We don't run analytics, advertising trackers, or
              third-party cookies on this site.
            </p>
          </article>

          <article className="card p-6 md:p-8">
            <h2 className="t-h3 text-ink mb-3">Where it goes</h2>
            <p className="t-small leading-relaxed">
              Form submissions are delivered to our inbox through{' '}
              <a
                href="https://www.emailjs.com/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet underline hover:text-ink transition-colors"
              >
                EmailJS
              </a>
              , which relays the message on our behalf and is covered by its own privacy policy.
              From there it lives in our email, seen only by the people who need to respond to
              you.
            </p>
          </article>

          <article className="card p-6 md:p-8">
            <h2 className="t-h3 text-ink mb-3">How long we keep it</h2>
            <p className="t-small leading-relaxed">
              As long as the conversation is active, and for a reasonable period afterward in case
              you come back to us. We never use your details for unsolicited marketing.
            </p>
          </article>

          <article className="card p-6 md:p-8 bg-[linear-gradient(150deg,#f2eeff,#ffffff_60%)]">
            <h2 className="t-h3 text-ink mb-3">Getting it deleted</h2>
            <p className="t-small leading-relaxed">
              Email{' '}
              <a
                href={`mailto:${site.email}`}
                className="text-violet underline hover:text-ink transition-colors"
              >
                {site.email}
              </a>{' '}
              and ask. We'll delete everything we hold about you and confirm once it's done. You
              don't need to give a reason.
            </p>
          </article>
        </motion.div>
      </section>
    </div>
  );
}
