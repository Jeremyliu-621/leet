import type { Problem } from '../types';

export const problem: Problem = {
  id: 'bag-of-tokens',
  title: 'Bag of Tokens',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You have an initial **power** of \`power\`, a bag of \`tokens\`, and \`0\` score. Each token can be played in one of two ways:

- **Face-up**: If you have at least \`tokens[i]\` power, lose \`tokens[i]\` power and gain \`1\` score.
- **Face-down**: If you have at least \`1\` score, gain \`tokens[i]\` power and lose \`1\` score.

Each token can be played at most once, in any order. Return the **maximum** score you can achieve after playing any number of tokens.

**Approach:** Sort tokens. Use two pointers. Greedily play the cheapest token face-up to gain score; when stuck (not enough power), trade the most expensive token face-down for power. Track the maximum score seen.`,
  constraints: [
    '0 <= tokens.length <= 1000',
    '0 <= tokens[i], power < 10^4',
  ],
  examples: [
    {
      input: 'tokens = [100], power = 50',
      output: '0',
      explanation: 'Cannot play the token face-up (not enough power). No score possible.',
    },
    {
      input: 'tokens = [200,100], power = 150',
      output: '1',
      explanation: 'Sort: [100,200]. Play 100 face-up: power=50, score=1. Cannot play 200 face-up (50 < 200). Cannot play face-down (score=1 → power=250, score=0 but we already recorded max=1).',
    },
    {
      input: 'tokens = [100,200,300,400], power = 200',
      output: '2',
    },
  ],
  hints: [
    'Sort the tokens. Use a two-pointer approach with lo (cheapest) and hi (most expensive).',
    'If power >= tokens[lo], play it face-up to gain a point. Otherwise if you have points, play tokens[hi] face-down to gain power.',
    '```js\nfunction bagOfTokensScore(tokens, power) {\n  tokens = [...tokens].sort((a, b) => a - b);\n  let lo = 0, hi = tokens.length - 1, points = 0, max = 0;\n  while (lo <= hi) {\n    if (power >= tokens[lo]) { power -= tokens[lo++]; max = Math.max(max, ++points); }\n    else if (points > 0) { power += tokens[hi--]; points--; }\n    else break;\n  }\n  return max;\n}\n```',
  ],
  functionName: 'bagOfTokensScore',
  params: ['tokens', 'power'],
  starterCode: {
    javascript: `function bagOfTokensScore(tokens, power) {
  // return maximum score achievable

}`,
    typescript: "function bagOfTokensScore(tokens: number[], power: number): number {\n  // return maximum score achievable\n\n}",

    python: `def bagOfTokensScore(tokens: list, power: int) -> int:
    # return maximum score achievable
    pass
`,
  },
  visibleTests: [
    { args: [[100], 50], expected: 0 },
    { args: [[200, 100], 150], expected: 1 },
    { args: [[100, 200, 300, 400], 200], expected: 2 },
  ],
  hiddenTests: [
    { args: [[], 0], expected: 0 },
    { args: [[100], 100], expected: 1 },
    { args: [[100, 200], 200], expected: 1 },
    { args: [[100, 200, 300], 300], expected: 2 },
    { args: [[71, 55, 82], 54], expected: 0 },
    { args: [[10, 20, 30], 100], expected: 3 },
    { args: [[100, 200, 300, 400], 350], expected: 2 },
  ],
};
