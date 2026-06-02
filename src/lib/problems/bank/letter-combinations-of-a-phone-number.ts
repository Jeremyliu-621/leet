import type { Problem } from '../types';

export const problem: Problem = {
  id: 'letter-combinations-of-a-phone-number',
  title: 'Letter Combinations of a Phone Number',
  difficulty: 'medium',
  tags: ['backtracking', 'strings'],
  description: `Given a string containing digits from \`2-9\` inclusive, return all possible letter combinations that the number could represent. Return the answer in **any order**.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that digit \`1\` does not map to any letters.

- \`2\` → abc
- \`3\` → def
- \`4\` → ghi
- \`5\` → jkl
- \`6\` → mno
- \`7\` → pqrs
- \`8\` → tuv
- \`9\` → wxyz`,
  constraints: [
    '`0 <= digits.length <= 4`',
    '`digits[i]` is a digit in the range `[\'2\', \'9\']`',
  ],
  examples: [
    {
      input: 'digits = "23"',
      output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]',
      explanation:
        'Digit 2 maps to "abc" and digit 3 maps to "def". All combinations of one letter from each are returned.',
    },
    {
      input: 'digits = ""',
      output: '[]',
      explanation: 'An empty input produces no combinations.',
    },
  ],
  hints: [
    'Build a map from each digit to its corresponding letters. Then use backtracking: for each position in the digits string, iterate over the letters for that digit and recurse.',
    'Start with an empty current string. When its length equals `digits.length`, add it to the result. Otherwise, look up the current digit\'s letters and append each one before recursing.',
    '```js\nfunction letterCombinations(digits) {\n  if (!digits.length) return [];\n  const map = {2:"abc",3:"def",4:"ghi",5:"jkl",6:"mno",7:"pqrs",8:"tuv",9:"wxyz"};\n  const res = [];\n  function bt(i, cur) {\n    if (i === digits.length) { res.push(cur); return; }\n    for (const c of map[digits[i]]) bt(i+1, cur+c);\n  }\n  bt(0, "");\n  return res;\n}\n```',
  ],
  functionName: 'letterCombinations',
  params: ['digits'],
  starterCode: {
    javascript: `function letterCombinations(digits) {
  if (!digits.length) return [];
  const map = {2:'abc',3:'def',4:'ghi',5:'jkl',6:'mno',7:'pqrs',8:'tuv',9:'wxyz'};
  const res = [];
  function bt(i, cur) {
    if (i === digits.length) { res.push(cur); return; }
    for (const c of map[digits[i]]) bt(i + 1, cur + c);
  }
  bt(0, '');
  return res;
}`,
    typescript: `function letterCombinations(digits: string): string[] {
  if (!digits.length) return [];
  const map: Record<string, string> = {2:'abc',3:'def',4:'ghi',5:'jkl',6:'mno',7:'pqrs',8:'tuv',9:'wxyz'};
  const res: string[] = [];
  function bt(i: number, cur: string) {
    if (i === digits.length) { res.push(cur); return; }
    for (const c of map[digits[i]]) bt(i + 1, cur + c);
  }
  bt(0, '');
  return res;
}`,
    python: `def letterCombinations(digits):
    if not digits: return []
    mp = {'2':'abc','3':'def','4':'ghi','5':'jkl','6':'mno','7':'pqrs','8':'tuv','9':'wxyz'}
    res = []
    def bt(i, cur):
        if i == len(digits): res.append(cur); return
        for c in mp[digits[i]]: bt(i+1, cur+c)
    bt(0, '')
    return res`,
  },
  visibleTests: [
    { args: ['23'], expected: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'] },
    { args: [''], expected: [] },
  ],
  hiddenTests: [
    { args: ['2'], expected: ['a', 'b', 'c'] },
    { args: ['7'], expected: ['p', 'q', 'r', 's'] },
    { args: ['9'], expected: ['w', 'x', 'y', 'z'] },
    { args: ['23'], expected: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'] },
  ],
};
