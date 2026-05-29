import type { Problem } from '../types';

export const problem: Problem = {
  id: 'camelcase-matching',
  title: 'CamelCase Matching',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `Given a list of \`queries\` strings and a \`pattern\` string, return a boolean array \`answer\` where \`answer[i]\` is \`true\` if \`queries[i]\` matches \`pattern\`.

A query matches a pattern if you can insert **lowercase English letters** into the pattern so that it equals the query. You may **not** insert any uppercase letters.

Equivalently: the pattern must be a **subsequence** of the query, and every uppercase letter in the query must be matched by the pattern.`,
  constraints: [
    '`1 <= pattern.length, queries.length <= 100`',
    '`1 <= queries[i].length <= 100`',
    '`queries[i]` and `pattern` consist of English letters',
  ],
  examples: [
    {
      input: 'queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FB"',
      output: '[true,false,true,true,false]',
      explanation: '"FooBar" matches "F_ooB_ar". "FooBarTest" has uppercase T unmatched. "FootBall" matches "F_oot_B_all". "FrameBuffer" matches "F_rame_B_uffer". "ForceFeedBack" has a second uppercase F unmatched.',
    },
    {
      input: 'queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FoBa"',
      output: '[true,false,true,false,false]',
      explanation: '"FooBar" → F,o,B→skip,a. "FootBall" → F,o,t→skip,B,a. Others fail on unmatched uppercase.',
    },
  ],
  hints: [
    'For each query, use a two-pointer: advance both pointers when characters match. If a query character is uppercase but doesn\'t match the current pattern character, return false.',
    'After scanning the entire query, also check that all pattern characters have been matched (pi === pattern.length). A query that is a strict prefix of the pattern would fail this check.',
    '```js\nfunction camelMatch(queries, pattern) {\n  return queries.map(query => {\n    let pi = 0;\n    for (let qi = 0; qi < query.length; qi++) {\n      if (pi < pattern.length && query[qi] === pattern[pi]) {\n        pi++;\n      } else if (query[qi] >= "A" && query[qi] <= "Z") {\n        return false;\n      }\n    }\n    return pi === pattern.length;\n  });\n}\n```',
  ],
  functionName: 'camelMatch',
  params: ['queries', 'pattern'],
  starterCode: {
    javascript: `function camelMatch(queries, pattern) {

}`,
    typescript: `function camelMatch(queries: string[], pattern: string): boolean[] {

}`,
    python: `def camelMatch(queries: list[str], pattern: str) -> list[bool]:
    pass`,
  },
  visibleTests: [
    {
      args: [['FooBar', 'FooBarTest', 'FootBall', 'FrameBuffer', 'ForceFeedBack'], 'FB'],
      expected: [true, false, true, true, false],
    },
    {
      args: [['FooBar', 'FooBarTest', 'FootBall', 'FrameBuffer', 'ForceFeedBack'], 'FoBa'],
      expected: [true, false, true, false, false],
    },
    {
      args: [['FooBar', 'FooBarTest', 'FootBall', 'FrameBuffer', 'ForceFeedBack'], 'FoBaT'],
      expected: [false, true, false, false, false],
    },
  ],
  hiddenTests: [
    {
      args: [['aa', 'aAa'], 'a'],
      expected: [true, false],
    },
    {
      args: [['Abc', 'abc', 'ABc'], 'Abc'],
      expected: [true, false, false],
    },
    {
      args: [['HelloWorld', 'HiWorld', 'HelloW'], 'HW'],
      expected: [true, true, true],
    },
    {
      args: [['XY', 'xY', 'XYZ'], 'XY'],
      expected: [true, false, false],
    },
  ],
};
