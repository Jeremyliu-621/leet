import type { Problem } from '../types';

export const problem: Problem = {
  id: 'car-fleet',
  title: 'Car Fleet',
  difficulty: 'medium',
  tags: ['stack', 'arrays'],
  description: `There are \`n\` cars going to the same destination along a one-lane road. The destination is \`target\` miles away.

You are given two arrays \`position\` and \`speed\` (both of length \`n\`), where \`position[i]\` is the starting position of the \`i\`th car (in miles) and \`speed[i]\` is its speed (miles per hour).

A car can never pass another car ahead of it, but it can catch up and drive bumper to bumper at the slower car's speed — this forms a **fleet**.

Return the **number of car fleets** that will arrive at the destination.

**Approach:** Sort cars by position (descending). Compute time for each car to reach target. Use a monotonic stack: a car forms a new fleet only if its time is strictly greater than the fleet ahead.`,
  constraints: [
    '1 <= n <= 100000',
    '0 < target <= 1000000',
    '0 <= position[i] < target',
    '0 < speed[i] <= 1000000',
    'All positions are unique',
  ],
  examples: [
    {
      input: 'target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]',
      output: '3',
      explanation: 'Cars at 10 and 8 form one fleet. Car at 5 forms its own fleet. Cars at 3 and 0 form one fleet.',
    },
    {
      input: 'target = 10, position = [3], speed = [3]',
      output: '1',
      explanation: 'One car, one fleet.',
    },
  ],
  hints: [
    'Sort cars by position descending. Compute `time[i] = (target - position[i]) / speed[i]`. A car merges into the fleet ahead if its time ≤ the fleet ahead\'s time.',
    'Iterate through sorted times. Keep a stack of fleet times. If the current time > the top of the stack, it forms a new fleet; push it. Otherwise it catches up and joins the fleet ahead.',
    '`const pairs = position.map((p,i)=>[p,speed[i]]).sort((a,b)=>b[0]-a[0]); const stack=[]; for(const [p,s] of pairs){const t=(target-p)/s; if(!stack.length||t>stack[stack.length-1])stack.push(t);} return stack.length;`',
  ],
  functionName: 'carFleet',
  params: ['target', 'position', 'speed'],
  starterCode: {
    javascript: 'function carFleet(target, position, speed) {\n  // your code here\n}\n',
    python: 'def carFleet(target: int, position: list, speed: list) -> int:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]], expected: 3 },
    { args: [10, [3], [3]], expected: 1 },
  ],
  hiddenTests: [
    { args: [100, [0, 2, 4], [4, 2, 1]], expected: 1 },
    { args: [10, [6, 8], [3, 2]], expected: 2 },
    { args: [10, [0, 4, 2], [2, 1, 3]], expected: 1 },
    { args: [12, [10, 8], [2, 4]], expected: 1 },
  ],
};
