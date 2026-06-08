/**
 * Delivers in-app feedback to the maintainers' inboxes via Web3Forms — a
 * client-side form-to-email relay, so no backend or secret is required (the
 * access key is public-safe by design). Each key delivers to the inbox that
 * registered it; one key per recipient inbox covers multiple recipients on the
 * free tier (CC is a paid feature).
 *
 * Create a free key (no login) at https://web3forms.com by entering the
 * destination address, then paste it below. With no keys configured the send
 * is a no-op and feedback is only saved locally (see FeedbackButton).
 */

const ENDPOINT = 'https://api.web3forms.com/submit';

/**
 * Web3Forms access keys — one per recipient inbox. Public-safe to ship.
 *   jeremyliu621@gmail.com → (paste key)
 *   ttethanyang@gmail.com  → (paste key)
 */
export const FEEDBACK_FORM_KEYS: readonly string[] = [
  // 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', // jeremyliu621@gmail.com
  // 'yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy', // ttethanyang@gmail.com
];

/**
 * Emails a feedback message to every configured recipient. Best-effort: resolves
 * with `delivered: true` if at least one inbox accepted it, `false` otherwise
 * (including when no keys are configured). Never throws.
 */
export async function sendFeedbackEmail(
  message: string,
  replyTo: string | null,
  keys: readonly string[] = FEEDBACK_FORM_KEYS,
): Promise<{ delivered: boolean }> {
  if (keys.length === 0) return { delivered: false };

  const results = await Promise.allSettled(
    keys.map((accessKey) =>
      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'LeetMeow feedback',
          from_name: 'LeetMeow',
          // Web3Forms uses `replyto` so a reply goes to the user, when given.
          ...(replyTo ? { replyto: replyTo } : {}),
          message,
        }),
      }).then((res) => res.ok),
    ),
  );

  return { delivered: results.some((r) => r.status === 'fulfilled' && r.value === true) };
}
