import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-cpu-load',
  title: 'Maximum CPU Load',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `You are given a list of jobs, where each job is represented as \`[start, end, cpuLoad]\`. Each job runs from time \`start\` (inclusive) to time \`end\` (exclusive) and requires \`cpuLoad\` units of CPU capacity.

Find the **maximum CPU load** at any point in time — i.e., the largest total load when all simultaneously running jobs' loads are summed.

Jobs may overlap. Return \`0\` if the input is empty.`,
  constraints: [
    '0 <= jobs.length <= 10^4',
    '0 <= start < end <= 10^6',
    '1 <= cpuLoad <= 10^3',
  ],
  examples: [
    {
      input: 'jobs = [[1,4,3],[2,5,4],[7,9,6]]',
      output: '7',
      explanation: 'Jobs [1,4,3] and [2,5,4] overlap during [2,4], giving load 3+4=7.',
    },
    {
      input: 'jobs = [[6,7,10],[2,4,11],[8,12,15]]',
      output: '15',
      explanation: 'No jobs overlap; maximum single load is 15.',
    },
    {
      input: 'jobs = [[1,4,2],[2,4,1],[3,6,5]]',
      output: '8',
      explanation: 'All three overlap during [3,4]: 2+1+5=8.',
    },
  ],
  hints: [
    'Sort jobs by start time. Use a min-heap keyed on end time to track running jobs.',
    'For each job, first remove all jobs from the heap that have already ended (their end time <= current job\'s start). Then add the current job to the heap.',
    'After updating the heap, sum all current loads (or maintain a running total). Track the maximum seen so far.',
  ],
  functionName: 'findMaxCPULoad',
  params: ['jobs'],
  starterCode: {
    javascript: `function findMaxCPULoad(jobs) {\n  \n}`,
    python: `def findMaxCPULoad(jobs):\n    pass`,
  },
  visibleTests: [
    { args: [[[1,4,3],[2,5,4],[7,9,6]]], expected: 7 },
    { args: [[[6,7,10],[2,4,11],[8,12,15]]], expected: 15 },
    { args: [[[1,4,2],[2,4,1],[3,6,5]]], expected: 8 },
    { args: [[]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[1,2,1],[2,3,1],[3,4,1]]], expected: 1 },
    { args: [[[1,5,1],[1,5,2],[1,5,3]]], expected: 6 },
    { args: [[[0,10,1],[0,5,2],[5,10,3]]], expected: 4 },
    { args: [[[1,3,5],[2,4,3],[4,6,2]]], expected: 8 },
    { args: [[[1,2,10]]], expected: 10 },
  ],
};
