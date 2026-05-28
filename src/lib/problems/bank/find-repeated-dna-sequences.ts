import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-repeated-dna-sequences',
  title: 'Find Repeated DNA Sequences',
  difficulty: 'medium',
  tags: ['strings', 'hash-map', 'sliding-window'],
  description: `The **DNA sequence** is composed of a series of nucleotides abbreviated as \`'A'\`, \`'C'\`, \`'G'\`, and \`'T'\`.

Given a string \`s\` that represents a DNA sequence, return all the **10-letter-long** substrings that occur **more than once** in the sequence. You may return the answer in **any order**.

**Example:** In \`"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"\`, the substring \`"AAAAACCCCC"\` appears at indices 0 and 10, and \`"CCCCCAAAAA"\` appears at indices 5 and 15, so both are returned.`,
  constraints: [
    '`1 <= s.length <= 10^5`',
    '`s[i]` is either `\'A\'`, `\'C\'`, `\'G\'`, or `\'T\'`.',
  ],
  examples: [
    {
      input: 's = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"',
      output: '["AAAAACCCCC","CCCCCAAAAA"]',
      explanation: '"AAAAACCCCC" appears at positions 0 and 10; "CCCCCAAAAA" appears at positions 5 and 15.',
    },
    {
      input: 's = "AAAAAAAAAAAAA"',
      output: '["AAAAAAAAAA"]',
      explanation: 'The 13-character string contains 4 overlapping windows of length 10, all identical.',
    },
  ],
  hints: [
    'Use a sliding window of length 10. For each position, extract the 10-character substring and record how many times you have seen it.',
    'A `Map<string, number>` works well: on first encounter store count 1, on reaching count 2 add to the result set (using a Set avoids duplicates if a substring appears three or more times).',
    'The result order is not guaranteed — sort the array before returning if you need consistent comparisons in tests.',
  ],
  functionName: 'findRepeatedDnaSequences',
  params: ['s'],
  starterCode: {
    javascript: `function findRepeatedDnaSequences(s) {

}`,
    typescript: "function findRepeatedDnaSequences(s: string): string[] {\n\n}",

    python: `def findRepeatedDnaSequences(s: str) -> list[str]:
    pass`,
  },
  visibleTests: [
    {
      args: ['AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'],
      expected: ['AAAAACCCCC', 'CCCCCAAAAA'],
    },
    {
      args: ['AAAAAAAAAAAAA'],
      expected: ['AAAAAAAAAA'],
    },
    {
      args: ['ACGT'],
      expected: [],
    },
  ],
  hiddenTests: [
    { args: ['AAAAAAAAACAAAAAAAAAC'], expected: ['AAAAAAAAAC'] },
    { args: ['ACGTACGTAC'], expected: [] },
    { args: ['AAAAACCCCCAAAAACCCCC'], expected: ['AAAAACCCCC'] },
    { args: ['AAAAAAAAAA'], expected: [] },
    { args: ['AAAAAAAAAAA'], expected: ['AAAAAAAAAA'] },
  ],
};
