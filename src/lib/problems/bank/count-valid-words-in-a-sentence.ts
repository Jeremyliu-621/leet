import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-valid-words-in-a-sentence',
  title: 'Count Valid Words in a Sentence',
  difficulty: 'easy',
  tags: ['strings'],
  description: `A sentence consists of lowercase letters (\`'a'\` to \`'z'\`), digits (\`'0'\` to \`'9'\`), hyphens (\`'-'\`), punctuation marks (\`'!'\`, \`'.'\`, \`','\`), and spaces (\`' '\`). Each sentence can be broken down into **one or more tokens** separated by one or more spaces \`' '\`.

A token is a valid word if all three of the following are true:

- It only contains lowercase letters, hyphens, and/or punctuation (**no** digits).
- There is **at most one** hyphen \`'-'\`. If present, it must be surrounded by lowercase characters on both sides (\`"a-b"\` is valid but \`"-ab"\`, \`"ab-"\`, and \`"a--b"\` are not valid).
- There is **at most one** punctuation mark. If present, it must be at the **end** of the token.

Examples of valid words include \`"a-b."\`, \`"afad"\`, \`"ba-c"\`, \`"a!"\`, and \`"!"\`.

Given a string \`sentence\`, return the **number of valid words** in \`sentence\`.`,
  constraints: [
    '1 <= sentence.length <= 1000',
    "sentence only contains lowercase English letters, digits, spaces, hyphens, and punctuation marks.",
    'There are at least 1 token in sentence.',
  ],
  examples: [
    {
      input: 'sentence = "cat and  dog"',
      output: '3',
      explanation: 'The valid words are "cat", "and", "dog".',
    },
    {
      input: 'sentence = "he bought 2 books."',
      output: '3',
      explanation: '"he", "bought", and "books." are valid. "2" contains a digit and is not valid.',
    },
    {
      input: 'sentence = "bad-ly a- -b a-b"',
      output: '2',
      explanation:
        '"bad-ly" (valid: hyphen between letters), "a-" (invalid: hyphen not followed by letter), "-b" (invalid: hyphen not preceded by letter), "a-b" (valid). Two valid words.',
    },
  ],
  hints: [
    'Split on whitespace. Skip empty tokens from consecutive spaces.',
    'For each token, check: no digits; at most one hyphen that must be surrounded by lowercase letters; at most one punctuation mark only at the final position.',
    'Iterate character by character — track whether you have seen a hyphen or punctuation, and validate each constraint as you go.',
  ],
  functionName: 'countValidWords',
  params: ['sentence'],
  starterCode: {
    javascript: `function countValidWords(sentence) {
  function isValid(token) {
    let hyphens = 0, puncts = 0;
    for (let i = 0; i < token.length; i++) {
      const c = token[i];
      if (c >= '0' && c <= '9') return false;
      if (c === '-') {
        if (++hyphens > 1 || i === 0 || i === token.length - 1) return false;
        if (!/[a-z]/.test(token[i - 1]) || !/[a-z]/.test(token[i + 1])) return false;
      }
      if ('!.,'.includes(c)) {
        if (++puncts > 1 || i !== token.length - 1) return false;
      }
    }
    return true;
  }
  return sentence.split(' ').filter(t => t.length > 0 && isValid(t)).length;
}`,
    typescript: `function countValidWords(sentence: string): number {
  function isValid(token: string): boolean {
    let hyphens = 0, puncts = 0;
    for (let i = 0; i < token.length; i++) {
      const c = token[i]!;
      if (c >= '0' && c <= '9') return false;
      if (c === '-') {
        if (++hyphens > 1 || i === 0 || i === token.length - 1) return false;
        if (!/[a-z]/.test(token[i - 1]!) || !/[a-z]/.test(token[i + 1]!)) return false;
      }
      if ('!.,'.includes(c)) {
        if (++puncts > 1 || i !== token.length - 1) return false;
      }
    }
    return true;
  }
  return sentence.split(' ').filter(t => t.length > 0 && isValid(t)).length;
}`,
    python: `def countValidWords(sentence):
    import re
    def is_valid(token):
        if not token:
            return False
        if any(c.isdigit() for c in token):
            return False
        hyphens = token.count('-')
        if hyphens > 1:
            return False
        if hyphens == 1:
            idx = token.index('-')
            if idx == 0 or idx == len(token) - 1:
                return False
            if not token[idx-1].isalpha() or not token[idx+1].isalpha():
                return False
        puncts = sum(1 for c in token if c in '!.,')
        if puncts > 1:
            return False
        if puncts == 1 and token[-1] not in '!.,':
            return False
        return True
    return sum(1 for t in sentence.split(' ') if is_valid(t))`,
  },
  visibleTests: [
    { args: ['cat and  dog'], expected: 3 },
    { args: ['he bought 2 books.'], expected: 3 },
    { args: ['bad-ly a- -b a-b'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['!'], expected: 1 },
    { args: ['-'], expected: 0 },
    { args: ['a-'], expected: 0 },
    { args: ['-a'], expected: 0 },
    { args: ['a-b'], expected: 1 },
    { args: ['a-b!'], expected: 1 },
    { args: ['a1b'], expected: 0 },
    { args: ['  hello  world  '], expected: 2 },
    { args: ['alice and  bob are playing stone-game10'], expected: 5 },
    { args: ['1st place goes to alice'], expected: 4 },
  ],
};
