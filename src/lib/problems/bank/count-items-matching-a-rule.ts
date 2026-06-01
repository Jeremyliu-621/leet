import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-items-matching-a-rule',
  title: 'Count Items Matching a Rule',
  difficulty: 'easy',
  tags: ['arrays', 'strings'],
  description: `You are given an array \`items\`, where each \`items[i] = [type_i, color_i, name_i]\` describes the type, color, and name of the \`i\`-th item. You are also given a rule represented by two strings, \`ruleKey\` and \`ruleValue\`.

The \`i\`-th item is said to **match the rule** if **one** of the following is true:
- \`ruleKey == "type"\` and \`ruleValue == type_i\`
- \`ruleKey == "color"\` and \`ruleValue == color_i\`
- \`ruleKey == "name"\` and \`ruleValue == name_i\`

Return *the number of items that match the given rule*.`,
  constraints: [
    '1 <= items.length <= 10^4',
    '1 <= type_i.length, color_i.length, name_i.length <= 10',
    'ruleKey is "type", "color", or "name".',
    '1 <= ruleValue.length <= 10',
    'All strings consist only of lowercase letters.',
  ],
  examples: [
    {
      input: 'items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"',
      output: '1',
      explanation: 'Only the second item matches: color = "silver".',
    },
    {
      input: 'items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"',
      output: '2',
      explanation: 'Items 0 and 2 have type "phone".',
    },
  ],
  hints: [
    'Map ruleKey to the corresponding index: "type" → 0, "color" → 1, "name" → 2.',
    'Count items where items[i][index] === ruleValue.',
    'A one-liner with filter and the index mapping works cleanly.',
  ],
  functionName: 'countMatches',
  params: ['items', 'ruleKey', 'ruleValue'],
  starterCode: {
    javascript: `function countMatches(items, ruleKey, ruleValue) {\n\n}`,
    typescript: `function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {

}`,
    python: `def countMatches(items, ruleKey: str, ruleValue: str) -> int:\n    pass`,
  },
  visibleTests: [
    { args: [[['phone','blue','pixel'],['computer','silver','lenovo'],['phone','gold','iphone']], 'color', 'silver'], expected: 1 },
    { args: [[['phone','blue','pixel'],['computer','silver','phone'],['phone','gold','iphone']], 'type', 'phone'], expected: 2 },
  ],
  hiddenTests: [
    { args: [[['a','b','c']], 'type', 'a'], expected: 1 },
    { args: [[['a','b','c']], 'name', 'c'], expected: 1 },
    { args: [[['a','b','c'],['a','b','c']], 'color', 'b'], expected: 2 },
    { args: [[['a','b','c']], 'type', 'z'], expected: 0 },
    { args: [[['phone','blue','pixel'],['computer','silver','lenovo'],['phone','gold','iphone']], 'type', 'phone'], expected: 2 },
    { args: [[['a','b','c'],['d','e','f']], 'name', 'f'], expected: 1 },
  ],
};
