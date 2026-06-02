import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-digits-are-equal-in-string-after-operations-i',
  title: 'Check if Digits Are Equal in String After Operations I',
  difficulty: 'easy',
  tags: ['strings', 'math', 'simulation'],
  description: `You are given a string \`s\` consisting of digits.

Repeatedly apply the following operation until the string has exactly **2** characters:
- For each pair of adjacent characters at indices \`i\` and \`i+1\`, compute \`(s[i] + s[i+1]) % 10\` and replace both with the single digit result.
- After one pass, the string length decreases by 1.

Return \`true\` if the two remaining digits are **equal**, or \`false\` otherwise.`,
  constraints: [
    '`3 <= s.length <= 100`',
    '`s\` consists of digits only.',
  ],
  examples: [
    {
      input: 's = "3902"',
      output: 'true',
      explanation: '"3902" → "392" → wait, length 4→3: [3+9=12%10=2, 9+0=9, 0+2=2] → "292" → length 3→2: [2+9=11%10=1, 9+2=11%10=1] → "11". Both digits equal → true.',
    },
    {
      input: 's = "34789"',
      output: 'false',
      explanation: '"34789" → "7167" → wait applying step-by-step: length 5→4→3→2. Final two digits are not equal → false.',
    },
  ],
  hints: [
    'Simulate the repeated reduction: in each pass, replace the array of digits with a new array where each element is `(a[i] + a[i+1]) % 10`.',
    'Repeat until only 2 elements remain, then check if they are equal.',
    'The number of iterations equals `s.length - 2`, which is at most 98 for the given constraints.',
  ],
  functionName: 'hasSameDigits',
  params: ['s'],
  starterCode: {
    javascript: `function hasSameDigits(s) {
  let arr = s.split('').map(Number);
  while (arr.length > 2) {
    const next = [];
    for (let i = 0; i < arr.length - 1; i++) next.push((arr[i] + arr[i + 1]) % 10);
    arr = next;
  }
  return arr[0] === arr[1];
}`,
    typescript: `function hasSameDigits(s: string): boolean {
  let arr = s.split('').map(Number);
  while (arr.length > 2) {
    const next: number[] = [];
    for (let i = 0; i < arr.length - 1; i++) next.push((arr[i]! + arr[i + 1]!) % 10);
    arr = next;
  }
  return arr[0] === arr[1];
}`,
    python: `def hasSameDigits(s):
    arr = list(map(int, s))
    while len(arr) > 2:
        arr = [(arr[i] + arr[i+1]) % 10 for i in range(len(arr)-1)]
    return arr[0] == arr[1]`,
  },
  visibleTests: [
    { args: ['3902'], expected: true },
    { args: ['34789'], expected: false },
  ],
  hiddenTests: [
    { args: ['000'], expected: true },
    { args: ['555'], expected: true },
    { args: ['123'], expected: false },
    { args: ['9090'], expected: true },
    { args: ['1111'], expected: true },
    { args: ['100'], expected: false },
    { args: ['119'], expected: false },
    { args: ['999'], expected: true },
  ],
};
