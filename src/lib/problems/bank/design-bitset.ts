import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-bitset',
  title: 'Design Bitset',
  difficulty: 'medium',
  tags: ['design', 'arrays', 'hash-map'],
  description: `A **Bitset** is a data structure that compactly stores bits.

Implement the \`Bitset\` class:

- \`Bitset(size)\` Initializes the Bitset with \`size\` bits, all set to \`0\`.
- \`fix(idx)\` Updates the value of the bit at index \`idx\` to \`1\`. If it is already \`1\`, nothing happens.
- \`unfix(idx)\` Updates the value of the bit at index \`idx\` to \`0\`. If it is already \`0\`, nothing happens.
- \`flip()\` Flips the values of each bit in the Bitset. That is, all \`0\`s become \`1\`s and vice versa.
- \`all()\` Checks if the value of **every** bit in the Bitset is \`1\`. Returns \`true\` if it satisfies the condition, \`false\` otherwise.
- \`one()\` Checks if there is **at least one** bit in the Bitset whose value is \`1\`. Returns \`true\` if it satisfies the condition, \`false\` otherwise.
- \`count()\` Returns the **total number** of bits in the Bitset whose value is \`1\`.
- \`toString()\` Returns the current composition of the Bitset. Note that in the resultant string, the character at the \`i\`-th index should coincide with the value of the \`i\`-th bit.

Simulate with arrays of operations. Return results (\`null\` for void operations).`,
  constraints: [
    '1 <= size <= 10^5',
    '0 <= idx <= size - 1',
    'At most 10^5 calls will be made in total to fix, unfix, flip, all, one, count, and toString.',
    'At least one call will be made to all, one, count, or toString.',
    'At most 5 calls will be made to toString.',
  ],
  examples: [
    {
      input: 'ops = ["Bitset","fix","fix","flip","all","unfix","flip","one","unfix","count","toString"], args = [[5],[3],[1],[],[],[],[],[],[0],[],[]]',
      output: '[null,null,null,null,false,null,null,true,null,2,"01010"]',
      explanation:
        'Bitset(5): [0,0,0,0,0]. fix(3): [0,0,0,1,0]. fix(1): [0,1,0,1,0]. flip(): [1,0,1,0,1]. all()→false. unfix(0)... wait, after flip bits are [1,0,1,0,1]. unfix(0): [0,0,1,0,1]. flip(): [1,1,0,1,0]. one()→true. unfix(0): [0,1,0,1,0]. count()→2. toString()→"01010".',
    },
  ],
  hints: [
    'Track a boolean `flipped` flag. When flipped, the logical value of each stored bit is inverted.',
    'Maintain a count of 1-bits. When flip() is called, toggle `flipped` and set count = size - count.',
    'For fix(idx): if the current logical value is already 1, do nothing. Otherwise flip the stored bit and increment count. Handle the flipped state by checking stored value against the "1" value for the current flip state.',
  ],
  functionName: 'designBitset',
  params: ['ops', 'args'],
  starterCode: {
    javascript: `function designBitset(ops, args) {
  const size = args[0][0];
  const bits = new Array(size).fill(0);
  let flipped = false, count = 0;
  const results = [null];
  for (let i = 1; i < ops.length; i++) {
    const op = ops[i], a = args[i];
    if (op === 'fix') {
      const idx = a[0];
      if ((bits[idx] ^ (flipped ? 1 : 0)) === 0) { bits[idx] ^= 1; count++; }
      results.push(null);
    } else if (op === 'unfix') {
      const idx = a[0];
      if ((bits[idx] ^ (flipped ? 1 : 0)) === 1) { bits[idx] ^= 1; count--; }
      results.push(null);
    } else if (op === 'flip') {
      flipped = !flipped; count = size - count; results.push(null);
    } else if (op === 'all') {
      results.push(count === size);
    } else if (op === 'one') {
      results.push(count > 0);
    } else if (op === 'count') {
      results.push(count);
    } else if (op === 'toString') {
      let s = '';
      for (let j = 0; j < size; j++) s += (bits[j] ^ (flipped ? 1 : 0)) === 1 ? '1' : '0';
      results.push(s);
    }
  }
  return results;
}`,
    typescript: `function designBitset(ops: string[], args: (number | number[])[]): (boolean | number | string | null)[] {
  const size = (args[0] as number[])[0]!;
  const bits = new Array(size).fill(0) as number[];
  let flipped = false, count = 0;
  const results: (boolean | number | string | null)[] = [null];
  for (let i = 1; i < ops.length; i++) {
    const op = ops[i]!, a = args[i] as number[];
    if (op === 'fix') {
      const idx = a[0]!;
      if ((bits[idx]! ^ (flipped ? 1 : 0)) === 0) { bits[idx]! ^= 1; count++; }
      results.push(null);
    } else if (op === 'unfix') {
      const idx = a[0]!;
      if ((bits[idx]! ^ (flipped ? 1 : 0)) === 1) { bits[idx]! ^= 1; count--; }
      results.push(null);
    } else if (op === 'flip') {
      flipped = !flipped; count = size - count; results.push(null);
    } else if (op === 'all') {
      results.push(count === size);
    } else if (op === 'one') {
      results.push(count > 0);
    } else if (op === 'count') {
      results.push(count);
    } else if (op === 'toString') {
      let s = '';
      for (let j = 0; j < size; j++) s += (bits[j]! ^ (flipped ? 1 : 0)) === 1 ? '1' : '0';
      results.push(s);
    }
  }
  return results;
}`,
    python: `def designBitset(ops, args):
    ops = list(ops.to_py() if hasattr(ops, 'to_py') else ops)
    args = [list(a.to_py() if hasattr(a, 'to_py') else a) for a in (args.to_py() if hasattr(args, 'to_py') else args)]
    size = args[0][0]
    bits = [0] * size
    flipped = False
    count = 0
    results = [None]
    for i in range(1, len(ops)):
        op, a = ops[i], args[i]
        if op == 'fix':
            idx = a[0]
            if (bits[idx] ^ (1 if flipped else 0)) == 0: bits[idx] ^= 1; count += 1
            results.append(None)
        elif op == 'unfix':
            idx = a[0]
            if (bits[idx] ^ (1 if flipped else 0)) == 1: bits[idx] ^= 1; count -= 1
            results.append(None)
        elif op == 'flip':
            flipped = not flipped; count = size - count; results.append(None)
        elif op == 'all': results.append(count == size)
        elif op == 'one': results.append(count > 0)
        elif op == 'count': results.append(count)
        elif op == 'toString':
            results.append(''.join('1' if (bits[j] ^ (1 if flipped else 0)) == 1 else '0' for j in range(size)))
    return results`,
  },
  visibleTests: [
    {
      args: [
        ['Bitset', 'fix', 'fix', 'flip', 'all', 'unfix', 'flip', 'one', 'unfix', 'count', 'toString'],
        [[5], [3], [1], [], [], [0], [], [], [0], [], []],
      ],
      expected: [null, null, null, null, false, null, null, true, null, 2, '01010'],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['Bitset', 'fix', 'fix', 'all', 'count', 'toString'],
        [[2], [0], [1], [], [], []],
      ],
      expected: [null, null, null, true, 2, '11'],
    },
    {
      args: [
        ['Bitset', 'flip', 'all', 'count', 'one'],
        [[3], [], [], [], []],
      ],
      expected: [null, null, true, 3, true],
    },
    {
      args: [
        ['Bitset', 'fix', 'flip', 'unfix', 'count', 'all', 'one'],
        [[4], [1], [], [0], [], [], []],
      ],
      expected: [null, null, null, null, 2, false, true],
    },
    {
      args: [
        ['Bitset', 'one', 'all'],
        [[1], [], []],
      ],
      expected: [null, false, false],
    },
  ],
};
