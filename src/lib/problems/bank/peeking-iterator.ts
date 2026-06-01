import type { Problem } from '../types';

export const problem: Problem = {
  id: 'peeking-iterator',
  title: 'Peeking Iterator',
  difficulty: 'medium',
  tags: ['design', 'arrays'],
  description: `Design an iterator that supports the \`peek\` operation on an existing iterator in addition to the \`hasNext\` and \`next\` operations.

Implement the \`PeekingIterator\` class:

- \`PeekingIterator(nums)\` Initializes the object with the given integer iterator \`nums\`.
- \`int next()\` Returns the next element in the array and moves the pointer to the next element.
- \`bool hasNext()\` Returns \`true\` if there are still some elements in the array.
- \`int peek()\` Returns the next element in the array **without** moving the pointer.

Simulate with arrays of operations and arguments. Return results (\`null\` for void operations).`,
  constraints: [
    '`1 <= nums.length <= 1000`',
    '`1 <= nums[i] <= 1000`',
    'All calls to `next` and `peek` are valid.',
    'At most `1000` calls will be made to `next`, `hasNext`, and `peek`.',
  ],
  examples: [
    {
      input: 'ops = ["PeekingIterator","next","peek","next","next","hasNext"], args = [[[1,2,3]],[],[],[],[],[]]',
      output: '[null,1,2,2,3,false]',
      explanation: 'next→1, peek→2 (no move), next→2, next→3, hasNext→false.',
    },
  ],
  hints: [
    'Store the iterator elements in an array. Maintain a current index.',
    'peek() returns the element at the current index without advancing. next() returns the element and advances. hasNext() checks if the index is within bounds.',
    'A cleaner way: cache the "peeked" value. Keep a `hasPeeked` flag and a `peekedVal`. peek() sets the flag and reads from the underlying iterator. next() returns the cached value if peeked, otherwise reads directly.',
  ],
  functionName: 'peekingIterator',
  params: ['ops', 'args'],
  starterCode: {
    javascript: `function peekingIterator(ops, args) {
  let arr = [], idx = 0;
  return ops.map((op, i) => {
    if (op === 'PeekingIterator') { arr = args[i][0]; idx = 0; return null; }
    if (op === 'next') return arr[idx++];
    if (op === 'peek') return arr[idx];
    return idx < arr.length; // hasNext
  });
}`,
    typescript: `function peekingIterator(ops: string[], args: (number[] | [])[]): (number | boolean | null)[] {
  let arr: number[] = [], idx = 0;
  return ops.map((op, i) => {
    if (op === 'PeekingIterator') { arr = (args[i] as number[][])[0]!; idx = 0; return null; }
    if (op === 'next') return arr[idx++]!;
    if (op === 'peek') return arr[idx]!;
    return idx < arr.length; // hasNext
  });
}`,
    python: `def peekingIterator(ops, args):
    arr, idx = [], 0
    ops_list = list(ops.to_py() if hasattr(ops, 'to_py') else ops)
    args_list = list(args.to_py() if hasattr(args, 'to_py') else args)
    result = []
    for op, arg in zip(ops_list, args_list):
        if op == 'PeekingIterator':
            arr = list(arg[0])
            idx = 0
            result.append(None)
        elif op == 'next':
            result.append(arr[idx])
            idx += 1
        elif op == 'peek':
            result.append(arr[idx])
        else:  # hasNext
            result.append(idx < len(arr))
    return result`,
  },
  visibleTests: [
    {
      args: [
        ['PeekingIterator', 'next', 'peek', 'next', 'next', 'hasNext'],
        [[[1, 2, 3]], [], [], [], [], []],
      ],
      expected: [null, 1, 2, 2, 3, false],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['PeekingIterator', 'next', 'hasNext'],
        [[[5]], [], []],
      ],
      expected: [null, 5, false],
    },
    {
      args: [
        ['PeekingIterator', 'peek', 'next', 'peek', 'next', 'hasNext'],
        [[[1, 2]], [], [], [], [], []],
      ],
      expected: [null, 1, 1, 2, 2, false],
    },
    {
      args: [
        ['PeekingIterator', 'hasNext', 'peek', 'next', 'hasNext'],
        [[[10, 20, 30]], [], [], [], []],
      ],
      expected: [null, true, 10, 10, true],
    },
    {
      args: [
        ['PeekingIterator', 'next', 'next', 'peek', 'next', 'hasNext'],
        [[[1, 2, 3, 4]], [], [], [], [], []],
      ],
      expected: [null, 1, 2, 3, 3, true],
    },
    {
      args: [
        ['PeekingIterator', 'peek', 'peek', 'next'],
        [[[7, 8]], [], [], []],
      ],
      expected: [null, 7, 7, 7],
    },
  ],
};
