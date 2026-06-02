import type { Problem } from '../types';

export const problem: Problem = {
  id: 'unique-email-addresses',
  title: 'Unique Email Addresses',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `Every valid email consists of a **local name** and a **domain name**, separated by the \`'@'\` sign.

Emails follow two rules:

1. If you add a period \`'.'\` between some characters in the **local name**, the email is the same (e.g. \`"alice.z@gmail.com"\` and \`"alicez@gmail.com"\` forward to the same inbox).
2. If you add a plus \`'+'\` in the **local name**, everything from the first \`'+'\` until the \`'@'\` is ignored (e.g. \`"m.y+name@email.com"\` forwards to \`"my@email.com"\`).

Given an array of strings \`emails\`, return the number of **unique** email addresses that actually receive mails.`,
  constraints: [
    '1 <= emails.length <= 100',
    '1 <= emails[i].length <= 100',
    'emails[i] consist of lowercase English letters, \'+\', \'.\', and \'@\'.',
    'Each email contains exactly one \'@\'.',
  ],
  examples: [
    {
      input: 'emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]',
      output: '2',
      explanation: '"testemail@leetcode.com" and "testemail@lee.tcode.com" are the two unique addresses.',
    },
    {
      input: 'emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]',
      output: '3',
      explanation: 'All three addresses are already different.',
    },
  ],
  hints: [
    'Level 1: Split each email at \'@\' to get the local name and domain. Apply the two rules to the local name, then reassemble.',
    'Level 2: For the local name: (1) take the part before the first \'+\'; (2) remove all periods from that part. The domain is left unchanged.',
    'Level 3: `const normalize = e => { const [local, dom] = e.split("@"); return local.split("+")[0].replace(/\\./g, "") + "@" + dom; }; return new Set(emails.map(normalize)).size;`',
  ],
  functionName: 'numUniqueEmails',
  params: ['emails'],
  starterCode: {
    javascript: `function numUniqueEmails(emails) {
  const normalize = e => { const [l, d] = e.split('@'); return l.split('+')[0].replace(/\./g, '') + '@' + d; };
  return new Set(emails.map(normalize)).size;
}`,
    typescript: `function numUniqueEmails(emails: string[]): number {
  const normalize = (e: string) => { const [l, d] = e.split('@'); return l!.split('+')[0]!.replace(/\./g, '') + '@' + d; };
  return new Set(emails.map(normalize)).size;
}`,
    python: `def numUniqueEmails(emails):
    if hasattr(emails, 'to_py'): emails = emails.to_py()
    emails = [str(e) for e in emails]
    def norm(e):
        local, domain = e.split('@')
        return local.split('+')[0].replace('.', '') + '@' + domain
    return len(set(norm(e) for e in emails))`,
  },
  visibleTests: [
    {
      args: [['test.email+alex@leetcode.com', 'test.e.mail+bob.cathy@leetcode.com', 'testemail+david@lee.tcode.com']],
      expected: 2,
    },
    {
      args: [['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com']],
      expected: 3,
    },
    {
      args: [['hello.world+extra@example.com', 'helloworld@example.com']],
      expected: 1,
    },
  ],
  hiddenTests: [
    {
      args: [['alice+bob@example.com', 'alice@example.com']],
      expected: 1,
    },
    {
      args: [['test+tag@domain.com', 'test@domain.com', 'te.st@domain.com']],
      expected: 1,
    },
    {
      args: [['x@y.com']],
      expected: 1,
    },
    {
      args: [['a.b.c+d@e.com', 'abc@e.com', 'a.bc+xyz@e.com']],
      expected: 1,
    },
    {
      args: [['user+a@foo.bar', 'u.s.e.r@foo.bar', 'user@foo.bar']],
      expected: 1,
    },
  ],
};
