import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-operations-to-make-string-sorted',
  title: 'Minimum Number of Operations to Make String Sorted',
  difficulty: 'hard',
  tags: ['math', 'strings'],
  description: `You are given a string \`s\` (**0-indexed**). You perform the following operations until \`s\` is **sorted**:

1. Find the **largest** index \`i\` such that \`1 <= i < s.length\` and \`s[i] < s[i - 1]\`.
2. Find the **largest** index \`j\` such that \`i <= j < s.length\` and \`s[k] < s[i - 1]\` for all the possible values of \`k\` in the range \`[i, j]\`.
3. Swap the two characters at indices \`i - 1\` and \`j\`.
4. **Reverse** the suffix starting at index \`i\`.

Return the number of operations needed to make \`s\` sorted modulo \`10^9 + 7\`.

**Note:** These operations together perform one step of the "previous permutation" in lexicographic order — each call reduces the rank of \`s\` by exactly 1. The answer equals the 0-indexed lexicographic rank of \`s\` among all permutations of its characters (sorted smallest = rank 0), modulo \`10^9 + 7\`.`,
  constraints: ['1 <= s.length <= 3000', 's consists only of lowercase English letters.'],
  examples: [
    {
      input: 's = "cba"',
      output: '5',
      explanation:
        'The permutations of "abc" in sorted order are: "abc"(0), "acb"(1), "bac"(2), "bca"(3), "cab"(4), "cba"(5). So 5 operations are needed.',
    },
    {
      input: 's = "aabb"',
      output: '0',
      explanation:
        'The string "aabb" is already sorted in lexicographic order. All permutations of its characters in sorted order are: "aabb"(0), "abab"(1), "abba"(2), "baab"(3), "baba"(4), "bbaa"(5). Rank 0 means 0 operations.',
    },
  ],
  hints: [
    'Level 1: Each operation is one "previous permutation" step. The answer equals the lexicographic rank of s among all distinct permutations of its characters (where the fully sorted string has rank 0).',
    'Level 2: The rank formula: iterate left to right. At position i, count how many characters in the remaining suffix are smaller than s[i]; multiply by the number of distinct arrangements of the remaining suffix ((n-i-1)! / product of factorial of each char\'s count) — and add to the answer.',
    'Level 3: Maintain a running denominator_inv = product of inv_fact[count[c]] for all characters. After processing position i: denominator_inv *= count[s[i]] (reflecting the change from fact[k] to fact[k-1] in denominator), then decrement count[s[i]]. Use Fermat\'s little theorem for modular inverse.',
  ],
  functionName: 'makeStringSorted',
  params: ['s'],
  starterCode: {
    javascript: `function makeStringSorted(s) {

}`,
    typescript: `function makeStringSorted(s: string): number {

}`,
    python: `def makeStringSorted(s: str) -> int:
    pass`,
  },
  visibleTests: [
    { args: ['cba'], expected: 5 },
    { args: ['aabb'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 0 },
    { args: ['ba'], expected: 1 },
    { args: ['bab'], expected: 1 },
    { args: ['dcba'], expected: 23 },
    { args: ['za'], expected: 1 },
    { args: ['bbaa'], expected: 5 },
    { args: ['abcd'], expected: 0 },
  ],
};
