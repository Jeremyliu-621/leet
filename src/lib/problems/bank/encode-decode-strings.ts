import type { Problem } from '../types';

export const problem: Problem = {
  id: 'encode-decode-strings',
  title: 'Encode and Decode Strings',
  difficulty: 'medium',
  tags: ['strings'],
  description: `Design an algorithm to encode a list of strings to a **single string**, and decode the single string back to the original list.

Implement a function \`encodeDecodeStrings(strs)\` that:
1. **Encodes** the list of strings into one string.
2. **Decodes** the encoded string back to the exact original list.

Return the decoded list (which should be identical to the input).

The encoded string may be transmitted over a network. Any valid encoding scheme works as long as decoding is lossless.

> **Hint:** A common approach uses length-prefixing: prepend each string with its length and a delimiter (e.g. \`"4#leet"\`).`,
  constraints: [
    '1 <= strs.length <= 200',
    '0 <= strs[i].length <= 200',
    'strs[i] contains any possible characters out of 256 ASCII characters.',
  ],
  examples: [
    {
      input: 'strs = ["lint","code","love","you"]',
      output: '["lint","code","love","you"]',
      explanation:
        'After encoding and decoding, the original list is recovered exactly.',
    },
    {
      input: 'strs = ["we", "say", ":", "yes"]',
      output: '["we","say",":","yes"]',
      explanation:
        'Special characters (like ":") must not confuse the decoder. Length-prefixing handles them correctly.',
    },
  ],
  hints: [
    'A delimiter-only scheme (e.g., join with "/") fails when strings contain the delimiter. Use length-prefixing instead.',
    'Encode each string as `length + "#" + string`. For decoding, read the number up to "#", then read exactly that many characters.',
    'The decoder scans linearly: find the next "#", parse the integer before it as the length, extract that many chars, repeat.',
  ],
  functionName: 'encodeDecodeStrings',
  params: ['strs'],
  starterCode: {
    javascript:
      'function encodeDecodeStrings(strs) {\n  // Encode the array to a single string, then decode back.\n  // Return the decoded array (should equal the input).\n}\n',
    python:
      'def encodeDecodeStrings(strs):\n    # Encode the list to a single string, then decode back.\n    # Return the decoded list (should equal the input).\n    pass\n',
  },
  visibleTests: [
    { args: [['lint', 'code', 'love', 'you']], expected: ['lint', 'code', 'love', 'you'] },
    { args: [['we', 'say', ':', 'yes']], expected: ['we', 'say', ':', 'yes'] },
  ],
  hiddenTests: [
    { args: [['hello']], expected: ['hello'] },
    { args: [['', '']], expected: ['', ''] },
    { args: [['a', 'b', 'c']], expected: ['a', 'b', 'c'] },
    { args: [['#', '##', '###']], expected: ['#', '##', '###'] },
    { args: [['4#leet', 'code']], expected: ['4#leet', 'code'] },
    { args: [['hello world', 'foo\nbar']], expected: ['hello world', 'foo\nbar'] },
  ],
};
