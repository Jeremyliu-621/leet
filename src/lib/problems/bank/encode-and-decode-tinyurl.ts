import type { Problem } from '../types';

export const problem: Problem = {
  id: 'encode-and-decode-tinyurl',
  title: 'Encode and Decode TinyURL',
  difficulty: 'medium',
  tags: ['hash-map'],
  description: `Design a URL shortening service. Implement \`tinyUrl(operations, args)\` which processes a sequence of operations:

- **"encode"** with \`args[i] = [longUrl]\`: return a shortened URL of the form \`"http://tinyurl.com/<id>"\`. The same long URL always returns the same short URL. New unique long URLs get incrementing integer IDs starting from 1.
- **"decode"** with \`args[i] = [shortUrl]\`: return the original long URL.

Return an array of results, one per operation.`,
  constraints: [
    '1 <= operations.length <= 100',
    'operations[i] is "encode" or "decode"',
    'All URLs are valid strings.',
  ],
  examples: [
    {
      input: 'operations = ["encode","decode"], args = [["https://leetcode.com/problems/design-tinyurl"],["http://tinyurl.com/1"]]',
      output: '["http://tinyurl.com/1","https://leetcode.com/problems/design-tinyurl"]',
      explanation: 'The first encode assigns ID 1. The decode reverses it.',
    },
    {
      input: 'operations = ["encode","encode"], args = [["https://same.com"],["https://same.com"]]',
      output: '["http://tinyurl.com/1","http://tinyurl.com/1"]',
      explanation: 'The same long URL is encoded twice; it returns the same short URL both times.',
    },
  ],
  hints: [
    'Use two Maps: one from long URL → short URL, and one from short URL → long URL.',
    'Maintain a counter. Each new unique long URL increments the counter to produce the short URL.',
    'For decode, simply look up the short URL in the reverse map.',
  ],
  functionName: 'tinyUrl',
  params: ['operations', 'args'],
  starterCode: {
    javascript: `function tinyUrl(operations, args) {
  const longToShort = new Map();
  const shortToLong = new Map();
  let counter = 0;
  return operations.map((op, i) => {
    const a = args[i] ?? [];
    if (op === 'encode') {
      const longUrl = a[0];
      if (!longToShort.has(longUrl)) {
        counter++;
        const shortUrl = \`http://tinyurl.com/\${counter}\`;
        longToShort.set(longUrl, shortUrl);
        shortToLong.set(shortUrl, longUrl);
      }
      return longToShort.get(longUrl);
    } else {
      return shortToLong.get(a[0]);
    }
  });
}`,
    typescript: `function tinyUrl(operations: string[], args: string[][]): string[] {
  const longToShort = new Map<string, string>();
  const shortToLong = new Map<string, string>();
  let counter = 0;
  return operations.map((op, i) => {
    const a = args[i] ?? [];
    if (op === 'encode') {
      const longUrl = a[0]!;
      if (!longToShort.has(longUrl)) {
        counter++;
        const shortUrl = \`http://tinyurl.com/\${counter}\`;
        longToShort.set(longUrl, shortUrl);
        shortToLong.set(shortUrl, longUrl);
      }
      return longToShort.get(longUrl)!;
    } else {
      return shortToLong.get(a[0]!)!;
    }
  });
}`,

    python: `def tinyUrl(operations, args):
    long_to_short = {}
    short_to_long = {}
    counter = [0]
    results = []
    for i, op in enumerate(operations):
        a = args[i] if i < len(args) else []
        if op == 'encode':
            long_url = a[0]
            if long_url not in long_to_short:
                counter[0] += 1
                short_url = f'http://tinyurl.com/{counter[0]}'
                long_to_short[long_url] = short_url
                short_to_long[short_url] = long_url
            results.append(long_to_short[long_url])
        else:
            results.append(short_to_long[a[0]])
    return results
`,
  },
  visibleTests: [
    {
      args: [
        ['encode', 'decode'],
        [['https://leetcode.com/problems/design-tinyurl'], ['http://tinyurl.com/1']],
      ],
      expected: ['http://tinyurl.com/1', 'https://leetcode.com/problems/design-tinyurl'],
    },
    {
      args: [
        ['encode', 'encode', 'decode'],
        [['https://a.com'], ['https://b.com'], ['http://tinyurl.com/2']],
      ],
      expected: ['http://tinyurl.com/1', 'http://tinyurl.com/2', 'https://b.com'],
    },
    {
      args: [
        ['encode', 'encode'],
        [['https://same.com'], ['https://same.com']],
      ],
      expected: ['http://tinyurl.com/1', 'http://tinyurl.com/1'],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['encode'],
        [['https://example.com']],
      ],
      expected: ['http://tinyurl.com/1'],
    },
    {
      args: [
        ['encode', 'encode', 'encode', 'decode', 'decode'],
        [
          ['https://a.com'],
          ['https://b.com'],
          ['https://a.com'],
          ['http://tinyurl.com/1'],
          ['http://tinyurl.com/2'],
        ],
      ],
      expected: ['http://tinyurl.com/1', 'http://tinyurl.com/2', 'http://tinyurl.com/1', 'https://a.com', 'https://b.com'],
    },
    {
      args: [
        ['encode', 'decode', 'encode', 'decode'],
        [
          ['https://x.com'],
          ['http://tinyurl.com/1'],
          ['https://y.com'],
          ['http://tinyurl.com/2'],
        ],
      ],
      expected: ['http://tinyurl.com/1', 'https://x.com', 'http://tinyurl.com/2', 'https://y.com'],
    },
  ],
};
