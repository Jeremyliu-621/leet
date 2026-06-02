import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-number-after-digit-swaps-by-parity',
  title: 'Largest Number After Digit Swaps by Parity',
  difficulty: 'easy',
  tags: ['math', 'arrays'],
  description: `You are given a positive integer \`num\`. You may swap any two digits of \`num\` that have the same **parity** (both odd or both even digits).

Return *the **largest** possible value of* \`num\` *after **any** number of swaps.*

**Approach:** Separate odd and even digits, sort each group descending, then reconstruct the number placing sorted digits back in their original parity positions.`,
  constraints: [
    '1 <= num <= 10^9',
  ],
  examples: [
    {
      input: 'num = 1234',
      output: '3412',
      explanation: 'Odd digits: [1,3] → sorted desc [3,1]. Even digits: [2,4] → sorted desc [4,2]. Result: 3412.',
    },
    {
      input: 'num = 65875',
      output: '87655',
      explanation: 'Odd digits: [5,8,7,5] wait — 8 is even. Odd: [5,7,5], Even: [6,8]. Sorted odd desc: [7,5,5]. Sorted even desc: [8,6]. Reconstruct: 87655.',
    },
  ],
  hints: [
    'Extract digits into odd and even buckets, sort each descending.',
    'Walk through the digit array; whenever you encounter an odd-parity position, place from sorted-odd; even-parity position → sorted-even.',
    '```js\nfunction largestInteger(num) {\n  const d = String(num).split("").map(Number);\n  const odd = d.filter(x=>x%2!==0).sort((a,b)=>b-a);\n  const even = d.filter(x=>x%2===0).sort((a,b)=>b-a);\n  let oi=0,ei=0;\n  return +d.map(x=>x%2!==0?odd[oi++]:even[ei++]).join("");\n}\n```',
  ],
  functionName: 'largestInteger',
  params: ['num'],
  starterCode: {
    javascript: `function largestInteger(num) {
  const d = String(num).split('').map(Number);
  const odd = d.filter(x => x % 2 !== 0).sort((a, b) => b - a);
  const even = d.filter(x => x % 2 === 0).sort((a, b) => b - a);
  let oi = 0, ei = 0;
  return +d.map(x => x % 2 !== 0 ? odd[oi++] : even[ei++]).join('');
}`,
    typescript: `function largestInteger(num: number): number {
  const d = String(num).split('').map(Number);
  const odd = d.filter(x => x % 2 !== 0).sort((a, b) => b - a);
  const even = d.filter(x => x % 2 === 0).sort((a, b) => b - a);
  let oi = 0, ei = 0;
  return +d.map(x => x % 2 !== 0 ? odd[oi++]! : even[ei++]!).join('');
}`,
    python: `def largestInteger(num: int) -> int:
    d = [int(c) for c in str(num)]
    odd = sorted([x for x in d if x % 2 != 0], reverse=True)
    even = sorted([x for x in d if x % 2 == 0], reverse=True)
    oi = ei = 0
    result = []
    for x in d:
        if x % 2 != 0:
            result.append(odd[oi]); oi += 1
        else:
            result.append(even[ei]); ei += 1
    return int(''.join(map(str, result)))`,
  },
  visibleTests: [
    { args: [1234], expected: 3412 },
    { args: [65875], expected: 87655 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [2], expected: 2 },
    { args: [13], expected: 31 },
    { args: [246], expected: 642 },
    { args: [135], expected: 531 },
    { args: [9876543210], expected: 9876543210 },
  ],
};
