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

}`,
    python: `def nearestPalindromic(n):
    pass`,
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
