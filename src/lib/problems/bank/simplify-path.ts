import type { Problem } from '../types';

export const problem: Problem = {
  id: 'simplify-path',
  title: 'Simplify Path',
  difficulty: 'medium',
  tags: ['stack'],
  description: `Given a string \`path\`, which is an **absolute path** (starting with a slash \`'/'\`) to a file or directory in a Unix-style file system, convert it to the **simplified canonical path**.

In a Unix-style file system:
- A period \`'.'\` refers to the current directory.
- A double period \`'..'\` refers to the parent directory.
- Multiple consecutive slashes (e.g. \`'//'\`) are treated as a single slash.

The canonical path should:
- Start with a single slash \`'/'\`.
- Have directories separated by a single slash.
- Not end with a trailing slash (unless it is the root \`'/'\`).
- Not have \`'.'\` or \`'..'\` components.`,
  constraints: [
    '`1 <= path.length <= 3000`',
    '`path` consists of English letters, digits, `.`, `/`, or `_`',
    '`path` is a valid absolute Unix path',
  ],
  examples: [
    { input: 'path = "/home/"', output: '"/home"' },
    { input: 'path = "/../"', output: '"/"' },
    { input: 'path = "/home//foo/"', output: '"/home/foo"' },
    { input: 'path = "/a/./b/../../c/"', output: '"/c"' },
  ],
  hints: [
    'Split the path by `"/"`. For each part: skip empty strings and `"."`, pop the stack for `".."`, otherwise push the part onto the stack.',
    'Join the stack with `"/"` and prepend `"/"`. If the stack is empty, return `"/"`.',
  ],
  functionName: 'simplifyPath',
  params: ['path'],
  starterCode: {
    javascript: `function simplifyPath(path) {

}`,
    python: `def simplifyPath(path):
    pass`,
  },
  visibleTests: [
    { args: ['/home/'], expected: '/home' },
    { args: ['/../'], expected: '/' },
    { args: ['/home//foo/'], expected: '/home/foo' },
    { args: ['/a/./b/../../c/'], expected: '/c' },
  ],
  hiddenTests: [
    { args: ['/'], expected: '/' },
    { args: ['/a/b/c/'], expected: '/a/b/c' },
    { args: ['/.hidden'], expected: '/.hidden' },
    { args: ['/a//b////c/d//././/..'], expected: '/a/b/c' },
  ],
};
