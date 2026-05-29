import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reconstruct-original-digits-from-english',
  title: 'Reconstruct Original Digits from English',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `Given a string \`s\` containing an **out-of-order** English representation of digits \`0–9\`, return the digits in **ascending order**.`,
  constraints: [
    '`1 <= s.length <= 10^5`',
    '`s[i]` is one of the characters `["e","g","f","i","h","o","n","s","r","u","t","w","v","x","z"]`.',
    '`s` is **guaranteed** to be valid.',
  ],
  examples: [
    {
      input: 's = "owoztneoer"',
      output: '"012"',
      explanation: 'The string encodes "zero" + "one" + "two" in some scrambled order.',
    },
    {
      input: 's = "fviefuro"',
      output: '"45"',
      explanation: 'The string encodes "four" + "five" in some scrambled order.',
    },
  ],
  hints: [
    'Some letters uniquely identify a digit: "z"→0, "w"→2, "u"→4, "x"→6, "g"→8.',
    'After deducting those counts, other digits can be identified: "o" minus 0,2,4 → 1; "h" minus 8 → 3; "f" minus 4 → 5; "s" minus 6 → 7.',
    'Finally, "i" minus 5,6,8 → 9. Build the result by repeating each digit its count times.',
  ],
  functionName: 'originalDigits',
  params: ['s'],
  starterCode: {
    javascript: `function originalDigits(s) {

}`,
    typescript: `function originalDigits(s: string): string {

}`,
    python: `def originalDigits(s):
    pass`,
  },
  visibleTests: [
    { args: ['owoztneoer'], expected: '012' },
    { args: ['fviefuro'], expected: '45' },
  ],
  hiddenTests: [
    { args: ['zero'], expected: '0' },
    { args: ['eight'], expected: '8' },
    { args: ['ninenine'], expected: '99' },
    { args: ['onetwo'], expected: '12' },
    { args: ['zerozerozero'], expected: '000' },
  ],
};
