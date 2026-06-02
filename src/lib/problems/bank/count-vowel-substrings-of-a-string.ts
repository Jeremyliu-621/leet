import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-vowel-substrings-of-a-string',
  title: 'Count Vowel Substrings of a String',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `A **vowel substring** is a substring that only consists of vowels (\`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, and \`'u'\`) and has **all five** vowels present in it.

Given a string \`word\`, return *the number of **vowel substrings** in* \`word\`.

**Approach:** Enumerate all substrings. For each, check that every character is a vowel and that all 5 vowels appear at least once.`,
  constraints: [
    '1 <= word.length <= 100',
    'word consists of lowercase English letters only.',
  ],
  examples: [
    {
      input: 'word = "aeiouu"',
      output: '2',
      explanation: 'Substrings: "aeiou" (indices 0-4) and "aeiouu" (indices 0-5) are vowel substrings.',
    },
    {
      input: 'word = "unicornarihan"',
      output: '0',
      explanation: 'No vowel substring contains all 5 vowels with only vowels in between.',
    },
  ],
  hints: [
    'Check every substring: if it contains only vowels and all 5 distinct vowels, count it.',
    '```js\nfunction countVowelSubstrings(word) {\n  const v = new Set(["a","e","i","o","u"]);\n  let count = 0;\n  for (let i = 0; i < word.length; i++) {\n    const seen = new Set();\n    for (let j = i; j < word.length; j++) {\n      if (!v.has(word[j])) break;\n      seen.add(word[j]);\n      if (seen.size === 5) count++;\n    }\n  }\n  return count;\n}\n```',
    `\`\`\`js
function countVowelSubstrings(word) {
  const vowels = new Set("aeiou");
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    const seen = new Set();
    for (let j = i; j < word.length; j++) {
      if (!vowels.has(word[j])) break;
      seen.add(word[j]);
      if (seen.size === 5) count++;
    }
  }
  return count;
}\`\`\``,
  ],
  functionName: 'countVowelSubstrings',
  params: ['word'],
  starterCode: {
    javascript: `function countVowelSubstrings(word) {
  const v = new Set(['a','e','i','o','u']);
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    const seen = new Set();
    for (let j = i; j < word.length; j++) {
      if (!v.has(word[j])) break;
      seen.add(word[j]);
      if (seen.size === 5) count++;
    }
  }
  return count;
}`,
    typescript: `function countVowelSubstrings(word: string): number {
  const v = new Set(['a','e','i','o','u']);
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    const seen = new Set<string>();
    for (let j = i; j < word.length; j++) {
      if (!v.has(word[j]!)) break;
      seen.add(word[j]!);
      if (seen.size === 5) count++;
    }
  }
  return count;
}`,

    python: `def countVowelSubstrings(word):
    if hasattr(word, 'to_py'): word = word.to_py()
    v = set('aeiou'); count = 0
    for i in range(len(word)):
        seen = set()
        for j in range(i, len(word)):
            if word[j] not in v: break
            seen.add(word[j])
            if len(seen) == 5: count += 1
    return count`,
  },
  visibleTests: [
    { args: ['aeiouu'], expected: 2 },
    { args: ['unicornarihan'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['cuaieuouac'], expected: 7 },
    { args: ['aeiou'], expected: 1 },
    { args: ['a'], expected: 0 },
    { args: ['aeiouaeiou'], expected: 21 },
    { args: ['bcdfg'], expected: 0 },
    { args: ['aeioubc'], expected: 1 },
  ],
};
