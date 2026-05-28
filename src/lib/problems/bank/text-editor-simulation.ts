import type { Problem } from '../types';

export const problem: Problem = {
  id: 'text-editor-simulation',
  title: 'Text Editor Simulation',
  difficulty: 'medium',
  tags: ['simulation', 'stack', 'arrays'],
  description: `Simulate a text editor that supports a cursor. Start with an empty text and the cursor at the end.

Process an array of operations, where each operation is one of:
- \`["addText", text]\` — insert \`text\` at the cursor position, moving the cursor right.
- \`["deleteText", k]\` — delete up to \`k\` characters to the left of the cursor.
- \`["cursorLeft", k]\` — move the cursor left by \`k\` positions.
- \`["cursorRight", k]\` — move the cursor right by \`k\` positions.

After each **cursor-movement** operation (\`cursorLeft\` or \`cursorRight\`), record the **last up to 10 characters** to the left of the cursor.

Return an array of these recorded strings, one per cursor-movement operation.`,
  constraints: [
    '1 <= operations.length <= 10^5',
    'text consists only of lowercase letters',
    '1 <= text.length, k <= 40',
  ],
  examples: [
    {
      input: 'operations = [["addText","leetcode"],["deleteText",4],["addText","live"],["cursorRight",10],["cursorLeft",5]]',
      output: '["leetlive","leet"]',
      explanation: 'addText("leetcode") → left="leetcode". deleteText(4) → left="leet". addText("live") → left="leetlive". cursorRight(10): cursor already at end, left="leetlive" (8 chars, last 10 = "leetlive"). cursorLeft(5): move left 5, left="leet" (4 chars).',
    },
    {
      input: 'operations = [["addText","abc"],["cursorLeft",2],["cursorRight",1]]',
      output: '["a","ab"]',
      explanation: 'addText("abc") → "abc|". cursorLeft(2) → cursor at 1, left="a". cursorRight(1) → cursor at 2, left="ab".',
    },
  ],
  hints: [
    'Use two stacks (or deques): a "left" stack holding characters to the left of the cursor, and a "right" stack for characters to the right. The cursor sits between the two stacks.',
    'addText: push each character onto the left stack. deleteText(k): pop min(k, left.length) characters from the left stack. cursorLeft(k): move min(k, left.length) characters from left stack to right stack. cursorRight(k): move min(k, right.length) characters from right stack to left stack.',
    'After each cursor move, the answer is the last min(10, left.length) characters of the left stack (top 10 elements, read from bottom to top).',
  ],
  functionName: 'textEditorOperations',
  params: ['operations'],
  starterCode: {
    javascript: `function textEditorOperations(operations) {
  // left: array of chars to the left of cursor (top = cursor boundary)
  // right: array of chars to the right (top = cursor boundary)
  // Return results of cursorLeft/cursorRight operations only.
}`,
    typescript: "function textEditorOperations(operations: (string[] | (string | number)[])[]): string[] {\n  // left: array of chars to the left of cursor (top = cursor boundary)\n  // right: array of chars to the right (top = cursor boundary)\n  // Return results of cursorLeft/cursorRight operations only.\n}",

    python: `def textEditorOperations(operations):
    # left: list of chars to the left of cursor (end = cursor boundary)
    # right: list of chars to the right (end = cursor boundary)
    # Return results of cursorLeft/cursorRight operations only.
    pass`,
  },
  visibleTests: [
    {
      args: [[['addText', 'abc'], ['cursorLeft', 2], ['cursorRight', 1]]],
      expected: ['a', 'ab'],
    },
    {
      args: [[['addText', 'hello'], ['cursorLeft', 3], ['addText', 'xy'], ['cursorRight', 5]]],
      expected: ['he', 'hexyllo'],
    },
  ],
  hiddenTests: [
    {
      args: [[['cursorLeft', 1]]],
      expected: [''],
    },
    {
      args: [[['addText', 'abcdefghijk'], ['cursorLeft', 1]]],
      expected: ['abcdefghij'],
    },
    {
      args: [[['addText', 'abc'], ['deleteText', 2], ['cursorLeft', 1]]],
      expected: [''],
    },
    {
      args: [[['addText', 'word'], ['cursorLeft', 4], ['cursorRight', 2]]],
      expected: ['', 'wo'],
    },
    {
      args: [[['addText', 'abc'], ['cursorLeft', 10], ['addText', 'x'], ['cursorRight', 1]]],
      expected: ['', 'xa'],
    },
  ],
};
