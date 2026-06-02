import type { Problem } from '../types';

export const problem: Problem = {
  id: 'simulate-traffic-lights',
  title: 'Simulate Traffic Light Queue',
  difficulty: 'easy',
  tags: ['simulation'],
  description: `A single-lane road has a traffic light. Cars arrive at the light in order, each taking some number of seconds to pass through. The light cycles: it is **green for \`g\` seconds**, then **red for \`r\` seconds**, repeating.

Given an array \`arrivals\` where \`arrivals[i]\` is the second at which car \`i\` arrives, and the light's green duration \`g\` and red duration \`r\`, determine **when each car passes through the light** (i.e., clears the intersection).

**Rules:**
- Cars queue in order of arrival and pass through one at a time (each takes exactly **1 second** to clear).
- If the light is green when a car reaches the front of the queue, it passes immediately.
- If the light is red, the car waits until the light turns green.
- A car that arrives while another is still clearing must wait.

The light starts green at time \`0\`. Green phase: seconds \`[0, g)\`, then red: \`[g, g+r)\`, then green: \`[g+r, 2g+r)\`, etc.

Return an array of the times when each car **finishes** clearing the intersection.`,
  constraints: [
    '1 <= arrivals.length <= 10^4',
    '0 <= arrivals[i] <= 10^4',
    'arrivals is sorted in non-decreasing order',
    '1 <= g, r <= 100',
  ],
  examples: [
    {
      input: 'arrivals = [0,1,5], g = 3, r = 2',
      output: '[1,2,6]',
      explanation: 'Car 0 arrives at t=0 (green, cycle [0,3)): clears at t=1. Car 1 arrives t=1 (green, prev car done at 1): clears at t=2. Car 2 arrives t=5 (green, cycle [5,8)): clears at t=6.',
    },
    {
      input: 'arrivals = [0,0,0], g = 1, r = 1',
      output: '[1,3,5]',
      explanation: 'g=1, r=1: green [0,1), red [1,2), green [2,3), red [3,4), green [4,5). Car 0: clears at 1. Car 1: waits for green at 2, clears at 3. Car 2: waits for green at 4, clears at 5.',
    },
    {
      input: 'arrivals = [2,4,6], g = 5, r = 5',
      output: '[3,5,11]',
      explanation: 'Green [0,5), red [5,10), green [10,15). Car 0 at t=2: clears t=3. Car 1 at t=4 (light still green, queue free): clears t=5. Car 2 at t=6 (red): waits until t=10, clears t=11.',
    },
  ],
  hints: [
    'Track `clearTime`: the earliest time the intersection is free for the next car. For each car, the car can start crossing at `max(arrivals[i], clearTime)`.',
    'Given a potential start time `t`, check if it falls during a green phase. The cycle length is `g + r`. Within each cycle, seconds `[0, g)` are green and `[g, g+r)` are red. Compute `t % (g + r)` to find position in cycle.',
    'If `t % (g + r) < g`, the light is green at time `t` — the car clears at `t + 1`. If red, advance `t` to the start of the next green phase: `t = (Math.floor(t / (g + r)) + 1) * (g + r)`, then clear at `t + 1`. Update `clearTime = t + 1`.',
  ],
  functionName: 'simulateTrafficLights',
  params: ['arrivals', 'g', 'r'],
  starterCode: {
    javascript: `function simulateTrafficLights(arrivals, g, r) {
  const cycle = g + r;
  let clearTime = 0;
  return arrivals.map(arrival => {
    let t = Math.max(arrival, clearTime);
    if (t % cycle >= g) t = (Math.floor(t / cycle) + 1) * cycle;
    clearTime = t + 1;
    return clearTime;
  });
}`,
    typescript: `function simulateTrafficLights(arrivals: number[], g: number, r: number): number[] {
  const cycle = g + r;
  let clearTime = 0;
  return arrivals.map(arrival => {
    let t = Math.max(arrival, clearTime);
    if (t % cycle >= g) t = (Math.floor(t / cycle) + 1) * cycle;
    clearTime = t + 1;
    return clearTime;
  });
}`,
    python: `def simulateTrafficLights(arrivals, g, r):
    cycle = g + r
    clear_time = 0
    result = []
    for arrival in arrivals:
        t = max(arrival, clear_time)
        if t % cycle >= g:
            t = (t // cycle + 1) * cycle
        clear_time = t + 1
        result.append(clear_time)
    return result
`,
  },
  visibleTests: [
    { args: [[0, 1, 5], 3, 2], expected: [1, 2, 6] },
    { args: [[0, 0, 0], 1, 1], expected: [1, 3, 5] },
    { args: [[2, 4, 6], 5, 5], expected: [3, 5, 11] },
  ],
  hiddenTests: [
    { args: [[0], 5, 5], expected: [1] },
    { args: [[0, 1, 2, 3, 4], 5, 5], expected: [1, 2, 3, 4, 5] },
    { args: [[0, 0, 0, 0, 0], 2, 2], expected: [1, 2, 5, 6, 9] },
    { args: [[10], 5, 5], expected: [11] },
    { args: [[9], 5, 5], expected: [11] },
    { args: [[0, 3, 6, 9], 3, 3], expected: [1, 7, 8, 13] },
    { args: [[0, 2, 4], 2, 3], expected: [1, 6, 7] },
    { args: [[0, 1, 2, 10], 3, 2], expected: [1, 2, 3, 11] },
  ],
};
