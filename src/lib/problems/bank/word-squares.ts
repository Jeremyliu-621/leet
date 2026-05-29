import type { Problem } from '../types';

export const problem: Problem = {
  id: 'word-squares',
  title: 'Word Squares',
  difficulty: 'hard',
  tags: ['trie', 'backtracking'],
  description: `Given an array of **unique** strings \`words\`, return all **word squares** you can build from them. A word square is a sequence of \`k\` words [\`w₀, w₁, ..., wₖ₋₁\`] where \`wᵢ[j] === wⱼ[i]\` for all valid \`i\` and \`j\` (i.e., the \`i\`-th row equals the \`i\`-th column).

Return the result **sorted lexicographically** by the joined words (sort each square's word list alphabetically by their concatenation).

Each word in \`words\` has the same length.`,
  constraints: [
    '`1 <= words.length <= 1000`',
    '`1 <= words[i].length <= 5`',
    '`words[i]` consists only of lowercase English letters',
    'All `words[i]` are unique',
  ],
  examples: [
    {
      input: 'words = ["area","lead","wall","lady","ball"]',
      output: '[["ball","area","lead","lady"],["wall","area","lead","lady"]]',
      explanation: 'Two valid squares exist. "wall"/"area"/"lead"/"lady" and "ball"/"area"/"lead"/"lady". The result is sorted by first word.',
    },
    {
      input: 'words = ["abat","baba","atan","atal"]',
      output: '[["baba","abat","baba","atan"],["baba","abat","baba","atal"]]',
      explanation: 'Both squares start with "baba" as row 0.',
    },
  ],
  hints: [
    'Build a prefix → words map. At row i, the required prefix for that word is determined by characters `square[0][i], square[1][i], ..., square[i-1][i]`. Look up valid words in the prefix map and try each via backtracking.',
    'Pre-building the prefix map is O(n × L) where n is the number of words and L is their length. Lookups are O(1). Without this map, each backtracking step would scan all words — too slow.',
    '```js\nfunction wordSquares(words) {\n  const n = words[0]?.length ?? 0;\n  const map = new Map();\n  for (const w of words) {\n    for (let i = 0; i <= n; i++) {\n      const p = w.slice(0, i);\n      if (!map.has(p)) map.set(p, []);\n      map.get(p).push(w);\n    }\n  }\n  const result = [];\n  function bt(sq) {\n    if (sq.length === n) { result.push([...sq]); return; }\n    const i = sq.length;\n    const pref = sq.map(w => w[i]).join("");\n    for (const w of (map.get(pref) ?? [])) {\n      sq.push(w); bt(sq); sq.pop();\n    }\n  }\n  bt([]);\n  return result.sort((a, b) => a.join(",").localeCompare(b.join(",")));\n}\n```',
  ],
  functionName: 'wordSquares',
  params: ['words'],
  starterCode: {
    javascript: `function wordSquares(words) {

}`,
    typescript: `function wordSquares(words: string[]): string[][] {

}`,
    python: `def wordSquares(words: list[str]) -> list[list[str]]:
    pass`,
  },
  visibleTests: [
    {
      args: [['area', 'lead', 'wall', 'lady', 'ball']],
      expected: [['ball', 'area', 'lead', 'lady'], ['wall', 'area', 'lead', 'lady']],
    },
    {
      args: [['abat', 'baba', 'atan', 'atal']],
      expected: [['baba', 'abat', 'baba', 'atal'], ['baba', 'abat', 'baba', 'atan']],
    },
    {
      args: [['abc', 'bcd', 'cde']],
      expected: [['abc', 'bcd', 'cde']],
    },
  ],
  hiddenTests: [
    {
      args: [['ab', 'ba']],
      expected: [['ab', 'ba'], ['ba', 'ab']],
    },
    {
      args: [['abc', 'bca', 'cab']],
      expected: [['abc', 'bca', 'cab'], ['bca', 'cab', 'abc'], ['cab', 'abc', 'bca']],
    },
    {
      args: [['a']],
      expected: [['a']],
    },
    {
      args: [['xz', 'zx']],
      expected: [['xz', 'zx'], ['zx', 'xz']],
    },
  ],
};
