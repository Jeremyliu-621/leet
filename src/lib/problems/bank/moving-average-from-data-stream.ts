import type { Problem } from '../types';

const JS_PREAMBLE = `
function movingAverageRunner(size, vals) {
  const m = new MovingAverage(Number(size));
  return vals.map(v => m.next(v));
}
`.trim();

const PY_PREAMBLE = `
def movingAverageRunner(size, vals):
    m = MovingAverage(int(size))
    vals = list(vals.to_py()) if hasattr(vals, 'to_py') else list(vals)
    return [m.next(v) for v in vals]
`.trim();

export const problem: Problem = {
  id: 'moving-average-from-data-stream',
  title: 'Moving Average from Data Stream',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

Implement the \`MovingAverage\` class:
- \`MovingAverage(int size)\` — initializes the object with the size of the window \`size\`.
- \`double next(int val)\` — returns the moving average of the last \`size\` values of the stream.

> **Note:** A runner function is pre-defined that creates a \`MovingAverage(size)\` and calls \`next(val)\` for each value.`,
  constraints: ['1 <= size <= 1000', '-10^5 <= val <= 10^5', 'At most 10^4 calls will be made to next'],
  examples: [
    {
      input: 'size = 3, stream = [1,10,3,5]',
      output: '[1.0,5.5,4.67,6.0]',
      explanation: 'next(1)=1/1=1.0, next(10)=(1+10)/2=5.5, next(3)=(1+10+3)/3=4.666..., next(5)=(10+3+5)/3=6.0.',
    },
  ],
  hints: [
    'Use a circular buffer (queue) of size at most `size`. Track the running sum.',
    'On each call to next(val): add val to the queue and to the running sum. If queue size exceeds the window, remove the oldest value from the sum.',
    'Return runningSum / currentWindowSize.',
  ],
  functionName: 'movingAverageRunner',
  params: ['size', 'vals'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// movingAverageRunner is pre-defined and calls your class below.\nclass MovingAverage {\n  constructor(size) {\n    this.size = size;\n  }\n  next(val) {}\n}\n',
    typescript: "function movingAverageRunner(size: number, vals: number[]): number[] {\n  constructor(size) {\n    this.size = size;\n  }\n  next(val) {}\n}",

    python: '# movingAverageRunner is pre-defined and calls your class below.\nclass MovingAverage:\n    def __init__(self, size):\n        self.size = size\n    def next(self, val): pass\n',
  },
  visibleTests: [
    { args: [3, [1, 10, 3, 5]], expected: [1.0, 5.5, 14 / 3, 6.0] },
  ],
  hiddenTests: [
    { args: [1, [5, 10, 15]], expected: [5.0, 10.0, 15.0] },
    { args: [2, [3, 7, 1, 9]], expected: [3.0, 5.0, 4.0, 5.0] },
    { args: [5, [1, 2, 3, 4, 5, 6]], expected: [1.0, 1.5, 2.0, 2.5, 3.0, 4.0] },
  ],
};
