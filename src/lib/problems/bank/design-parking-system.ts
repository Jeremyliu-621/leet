import type { Problem } from '../types';

const JS_PREAMBLE = `
class ParkingSystem {
  constructor(big, medium, small) {
    // Your code here
  }
  addCar(carType) {
    // carType: 1 = big, 2 = medium, 3 = small
    // Return true if there is space; false otherwise
  }
}
`;

const PYTHON_PREAMBLE = `
class ParkingSystem:
    def __init__(self, big: int, medium: int, small: int):
        # Your code here
        pass

    def addCar(self, carType: int) -> bool:
        # carType: 1 = big, 2 = medium, 3 = small
        # Return True if there is space; False otherwise
        pass
`;

export const problem: Problem = {
  id: 'design-parking-system',
  title: 'Design Parking System',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Design a parking system for a parking lot with three types of spaces: big, medium, and small, with a fixed number of each.

Implement \`ParkingSystem\`:
- \`ParkingSystem(int big, int medium, int small)\` — Initializes the object with the number of spaces for each size.
- \`bool addCar(int carType)\` — Checks if there is a space of \`carType\` for the car. \`carType\` can be big (1), medium (2), or small (3). A car can only park in a space of its type. Returns \`true\` if a car was parked, \`false\` otherwise.`,
  constraints: [
    '0 <= big, medium, small <= 1000',
    'carType is 1, 2, or 3',
    'At most 1000 calls will be made to addCar.',
  ],
  examples: [
    {
      input: 'ParkingSystem(1, 1, 0), addCar(1), addCar(2), addCar(3), addCar(1)',
      output: '[null, true, true, false, false]',
      explanation: 'Big and medium each have 1 spot. No small spots. The second big car has no space.',
    },
  ],
  hints: [
    'Just maintain three counters — one for each car type.',
    'When addCar(type) is called, check if the count for that type > 0. If yes, decrement and return true; else return false.',
    `\`\`\`js
// Track remaining spots per type in an array [0, big, medium, small]
const spots = [0, big, medium, small];
// addCar(type): if spots[type]>0: spots[type]--; return true; else return false\`\`\``,
  ],
  starterCode: {
    javascript: JS_PREAMBLE.trim(),
    python: PYTHON_PREAMBLE.trim(),
  },
  functionName: 'parkingSystemRunner',
  params: ['ops', 'vals'],
  preamble: {
    javascript: `
function parkingSystemRunner(ops, vals) {
  const init = vals[0];
  const sys = new ParkingSystem(init[0], init[1], init[2]);
  return ops.map((op, i) => {
    if (op === 'addCar') return sys.addCar(vals[i]);
    return null;
  });
}
`,
    typescript: "function parkingSystemRunner(ops: string[], vals: number[][]): (null | boolean)[] {\n  constructor(big, medium, small) {\n    // Your code here\n  }\n  addCar(carType) {\n    // carType: 1 = big, 2 = medium, 3 = small\n    // Return true if there is space; false otherwise\n  }\n}",

    python: `
def parkingSystemRunner(ops, vals):
    ops_list = list(ops.to_py() if hasattr(ops, 'to_py') else ops)
    vals_list = [list(v.to_py() if hasattr(v, 'to_py') else v) for v in (vals.to_py() if hasattr(vals, 'to_py') else vals)]
    init = vals_list[0]
    obj = ParkingSystem(int(init[0]), int(init[1]), int(init[2]))
    results = []
    for op, val in zip(ops_list, vals_list):
        if op == 'addCar':
            results.append(obj.addCar(int(val[0])))
        else:
            results.append(None)
    return results
`,
  },
  visibleTests: [
    {
      args: [
        ['ParkingSystem', 'addCar', 'addCar', 'addCar', 'addCar'],
        [[1, 1, 0], [1], [2], [3], [1]],
      ],
      expected: [null, true, true, false, false],
    },
    {
      args: [
        ['ParkingSystem', 'addCar', 'addCar', 'addCar'],
        [[2, 0, 1], [1], [1], [3]],
      ],
      expected: [null, true, true, true],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['ParkingSystem', 'addCar', 'addCar', 'addCar', 'addCar', 'addCar'],
        [[0, 2, 3], [2], [2], [2], [3], [3]],
      ],
      expected: [null, true, true, false, true, true],
    },
    {
      args: [
        ['ParkingSystem', 'addCar'],
        [[0, 0, 0], [1]],
      ],
      expected: [null, false],
    },
    {
      args: [
        ['ParkingSystem', 'addCar', 'addCar', 'addCar', 'addCar', 'addCar', 'addCar'],
        [[1, 1, 1], [1], [2], [3], [1], [2], [3]],
      ],
      expected: [null, true, true, true, false, false, false],
    },
  ],
};
