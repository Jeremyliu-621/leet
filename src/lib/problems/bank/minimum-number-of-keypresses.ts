import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-keypresses',
  title: 'Minimum Number of Keypresses',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `You have a keypad with **9 letter-keys**. You can map any of the 26 lowercase English letters to one of these 9 keys. Each key can hold **any number** of letters.

The number of keypresses to type a letter is its **1-indexed position** on its key (first letter = 1 press, second = 2 presses, etc.).

Given a string \`s\`, return the **minimum total keypresses** needed to type every character of \`s\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of lowercase English letters only.',
  ],
  examples: [
    {
      input: 's = "apple"',
      output: '5',
      explanation: 'Map p (freq 2) to first position of a key (1 press each). Map a, e, l (freq 1 each) to first positions of other keys. Total = 2 + 1 + 1 + 1 = 5.',
    },
    {
      input: 's = "abcdefghijkl"',
      output: '15',
      explanation: 'Each letter appears once. 9 letters need 1 press each (9 presses), 3 letters need 2 presses each (6 presses). Total = 15.',
    },
    {
      input: 's = "aaa"',
      output: '3',
      explanation: '\'a\' maps to the 1st position of a key. 3 presses total.',
    },
  ],
  hints: [
    'The optimal strategy is to place the most frequent letters at position 1 (cheapest), then position 2, and so on. There are 9 keys, so the top 9 most-frequent letters get cost 1, the next 9 get cost 2, etc.',
    'Count character frequencies, sort them in decreasing order. Letter at sorted rank i (0-indexed) costs floor(i/9) + 1 presses.',
    '`const f=new Array(26).fill(0); for(const c of s)f[c.charCodeAt(0)-97]++; f.sort((a,b)=>b-a); let t=0; for(let i=0;i<26&&f[i]>0;i++)t+=f[i]*(Math.floor(i/9)+1); return t;`',
  ],
  functionName: 'minimumKeypresses',
  params: ['s'],
  starterCode: {
    javascript: 'function minimumKeypresses(s) {\n  \n}\n',
    python: 'def minimumKeypresses(s: str) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: ['apple'], expected: 5 },
    { args: ['abcdefghijkl'], expected: 15 },
    { args: ['aaa'], expected: 3 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['abcdefghi'], expected: 9 },
    { args: ['abcdefghij'], expected: 11 },
    { args: ['abcdefghijklmnopqrstuvwxyz'], expected: 51 },
    { args: ['zzzz'], expected: 4 },
    { args: ['aabbc'], expected: 5 },
  ],
};
