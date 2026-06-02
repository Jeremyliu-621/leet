import type { Problem } from '../types';

export const problem: Problem = {
  id: 'defanging-ip-address',
  title: 'Defanging an IP Address',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a valid (IPv4) IP address, return a defanged version of that IP address.

A **defanged IP address** replaces every period \`"."\` with \`"[.]"\`.`,
  constraints: ['The given `address` is a valid IPv4 address.'],
  examples: [
    {
      input: 'address = "1.1.1.1"',
      output: '"1[.]1[.]1[.]1"',
    },
    {
      input: 'address = "255.100.50.0"',
      output: '"255[.]100[.]50[.]0"',
    },
  ],
  hints: [
    'Replace every `.` with `[.]`.',
    'Use String.prototype.replaceAll or split-join to replace all dots at once.',
    "return address.split('.').join('[.]');",
  ],
  functionName: 'defangIPaddr',
  params: ['address'],
  starterCode: {
    javascript: `function defangIPaddr(address) {
  return address.split('.').join('[.]');
}`,
    typescript: `function defangIPaddr(address: string): string {
  return address.split('.').join('[.]');
}`,
    python: `def defangIPaddr(address):
    return address.replace('.', '[.]')`,
  },
  visibleTests: [
    { args: ['1.1.1.1'], expected: '1[.]1[.]1[.]1' },
    { args: ['255.100.50.0'], expected: '255[.]100[.]50[.]0' },
  ],
  hiddenTests: [
    { args: ['0.0.0.0'], expected: '0[.]0[.]0[.]0' },
    { args: ['192.168.1.1'], expected: '192[.]168[.]1[.]1' },
    { args: ['10.20.30.40'], expected: '10[.]20[.]30[.]40' },
    { args: ['127.0.0.1'], expected: '127[.]0[.]0[.]1' },
  ],
};
