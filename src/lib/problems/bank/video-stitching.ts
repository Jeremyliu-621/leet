import type { Problem } from '../types';

export const problem: Problem = {
  id: 'video-stitching',
  title: 'Video Stitching',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You are given a series of video clips from a sporting event that lasted \`time\` seconds. These video clips can be overlapping with each other and have varying lengths.

Each video clip is described by an array \`clips\` where \`clips[i] = [starti, endi]\` indicates that the ith clip started at \`starti\` and ended at \`endi\`.

We can cut these clips into segments freely.

Return the **minimum number of clips** needed so that we can cut the clips into segments that cover the entire sporting event \`[0, time]\`. If the task is impossible, return \`-1\`.`,
  constraints: [
    '1 <= clips.length <= 100',
    '0 <= starti <= endi <= 100',
    '1 <= time <= 100',
  ],
  examples: [
    {
      input: 'clips = [[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], time = 10',
      output: '3',
      explanation: 'We take the clips [0,2], [1,9], and [8,10]. We could have also taken [0,2], [1,5], [4,6], [8,10] (4 clips) or [0,2], [4,9], [8,10] (3 clips). So the minimum is 3.',
    },
    {
      input: 'clips = [[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], time = 9',
      output: '3',
    },
    {
      input: 'clips = [[0,4],[2,8]], time = 5',
      output: '2',
    },
  ],
  hints: [
    'Use a greedy interval scheduling approach: at each step, extend coverage as far as possible using clips that start at or before the current end.',
    'Sort clips by start time. Maintain `end` (current coverage) and `farthest` (max reachable). When `end` is reached, greedily jump to `farthest`.',
    'If no clip starts at or before `end` but `farthest == end`, there is a gap — return -1.',
  ],
  functionName: 'videoStitching',
  params: ['clips', 'time'],
  starterCode: {
    javascript: 'function videoStitching(clips, time) {\n\n}\n',
    python: 'def videoStitching(clips, time):\n    pass\n',
  },
  visibleTests: [
    { args: [[[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], 10], expected: 3 },
    { args: [[[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], 9], expected: 3 },
    { args: [[[0,4],[2,8]], 5], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[0,1]], 1], expected: 1 },
    { args: [[[0,2],[1,3],[2,4]], 3], expected: 2 },
    { args: [[[0,2],[3,5]], 5], expected: -1 },
    { args: [[[0,5],[0,3],[3,7]], 7], expected: 2 },
  ],
};
