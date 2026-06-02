import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-visible-points',
  title: 'Maximum Number of Visible Points',
  difficulty: 'hard',
  tags: ['arrays', 'math'],
  description: `You are given an array \`points\`, an integer \`angle\`, and your \`location\`, where \`location = [posx, posy]\` and \`points[i] = [xi, yi]\` represent points on a 2D plane.

Initially, you are facing directly east. You can **rotate** clockwise and counter-clockwise by any amount — but you **cannot move** your position.

You can see a point \`p\` if it is in your **field of view**, i.e., if the angle formed between your direction of sight and the direction from your location to point \`p\` is at most \`angle\`.

Return the **maximum** number of points you can see in any field of view.

> **Note:** If a point is at your exact location, you can always see it.`,
  constraints: [
    '1 <= points.length <= 10^5',
    'points[i].length == 2',
    'location.length == 2',
    '0 <= angle < 360',
    '0 <= posx, posy, xi, yi <= 100',
  ],
  examples: [
    {
      input: 'points = [[2,1],[2,2],[3,3]], angle = 90, location = [1,1]',
      output: '3',
      explanation: 'A 90° view toward northeast covers all 3 points.',
    },
    {
      input: 'points = [[2,1],[2,2],[3,4],[1,1]], angle = 45, location = [1,1]',
      output: '3',
      explanation: 'Point [1,1] is at the location (always visible). The others are at angles 0°, 45°, 56°. A 45° window covers at most 2 of those, giving 2+1=3.',
    },
    {
      input: 'points = [[1,0],[2,1]], angle = 13, location = [1,1]',
      output: '1',
      explanation: 'Only one point fits in the 13° field of view at a time.',
    },
  ],
  hints: [
    'Level 1: Convert each point to an angle (in degrees) relative to your location using `atan2`. Points at your location count separately.',
    'Level 2: Sort the angles. To handle the circular nature, duplicate the array by appending each angle + 360.',
    'Level 3: Use a sliding window on the doubled angle array: maintain a window where `angles[right] - angles[left] <= angle`. The max window size + at-location count is the answer.',
  ],
  functionName: 'visiblePoints',
  params: ['points', 'angle', 'location'],
  starterCode: {
    javascript: `function visiblePoints(points, angle, location) {
  const [ox, oy] = location;
  let same = 0;
  const angles = [];
  for (const [x, y] of points) {
    if (x === ox && y === oy) { same++; continue; }
    angles.push(Math.atan2(y - oy, x - ox) * 180 / Math.PI);
  }
  angles.sort((a, b) => a - b);
  const n = angles.length;
  const doubled = [...angles, ...angles.map(a => a + 360)];
  let best = 0, l = 0;
  for (let r = 0; r < doubled.length; r++) {
    while (doubled[r] - doubled[l] > angle) l++;
    if (r - l + 1 <= n) best = Math.max(best, r - l + 1);
  }
  return best + same;
}`,
    typescript: `function visiblePoints(points: number[][], angle: number, location: number[]): number {
  const ox = location[0]!, oy = location[1]!;
  let same = 0;
  const angles: number[] = [];
  for (const pt of points) {
    const x = pt[0]!, y = pt[1]!;
    if (x === ox && y === oy) { same++; continue; }
    angles.push(Math.atan2(y - oy, x - ox) * 180 / Math.PI);
  }
  angles.sort((a, b) => a - b);
  const n = angles.length;
  const doubled = [...angles, ...angles.map(a => a + 360)];
  let best = 0, l = 0;
  for (let r = 0; r < doubled.length; r++) {
    while (doubled[r]! - doubled[l]! > angle) l++;
    if (r - l + 1 <= n) best = Math.max(best, r - l + 1);
  }
  return best + same;
}`,
    python: `def visiblePoints(points, angle, location):
    import math
    points = [list(p.to_py() if hasattr(p, 'to_py') else p) for p in (points.to_py() if hasattr(points, 'to_py') else points)]
    location = list(location.to_py() if hasattr(location, 'to_py') else location)
    ox, oy = int(location[0]), int(location[1])
    angle = float(angle)
    same = 0
    angles = []
    for p in points:
        x, y = int(p[0]), int(p[1])
        if x == ox and y == oy:
            same += 1
            continue
        angles.append(math.atan2(y - oy, x - ox) * 180 / math.pi)
    angles.sort()
    n = len(angles)
    doubled = angles + [a + 360 for a in angles]
    best = 0
    l = 0
    for r in range(len(doubled)):
        while doubled[r] - doubled[l] > angle:
            l += 1
        if r - l + 1 <= n:
            best = max(best, r - l + 1)
    return best + same`,
  },
  visibleTests: [
    { args: [[[2, 1], [2, 2], [3, 3]], 90, [1, 1]], expected: 3 },
    { args: [[[2, 1], [2, 2], [3, 4], [1, 1]], 45, [1, 1]], expected: 3 },
    { args: [[[1, 0], [2, 1]], 13, [1, 1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[0, 0]], 0, [0, 0]], expected: 1 },
    { args: [[[1, 0], [0, 1]], 90, [0, 0]], expected: 2 },
    { args: [[[1, 1], [2, 2], [3, 3]], 0, [0, 0]], expected: 3 },
    { args: [[[0, 0], [1, 0], [0, 1]], 90, [0, 0]], expected: 3 },
    { args: [[[1, 0], [0, 1], [0, -1], [-1, 0]], 179, [0, 0]], expected: 2 },
  ],
};
