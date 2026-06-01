import type { Problem } from '../types';

export const problem: Problem = {
  id: 'boats-to-save-people',
  title: 'Boats to Save People',
  difficulty: 'medium',
  tags: ['two-pointers'],
  description: `You are given an array \`people\` where \`people[i]\` is the weight of the \`i\`th person, and an integer \`limit\` which is the maximum weight a single boat can carry.

Each boat carries **at most two people** at a time, provided the sum of their weights is at most \`limit\`.

Return the **minimum number of boats** needed to carry every person.

**Strategy:** Sort the weights, then pair the lightest remaining person with the heaviest. If they fit together, both board the same boat; otherwise the heaviest takes a boat alone.`,
  constraints: [
    '1 <= people.length <= 50000',
    '1 <= people[i] <= limit <= 30000',
  ],
  examples: [
    {
      input: 'people = [1,2], limit = 3',
      output: '1',
      explanation: 'Both people fit on one boat (1 + 2 = 3 ≤ 3).',
    },
    {
      input: 'people = [3,2,2,1], limit = 3',
      output: '3',
      explanation: 'Sorted: [1,2,2,3]. Pair (1,2) on one boat; 2 alone; 3 alone.',
    },
    {
      input: 'people = [3,5,3,4], limit = 5',
      output: '4',
      explanation: 'Sorted: [3,3,4,5]. No two people can share a boat, so each needs their own.',
    },
  ],
  hints: [
    'Greedy: sort the weights. At each step you want to fit as many people as possible. Who should share a boat with the heaviest person? The lightest — that is your best chance of staying under the limit.',
    'Use two pointers: left at index 0 (lightest) and right at index n − 1 (heaviest). Each iteration always accounts for the heaviest person: if they fit with the lightest, move both pointers inward; otherwise the heaviest goes alone and only right moves left. Increment the boat count each iteration.',
    '`people.sort((a, b) => a - b); let left = 0, right = people.length - 1, boats = 0; while (left <= right) { if (people[left] + people[right] <= limit) left++; right--; boats++; } return boats;`',
  ],
  functionName: 'numRescueBoats',
  params: ['people', 'limit'],
  starterCode: {
    javascript: `function numRescueBoats(people, limit) {
  people.sort((a, b) => a - b);
  let left = 0, right = people.length - 1, boats = 0;
  while (left <= right) {
    if (people[left] + people[right] <= limit) left++;
    right--; boats++;
  }
  return boats;
}`,
    typescript: `function numRescueBoats(people: number[], limit: number): number {
  people.sort((a, b) => a - b);
  let left = 0, right = people.length - 1, boats = 0;
  while (left <= right) {
    if (people[left]! + people[right]! <= limit) left++;
    right--; boats++;
  }
  return boats;
}`,
    python: `def numRescueBoats(people, limit):
    people = list(people.to_py()) if hasattr(people, 'to_py') else list(people)
    people.sort()
    left, right, boats = 0, len(people) - 1, 0
    while left <= right:
        if people[left] + people[right] <= limit: left += 1
        right -= 1; boats += 1
    return boats`,
  },
  visibleTests: [
    { args: [[1, 2], 3], expected: 1 },
    { args: [[3, 2, 2, 1], 3], expected: 3 },
    { args: [[3, 5, 3, 4], 5], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1], 5], expected: 1 },
    { args: [[1, 1, 1, 1], 2], expected: 2 },
    { args: [[3, 3, 3, 3], 3], expected: 4 },
    { args: [[2, 3, 3, 4, 4], 6], expected: 3 },
    { args: [[5, 1, 4, 2], 6], expected: 2 },
  ],
};
