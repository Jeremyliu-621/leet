import type { Problem } from '../types';

export const problem: Problem = {
  id: 'baseball-game',
  title: 'Baseball Game',
  difficulty: 'easy',
  tags: ['stack'],
  description: `You are keeping score for a baseball game. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.

You are given a list of strings \`ops\`, where \`ops[i]\` is the \`i\`th operation. The operations are:
- An integer \`x\`: Record a new score of \`x\`.
- \`"+"\`: Record a new score that is the sum of the previous two scores.
- \`"D"\`: Record a new score that is double the previous score.
- \`"C"\`: Invalidate the previous score, removing it from the record.

Return the sum of all the scores on the record after applying all the operations.`,
  constraints: [
    '1 <= ops.length <= 1000',
    'ops[i] is "C", "D", "+", or a string representing an integer in the range [-3 * 10^4, 3 * 10^4].',
    'For operation "+", there will always be at least two previous scores on the record.',
    'For operations "C" and "D", there will always be at least one previous score on the record.',
  ],
  examples: [
    {
      input: 'ops = ["5","2","C","D","+"]',
      output: '30',
      explanation: 'Stack: 5→[5]; 2→[5,2]; C→[5]; D→[5,10]; +→[5,10,15]. Sum=30.',
    },
    {
      input: 'ops = ["5","-2","4","C","D","9","+","+"]',
      output: '27',
    },
  ],
  hints: [
    'Level 1: Use a stack. Process each operation: push integer, pop (C), double top (D), or push sum of top two (+).',
    'Level 2: After processing all operations, sum the stack.',
    'Level 3: const s=[];for(const o of ops){if(o==="+")s.push(s[s.length-1]+s[s.length-2]);else if(o==="D")s.push(s[s.length-1]*2);else if(o==="C")s.pop();else s.push(+o);}return s.reduce((a,b)=>a+b,0);',
  ],
  functionName: 'calPoints',
  params: ['ops'],
  starterCode: {
    javascript: `function calPoints(ops) {
  const s = [];
  for (const o of ops) {
    if (o === '+') s.push(s[s.length-1] + s[s.length-2]);
    else if (o === 'D') s.push(s[s.length-1] * 2);
    else if (o === 'C') s.pop();
    else s.push(+o);
  }
  return s.reduce((a, b) => a + b, 0);
}`,
    typescript: `function calPoints(ops: string[]): number {
  const s: number[] = [];
  for (const o of ops) {
    if (o === '+') s.push(s[s.length-1]! + s[s.length-2]!);
    else if (o === 'D') s.push(s[s.length-1]! * 2);
    else if (o === 'C') s.pop();
    else s.push(+o);
  }
  return s.reduce((a, b) => a + b, 0);
}`,
    python: `def calPoints(ops):
    ops = list(ops.to_py()) if hasattr(ops, 'to_py') else list(ops)
    s = []
    for o in ops:
        if o == '+': s.append(s[-1] + s[-2])
        elif o == 'D': s.append(s[-1] * 2)
        elif o == 'C': s.pop()
        else: s.append(int(o))
    return sum(s)`,
  },
  visibleTests: [
    { args: [['5', '2', 'C', 'D', '+']], expected: 30 },
    { args: [['5', '-2', '4', 'C', 'D', '9', '+', '+']], expected: 27 },
  ],
  hiddenTests: [
    { args: [['1']], expected: 1 },
    { args: [['1', '2', '+']], expected: 6 },
    { args: [['1', 'D', 'D']], expected: 7 },
    { args: [['10', 'C']], expected: 0 },
    { args: [['3', '4', 'D', 'C', '+']], expected: 14 },
  ],
};
