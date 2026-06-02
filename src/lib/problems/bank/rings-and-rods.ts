import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rings-and-rods',
  title: 'Rings and Rods',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `There are \`n\` rings and each ring is either red, green, or blue. The rings are distributed **across ten rods** labeled from \`0\` to \`9\`.

You are given a string \`rings\` of length \`2n\` that describes the \`n\` rings that are placed onto the rods. Every two characters in \`rings\` form a **color-position pair** that describes each ring:
- The **first** character of the \`i\`th pair denotes the ring's **color** (\`'R'\`, \`'G'\`, \`'B'\`).
- The **second** character of the \`i\`th pair denotes the **rod** that the ring is placed on (\`'0'\` to \`'9'\`).

Return the number of rods that have **all three colors** of rings on them.`,
  constraints: [
    'rings.length == 2 * n',
    '1 <= n <= 100',
    'rings[i] when i is even is either "R", "G", or "B".',
    'rings[i] when i is odd is a digit from "0" to "9".',
  ],
  examples: [
    {
      input: 'rings = "B0B6G0R6R0R6G9"',
      output: '1',
      explanation: 'Rod 0 has R, G, B. Rod 6 has R, G, B. Wait — rod 0: B0, G0, R0 = R,G,B ✓; rod 6: B6, R6, G... no G6. Rod 6: B6, R6 = 2 colors. So only rod 0 qualifies... Actually re-check: B0,B6,G0,R6,R0,R6,G9. Rod 0: B,G,R = all 3 ✓. Rod 6: B,R = 2. Answer is 1.',
    },
    {
      input: 'rings = "B0R0G0R9R0B0G0"',
      output: '1',
    },
    {
      input: 'rings = "G4"',
      output: '0',
    },
  ],
  hints: [
    'Level 1: For each rod (0-9), track which colors appear on it.',
    'Level 2: Use a Map from rod digit to a Set of colors. Count rods whose Set has size 3.',
    'Level 3: const m=new Map();for(let i=0;i<rings.length;i+=2){const[c,r]=[rings[i],rings[i+1]];if(!m.has(r))m.set(r,new Set());m.get(r).add(c);}return[...m.values()].filter(s=>s.size===3).length;',
  ],
  functionName: 'countPoints',
  params: ['rings'],
  starterCode: {
    javascript: `function countPoints(rings) {
  const m = new Map();
  for (let i = 0; i < rings.length; i += 2) {
    const c = rings[i], r = rings[i + 1];
    if (!m.has(r)) m.set(r, new Set());
    m.get(r).add(c);
  }
  return [...m.values()].filter(s => s.size === 3).length;
}`,
    typescript: `function countPoints(rings: string): number {
  const m = new Map<string, Set<string>>();
  for (let i = 0; i < rings.length; i += 2) {
    const c = rings[i]!, r = rings[i + 1]!;
    if (!m.has(r)) m.set(r, new Set());
    m.get(r)!.add(c);
  }
  return [...m.values()].filter(s => s.size === 3).length;
}`,
    python: `def countPoints(rings):
    if hasattr(rings, 'to_py'): rings = rings.to_py()
    rings = str(rings)
    m = {}
    for i in range(0, len(rings), 2):
        c, r = rings[i], rings[i+1]
        if r not in m: m[r] = set()
        m[r].add(c)
    return sum(1 for s in m.values() if len(s) == 3)`,
  },
  visibleTests: [
    { args: ['B0B6G0R6R0R6G9'], expected: 1 },
    { args: ['B0R0G0R9R0B0G0'], expected: 1 },
    { args: ['G4'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['R0G0B0'], expected: 1 },
    { args: ['R0G0R0'], expected: 0 },
    { args: ['R0G0B0R1G1B1'], expected: 2 },
    { args: ['R0G0B0R0G0B0'], expected: 1 },
    { args: ['R0R1G0G1B0B1'], expected: 2 },
  ],
};
