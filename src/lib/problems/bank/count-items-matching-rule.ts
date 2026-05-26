import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-items-matching-rule',
  title: 'Count Items Matching a Rule',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given an array \`items\`, where each \`items[i] = [type_i, color_i, name_i]\` describes the type, color, and name of the \`i\`th item. You are also given a rule represented by two strings, \`ruleKey\` and \`ruleValue\`.

The \`i\`th item is said to match the rule if **one** of the following is true:
- \`ruleKey == "type"\` and \`ruleValue == type_i\`.
- \`ruleKey == "color"\` and \`ruleValue == color_i\`.
- \`ruleKey == "name"\` and \`ruleValue == name_i\`.

Return the number of items that match the given rule.`,
  constraints: [
    '`1 <= items.length <= 10^4`',
    '`1 <= type_i.length, color_i.length, name_i.length, ruleValue.length <= 10`',
    '`ruleKey` is equal to either `"type"`, `"color"`, or `"name"`.',
    'All strings consist only of lowercase letters.',
  ],
  examples: [
    {
      input: 'items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"',
      output: '1',
    },
    {
      input: 'items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"',
      output: '2',
    },
  ],
  hints: [
    'Map the rule key to an index (type→0, color→1, name→2) and filter items where `items[i][index] === ruleValue`.',
    'Map `ruleKey` to an array index: `{type:0, color:1, name:2}`. Then count items where `item[index] === ruleValue`.',
    `\`\`\`js
const idx = {type: 0, color: 1, name: 2}[ruleKey];
return items.filter(item => item[idx] === ruleValue).length;\`\`\``
  ],
  functionName: 'countMatches',
  params: ['items', 'ruleKey', 'ruleValue'],
  starterCode: {
    javascript: `function countMatches(items, ruleKey, ruleValue) {

}`,
    python: `def countMatches(items, ruleKey, ruleValue):
    pass`,
  },
  visibleTests: [
    { args: [[['phone', 'blue', 'pixel'], ['computer', 'silver', 'lenovo'], ['phone', 'gold', 'iphone']], 'color', 'silver'], expected: 1 },
    { args: [[['phone', 'blue', 'pixel'], ['computer', 'silver', 'phone'], ['phone', 'gold', 'iphone']], 'type', 'phone'], expected: 2 },
  ],
  hiddenTests: [
    { args: [[['phone', 'blue', 'pixel']], 'name', 'pixel'], expected: 1 },
    { args: [[['phone', 'blue', 'pixel'], ['phone', 'red', 'pixel']], 'type', 'computer'], expected: 0 },
    { args: [[['a', 'b', 'c'], ['a', 'b', 'd'], ['e', 'b', 'c']], 'color', 'b'], expected: 3 },
    { args: [[['phone', 'blue', 'iphone'], ['phone', 'gold', 'iphone'], ['phone', 'red', 'samsung']], 'name', 'iphone'], expected: 2 },
  ],
};
