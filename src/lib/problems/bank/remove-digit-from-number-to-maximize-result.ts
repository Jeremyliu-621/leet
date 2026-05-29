import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-digit-from-number-to-maximize-result',
  title: 'Remove Digit From Number to Maximize Result',
  difficulty: 'easy',
  tags: ['strings', 'simulation'],
  description: `You are given a string \`number\` representing a **positive integer** and a character \`digit\`.

Return the resulting string after removing **exactly one occurrence** of \`digit\` from \`number\` such that the value of the resulting string in **decimal form** is **maximized**. The test cases are generated such that \`digit\` occurs at least once in \`number\`.`,
  constraints: [
    '`2 <= number.length <= 100`',
    '`number` consists of digits from `\'1\'` to `\'9\'`.',
    '`digit` is a digit from `\'1\'` to `\'9\'`.',
    '`digit` occurs at least once in `number`.',
  ],
  examples: [
    {
      input: 'number = "123", digit = "3"',
      output: '"12"',
      explanation: 'Only one occurrence of "3" exists, so the result is "12".',
    },
    {
      input: 'number = "1231", digit = "1"',
      output: '"231"',
      explanation: 'Removing the 1 at index 0 gives "231". Removing the 1 at index 3 gives "123". "231" > "123", so return "231".',
    },
    {
      input: 'number = "551", digit = "5"',
      output: '"51"',
      explanation: 'Removing the 5 at index 0 gives "51". Removing the 5 at index 1 gives "51". Both give "51".',
    },
  ],
  hints: [
    'If the digit immediately after an occurrence of `digit` is strictly greater than `digit`, removing that occurrence maximizes the result.',
    'Scan left to right; the first occurrence where the next character is larger is the optimal removal point. If none found, remove the last occurrence.',
    '```js\nfunction removeDigit(number, digit) {\n  let last = -1;\n  for (let i = 0; i < number.length; i++) {\n    if (number[i] === digit) {\n      last = i;\n      if (i + 1 < number.length && number[i + 1] > digit) {\n        return number.slice(0, i) + number.slice(i + 1);\n      }\n    }\n  }\n  return number.slice(0, last) + number.slice(last + 1);\n}\n```',
  ],
  functionName: 'removeDigit',
  params: ['number', 'digit'],
  starterCode: {
    javascript: `function removeDigit(number, digit) {

}`,
    typescript: `function removeDigit(number: string, digit: string): string {

}`,
    python: `def removeDigit(number, digit):
    pass`,
  },
  visibleTests: [
    { args: ['123', '3'], expected: '12' },
    { args: ['1231', '1'], expected: '231' },
    { args: ['551', '5'], expected: '51' },
  ],
  hiddenTests: [
    { args: ['9', '9'], expected: '' },
    { args: ['11', '1'], expected: '1' },
    { args: ['21', '2'], expected: '1' },
    { args: ['123321', '3'], expected: '12321' },
    { args: ['1212', '2'], expected: '121' },
    { args: ['9999', '9'], expected: '999' },
    { args: ['321', '2'], expected: '31' },
    { args: ['3333', '3'], expected: '333' },
    { args: ['9325', '9'], expected: '325' },
    { args: ['1111', '1'], expected: '111' },
    { args: ['123', '2'], expected: '13' },
    { args: ['391', '3'], expected: '91' },
  ],
};
