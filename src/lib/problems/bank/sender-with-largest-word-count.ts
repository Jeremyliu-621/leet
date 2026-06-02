import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sender-with-largest-word-count',
  title: 'Sender With Largest Word Count',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `You have a chat log of \`n\` messages. You are given two string arrays \`messages\` and \`senders\` where \`messages[i]\` is a **message** sent by \`senders[i]\`.

A **message** is a list of **words** that are separated by a single space with no leading or trailing spaces. The **word count** of a sender is the total number of words sent by the sender. Note that a sender may send more than one message.

Return the sender with the **largest word count**. If there is more than one sender with the largest word count, return the one that comes **last** lexicographically.`,
  constraints: [
    'n == messages.length == senders.length',
    '1 <= n <= 10^4',
    '1 <= messages[i].length <= 100',
    '1 <= senders[i].length <= 10',
    'messages[i] consists of uppercase and lowercase English letters and spaces.',
    'All words in messages[i] are separated by a single space.',
    'messages[i] does not have leading or trailing spaces.',
    'senders[i] consists of only uppercase and lowercase English letters.',
  ],
  examples: [
    {
      input: 'messages = ["Hello userTwooo","Hi userThree","Wonderful day Alice","Nice day userThree"], senders = ["Alice","userTwo","userThree","Alice"]',
      output: '"Alice"',
      explanation: 'Alice sends 6 words (3+3). userTwo sends 2 words. userThree sends 5 words (2+3). Alice wins.',
    },
    {
      input: 'messages = ["How is leetcode for everyone","Leetcode is useful for practice"], senders = ["Bob","Charlie"]',
      output: '"Charlie"',
      explanation: 'Bob sends 5 words. Charlie sends 5 words. Tie broken lexicographically: "Charlie" > "Bob".',
    },
  ],
  hints: [
    'Count word totals per sender using a hash map: split each message on spaces and add the word count.',
    'Iterate over the map to find the maximum count. If a sender has the same count as the current best, take the lexicographically larger name.',
    'String comparison in most languages uses lexicographic order by default, so `"Zeta" > "Alpha"` is true.',
  ],
  functionName: 'largestWordCount',
  params: ['messages', 'senders'],
  starterCode: {
    javascript: `function largestWordCount(messages, senders) {
  const count = new Map();
  for (let i = 0; i < messages.length; i++) {
    const words = messages[i].split(' ').length;
    count.set(senders[i], (count.get(senders[i]) ?? 0) + words);
  }
  let best = '', bestCount = 0;
  for (const [sender, c] of count) {
    if (c > bestCount || (c === bestCount && sender > best)) {
      best = sender; bestCount = c;
    }
  }
  return best;
}`,
    typescript: `function largestWordCount(messages: string[], senders: string[]): string {
  const count = new Map<string, number>();
  for (let i = 0; i < messages.length; i++) {
    const words = messages[i]!.split(' ').length;
    count.set(senders[i]!, (count.get(senders[i]!) ?? 0) + words);
  }
  let best = '', bestCount = 0;
  for (const [sender, c] of count) {
    if (c > bestCount || (c === bestCount && sender > best)) {
      best = sender; bestCount = c;
    }
  }
  return best;
}`,
    python: `def largestWordCount(messages: list[str], senders: list[str]) -> str:
    if hasattr(messages, 'to_py'): messages = messages.to_py()
    if hasattr(senders, 'to_py'): senders = senders.to_py()
    count = {}
    for msg, sender in zip(messages, senders):
        count[sender] = count.get(sender, 0) + len(msg.split())
    best = ''
    best_count = 0
    for sender, c in count.items():
        if c > best_count or (c == best_count and sender > best):
            best = sender
            best_count = c
    return best`,
  },
  visibleTests: [
    {
      args: [
        ['Hello userTwooo', 'Hi userThree', 'Wonderful day Alice', 'Nice day userThree'],
        ['Alice', 'userTwo', 'userThree', 'Alice'],
      ],
      expected: 'Alice',
    },
    {
      args: [
        ['How is leetcode for everyone', 'Leetcode is useful for practice'],
        ['Bob', 'Charlie'],
      ],
      expected: 'Charlie',
    },
    {
      args: [['Hello world'], ['Alice']],
      expected: 'Alice',
    },
  ],
  hiddenTests: [
    { args: [['a'], ['Z']], expected: 'Z' },
    { args: [['one two three', 'four five six'], ['Alice', 'Alice']], expected: 'Alice' },
    { args: [['hi there', 'bye'], ['Bob', 'Alice']], expected: 'Bob' },
    { args: [['hi there', 'bye now'], ['Bob', 'Alice']], expected: 'Bob' },
    {
      args: [['same count words', 'and same count'], ['Alpha', 'Zeta']],
      expected: 'Zeta',
    },
    {
      args: [['word', 'word', 'word'], ['a', 'b', 'c']],
      expected: 'c',
    },
    {
      args: [['one two', 'three four five'], ['Alice', 'Bob']],
      expected: 'Bob',
    },
  ],
};
