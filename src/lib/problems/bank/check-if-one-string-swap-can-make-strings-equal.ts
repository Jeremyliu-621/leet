import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-one-string-swap-can-make-strings-equal',
  title: 'Check if One String Swap Can Make Strings Equal',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given two strings \`s1\` and \`s2\` of equal length. A **string swap** is an operation where you choose any two indices in a string and swap the characters at those indices.

Return \`true\` if it is possible to make both strings equal by performing **at most one string swap** on **exactly one** of the strings. Otherwise, return \`false\`.`,
  constraints: [
    '1 <= s1.length, s2.length <= 100',
    's1.length == s2.length',
    's1 and s2 consist of only lowercase English letters.',
  ],
  examples: [
    {
      input: 's1 = "bank", s2 = "kanb"',
      output: 'true',
      explanation: 'Swap positions 0 and 3 in "bank": "bank" → "kanb" = s2.',
    },
    {
      input: 's1 = "attack", s2 = "defend"',
      output: 'false',
      explanation: 'More than 2 positions differ.',
    },
  ],
  hints: [
    'Find all positions where s1[i] != s2[i]. There should be 0 or 2 such positions.',
    'If 2 positions, check that swapping those in s1 gives s2.',
    `\`\`\`js
function areAlmostEqual(s1, s2) {
  const diffs = [];
  for (let i = 0; i < s1.length; i++)
    if (s1[i] !== s2[i]) diffs.push(i);
  if (diffs.length === 0) return true;
  if (diffs.length !== 2) return false;
  const [a, b] = diffs;
  return s1[a] === s2[b] && s1[b] === s2[a];
}\`\`\``,
  ],
  functionName: 'areAlmostEqual',
  params: ['s1', 's2'],
  starterCode: {
    javascript: `function areAlmostEqual(s1, s2) {
  const diffs = [];
  for (let i = 0; i < s1.length; i++) if (s1[i] !== s2[i]) diffs.push(i);
  if (diffs.length === 0) return true;
  if (diffs.length !== 2) return false;
  const [a, b] = diffs;
  return s1[a] === s2[b] && s1[b] === s2[a];
}`,
    typescript: `function areAlmostEqual(s1: string, s2: string): boolean {
  const diffs: number[] = [];
  for (let i = 0; i < s1.length; i++) if (s1[i] !== s2[i]) diffs.push(i);
  if (diffs.length === 0) return true;
  if (diffs.length !== 2) return false;
  const [a, b] = diffs as [number, number];
  return s1[a] === s2[b] && s1[b] === s2[a];
}`,
    python: `def areAlmostEqual(s1, s2):
    diffs = [i for i in range(len(s1)) if s1[i] != s2[i]]
    if len(diffs) == 0:
        return True
    if len(diffs) != 2:
        return False
    a, b = diffs
    return s1[a] == s2[b] and s1[b] == s2[a]`,
  },
  visibleTests: [
    { args: ['bank', 'kanb'], expected: true },
    { args: ['attack', 'defend'], expected: false },
  ],
  hiddenTests: [
    { args: ['aa', 'aa'], expected: true },
    { args: ['aa', 'ac'], expected: false },
    { args: ['kelb', 'kelb'], expected: true },
    { args: ['abcd', 'dcba'], expected: false },
  ],
};
