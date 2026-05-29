import type { Problem } from '../types';

export const problem: Problem = {
  id: 'strong-password-checker-ii',
  title: 'Strong Password Checker II',
  difficulty: 'easy',
  tags: ['strings', 'simulation'],
  description: `A password is considered **strong** if the following conditions are **all** met:

- It has at least **8** characters.
- It contains at least one **lowercase** letter.
- It contains at least one **uppercase** letter.
- It contains at least one **digit**.
- It contains at least one **special character** from the set: \`!@#$%^&*()-+\`.
- It does **not** contain two adjacent characters that are the same (e.g., \`"aab"\` is weak).

Given a string \`password\`, return \`true\` if it is a strong password, \`false\` otherwise.`,
  constraints: [
    '`1 <= password.length <= 100`',
    '`password` consists of printable ASCII characters.',
  ],
  examples: [
    {
      input: 'password = "IloveLe3tcode!"',
      output: 'true',
      explanation: 'Length ≥ 8, has lowercase, uppercase, digit, special char, and no two adjacent identical chars.',
    },
    {
      input: 'password = "Me+You--IsMyDream"',
      output: 'false',
      explanation: 'Contains two adjacent \`\'-\'\` characters.',
    },
    {
      input: 'password = "1aB!"',
      output: 'false',
      explanation: 'Length is 4, which is less than 8.',
    },
  ],
  hints: [
    'Check each of the six conditions separately and return false as soon as one fails.',
    'For the adjacent-character check, iterate through the string comparing each character with the previous one.',
    `\`\`\`js
function strongPasswordCheckerII(password) {
  if (password.length < 8) return false;
  const special = new Set('!@#$%^&*()-+');
  let hasLower = false, hasUpper = false, hasDigit = false, hasSpecial = false;
  for (let i = 0; i < password.length; i++) {
    if (i > 0 && password[i] === password[i-1]) return false;
    const c = password[i];
    if (c >= 'a' && c <= 'z') hasLower = true;
    else if (c >= 'A' && c <= 'Z') hasUpper = true;
    else if (c >= '0' && c <= '9') hasDigit = true;
    else if (special.has(c)) hasSpecial = true;
  }
  return hasLower && hasUpper && hasDigit && hasSpecial;
}\`\`\``,
  ],
  functionName: 'strongPasswordCheckerII',
  params: ['password'],
  starterCode: {
    javascript: `function strongPasswordCheckerII(password) {

}`,
    typescript: 'function strongPasswordCheckerII(password: string): boolean {\n\n}',
    python: `def strongPasswordCheckerII(password):
    pass`,
  },
  visibleTests: [
    { args: ['IloveLe3tcode!'], expected: true },
    { args: ['Me+You--IsMyDream'], expected: false },
    { args: ['1aB!'], expected: false },
  ],
  hiddenTests: [
    { args: ['aA1!aaaa'], expected: false },
    { args: ['aA1!bcde'], expected: true },
    { args: ['aA1!bCdE'], expected: true },
    { args: ['abcdefgh'], expected: false },
    { args: ['ABCDEFGH'], expected: false },
    { args: ['12345678'], expected: false },
    { args: ['!@#$%^&*'], expected: false },
    { args: ['aAbBcC1!'], expected: true },
    { args: ['aA1!aA1!'], expected: true },
  ],
};
