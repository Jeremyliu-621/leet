import type { Problem } from '../types';

export const problem: Problem = {
  id: 'is-palindrome-clean',
  title: 'Letter Palindrome Check',
  difficulty: 'easy',
  tags: ['strings'],
  description: `A **palindrome** reads the same forwards and backwards.

Given a string \`text\`, decide whether it is a palindrome when only letters are considered. Ignore every non-letter character — spaces, digits, punctuation — and treat uppercase and lowercase as equal.

Return \`true\` if the cleaned string is a palindrome, otherwise return \`false\`. An empty cleaned string counts as a palindrome.`,
  constraints: [
    '0 <= text.length <= 1000',
    'text may contain letters, digits, spaces, and punctuation.',
  ],
  examples: [
    {
      input: 'text = "Race car"',
      output: 'true',
      explanation: 'Cleaned to "racecar", which reads the same both ways.',
    },
    {
      input: 'text = "hello"',
      output: 'false',
      explanation: '"hello" reversed is "olleh".',
    },
    {
      input: 'text = "Was it a car or a cat I saw?"',
      output: 'true',
    },
  ],
  functionName: 'isLetterPalindrome',
  params: ['text'],
  starterCode: {
    javascript: `function isLetterPalindrome(text) {
  const cleaned = text.toLowerCase().replace(/[^a-z]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}`,
    typescript: `function isLetterPalindrome(text: string): boolean {
  const cleaned = text.toLowerCase().replace(/[^a-z]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}`,
    python: `def isLetterPalindrome(text):
    if hasattr(text, 'to_py'): text = text.to_py()
    cleaned = ''.join(c.lower() for c in text if c.isalpha())
    return cleaned == cleaned[::-1]`,
  },
  visibleTests: [
    { args: ['Race car'], expected: true },
    { args: ['hello'], expected: false },
    { args: ['Was it a car or a cat I saw?'], expected: true },
  ],
  hiddenTests: [
    { args: [''], expected: true },
    { args: ['12321'], expected: true },
    { args: ['a'], expected: true },
    { args: ['ab'], expected: false },
    { args: ['No lemon, no melon'], expected: true },
    { args: ['Almost a palindrome'], expected: false },
  ],
  hints: [
    'Separate the cleaning from the checking — first decide which characters survive (letters only, all lowercase), then ask the palindrome question on the cleaned form.',
    'The simplest correct version filters with something like `text.toLowerCase().replace(/[^a-z]/g, "")`, reverses, and compares. It is easy to get right on the first try.',
    'A space-efficient alternative is the **two-pointer** scan: `left` from the start, `right` from the end, skip non-letters on either side, lowercase, and bail out the moment two letters disagree.',
  ],
};
