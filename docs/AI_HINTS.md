# AI Hint Assistant (Gemini)

LeetMeow has an optional, privacy-respecting AI coach embedded in the challenge
editor. It reads the problem and the user's current code and returns
**line-anchored hints** that are rendered inline in the editor.

## How to enable it

1. Get a free Gemini API key at <https://aistudio.google.com> → "Get API key".
2. Open LeetMeow **Settings → AI hints (Gemini)** (or click the ✦ AI button in
   the editor and follow "Add your key in Settings").
3. Paste the key. The assistant enables itself automatically.

The key is stored in `chrome.storage.local` — **device-only**. It is never
synced through your Google account and is **never committed to the repo**.
Requests go directly from your browser to Google's Generative Language API;
LeetMeow has no server and never sees your key or your code. Usage counts
against your own Gemini quota.

## Two modes

| Mode             | Button         | What it does                                              |
| ---------------- | -------------- | -------------------------------------------------------- |
| **Nudge**        | "Nudge me"     | Spoiler-free, Socratic direction. Names the technique to consider; never points at bugs or writes code. |
| **Review**       | "Review my code" | Analyzes the current code for bugs, missed edge cases, and complexity issues, each anchored to a line. Explains and nudges toward the fix — never rewrites the solution. |

## Visual annotations

Each returned hint with a line number:

- tints that editor line (severity color: red bug / amber suggestion / brand note)
  and adds a colored left border, and
- renders an inline annotation bubble below the line with the title + comment.

Clicking a hint in the panel scrolls to and flashes the line. "clear
annotations" removes them.

## Architecture

```
src/lib/ai/
  types.ts    AiHint, AiHintResponse, HintMode, AiError
  prompt.ts   buildHintRequestBody (line-numbered, mode-aware, responseSchema)  [pure, tested]
  parse.ts    parseHintResponse + extractText (robust, never throws)            [pure, tested]
  gemini.ts   fetchHints — thin REST client, friendly AiError categories
  index.ts    barrel

src/pages/challenge/components/
  hint-decorations.ts  CodeMirror StateField + decorations + helpers
  HintBot.tsx          the ✦ AI panel (setup flow, actions, hint list)
```

Storage: `aiSettings` (`{ geminiApiKey, enabled, model }`) in
`chrome.storage.local` — see `src/lib/storage/schema.ts`.

The pure prompt/parse functions are covered by `test/ai-prompt.test.ts` and
`test/ai-parse.test.ts`. The network call is intentionally thin so the testable
logic lives in the pure layer.

## Constraints honored

- No secret in the repo — the key is user-entered and local-only.
- The model is instructed never to emit a full working solution (nudge never
  spoils; review explains but does not rewrite).
- Hint count is capped and line numbers are clamped to real lines by the parser.
</content>
