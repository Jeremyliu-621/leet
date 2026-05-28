import type { Problem } from '../types';

export const problem: Problem = {
  id: 'logger-rate-limiter',
  title: 'Logger Rate Limiter',
  difficulty: 'easy',
  tags: ['hash-map'],
  description: `Design a logger system that receives a stream of messages along with their timestamps. Each **unique** message should only be printed **at most every 10 seconds** (i.e., a message printed at timestamp \`t\` cannot be printed before timestamp \`t + 10\`).

All timestamps come in **chronological order** (non-decreasing). Several messages may arrive at the same timestamp.

Implement a function \`shouldPrintMessage(timestamp, message)\` that:
- Returns \`true\` if the message should be printed (first time or last print was ≥ 10 seconds ago).
- Returns \`false\` otherwise.

**Input format:** You are given a list of \`[timestamp, message]\` pairs. Return a boolean array representing the result of each call to \`shouldPrintMessage\`.`,
  constraints: [
    '0 <= timestamp <= 10^9',
    'Every timestamp in the input appears in non-decreasing order.',
    '1 <= message.length <= 30',
    'At most 10^4 calls to shouldPrintMessage.',
  ],
  examples: [
    {
      input: 'calls = [[1,"foo"],[2,"bar"],[3,"foo"],[8,"bar"],[10,"foo"],[11,"foo"]]',
      output: '[true,true,false,false,false,true]',
      explanation:
        '"foo" first at t=1 → true. "bar" first at t=2 → true. "foo" at t=3 → false (3 < 1+10). "bar" at t=8 → false (8 < 2+10). "foo" at t=10 → false (10 < 1+10). "foo" at t=11 → true (11 >= 1+10).',
    },
    {
      input: 'calls = [[1,"a"],[10,"a"],[11,"a"]]',
      output: '[true,false,true]',
      explanation: '"a" at t=1 → true. "a" at t=10 → false (10 < 1+10=11). "a" at t=11 → true (11 >= 11).',
    },
  ],
  hints: [
    'Use a hash map from message → last_printed_timestamp.',
    'A message can be printed if it is not in the map, or if current_timestamp - last_timestamp >= 10.',
    'When a message is printed, update its timestamp in the map.',
  ],
  functionName: 'loggerRateLimiter',
  params: ['calls'],
  starterCode: {
    javascript: `function loggerRateLimiter(calls) {
  // calls is an array of [timestamp, message] pairs
  // Return a boolean array

}`,
    typescript: "function loggerRateLimiter(calls: (number | string)[][]): boolean[] {\n  // calls is an array of [timestamp, message] pairs\n  // Return a boolean array\n\n}",

    python: `def loggerRateLimiter(calls):
    # calls is a list of [timestamp, message] pairs
    # Return a boolean list
    pass`,
  },
  visibleTests: [
    {
      args: [[[1, 'foo'], [2, 'bar'], [3, 'foo'], [8, 'bar'], [10, 'foo'], [11, 'foo']]],
      expected: [true, true, false, false, false, true],
    },
    {
      args: [[[1, 'a'], [10, 'a'], [11, 'a']]],
      expected: [true, false, true],
    },
    {
      args: [[[1, 'hello'], [2, 'hello']]],
      expected: [true, false],
    },
  ],
  hiddenTests: [
    {
      args: [[[0, 'msg']]],
      expected: [true],
    },
    {
      args: [[[1, 'a'], [1, 'b'], [1, 'a']]],
      expected: [true, true, false],
    },
    {
      args: [[[5, 'x'], [15, 'x'], [25, 'x']]],
      expected: [true, true, true],
    },
    {
      args: [[[1, 'foo'], [5, 'foo'], [9, 'foo'], [10, 'foo'], [11, 'foo']]],
      expected: [true, false, false, false, true],
    },
  ],
};
