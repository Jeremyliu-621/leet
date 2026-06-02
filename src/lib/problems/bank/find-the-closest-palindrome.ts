import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-closest-palindrome',
  title: 'Find the Closest Palindrome',
  difficulty: 'hard',
  tags: ['math', 'strings'],
  description: `Given a string \`n\` representing a positive integer, return **the closest integer** (not including itself) which is a palindrome. If there is a tie, return **the smaller** one.

The closest is defined as the absolute difference minimized between two integers.`,
  constraints: [
    '`1 <= n.length <= 18`',
    '`n` consists of only digits and does not have leading zeros.',
    '`n` is a positive integer.',
  ],
  examples: [
    {
      input: 'n = "123"',
      output: '"121"',
      explanation: '|123 - 121| = 2, which is the minimum absolute difference.',
    },
    {
      input: 'n = "1"',
      output: '"0"',
      explanation: '|1 - 0| = 1, which is the minimum absolute difference. 2 is another palindrome at distance 1, but we return the smaller value.',
    },
  ],
  hints: [
    'The answer is always one of these 5 candidates: (1) mirror the first half onto the second half; (2) mirror the first half minus 1; (3) mirror the first half plus 1; (4) 10^(len-1) − 1 (all-nines palindrome one digit shorter); (5) 10^len + 1 (palindrome one digit longer).',
    'For a string of length L, the first half is `n.slice(0, Math.ceil(L/2))`. To build a palindrome from a half `h`, mirror it (excluding the middle char for odd L) and concatenate.',
    'Compare all candidates using BigInt to avoid overflow (n can be up to 18 digits). Filter out `n` itself, then pick the one with smallest absolute difference; break ties by smaller value.',
  ],
  functionName: 'nearestPalindromic',
  params: ['n'],
  starterCode: {
    javascript: `function nearestPalindromic(n) {
  const len = n.length, num = BigInt(n), halfLen = Math.ceil(len / 2);
  const mid = BigInt(n.slice(0, halfLen));
  function makePalin(half) {
    const s = String(half), rev = s.split('').reverse().join('');
    const full = len % 2 === 0 ? s + rev : s + rev.slice(1);
    return BigInt(full.replace(/^0+/, '') || '0');
  }
  const candidates = [
    makePalin(mid), makePalin(mid - 1n), makePalin(mid + 1n),
    10n ** BigInt(len - 1) - 1n, 10n ** BigInt(len) + 1n,
  ];
  let best = null;
  for (const cand of candidates) {
    if (cand === num || cand < 0n) continue;
    const diff = cand > num ? cand - num : num - cand;
    if (best === null) { best = cand; continue; }
    const bd = best > num ? best - num : num - best;
    if (diff < bd || (diff === bd && cand < best)) best = cand;
  }
  return String(best);
}`,
    typescript: `function nearestPalindromic(n: string): string {
  const len = n.length, num = BigInt(n), halfLen = Math.ceil(len / 2);
  const mid = BigInt(n.slice(0, halfLen));
  function makePalin(half: bigint): bigint {
    const s = String(half), rev = s.split('').reverse().join('');
    const full = len % 2 === 0 ? s + rev : s + rev.slice(1);
    return BigInt(full.replace(/^0+/, '') || '0');
  }
  const candidates: bigint[] = [
    makePalin(mid), makePalin(mid - 1n), makePalin(mid + 1n),
    10n ** BigInt(len - 1) - 1n, 10n ** BigInt(len) + 1n,
  ];
  let best: bigint | null = null;
  for (const cand of candidates) {
    if (cand === num || cand < 0n) continue;
    const diff = cand > num ? cand - num : num - cand;
    if (best === null) { best = cand; continue; }
    const bd = best > num ? best - num : num - best;
    if (diff < bd || (diff === bd && cand < best)) best = cand;
  }
  return String(best);
}`,
    python: `def nearestPalindromic(n):
    length, num = len(n), int(n)
    half_len = (length + 1) // 2
    mid = int(n[:half_len])
    def make_palin(half):
        s = str(half); rev = s[::-1]
        full = s + (rev[1:] if length % 2 else rev)
        return int(full) if full else 0
    candidates = [
        make_palin(mid), make_palin(mid - 1), make_palin(mid + 1),
        10 ** (length - 1) - 1, 10 ** length + 1,
    ]
    best = None
    for cand in candidates:
        if cand == num or cand < 0: continue
        diff = abs(cand - num)
        if best is None or diff < abs(best - num) or (diff == abs(best - num) and cand < best):
            best = cand
    return str(best)`,
  },
  visibleTests: [
    { args: ['123'], expected: '121' },
    { args: ['1'], expected: '0' },
    { args: ['11'], expected: '9' },
  ],
  hiddenTests: [
    { args: ['10'], expected: '9' },
    { args: ['9'], expected: '8' },
    { args: ['100'], expected: '99' },
    { args: ['999'], expected: '1001' },
    { args: ['1001'], expected: '999' },
    { args: ['1234'], expected: '1221' },
    { args: ['99'], expected: '101' },
    { args: ['121'], expected: '111' },
  ],
};
