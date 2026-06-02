import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimize-result-by-adding-parentheses-to-expression',
  title: 'Minimize Result by Adding Parentheses to Expression',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `You are given a **0-indexed** string \`expression\` of the form \`"<num1>+<num2>"\` where \`<num1>\` and \`<num2>\` represent positive integers.

Add a pair of parentheses to \`expression\` such that after the addition of parentheses, \`expression\` is a **valid** mathematical expression and evaluates to the **smallest** possible value. The left parenthesis **must** be added to the left of \`+\` and the right parenthesis **must** be added to the right of \`+\`.

Return *the expression after adding a pair of parentheses such that \`expression\` evaluates to the **smallest** possible value*. If there are multiple answers that yield the same result, return any of them.`,
  constraints: [
    '`3 <= expression.length <= 10`',
    '`expression` consists of digits from 1 to 9 and the + character.',
    '`expression` starts and ends with digits.',
    '`expression` contains exactly one + character.',
    'The original value of `expression`, and all possible values after adding one pair of parentheses to it, fit within a 32-bit signed integer.',
  ],
  examples: [
    {
      input: 'expression = "247+38"',
      output: '"2(47+38)"',
      explanation: '2*(47+38)=2*85=170. Other options: (247+3)*8=1999*8... wait, let me check: (247+38)=285, no parens left of +. 2*(47+38)=170. 24*(7+38)=24*45=1080. (247+38)=285. Minimum is 170, giving "2(47+38)".',
    },
    {
      input: 'expression = "12+34"',
      output: '"1(2+3)4"',
      explanation: '1*(2+3)*4=1*5*4=20. Other: (12+34)=46, 1*(2+34)=36, (12+3)*4=60. Minimum is 20.',
    },
  ],
  hints: [
    'Try all possible positions for `(` and `)` by splitting expression at each position left of `+` and right of `+`.',
    'For each split: left = num1[0..i], inner_left = num1[i..], inner_right = num2[0..j], right = num2[j..].',
    'Value = (left || 1) * (inner_left + inner_right) * (right || 1). Find the split minimizing this.',
    'Use parseInt, handle empty string by treating it as multiplier 1.',
  ],
  functionName: 'minimizeResult',
  params: ['expression'],
  starterCode: {
    javascript: `function minimizeResult(expression) {
  const plus = expression.indexOf('+');
  const num1 = expression.slice(0, plus), num2 = expression.slice(plus + 1);
  let best = Infinity, bestStr = '';
  for (let i = 0; i < num1.length; i++) {
    for (let j = 1; j <= num2.length; j++) {
      const left = num1.slice(0, i), inner1 = num1.slice(i);
      const inner2 = num2.slice(0, j), right = num2.slice(j);
      const val = (left ? parseInt(left) : 1) * (parseInt(inner1) + parseInt(inner2)) * (right ? parseInt(right) : 1);
      if (val < best) { best = val; bestStr = left + '(' + inner1 + '+' + inner2 + ')' + right; }
    }
  }
  return bestStr;
}`,
    typescript: `function minimizeResult(expression: string): string {
  const plus = expression.indexOf('+');
  const num1 = expression.slice(0, plus), num2 = expression.slice(plus + 1);
  let best = Infinity, bestStr = '';
  for (let i = 0; i < num1.length; i++) {
    for (let j = 1; j <= num2.length; j++) {
      const left = num1.slice(0, i), inner1 = num1.slice(i);
      const inner2 = num2.slice(0, j), right = num2.slice(j);
      const val = (left ? parseInt(left) : 1) * (parseInt(inner1) + parseInt(inner2)) * (right ? parseInt(right) : 1);
      if (val < best) { best = val; bestStr = left + '(' + inner1 + '+' + inner2 + ')' + right; }
    }
  }
  return bestStr;
}`,
    python: `def minimizeResult(expression):
    if hasattr(expression, 'to_py'): expression = str(expression)
    plus = expression.index('+')
    num1, num2 = expression[:plus], expression[plus+1:]
    best, best_str = float('inf'), ''
    for i in range(len(num1)):
        for j in range(1, len(num2) + 1):
            left, inner1 = num1[:i], num1[i:]
            inner2, right = num2[:j], num2[j:]
            val = (int(left) if left else 1) * (int(inner1) + int(inner2)) * (int(right) if right else 1)
            if val < best: best = val; best_str = left + '(' + inner1 + '+' + inner2 + ')' + right
    return best_str`,
  },
  visibleTests: [
    { args: ['247+38'], expected: '2(47+38)' },
    { args: ['12+34'], expected: '1(2+3)4' },
  ],
  hiddenTests: [
    { args: ['999+999'], expected: '(999+999)' },
    { args: ['1+1'], expected: '(1+1)' },
    { args: ['55+34'], expected: '(55+34)' },
  ],
};
