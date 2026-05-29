import type { Problem } from '../types';

const JS_PREAMBLE = `
function randomPickWeightRunner(w, picks) {
  const obj = new Solution(w.map ? [...w] : [...w]);
  return picks.map(() => obj.pickIndex());
}
`.trim();

const PY_PREAMBLE = `
def randomPickWeightRunner(w, picks):
    obj = Solution(list(w.to_py()) if hasattr(w, 'to_py') else list(w))
    return [obj.pickIndex() for _ in picks]
`.trim();

export const problem: Problem = {
  id: 'random-pick-with-weight',
  title: 'Random Pick with Weight',
  difficulty: 'medium',
  tags: ['design', 'binary-search', 'math'],
  description: `You are given a **0-indexed** array of positive integers \`w\` where \`w[i]\` describes the **weight** of the \`i-th\` index.

Implement the function \`pickIndex()\`, which **randomly** picks an index in the range \`[0, w.length - 1]\` (inclusive) and returns it. The probability of picking an index \`i\` is \`w[i] / sum(w)\`.

> **Note:** A runner function is pre-defined that creates a \`Solution(w)\` and calls \`pickIndex()\` the specified number of times. Tests use weights where only one index is possible so results are deterministic.`,
  constraints: [
    '1 <= w.length <= 10^4',
    '1 <= w[i] <= 10^5',
    'pickIndex will be called at most 10^4 times',
  ],
  examples: [
    {
      input: 'w = [1,3], picks = 3 times',
      output: '[0 or 1 with probability 1/4 and 3/4]',
      explanation: 'pickIndex() returns 0 with probability 1/(1+3)=0.25 and 1 with probability 3/(1+3)=0.75.',
    },
  ],
  hints: [
    'Build a prefix sum array. The probability of picking index i is proportional to the range [prefix[i-1], prefix[i]).',
    'Generate a random integer in [1, total_weight] and binary-search the prefix sum array to find which index\'s range it falls in.',
    'This gives O(log n) per pick after O(n) setup.',
  ],
  functionName: 'randomPickWeightRunner',
  params: ['w', 'picks'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// randomPickWeightRunner is pre-defined and calls your class below.\nclass Solution {\n  constructor(w) {\n    this.w = w;\n  }\n  pickIndex() {}\n}\n',
    typescript: "function randomPickWeightRunner(w: number[], picks: number[]): number[] {\n  constructor(w) {\n    this.w = w;\n  }\n  pickIndex() {}\n}",

    python: '# randomPickWeightRunner is pre-defined and calls your class below.\nimport random\nclass Solution:\n    def __init__(self, w):\n        self.w = list(w)\n    def pickIndex(self):\n        pass\n',
  },
  visibleTests: [
    { args: [[1], [1, 2, 3]], expected: [0, 0, 0] },
    { args: [[0, 1], [1, 2]], expected: [1, 1] },
  ],
  hiddenTests: [
    { args: [[5], [1, 2, 3, 4, 5]], expected: [0, 0, 0, 0, 0] },
    { args: [[0, 0, 1], [1, 2, 3]], expected: [2, 2, 2] },
  ],
};
