import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-xor-product',
  title: 'Maximum XOR Product',
  difficulty: 'medium',
  tags: ['bit-manipulation', 'math'],
  description: `Given three integers \`a\`, \`b\`, and \`n\`, return the **maximum value** of \`(a XOR x) * (b XOR x)\` where \`0 <= x < 2^n\`, modulo \`10^9 + 7\`.

Since the answer may be too large, return it **modulo** \`10^9 + 7\`.

Note that \`XOR\` is the bitwise XOR operation.`,
  constraints: [
    '0 <= a, b < 2^50',
    '0 <= n <= 50',
  ],
  examples: [
    {
      input: 'a = 12, b = 5, n = 4',
      output: '98',
      explanation: 'For x = 2, (12 XOR 2) * (5 XOR 2) = 14 * 7 = 98.',
    },
    {
      input: 'a = 6, b = 7, n = 5',
      output: '930',
      explanation: 'For x = 25, (6 XOR 25) * (7 XOR 25) = 31 * 30 = 930.',
    },
    {
      input: 'a = 1, b = 6, n = 3',
      output: '12',
      explanation: 'For x = 5, (1 XOR 5) * (6 XOR 5) = 4 * 3 = 12.',
    },
  ],
  hints: [
    'Process bits from position n-1 down to 0. At each bit position, decide whether to set that bit in x to maximize the product.',
    'When bit i is the same in both a and b (both 0 or both 1), you can flip it in x so both (a XOR x) and (b XOR x) have a 1 at that bit — always do this.',
    "When bit i differs between a and b, exactly one of (a XOR x) and (b XOR x) will get the bit. By AM-GM inequality, the product is maximized when the two factors are as equal as possible — assign the bit to whichever factor is currently smaller.",
  ],
  functionName: 'maximumXorProduct',
  params: ['a', 'b', 'n'],
  starterCode: {
    javascript: `function maximumXorProduct(a, b, n) {
  const MOD = 1_000_000_007n;
  let A = BigInt(a), B = BigInt(b);
  for (let i = n - 1; i >= 0; i--) {
    const bit = 1n << BigInt(i);
    const aBit = (A >> BigInt(i)) & 1n;
    const bBit = (B >> BigInt(i)) & 1n;
    if (aBit === bBit) {
      A |= bit; B |= bit;
    } else if (A < B) {
      A |= bit; B &= ~bit;
    } else {
      B |= bit; A &= ~bit;
    }
  }
  return Number((A % MOD) * (B % MOD) % MOD);
}`,
    typescript: `function maximumXorProduct(a: number, b: number, n: number): number {
  const MOD = 1_000_000_007n;
  let A = BigInt(a), B = BigInt(b);
  for (let i = n - 1; i >= 0; i--) {
    const bit = 1n << BigInt(i);
    const aBit = (A >> BigInt(i)) & 1n;
    const bBit = (B >> BigInt(i)) & 1n;
    if (aBit === bBit) {
      A |= bit; B |= bit;
    } else if (A < B) {
      A |= bit; B &= ~bit;
    } else {
      B |= bit; A &= ~bit;
    }
  }
  return Number((A % MOD) * (B % MOD) % MOD);
}`,
    python: `def maximumXorProduct(a: int, b: int, n: int) -> int:
    MOD = 10**9 + 7
    A, B = a, b
    for i in range(n - 1, -1, -1):
        bit = 1 << i
        a_bit = (A >> i) & 1
        b_bit = (B >> i) & 1
        if a_bit == b_bit:
            A |= bit; B |= bit
        elif A < B:
            A |= bit; B &= ~bit
        else:
            B |= bit; A &= ~bit
    return (A % MOD) * (B % MOD) % MOD`,
  },
  visibleTests: [
    { args: [12, 5, 4], expected: 98 },
    { args: [6, 7, 5], expected: 930 },
    { args: [1, 6, 3], expected: 12 },
  ],
  hiddenTests: [
    { args: [0, 0, 0], expected: 0 },
    { args: [0, 0, 3], expected: 49 },
    { args: [1, 1, 1], expected: 1 },
    { args: [0, 1, 0], expected: 0 },
    { args: [3, 5, 4], expected: 143 },
    { args: [5, 5, 2], expected: 49 },
    { args: [10, 10, 0], expected: 100 },
    { args: [1000000000, 1000000000, 0], expected: 49 },
  ],
};
