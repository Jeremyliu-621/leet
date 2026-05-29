import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-browser-history',
  title: 'Design Browser History',
  difficulty: 'medium',
  tags: ['design', 'stack'],
  description: `You have a **browser** of one tab where you start on the \`homepage\` and you can visit another \`url\`, get back in the history a number of \`steps\` or move forward in the history a number of \`steps\`.

Implement the \`BrowserHistory\` class:

- \`BrowserHistory(homepage)\` — Initializes the object with the homepage of the browser.
- \`visit(url)\` — Visits \`url\` from the current page. It clears all the forward history.
- \`back(steps)\` — Move \`steps\` back in history. Return the current url after moving back **at most** \`steps\` steps.
- \`forward(steps)\` — Move \`steps\` forward in history. Return the current url after moving forward **at most** \`steps\` steps.

**For testing purposes**, the function receives:
- \`homepage\`: the starting URL (string)
- \`ops\`: array of operations, each \`["visit", url]\`, \`["back", steps]\`, or \`["forward", steps]\`

Return an array of results from **only** the \`back\` and \`forward\` calls (in order). Skip \`visit\` calls.`,
  constraints: [
    '1 <= homepage.length <= 20',
    '1 <= url.length <= 20',
    '1 <= steps <= 100',
    'homepage and url consist of \'.\' and lowercase English letters',
    'At most 5000 calls will be made to visit, back, and forward',
  ],
  examples: [
    {
      input: 'homepage = "leetcode.com", ops = [["visit","google.com"],["visit","facebook.com"],["visit","youtube.com"],["back",1],["back",1],["forward",1],["visit","linkedin.com"],["forward",2],["back",2],["back",7]]',
      output: '["facebook.com","google.com","facebook.com","linkedin.com","google.com","leetcode.com"]',
    },
  ],
  hints: [
    'Use two stacks: a "back" stack and a "forward" stack, plus a current URL.',
    'visit(url): push current URL to back stack, clear forward stack, set current = url.',
    'back(steps): pop min(steps, back.length) times, pushing current to forward stack each time.',
    'forward(steps): pop min(steps, forward.length) times, pushing current to back stack each time.',
  ],
  functionName: 'browserHistory',
  params: ['homepage', 'ops'],
  starterCode: {
    javascript: 'function browserHistory(homepage, ops) {\n\n}\n',
    typescript: "function browserHistory(homepage: string, ops: (string[] | (string | number)[])[]): string[] {\n\n}",

    python: 'def browserHistory(homepage, ops):\n    pass\n',
  },
  visibleTests: [
    {
      args: [
        'leetcode.com',
        [['visit','google.com'],['visit','facebook.com'],['visit','youtube.com'],['back',1],['back',1],['forward',1],['visit','linkedin.com'],['forward',2],['back',2],['back',7]],
      ],
      expected: ['facebook.com','google.com','facebook.com','linkedin.com','google.com','leetcode.com'],
    },
  ],
  hiddenTests: [
    {
      args: ['home.com', [['back',1],['forward',1]]],
      expected: ['home.com','home.com'],
    },
    {
      args: ['a.com', [['visit','b.com'],['back',1],['forward',1],['forward',1]]],
      expected: ['a.com','b.com','b.com'],
    },
    {
      args: ['start.com', [['visit','a.com'],['visit','b.com'],['visit','c.com'],['back',2],['visit','d.com'],['forward',5]]],
      expected: ['a.com','d.com'],
    },
  ],
};
