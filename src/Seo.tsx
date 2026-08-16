import { useEffect } from 'react';

/**
 * React 19 hoists <title> by replacing it, but hoists <meta> by *appending*.
 * Rendering <meta name="description"> in a page therefore leaves two tags —
 * the static one from index.html plus the page's — and crawlers read the first,
 * so every route advertised the homepage description.
 *
 * Updating the existing tag in place keeps exactly one description: the static
 * one still serves scrapers that don't run JS, and it gets the right per-page
 * text once React mounts.
 */
export function Description({ text }: { text: string }) {
  useEffect(() => {
    // Block body, not concise: an effect's return value is treated as cleanup.
    const el = document.querySelector('meta[name="description"]');
    if (el) el.setAttribute('content', text);
  }, [text]);

  return null;
}
