import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-mirror-score-of-a-string',
  title: 'Find Mirror Score of a String',
  difficulty: 'medium',
  tags: ['strings', 'stack'],
  description: `You are given a string \`s\`.

The **score** of \`s\` is calculated as follows:

- For each index \`i\`, starting from the left:
  - Find the **closest** index \`j < i\` such that \`s[j] == s[i]\` and \`s[j]\` has not been matched yet.
  - If such a \`j\` exists, score increases by \`i - j\`. Both \`s[j]\` and \`s[i]\` are marked as matched and cannot be used again.
  - Otherwise, \`s[i]\` remains unmatched.

Return the **total score** of the string.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "aababbb"',
      output: '4',
      explanation:
        'i=1: match s[1]=a with s[0]=a, score+=1. i=4: match s[4]=b with s[2]=b, score+=2. i=6: match s[6]=b with s[5]=b, score+=1. Total=4.',
    },
    {
      input: 's = "abab"',
      output: '4',
      explanation: 'i=2: match s[2]=a with s[0]=a (+2). i=3: match s[3]=b with s[1]=b (+2). Total=4.',
    },
    {
      input: 's = "a"',
      output: '0',
      explanation: 'No pairs to match.',
    },
  ],
  hints: [
    'Level 1: Process left to right. For each character, you want the most recent unmatched occurrence of the same character.',
    'Level 2: Maintain a stack (of positions) per character. When s[i]=c has a non-empty stack, pop the top and add i−top to the score.',
    'Level 3: O(n) time and O(n) space. 26 stacks, one per lowercase letter.',
  ],
  functionName: 'calculateScore',
  params: ['s'],
  starterCode: {
    javascript: `function calculateScore(s) {
  const stacks = Array.from({ length: 26 }, () => []);
  let score = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i) - 97;
    if (stacks[c].length > 0) {
      score += i - stacks[c].pop();
    } else {
      stacks[c].push(i);
    }
  }
  return score;
}`,
    typescript: `function calculateScore(s: string): number {
  const stacks: number[][] = Array.from({ length: 26 }, () => []);
  let score = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i) - 97;
    if (stacks[c].length > 0) {
      score += i - stacks[c].pop()!;
    } else {
      stacks[c].push(i);
    }
  }
  return score;
}`,
    python: `def calculateScore(s):
    stacks = [[] for _ in range(26)]
    score = 0
    for i, ch in enumerate(s):
        c = ord(ch) - ord('a')
        if stacks[c]:
            score += i - stacks[c].pop()
        else:
            stacks[c].append(i)
    return score`,
  },
  visibleTests: [
    { args: ['aababbb'], expected: 4 },
    { args: ['abab'], expected: 4 },
    { args: ['a'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['aa'], expected: 1 },
    { args: ['ab'], expected: 0 },
    { args: ['aabbcc'], expected: 3 },
    { args: ['abcabc'], expected: 9 },
    { args: ['aaaa'], expected: 2 },
    { args: ['zz'], expected: 1 },
    { args: ['azbzc'], expected: 2 },
    { args: ['abcba'], expected: 6 },
  ],
};
