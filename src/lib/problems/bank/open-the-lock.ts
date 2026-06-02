import type { Problem } from '../types';

export const problem: Problem = {
  id: 'open-the-lock',
  title: 'Open the Lock',
  difficulty: 'medium',
  tags: ['graph', 'arrays'],
  description: `You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: \`'0', '1', '2', ..., '9'\`. The wheels can rotate freely and wrap around: e.g. turning \`'9'\` one step forward gives \`'0'\`, and turning \`'0'\` one step backward gives \`'9'\`.

Each move consists of turning one wheel one slot.

The lock initially starts at \`'0000'\`, a string representing the state of the 4 wheels.

You are given a list of \`deadends\` — if the lock reaches any of these states, it locks permanently. You are given a \`target\` representing the state you want to reach.

Return the **minimum** number of turns required to reach the target, or \`-1\` if it is impossible.`,
  constraints: [
    '1 <= deadends.length <= 500',
    'deadends[i].length == 4',
    'target.length == 4',
    'target will not be in deadends.',
    'target and deadends[i] consist of digits only.',
  ],
  examples: [
    {
      input: 'deadends = ["0201","0101","0102","1212","2002"], target = "0202"',
      output: '6',
      explanation: 'Sequence: 0000 → 0100 → 0200 → 0201 → 0202 (skipping deadends, optimal is 6 turns).',
    },
    {
      input: 'deadends = ["8888"], target = "0009"',
      output: '1',
      explanation: 'Turn last wheel backward: 0000 → 0009.',
    },
    {
      input: 'deadends = ["0000"], target = "8888"',
      output: '-1',
      explanation: 'Start is a deadend.',
    },
  ],
  hints: [
    'Level 1: Use BFS from "0000". Each state has 8 neighbors (4 wheels × 2 directions). Track visited states to avoid cycles.',
    'Level 2: Add deadends to the visited set upfront. If "0000" is a deadend, return -1 immediately.',
    'Level 3: const dead=new Set(deadends);if(dead.has("0000"))return -1;if(target==="0000")return 0;const vis=new Set(dead);vis.add("0000");let q=["0000"],steps=0;while(q.length){const next=[];steps++;for(const s of q){for(let i=0;i<4;i++){for(const d of[1,-1]){const ns=s.split("");ns[i]=String((+ns[i]+d+10)%10);const t=ns.join("");if(t===target)return steps;if(!vis.has(t)){vis.add(t);next.push(t);}}}}q=next;}return -1;',
  ],
  functionName: 'openLock',
  params: ['deadends', 'target'],
  starterCode: {
    javascript: `function openLock(deadends, target) {
  const dead = new Set(deadends);
  if (dead.has('0000')) return -1;
  if (target === '0000') return 0;
  const vis = new Set(dead);
  vis.add('0000');
  let q = ['0000'], steps = 0;
  while (q.length) {
    const next = []; steps++;
    for (const s of q) {
      for (let i = 0; i < 4; i++) {
        for (const d of [1, -1]) {
          const arr = s.split('');
          arr[i] = String((+arr[i] + d + 10) % 10);
          const t = arr.join('');
          if (t === target) return steps;
          if (!vis.has(t)) { vis.add(t); next.push(t); }
        }
      }
    }
    q = next;
  }
  return -1;
}`,
    typescript: `function openLock(deadends: string[], target: string): number {
  const dead = new Set(deadends);
  if (dead.has('0000')) return -1;
  if (target === '0000') return 0;
  const vis = new Set(dead);
  vis.add('0000');
  let q: string[] = ['0000'], steps = 0;
  while (q.length) {
    const next: string[] = []; steps++;
    for (const s of q) {
      for (let i = 0; i < 4; i++) {
        for (const d of [1, -1]) {
          const arr = s.split('');
          arr[i] = String((+(arr[i]!) + d + 10) % 10);
          const t = arr.join('');
          if (t === target) return steps;
          if (!vis.has(t)) { vis.add(t); next.push(t); }
        }
      }
    }
    q = next;
  }
  return -1;
}`,
    python: `def openLock(deadends, target):
    if hasattr(deadends, 'to_py'): deadends = deadends.to_py()
    if hasattr(target, 'to_py'): target = target.to_py()
    deadends = [str(d) for d in deadends]; target = str(target)
    dead = set(deadends)
    if '0000' in dead: return -1
    if target == '0000': return 0
    vis = set(dead); vis.add('0000')
    q = ['0000']; steps = 0
    while q:
        nxt = []; steps += 1
        for s in q:
            for i in range(4):
                for d in (1,-1):
                    arr = list(s); arr[i] = str((int(arr[i])+d+10)%10); t = ''.join(arr)
                    if t == target: return steps
                    if t not in vis: vis.add(t); nxt.append(t)
        q = nxt
    return -1`,
  },
  visibleTests: [
    { args: [['0201', '0101', '0102', '1212', '2002'], '0202'], expected: 6 },
    { args: [['8888'], '0009'], expected: 1 },
    { args: [['0000'], '8888'], expected: -1 },
  ],
  hiddenTests: [
    { args: [[], '0001'], expected: 1 },
    { args: [[], '0000'], expected: 0 },
    { args: [['1111'], '0001'], expected: 1 },
    { args: [[], '1234'], expected: 10 },
    { args: [['0001', '0009', '0100', '0900', '1000', '9000', '0010', '0090'], '0002'], expected: -1 },
  ],
};
