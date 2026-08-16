// Two variants, and the distinction matters:
//
//   intro  — fires on mount. Use for anything above the fold. Content that is
//            already on screen at load must never wait on a scroll trigger; if
//            IntersectionObserver is slow, blocked, or the page is rendered by
//            a crawler/screenshotter, whileInView can leave it stuck at
//            opacity 0 and the section renders blank.
//   fadeUp — fires on scroll. Use only for content below the fold.

export const intro = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
} as const;

export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' },
} as const;
