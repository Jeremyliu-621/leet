import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-and-lexicographically-smallest-beautiful-string',
  title: 'Shortest and Lexicographically Smallest Beautiful String',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window'],
  description: `You are given a binary string \`s\` and a positive integer \`k\`.

A substring of \`s\` is **beautiful** if the number of \`1\`s in it is exactly \`k\`.

Return the **shortest** beautiful substring. If there are multiple strings with the same shortest length, return the **lexicographically smallest** one.

If no beautiful substring exists, return an empty string \`""\`.`,
  constraints: [
    '1 <= k <= s.length <= 100',
    "s consists only of '0' and '1'.",
  ],
  examples: [
    {
      input: 's = "100011001", k = 3',
      output: '"11001"',
      explanation: 'Substrings with exactly 3 ones: "100011" (length 6), "11001" (length 5). Shortest is "11001".',
    },
    {
      input: 's = "1011", k = 2',
      output: '"11"',
      explanation: 'Substrings with exactly 2 ones: "101" (length 3), "11" (length 2). Shortest is "11".',
    },
    {
      input: 's = "000", k = 1',
      output: '""',
      explanation: 'No substring has exactly 1 one.',
    },
  ],
  hints: [
    'Level 1: A beautiful substring must start at the first "1" and end at the k-th "1" (inclusive) with no tighter window possible.',
    'Level 2: Collect all positions of "1"s. For each window of k consecutive ones (ones[i] to ones[i+k-1]), the substring is s[ones[i]..ones[i+k-1]].',
    'Level 3: Track the minimum length; break ties by lexicographic comparison of the substrings.',
  ],
  functionName: 'shortestBeautifulSubstring',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function shortestBeautifulSubstring(s, k) {
  const ones = [];
  for (let i = 0; i < s.length; i++) if (s[i] === '1') ones.push(i);
  if (ones.length < k) return '';
  let best = '';
  for (let i = 0; i <= ones.length - k; i++) {
    const sub = s.slice(ones[i], ones[i + k - 1] + 1);
    if (best === '' || sub.length < best.length ||
        (sub.length === best.length && sub < best)) {
      best = sub;
    }
  }
  return best;
}`,
    typescript: `function shortestBeautifulSubstring(s: string, k: number): string {
  const ones: number[] = [];
  for (let i = 0; i < s.length; i++) if (s[i] === '1') ones.push(i);
  if (ones.length < k) return '';
  let best = '';
  for (let i = 0; i <= ones.length - k; i++) {
    const sub = s.slice(ones[i], ones[i + k - 1] + 1);
    if (best === '' || sub.length < best.length ||
        (sub.length === best.length && sub < best)) {
      best = sub;
    }
  }
  return best;
}`,
    python: `def shortestBeautifulSubstring(s, k):
    ones = [i for i, c in enumerate(s) if c == '1']
    if len(ones) < k:
        return ''
    best = ''
    for i in range(len(ones) - k + 1):
        sub = s[ones[i]:ones[i + k - 1] + 1]
        if not best or len(sub) < len(best) or (len(sub) == len(best) and sub < best):
            best = sub
    return best`,
  },
  visibleTests: [
    { args: ['100011001', 3], expected: '11001' },
    { args: ['1011', 2], expected: '11' },
    { args: ['000', 1], expected: '' },
  ],
  hiddenTests: [
    { args: ['1', 1], expected: '1' },
    { args: ['0110110', 2], expected: '11' },
    { args: ['10101', 2], expected: '101' },
    { args: ['11', 2], expected: '11' },
    { args: ['11', 1], expected: '1' },
    { args: ['011100', 2], expected: '11' },
    { args: ['10', 1], expected: '1' },
    { args: ['101010', 3], expected: '10101' },
  ],
};
