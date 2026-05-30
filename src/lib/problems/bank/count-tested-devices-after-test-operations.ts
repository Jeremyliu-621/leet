import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-tested-devices-after-test-operations',
  title: 'Count Tested Devices After Test Operations',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `You are given a **0-indexed** integer array \`batteryPercentages\` of length \`n\`, denoting the battery percentages of \`n\` devices.

Your task is to test each device \`i\` **in order** from \`0\` to \`n - 1\`, by performing the following test operations:

- If \`batteryPercentages[i]\` is **greater than** \`0\`, this device is **tested** and:
  - Increment the count of tested devices.
  - Decrease \`batteryPercentages[j]\` by 1 for all \`j\` in the range \`[i + 1, n - 1]\`.
  - Move on to the next device.
- Otherwise, move on to the next device without testing.

Return an integer denoting the number of devices that will be tested after performing the test operations in order.`,
  constraints: [
    '`1 <= n == batteryPercentages.length <= 100`',
    '`0 <= batteryPercentages[i] <= 100`',
  ],
  examples: [
    {
      input: 'batteryPercentages = [1,1,2,1,3]',
      output: '3',
      explanation: 'i=0: battery=1>0, test, decrement rest. i=1: battery=0, skip. i=2: battery=1>0, test, decrement. i=3: battery=-1<0, skip. i=4: battery=1>0, test. Total=3.',
    },
    {
      input: 'batteryPercentages = [0,1,2]',
      output: '2',
    },
  ],
  hints: [
    'Note that decreasing all subsequent batteries by 1 each time a device is tested is equivalent to checking `batteryPercentages[i] > testedCount`.',
    'Instead of actually modifying the array, track how many devices have been tested so far. A device passes if its original battery minus the count of previously tested devices is >= 1.',
    'Iterate from left to right. If `batteryPercentages[i] > testedCount`, test the device and increment `testedCount`.',
  ],
  functionName: 'countTestedDevices',
  params: ['batteryPercentages'],
  starterCode: {
    javascript: `function countTestedDevices(batteryPercentages) {

}`,
    typescript: `function countTestedDevices(batteryPercentages: number[]): number {

}`,
    python: `def countTestedDevices(batteryPercentages):
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 2, 1, 3]], expected: 3 },
    { args: [[0, 1, 2]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[5, 5, 5]], expected: 3 },
    { args: [[1]], expected: 1 },
    { args: [[0]], expected: 0 },
    { args: [[100, 1, 1, 1]], expected: 1 },
    { args: [[1, 1, 1, 1, 1]], expected: 1 },
    { args: [[2, 2, 2, 2]], expected: 2 },
  ],
};
