import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-tested-devices-after-test-runs',
  title: 'Count Tested Devices After Test Runs',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You have a set of \`n\` devices numbered from \`0\` to \`n - 1\`. Each device has a battery percentage, given by \`batteryPercentages[i]\` for the \`i\`th device.

In a single test, you process the devices in order from 0 to n - 1:
- If \`batteryPercentages[i]\` is **greater** than \`0\`, the device is **tested** and every device that has not been tested yet (including device \`i+1\`) has its battery decremented by 1.
- Otherwise, move to the next device.

Return the number of devices that will be tested.`,
  constraints: [
    '1 <= n == batteryPercentages.length <= 100',
    '0 <= batteryPercentages[i] <= 100',
  ],
  examples: [
    {
      input: 'batteryPercentages = [1,1,2,1,3]',
      output: '3',
      explanation: 'Devices 0 (1>0), 2 (2-1=1>0), 4 (3-2=1>0) are tested.',
    },
    {
      input: 'batteryPercentages = [0,1,2]',
      output: '2',
      explanation: 'Device 0 skipped (0). Device 1 (1-0=1>0) tested. Device 2 (2-1=1>0) tested.',
    },
  ],
  hints: [
    'Track the count of already-tested devices.',
    'Device i is tested if batteryPercentages[i] - count > 0.',
    `\`\`\`js
function countTestedDevices(batteryPercentages) {
  let tested = 0;
  for (const b of batteryPercentages)
    if (b - tested > 0) tested++;
  return tested;
}\`\`\``,
  ],
  functionName: 'countTestedDevices',
  params: ['batteryPercentages'],
  starterCode: {
    javascript: `function countTestedDevices(batteryPercentages) {
  let tested = 0;
  for (const b of batteryPercentages)
    if (b > tested) tested++;
  return tested;
}`,
    typescript: `function countTestedDevices(batteryPercentages: number[]): number {
  let tested = 0;
  for (const b of batteryPercentages)
    if (b > tested) tested++;
  return tested;
}`,
    python: `def countTestedDevices(batteryPercentages):
    tested = 0
    for b in batteryPercentages:
        if b > tested:
            tested += 1
    return tested`,
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
  ],
};
