import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sort-features-by-popularity',
  title: 'Sort Features by Popularity',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given a string array \`features\` and a string array \`responses\`, where each element of \`responses\` is a space-separated sentence.

For each feature, count how many **responses** mention it. A feature is counted **at most once per response** even if it appears multiple times in that response.

Return the \`features\` array sorted by the number of responses mentioning each feature in **descending** order. Preserve the **original order** for features with equal counts (stable sort).

**Example:**
- features = \`["cooler","lock","touch"]\`
- responses = \`["i like cooler cooler","lock touch cool","locker like touch"]\`
- "cooler" appears in response 0 (count = 1).
- "lock" appears in response 1 only — "locker" does NOT count as containing "lock" as a separate word (count = 1).
- "touch" appears in responses 1 and 2 (count = 2).
- Sorted descending: \`["touch","cooler","lock"]\`

**Note:** Match features as **whole words** — split each response into words and use exact equality.`,
  constraints: [
    '1 <= features.length <= 10^4',
    '1 <= features[i].length <= 10',
    'features contains no duplicates',
    '1 <= responses.length <= 10^2',
    '1 <= responses[i].length <= 10^3',
  ],
  examples: [
    {
      input: 'features = ["cooler","lock","touch"], responses = ["i like cooler cooler","lock touch cool","locker like touch"]',
      output: '["touch","cooler","lock"]',
      explanation: '"touch" is in 2 responses, "cooler" and "lock" are each in 1. "locker" does not count as "lock".',
    },
    {
      input: 'features = ["a","aa","b"], responses = ["a aa b","a b"]',
      output: '["a","b","aa"]',
      explanation: '"a" is in 2 responses, "b" is in 2, "aa" is in 1. "a" and "b" tie so original order is preserved.',
    },
  ],
  hints: [
    'For each response, split into words and put them in a Set. Then for each feature, check if it is in that Set.',
    'Build a Map<feature, count>. For each response, create a word-set; for each feature, if it is in the word-set, increment its count.',
    'Use a stable sort: features.map((f, i) => [f, i]).sort((a, b) => count[b[0]] - count[a[0]] || a[1] - b[1]).map(([f]) => f)',
  ],
  functionName: 'sortFeatures',
  params: ['features', 'responses'],
  starterCode: {
    javascript: `function sortFeatures(features, responses) {
  // Return features sorted by number of responses mentioning each (desc), stable
}`,
    python: `def sortFeatures(features, responses):
    # Return features sorted by number of responses mentioning each (desc), stable
    pass`,
  },
  visibleTests: [
    {
      args: [['cooler', 'lock', 'touch'], ['i like cooler cooler', 'lock touch cool', 'locker like touch']],
      expected: ['touch', 'cooler', 'lock'],
    },
    {
      args: [['a', 'aa', 'b'], ['a aa b', 'a b']],
      expected: ['a', 'b', 'aa'],
    },
  ],
  hiddenTests: [
    {
      args: [['x', 'y', 'z'], ['x y', 'y z', 'x z', 'x y z']],
      expected: ['x', 'y', 'z'],
    },
    {
      args: [['hello', 'world'], ['hello world', 'hello', 'world']],
      expected: ['hello', 'world'],
    },
    {
      args: [['one'], ['one two one three']],
      expected: ['one'],
    },
    {
      args: [['fast', 'slow'], ['slow is ok', 'fast is better', 'fast or slow']],
      expected: ['fast', 'slow'],
    },
  ],
};
