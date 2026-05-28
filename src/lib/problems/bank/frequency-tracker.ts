import type { Problem } from '../types';

const JS_PREAMBLE = `
function frequencyTracker(operations, args) {
  const count = new Map();
  const freqCount = new Map();
  function incFreq(f) { freqCount.set(f, (freqCount.get(f) || 0) + 1); }
  function decFreq(f) {
    const c = freqCount.get(f) || 0;
    if (c <= 1) freqCount.delete(f); else freqCount.set(f, c - 1);
  }
  return operations.map((op, i) => {
    const a = args[i] || [];
    if (op === 'add') {
      const num = a[0];
      const prev = count.get(num) || 0;
      if (prev > 0) decFreq(prev);
      count.set(num, prev + 1);
      incFreq(prev + 1);
      return null;
    } else if (op === 'deleteOne') {
      const num = a[0];
      const prev = count.get(num) || 0;
      if (prev === 0) return null;
      decFreq(prev);
      count.set(num, prev - 1);
      if (prev - 1 > 0) incFreq(prev - 1);
      return null;
    } else if (op === 'hasFrequency') {
      const freq = a[0];
      return (freqCount.get(freq) || 0) > 0;
    }
    return null;
  });
}
`.trim();

const PY_PREAMBLE = `
def frequencyTracker(operations, args):
    count = {}
    freq_count = {}
    def inc_freq(f):
        freq_count[f] = freq_count.get(f, 0) + 1
    def dec_freq(f):
        if freq_count.get(f, 0) <= 1:
            freq_count.pop(f, None)
        else:
            freq_count[f] -= 1
    result = []
    for op, a in zip(operations, args):
        if op == 'add':
            num = a[0]
            prev = count.get(num, 0)
            if prev > 0:
                dec_freq(prev)
            count[num] = prev + 1
            inc_freq(prev + 1)
            result.append(None)
        elif op == 'deleteOne':
            num = a[0]
            prev = count.get(num, 0)
            if prev == 0:
                result.append(None)
                continue
            dec_freq(prev)
            count[num] = prev - 1
            if prev - 1 > 0:
                inc_freq(prev - 1)
            result.append(None)
        elif op == 'hasFrequency':
            freq = a[0]
            result.append(freq_count.get(freq, 0) > 0)
        else:
            result.append(None)
    return result
`.trim();

export const problem: Problem = {
  id: 'frequency-tracker',
  title: 'Frequency Tracker',
  difficulty: 'medium',
  tags: ['hash-map'],
  description: `Design a data structure that keeps track of the values in it and answers some queries regarding their frequencies in **O(1)** time.

Implement a \`FrequencyTracker\` class. The runner function \`frequencyTracker(operations, args)\` is pre-defined and calls your class's methods:

- \`add(number)\` — adds \`number\` to the data structure.
- \`deleteOne(number)\` — deletes one occurrence of \`number\` from the data structure. Does nothing if \`number\` is not present.
- \`hasFrequency(frequency)\` — returns \`true\` if any number in the data structure occurs exactly \`frequency\` times, otherwise returns \`false\`.

Return an array of results for each operation: \`null\` for \`add\`/\`deleteOne\`, and a boolean for \`hasFrequency\`.

> **Note:** A runner function is pre-defined that creates a \`FrequencyTracker\` and calls your methods. Implement the class below.`,
  constraints: [
    '`1 <= number <= 10^5`',
    '`1 <= frequency <= 10^5`',
    'At most `2 × 10^5` calls in total will be made to `add`, `deleteOne`, and `hasFrequency`.',
  ],
  examples: [
    {
      input: 'operations = ["add","add","hasFrequency"], args = [[3],[3],[2]]',
      output: '[null,null,true]',
      explanation: 'add(3): count={3:1}. add(3): count={3:2}. hasFrequency(2): number 3 has frequency 2 → true.',
    },
    {
      input: 'operations = ["add","deleteOne","hasFrequency"], args = [[9],[9],[1]]',
      output: '[null,null,false]',
      explanation: 'add(9): count={9:1}. deleteOne(9): count={9:0}. hasFrequency(1): no number has frequency 1 → false.',
    },
  ],
  hints: [
    'Use two maps: `count[num]` = how many times num appears, and `freqCount[f]` = how many distinct numbers appear exactly f times.',
    'When adding a number, decrement freqCount for its old frequency and increment for the new frequency.',
    'When deleting, similarly update both maps. hasFrequency is then an O(1) lookup in freqCount.',
  ],
  functionName: 'frequencyTracker',
  params: ['operations', 'args'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// frequencyTracker is pre-defined and calls your class below.
class FrequencyTracker {
  constructor() {}
  add(number) {}
  deleteOne(number) {}
  hasFrequency(frequency) {}
}`,
    python: `# frequencyTracker is pre-defined and calls your class below.
class FrequencyTracker:
    def __init__(self): pass
    def add(self, number): pass
    def deleteOne(self, number): pass
    def hasFrequency(self, frequency): pass`,
  },
  visibleTests: [
    {
      args: [['add', 'add', 'hasFrequency'], [[3], [3], [2]]],
      expected: [null, null, true],
    },
    {
      args: [['add', 'deleteOne', 'hasFrequency'], [[9], [9], [1]]],
      expected: [null, null, false],
    },
  ],
  hiddenTests: [
    {
      args: [['hasFrequency'], [[1]]],
      expected: [false],
    },
    {
      args: [
        ['add', 'add', 'add', 'hasFrequency', 'deleteOne', 'hasFrequency'],
        [[3], [3], [3], [3], [3], [3]],
      ],
      expected: [null, null, null, true, null, false],
    },
  ],
};
