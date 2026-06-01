import type { Problem } from '../types';

export const problem: Problem = {
  id: 'car-fleet-ii',
  title: 'Car Fleet II',
  difficulty: 'hard',
  tags: ['stack', 'math'],
  description: `There are \`n\` cars traveling at different speeds in the **same direction** along a one-lane road. You are given an array \`cars\` of length \`n\`, where \`cars[i] = [position_i, speed_i]\` represents the position and speed of the \`i\`th car. Position is measured in miles; speed is measured in miles per hour.

A car can never pass another car ahead of it but can catch up to it and then travel at the **slower car's speed**. Return an array \`answer\`, where \`answer[i]\` is the time, in hours, at which the \`i\`th car collides with the next car (the nearest car to its right). If there is **no collision**, \`answer[i]\` is \`-1\`.

Answers within \`10^-5\` of the actual answers are accepted.`,
  constraints: [
    '1 <= cars.length <= 10^5',
    '1 <= position_i, speed_i <= 10^6',
    'All position_i are distinct.',
    'The positions are given in increasing order.',
  ],
  examples: [
    {
      input: 'cars = [[1,2],[2,1],[4,3],[7,2]]',
      output: '[1.00000,-1.00000,3.00000,-1.00000]',
      explanation: 'Car 0 catches car 1 in 1 hour. Car 2 catches car 3 in 3 hours. Cars 1 and 3 never catch the next car.',
    },
    {
      input: 'cars = [[1,3],[2,2],[4,1]]',
      output: '[1.00000,2.00000,-1.00000]',
    },
  ],
  hints: [
    'Process cars from right to left using a monotonic stack.',
    'For car i, check when it would catch the car at the top of the stack.',
    'If car i catches car j before car j caught the next one, then car i will meet the fleet at time collide(i,j). Otherwise, j is irrelevant and pop it.',
  ],
  functionName: 'getCollisionTimes',
  params: ['cars'],
  starterCode: {
    javascript: `function getCollisionTimes(cars) {
  const n = cars.length;
  const ans = new Array(n).fill(-1);
  const stack = []; // stores car indices, right to left
  for (let i = n - 1; i >= 0; i--) {
    const [pi, si] = cars[i];
    while (stack.length > 0) {
      const j = stack[stack.length - 1];
      const [pj, sj] = cars[j];
      if (si <= sj) break; // i can never catch j
      const t = (pj - pi) / (si - sj);
      if (ans[j] === -1 || t <= ans[j]) { ans[i] = t; break; }
      stack.pop(); // j merges before i reaches it; check next
    }
    stack.push(i);
  }
  return ans;
}`,
    typescript: `function getCollisionTimes(cars: number[][]): number[] {
  const n = cars.length;
  const ans = new Array<number>(n).fill(-1);
  const stack: number[] = [];
  for (let i = n - 1; i >= 0; i--) {
    const [pi, si] = cars[i]!;
    while (stack.length > 0) {
      const j = stack[stack.length - 1]!;
      const [pj, sj] = cars[j]!;
      if (si! <= sj!) break;
      const t = (pj! - pi!) / (si! - sj!);
      if (ans[j] === -1 || t <= ans[j]!) { ans[i] = t; break; }
      stack.pop();
    }
    stack.push(i);
  }
  return ans;
}`,
    python: `def getCollisionTimes(cars):
    n = len(cars)
    ans = [-1.0] * n
    stack = []  # stores car indices, right to left
    for i in range(n - 1, -1, -1):
        pi, si = cars[i]
        while stack:
            j = stack[-1]
            pj, sj = cars[j]
            if si <= sj:
                break  # i can never catch j
            t = (pj - pi) / (si - sj)
            if ans[j] == -1 or t <= ans[j]:
                ans[i] = t
                break
            stack.pop()
        stack.append(i)
    return ans`,
  },
  visibleTests: [
    { args: [[[1,2],[2,1],[4,3],[7,2]]], expected: [1.0, -1.0, 3.0, -1.0] },
    { args: [[[1,3],[2,2],[4,1]]], expected: [1.0, 2.0, -1.0] },
  ],
  hiddenTests: [
    { args: [[[1,1]]], expected: [-1.0] },
    { args: [[[1,2],[4,1]]], expected: [3.0, -1.0] },
    { args: [[[1,4],[2,2],[3,1]]], expected: [0.5, 1.0, -1.0] },
  ],
};
