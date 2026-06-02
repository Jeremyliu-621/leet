import type { Problem } from '../types';

const JS_PREAMBLE = `
function freqStack(ops, vals) {
  const freq = new Map();
  const group = new Map();
  let maxFreq = 0;
  const result = [];
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    if (op === 'FreqStack') {
      result.push(null);
    } else if (op === 'push') {
      const val = vals[i][0];
      const f = (freq.get(val) || 0) + 1;
      freq.set(val, f);
      if (f > maxFreq) maxFreq = f;
      if (!group.has(f)) group.set(f, []);
      group.get(f).push(val);
      result.push(null);
    } else {
      const val = group.get(maxFreq).pop();
      if (group.get(maxFreq).length === 0) maxFreq--;
      freq.set(val, freq.get(val) - 1);
      result.push(val);
    }
  }
  return result;
}
`.trim();

const PY_PREAMBLE = `
def freqStack(ops, vals):
    freq = {}
    group = {}
    max_freq = 0
    result = []
    for op, val in zip(ops, vals):
        if op == 'FreqStack':
            result.append(None)
        elif op == 'push':
            v = val[0]
            f = freq.get(v, 0) + 1
            freq[v] = f
            if f > max_freq:
                max_freq = f
            if f not in group:
                group[f] = []
            group[f].append(v)
            result.append(None)
        else:
            v = group[max_freq].pop()
            if not group[max_freq]:
                max_freq -= 1
            freq[v] -= 1
            result.append(v)
    return result
`.trim();

export const problem: Problem = {
  id: 'freq-stack',
  title: 'Maximum Frequency Stack',
  difficulty: 'hard',
  tags: ['stack', 'hash-map'],
  description: `Design a stack-like data structure to push elements onto the stack and pop the most frequent element off the stack.

Implement the \`FreqStack\` class:
- \`FreqStack()\` constructs an empty frequency stack.
- \`void push(int val)\` pushes an integer \`val\` onto the top of the stack.
- \`int pop()\` removes and returns the most frequent element in the stack. If there is a tie for most frequent, the element closest to the top of the stack is removed and returned.

> **Note:** A runner function \`freqStack(ops, vals)\` is pre-defined. \`ops\` is a list of operation names; \`vals[i]\` is an array of arguments. The runner returns an array with \`null\` for constructors/pushes and the popped value for pops.`,
  constraints: [
    '0 <= val <= 10^9',
    'At most 2 * 10^4 calls will be made to push and pop.',
    'It is guaranteed that there will be at least one element in the stack before calling pop.',
  ],
  examples: [
    {
      input: 'ops = ["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"], vals = [[],[5],[7],[5],[7],[4],[5],[],[],[],[]]',
      output: '[null,null,null,null,null,null,null,5,7,5,4]',
      explanation: 'After pushing 5,7,5,7,4,5: 5 has frequency 3, 7 has frequency 2, 4 has frequency 1. pop()→5, pop()→7, pop()→5, pop()→4.',
    },
  ],
  hints: [
    'Track freq[val] = how many times val has been pushed.',
    'Track group[freq] = a stack of vals that currently have that frequency.',
    'On pop: remove from group[maxFreq], decrement freq of that val, decrease maxFreq if group[maxFreq] is now empty.',
  ],
  functionName: 'freqStack',
  params: ['ops', 'vals'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// freqStack runner is pre-defined and calls your class below.
class FreqStack {
  constructor() {
    this.freq = new Map();
    this.group = new Map();
    this.maxFreq = 0;
  }
  push(val) {
    const f = (this.freq.get(val) || 0) + 1;
    this.freq.set(val, f);
    if (f > this.maxFreq) this.maxFreq = f;
    if (!this.group.has(f)) this.group.set(f, []);
    this.group.get(f).push(val);
  }
  pop() {
    const val = this.group.get(this.maxFreq).pop();
    if (this.group.get(this.maxFreq).length === 0) this.maxFreq--;
    this.freq.set(val, this.freq.get(val) - 1);
    return val;
  }
}`,
    typescript: `function freqStack(ops: string[], vals: (number[] | never[])[]): (null | number)[] {
  const freq = new Map<number, number>();
  const group = new Map<number, number[]>();
  let maxFreq = 0;
  const result: (null | number)[] = [];
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i]!;
    if (op === 'FreqStack') {
      result.push(null);
    } else if (op === 'push') {
      const val = (vals[i] as number[])[0]!;
      const f = (freq.get(val) ?? 0) + 1;
      freq.set(val, f);
      if (f > maxFreq) maxFreq = f;
      if (!group.has(f)) group.set(f, []);
      group.get(f)!.push(val);
      result.push(null);
    } else {
      const top = group.get(maxFreq)!;
      const val = top.pop()!;
      if (top.length === 0) maxFreq--;
      freq.set(val, freq.get(val)! - 1);
      result.push(val);
    }
  }
  return result;
}`,

    python: `# freqStack runner is pre-defined and calls your class below.
class FreqStack:
    def __init__(self):
        self.freq = {}
        self.group = {}
        self.max_freq = 0

    def push(self, val: int) -> None:
        f = self.freq.get(val, 0) + 1
        self.freq[val] = f
        if f > self.max_freq:
            self.max_freq = f
        self.group.setdefault(f, []).append(val)

    def pop(self) -> int:
        val = self.group[self.max_freq].pop()
        if not self.group[self.max_freq]:
            self.max_freq -= 1
        self.freq[val] -= 1
        return val`,
  },
  visibleTests: [
    {
      args: [
        ['FreqStack', 'push', 'push', 'push', 'push', 'push', 'push', 'pop', 'pop', 'pop', 'pop'],
        [[], [5], [7], [5], [7], [4], [5], [], [], [], []],
      ],
      expected: [null, null, null, null, null, null, null, 5, 7, 5, 4],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['FreqStack', 'push', 'pop'],
        [[], [1], []],
      ],
      expected: [null, null, 1],
    },
    {
      args: [
        ['FreqStack', 'push', 'push', 'pop', 'pop'],
        [[], [1], [1], [], []],
      ],
      expected: [null, null, null, 1, 1],
    },
    {
      args: [
        ['FreqStack', 'push', 'push', 'push', 'pop', 'pop', 'pop'],
        [[], [1], [2], [1], [], [], []],
      ],
      expected: [null, null, null, null, 1, 2, 1],
    },
    {
      args: [
        ['FreqStack', 'push', 'push', 'push', 'push', 'pop', 'push', 'pop', 'pop', 'pop'],
        [[], [4], [0], [9], [3], [], [4], [], [], []],
      ],
      expected: [null, null, null, null, null, 3, null, 4, 9, 0],
    },
    {
      args: [
        ['FreqStack', 'push', 'push', 'push', 'push', 'push', 'pop', 'pop'],
        [[], [1], [2], [1], [2], [1], [], []],
      ],
      expected: [null, null, null, null, null, null, 1, 2],
    },
  ],
};
