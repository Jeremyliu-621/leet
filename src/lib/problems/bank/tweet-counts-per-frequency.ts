import type { Problem } from '../types';

const JS_PREAMBLE = `
function tweetCountsRunner(ops, vals) {
  const tc = new TweetCounts();
  return ops.map((op, i) => {
    if (op === 'recordTweet') {
      tc.recordTweet(vals[i][0], vals[i][1]);
      return null;
    }
    return tc.getTweetCountsPerFrequency(vals[i][0], vals[i][1], vals[i][2], vals[i][3]);
  });
}
`.trim();

const PY_PREAMBLE = `
def tweetCountsRunner(ops, vals):
    ops = list(ops.to_py() if hasattr(ops, 'to_py') else ops)
    vals = list(vals.to_py() if hasattr(vals, 'to_py') else vals)
    vals = [list(v.to_py() if hasattr(v, 'to_py') else v) for v in vals]
    tc = TweetCounts()
    results = []
    for op, val in zip(ops, vals):
        if op == 'recordTweet':
            tc.recordTweet(val[0], val[1])
            results.append(None)
        else:
            results.append(tc.getTweetCountsPerFrequency(val[0], val[1], val[2], val[3]))
    return results
`.trim();

export const problem: Problem = {
  id: 'tweet-counts-per-frequency',
  title: 'Tweet Counts Per Frequency',
  difficulty: 'medium',
  tags: ['hash-map', 'simulation'],
  description: `Design a system that counts tweets over time windows.

Implement the \`TweetCounts\` class:
- \`TweetCounts()\` — Initializes the object.
- \`void recordTweet(String tweetName, int time)\` — Stores the tweetName at the recorded \`time\` (in seconds).
- \`List<Integer> getTweetCountsPerFrequency(String freq, String tweetName, int startTime, int endTime)\` — Returns a list of integers representing the number of tweets with \`tweetName\` in each time chunk between \`startTime\` and \`endTime\` (inclusive).
  - \`freq\` is one of \`"minute"\` (60 s), \`"hour"\` (3600 s), or \`"day"\` (86400 s).
  - The list length is \`⌈(endTime - startTime + 1) / delta⌉\`, or equivalently \`(endTime - startTime) / delta + 1\`.
  - Chunk \`i\` (0-indexed) covers \`[startTime + i*delta, startTime + (i+1)*delta - 1]\`.

> **Note:** A runner function \`tweetCountsRunner(ops, vals)\` is pre-defined. \`ops\` and \`vals\` do **not** include the constructor call. For \`"recordTweet"\` ops, \`vals[i] = [tweetName, time]\`; for \`"getTweetCountsPerFrequency"\` ops, \`vals[i] = [freq, tweetName, startTime, endTime]\`.`,
  constraints: [
    '`0 <= time, startTime, endTime <= 10^9`',
    '`0 <= endTime - startTime <= 10^4`',
    'At most `10^4` calls in total.',
  ],
  examples: [
    {
      input: 'ops = ["recordTweet","recordTweet","recordTweet","getTweetCountsPerFrequency","getTweetCountsPerFrequency","recordTweet","getTweetCountsPerFrequency"], vals = [["tweet3",0],["tweet3",60],["tweet3",10],["minute","tweet3",0,59],["minute","tweet3",0,60],["tweet3",120],["hour","tweet3",0,210]]',
      output: '[null,null,null,[2],[2,1],null,[4]]',
      explanation: 'After recording tweets at t=0,60,10: minute window [0,59] has 2 tweets; [0,59] and [60,60] have 2 and 1; after also recording t=120, hour window [0,210] covers t=0,10,60,120 → 4 tweets in a single chunk.',
    },
  ],
  hints: [
    'Use a hash map from tweetName to a list of timestamps.',
    'For getTweetCountsPerFrequency, compute delta from freq, determine chunk count = (endTime-startTime)/delta + 1, then count timestamps in each chunk.',
    'Chunk index for time t is (t - startTime) / delta (integer division).',
  ],
  functionName: 'tweetCountsRunner',
  params: ['ops', 'vals'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// tweetCountsRunner is pre-defined and calls your class below.
class TweetCounts {
  constructor() {

  }

  /**
   * @param {string} tweetName
   * @param {number} time
   */
  recordTweet(tweetName, time) {

  }

  /**
   * @param {string} freq
   * @param {string} tweetName
   * @param {number} startTime
   * @param {number} endTime
   * @return {number[]}
   */
  getTweetCountsPerFrequency(freq, tweetName, startTime, endTime) {

  }
}`,
    typescript: `function tweetCountsRunner(ops: string[], vals: string[][]): unknown[] {

}`,
    python: `# tweetCountsRunner is pre-defined and calls your class below.
class TweetCounts:
    def __init__(self):
        pass

    def recordTweet(self, tweetName: str, time: int) -> None:
        pass

    def getTweetCountsPerFrequency(self, freq: str, tweetName: str, startTime: int, endTime: int) -> list[int]:
        pass`,
  },
  visibleTests: [
    {
      args: [
        ['recordTweet', 'recordTweet', 'recordTweet', 'getTweetCountsPerFrequency', 'getTweetCountsPerFrequency', 'recordTweet', 'getTweetCountsPerFrequency'],
        [['tweet3', 0], ['tweet3', 60], ['tweet3', 10], ['minute', 'tweet3', 0, 59], ['minute', 'tweet3', 0, 60], ['tweet3', 120], ['hour', 'tweet3', 0, 210]],
      ],
      expected: [null, null, null, [2], [2, 1], null, [4]],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['recordTweet', 'getTweetCountsPerFrequency'],
        [['foo', 0], ['minute', 'foo', 0, 59]],
      ],
      expected: [null, [1]],
    },
    {
      args: [
        ['recordTweet', 'recordTweet', 'getTweetCountsPerFrequency'],
        [['a', 0], ['a', 3600], ['hour', 'a', 0, 7199]],
      ],
      expected: [null, null, [1, 1]],
    },
    {
      args: [
        ['recordTweet', 'getTweetCountsPerFrequency'],
        [['b', 50], ['minute', 'b', 0, 119]],
      ],
      expected: [null, [1, 0]],
    },
  ],
};
