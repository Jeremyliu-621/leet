import type { Problem } from '../types';

const JS_PREAMBLE = `
function freqStackRunner(ops, vals) {
  const fs = new FreqStack();
  return ops.map((op, i) => {
    if (op === 'push') { fs.push(vals[i]); return null; }
    return fs.pop();
  });
}
`.trim();

const PY_PREAMBLE = `
def freqStackRunner(ops, vals):
    fs = FreqStack()
    result = []
    for op, val in zip(ops, vals):
        if op == 'push':
            fs.push(val)
            result.append(None)
        else:
            result.append(fs.pop())
    return result
`.trim();

export const problem: Problem = {
  id: 'maximum-frequency-stack',
  title: 'Maximum Frequency Stack',
  difficulty: 'hard',
  tags: ['stack', 'hash-map'],
  description: `Design a stack-like data structure to push elements onto the stack and pop the most frequent element off the stack.

Implement the \`FreqStack\` class:
- \`FreqStack()\` constructs an empty frequency stack.
- \`void push(int val)\` pushes an integer \`val\` onto the top of the stack.
- \`int pop()\` removes and returns the most frequent element in the stack. If there is a tie for the most frequent element, the element closest to the top of the stack is removed and returned.

> **Note:** A runner function \`freqStackRunner(ops, vals)\` is pre-defined. \`ops\` is a list of \`"push"\` or \`"pop"\` strings; for \`"push"\` ops the corresponding \`vals[i]\` is the value to push; for \`"pop"\` ops \`vals[i]\` is ignored. The runner returns an array with \`null\` for pushes and the popped value for pops.`,
  constraints: [
    '0 <= val <= 10^9',
    'At most 2 * 10^4 calls will be made to push and pop.',
    'It is guaranteed that there will be at least one element in the stack before calling pop.',
  ],
  examples: [
    {
      input: 'ops = ["push","push","push","push","push","push","pop","pop","pop","pop"], vals = [5,7,5,7,4,5,0,0,0,0]',
      output: '[null,null,null,null,null,null,5,7,5,4]',
      explanation: `After pushing 5,7,5,7,4,5:
- 5 has frequency 3, 7 has frequency 2, 4 has frequency 1.
- pop() → 5 (most frequent, latest at freq 3).
- pop() → 7 (5 and 7 now both at freq 2; 7 was pushed later).
- pop() → 5 (5 is at freq 2, 7 at freq 1 — pick 5, the most recent at highest freq).
- pop() → 4 (all at freq 1; 4 was pushed last).`,
    },
  ],
  hints: [
    'Track freq[val] = how many times val has been pushed.',
    'Track group[freq] = a stack of vals that currently have that frequency.',
    'Track maxFreq = the current maximum frequency.',
    'On push: increment freq[val], push val onto group[freq[val]], update maxFreq.',
    'On pop: pop from group[maxFreq], decrement freq of that val, decrease maxFreq if group[maxFreq] is now empty.',
  ],
  functionName: 'freqStackRunner',
  params: ['ops', 'vals'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// freqStackRunner is pre-defined and calls your class below.
class FreqStack {
  constructor() {

  }

  push(val) {

  }

  pop() {

  }
}`,
    typescript: "function freqStackRunner(ops: string[], vals: number[]): (null | number)[] {\n  constructor() {\n\n  }\n\n  push(val) {\n\n  }\n\n  pop() {\n\n  }\n}",

    python: `# freqStackRunner is pre-defined and calls your class below.
class FreqStack:
    def __init__(self):
        pass

    def push(self, val: int) -> None:
        pass

    def pop(self) -> int:
        pass`,
  },
  visibleTests: [
    {
      args: [
        ['push', 'push', 'push', 'push', 'push', 'push', 'pop', 'pop', 'pop', 'pop'],
        [5, 7, 5, 7, 4, 5, 0, 0, 0, 0],
      ],
      expected: [null, null, null, null, null, null, 5, 7, 5, 4],
    },
  ],
  hiddenTests: [
    {
      args: [['push', 'pop'], [1, 0]],
      expected: [null, 1],
    },
    {
      args: [['push', 'push', 'pop', 'pop'], [1, 1, 0, 0]],
      expected: [null, null, 1, 1],
    },
    {
      args: [['push', 'push', 'push', 'pop', 'pop', 'pop'], [1, 2, 1, 0, 0, 0]],
      expected: [null, null, null, 1, 2, 1],
    },
    {
      args: [
        ['push', 'push', 'push', 'push', 'pop', 'push', 'pop', 'pop', 'pop'],
        [4, 0, 9, 3, 0, 4, 0, 0, 0],
      ],
      expected: [null, null, null, null, 3, null, 4, 9, 0],
    },
  ],
};
