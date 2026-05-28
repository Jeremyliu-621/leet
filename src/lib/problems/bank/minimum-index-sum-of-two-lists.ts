import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-index-sum-of-two-lists',
  title: 'Minimum Index Sum of Two Lists',
  difficulty: 'easy',
  tags: ['hash-map'],
  description: `Given two arrays of strings \`list1\` and \`list2\`, find the **common strings** with the **least index sum**. A common string is a string that appears in both arrays. The **index sum** of a common string is the sum of its indices in both arrays. If there are multiple answers, return all of them in any order.`,
  constraints: [
    '1 <= list1.length, list2.length <= 1000',
    '1 <= list1[i].length, list2[i].length <= 30',
    'list1[i] and list2[i] consist of spaces and English letters.',
    'All strings in list1 are unique.',
    'All strings in list2 are unique.',
  ],
  examples: [
    { input: 'list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]', output: '["Shogun"]', explanation: '"Shogun" is the only common restaurant at index 0 in list1 and index 3 in list2, sum=3.' },
    { input: 'list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]', output: '["Shogun"]', explanation: '"Shogun" has index sum 1, "KFC" has sum 3, "Burger King" has sum 4.' },
  ],
  hints: [
    'Build a map from string to index for list1. Then for each item in list2, compute the index sum for common strings.',
    'Iterate list2 with its index. Look up each element in the map. If found, the index sum is `map[item] + i`. Track the minimum sum and reset the result array whenever a strictly smaller sum is found; append when equal.',
    '```js\nconst map = {};\nfor (let i = 0; i < list1.length; i++) map[list1[i]] = i;\nlet best = Infinity, res = [];\nfor (let j = 0; j < list2.length; j++) {\n  if (list2[j] in map) {\n    const s = map[list2[j]] + j;\n    if (s < best) { best = s; res = [list2[j]]; }\n    else if (s === best) res.push(list2[j]);\n  }\n}\nreturn res;```',
  ],
  functionName: 'findRestaurant',
  params: ['list1', 'list2'],
  starterCode: {
    javascript: 'function findRestaurant(list1, list2) {\n  \n}\n',
    typescript: "function findRestaurant(list1: string[], list2: string[]): string[] {\n  \n}",

    python: 'def findRestaurant(list1, list2):\n    pass\n',
  },
  visibleTests: [
    { args: [['Shogun', 'Tapioca Express', 'Burger King', 'KFC'], ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun']], expected: ['Shogun'] },
    { args: [['Shogun', 'Tapioca Express', 'Burger King', 'KFC'], ['KFC', 'Shogun', 'Burger King']], expected: ['Shogun'] },
    { args: [['a', 'b', 'c'], ['c', 'd', 'e']], expected: ['c'] },
  ],
  hiddenTests: [
    { args: [['a'], ['a']], expected: ['a'] },
    { args: [['a', 'b', 'c'], ['d', 'b', 'e']], expected: ['b'] },
    { args: [['abc', 'def'], ['xyz', 'def']], expected: ['def'] },
    { args: [['x', 'y', 'z'], ['a', 'x', 'y']], expected: ['x'] },
  ],
};
