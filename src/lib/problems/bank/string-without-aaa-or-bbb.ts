import type { Problem } from '../types';

export const problem: Problem = {
  id: 'string-without-aaa-or-bbb',
  title: 'String Without AAA or BBB',
  difficulty: 'medium',
  tags: ['strings'],
  description: `Given two integers \`a\` and \`b\`, return **any** string \`s\` such that:

- \`s\` has length \`a + b\` and contains exactly \`a\` \`'a'\`s and \`b\` \`'b'\`s.
- The substring \`"aaa"\` and \`"bbb"\` do **not** appear in \`s\`.

**Args:** \`a: number, b: number\`

**Example 1:**

Input: \`a = 1, b = 2\`

Output: \`"bba"\` (or any valid arrangement)

Explanation: Any valid arrangement with 1 'a' and 2 'b's, no triple run.

**Example 2:**

Input: \`a = 4, b = 1\`

Output: \`"aabaa"\`

Explanation: 4 'a's and 1 'b', no "aaa" substring.

**Greedy:** Always write 2 of the more frequent character then 1 of the other (when one has strictly more than the other). If equal counts, write 1 of each.`,
  constraints: [
    '0 ≤ a, b ≤ 100',
    'a + b > 0',
    'It is guaranteed a valid answer exists.',
  ],
  examples: [
    {
      input: 'a = 1, b = 2',
      output: '"bba"',
      explanation: '2 "b"s then 1 "a". No "bbb" or "aaa".',
    },
    {
      input: 'a = 4, b = 1',
      output: '"aabaa"',
      explanation: '4 "a"s and 1 "b", no "aaa".',
    },
  ],
  hints: [
    'At each step, greedily append more of the character that has a higher remaining count.',
    'If one character count is strictly greater than the other, append 2 of the larger (if count > 1) then 1 of the smaller (if available).',
    'If counts are equal, append "ab". Repeat until all characters are used.',
  ],
  functionName: 'strWithout3a3b',
  params: ['a', 'b'],
  starterCode: {
    javascript: `function strWithout3a3b(a, b) {
  let res = '';
  while (a > 0 || b > 0) {
    if (a > b) {
      res += 'a'; a--;
      if (a > b) { res += 'a'; a--; }
      if (b > 0) { res += 'b'; b--; }
    } else if (b > a) {
      res += 'b'; b--;
      if (b > a) { res += 'b'; b--; }
      if (a > 0) { res += 'a'; a--; }
    } else { res += 'a'; a--; res += 'b'; b--; }
  }
  return res;
}`,
    typescript: `function strWithout3a3b(a: number, b: number): string {
  let res = '';
  while (a > 0 || b > 0) {
    if (a > b) {
      res += 'a'; a--;
      if (a > b) { res += 'a'; a--; }
      if (b > 0) { res += 'b'; b--; }
    } else if (b > a) {
      res += 'b'; b--;
      if (b > a) { res += 'b'; b--; }
      if (a > 0) { res += 'a'; a--; }
    } else { res += 'a'; a--; res += 'b'; b--; }
  }
  return res;
}`,
    python: `def strWithout3a3b(a: int, b: int) -> str:
    if hasattr(a, 'to_py'): a = a.to_py()
    if hasattr(b, 'to_py'): b = b.to_py()
    a, b = int(a), int(b)
    res = []
    while a > 0 or b > 0:
        if a > b:
            res.append('a'); a -= 1
            if a > b: res.append('a'); a -= 1
            if b > 0: res.append('b'); b -= 1
        elif b > a:
            res.append('b'); b -= 1
            if b > a: res.append('b'); b -= 1
            if a > 0: res.append('a'); a -= 1
        else:
            res.append('a'); a -= 1; res.append('b'); b -= 1
    return ''.join(res)`,
  },
  visibleTests: [
    // Greedy: b=2>a=1. Push 'b'(b=1,a=1 now equal, no second b). Push 'a'(a=0). Then b=1: push 'b'. → "bab"
    { args: [1, 2], expected: 'bab' },
    // Greedy: a=4>b=1. Push 'a'(a=3). a>b(3>1): push 'a'(a=2). b>0: push 'b'(b=0). a=2>b=0: push 'a'(a=1). a>b: push 'a'(a=0). → "aabaa"
    { args: [4, 1], expected: 'aabaa' },
    // Greedy: a==b=1, push 'a','b' → "ab"
    { args: [1, 1], expected: 'ab' },
  ],
  hiddenTests: [
    // a=0, b=1: only one valid answer
    { args: [0, 1], expected: 'b' },
    // a=1, b=0: only one valid answer
    { args: [1, 0], expected: 'a' },
    // a=3, b=3: equal counts each step → "ababab"
    { args: [3, 3], expected: 'ababab' },
    // a=2, b=5: trace: b>a. push 'b'(b=4). b>a(4>2): push 'b'(b=3). a>0: push 'a'(a=1).
    //   b=3>a=1. push 'b'(b=2). b>a(2>1): push 'b'(b=1). a>0: push 'a'(a=0).
    //   b=1>a=0. push 'b'(b=0). b>a? No. a=0: no push. → "bbabbab"
    { args: [2, 5], expected: 'bbabbab' },
    // a=5, b=2: a>b. push 'a'(a=4). a>b(4>2): push 'a'(a=3). b>0: push 'b'(b=1).
    //   a=3>b=1. push 'a'(a=2). a>b(2>1): push 'a'(a=1). b>0: push 'b'(b=0).
    //   a=1>b=0. push 'a'(a=0). a>b? No. b=0: no push. → "aabaaba"
    { args: [5, 2], expected: 'aabaaba' },
  ],
};
