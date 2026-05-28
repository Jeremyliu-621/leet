import type { Problem } from '../types';

export const problem: Problem = {
  id: 'stickers-to-spell-word',
  title: 'Stickers to Spell Word',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays', 'strings'],
  description: `We are given \`n\` different stickers. Each sticker has a lowercase English word on it.

You would like to spell out the given string \`target\` by cutting individual letters from your collection of stickers and rearranging them. You can use each sticker more than once, and you have infinite copies of each sticker.

Return the **minimum number of stickers** that you need to spell out \`target\`. If the task is impossible, return \`-1\`.

**Note:** All the words in the input have at most 10 letters, and target has at most 15 letters.`,
  constraints: [
    'n == stickers.length',
    '1 <= n <= 50',
    '1 <= stickers[i].length <= 10',
    '1 <= target.length <= 15',
    'stickers[i] and target consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 'stickers = ["with","example","science"], target = "thehat"',
      output: '3',
      explanation: 'Use 2 copies of "example" and 1 copy of "with": "example"×2 provides e,x,a,m,p,l,e and e,x,a,m,p,l,e. "with" provides w,i,t,h. From these we can cut t,h,e,h,a,t. Total = 3 stickers.',
    },
    {
      input: 'stickers = ["notice","possible"], target = "basicbasic"',
      output: '-1',
      explanation: 'Neither "notice" nor "possible" contains the letter "a" or "b", so it is impossible.',
    },
    {
      input: 'stickers = ["abc"], target = "abc"',
      output: '1',
      explanation: 'One "abc" sticker directly spells "abc".',
    },
  ],
  hints: [
    'Use bitmask DP with `dp[mask]` = minimum stickers to cover the subset of target characters indicated by `mask`. `dp[0] = 0`, all others = -1 (unreachable).',
    'For each reachable state `mask`, try applying each sticker. Greedily use each letter of the sticker to cover still-uncovered positions in target (bits not set in mask). This gives a `nextMask`.',
    'Transitions: `dp[nextMask] = min(dp[nextMask], dp[mask] + 1)`. The answer is `dp[(1 << target.length) - 1]`, or -1 if unreachable.',
  ],
  functionName: 'minStickers',
  params: ['stickers', 'target'],
  starterCode: {
    javascript: `function minStickers(stickers, target) {
  const n = target.length;
  const dp = new Array(1 << n).fill(-1);
  dp[0] = 0;
  for (let state = 0; state < (1 << n); state++) {
    if (dp[state] === -1) continue;
    for (const sticker of stickers) {
      const cnt = new Array(26).fill(0);
      for (const c of sticker) cnt[c.charCodeAt(0) - 97]++;
      let nextState = state;
      const used = new Array(26).fill(0);
      for (let i = 0; i < n; i++) {
        if (!(state >> i & 1)) {
          const ci = target.charCodeAt(i) - 97;
          if (used[ci] < cnt[ci]) { used[ci]++; nextState |= 1 << i; }
        }
      }
      if (dp[nextState] === -1 || dp[nextState] > dp[state] + 1) {
        dp[nextState] = dp[state] + 1;
      }
    }
  }
  return dp[(1 << n) - 1];
}`,
    typescript: "function minStickers(stickers: string[], target: string): number {\n  const n = target.length;\n  const dp = new Array(1 << n).fill(-1);\n  dp[0] = 0;\n  for (let state = 0; state < (1 << n); state++) {\n    if (dp[state] === -1) continue;\n    for (const sticker of stickers) {\n      const cnt = new Array(26).fill(0);\n      for (const c of sticker) cnt[c.charCodeAt(0) - 97]++;\n      let nextState = state;\n      const used = new Array(26).fill(0);\n      for (let i = 0; i < n; i++) {\n        if (!(state >> i & 1)) {\n          const ci = target.charCodeAt(i) - 97;\n          if (used[ci] < cnt[ci]) { used[ci]++; nextState |= 1 << i; }\n        }\n      }\n      if (dp[nextState] === -1 || dp[nextState] > dp[state] + 1) {\n        dp[nextState] = dp[state] + 1;\n      }\n    }\n  }\n  return dp[(1 << n) - 1];\n}",

    python: `def minStickers(stickers, target):
    from collections import Counter
    n = len(target)
    dp = [-1] * (1 << n)
    dp[0] = 0
    for state in range(1 << n):
        if dp[state] == -1:
            continue
        for sticker in stickers:
            cnt = Counter(sticker)
            used = Counter()
            next_state = state
            for i in range(n):
                if not (state >> i & 1):
                    c = target[i]
                    if used[c] < cnt[c]:
                        used[c] += 1
                        next_state |= 1 << i
            if dp[next_state] == -1 or dp[next_state] > dp[state] + 1:
                dp[next_state] = dp[state] + 1
    return dp[(1 << n) - 1]`,
  },
  visibleTests: [
    { args: [['with', 'example', 'science'], 'thehat'], expected: 3 },
    { args: [['notice', 'possible'], 'basicbasic'], expected: -1 },
    { args: [['abc'], 'abc'], expected: 1 },
  ],
  hiddenTests: [
    { args: [['a'], 'aa'], expected: 2 },
    { args: [['ab', 'bc'], 'abc'], expected: 2 },
    { args: [['b', 'ba', 'c'], 'abc'], expected: 2 },
    { args: [['ba', 'c', 'abcd'], 'aab'], expected: 2 },
    { args: [['x'], 'a'], expected: -1 },
  ],
};
