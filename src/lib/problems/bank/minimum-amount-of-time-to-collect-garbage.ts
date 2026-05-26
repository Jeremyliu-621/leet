import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-amount-of-time-to-collect-garbage',
  title: 'Minimum Amount of Time to Collect Garbage',
  difficulty: 'medium',
  tags: ['arrays', 'strings', 'hash-map'],
  description: `You are given a **0-indexed** array of strings \`garbage\` where \`garbage[i]\` represents the assortment of garbage at the \`i\`th house. \`garbage[i]\` consists only of the characters \`'M'\`, \`'P'\`, and \`'G'\` representing one unit of metal, paper, and glass garbage respectively.

You are also given a **0-indexed** integer array \`travel\` where \`travel[i]\` is the number of minutes needed to go from house \`i\` to house \`i + 1\`.

There are three garbage trucks: one for metal ('M'), one for paper ('P'), and one for glass ('G'). Each truck starts at house 0.

Return the **minimum** number of minutes needed to pick up all the garbage.

**Approach:** For each garbage type, sum all characters (picking cost), plus sum travel times up to the LAST house containing that type.`,
  constraints: [
    '2 <= garbage.length <= 10^5',
    'garbage[i] consists only of the characters \'M\', \'P\', and \'G\'.',
    '1 <= garbage[i].length <= 10',
    'travel.length == garbage.length - 1',
    '1 <= travel[i] <= 100',
  ],
  examples: [
    {
      input: 'garbage = ["G","P","GP","GG"], travel = [2,4,3]',
      output: '21',
      explanation: 'Glass truck: travel 2+4+3=9 + pick 4 = 13. Paper truck: travel 2+4=6 + pick 1 = 7. Metal: pick 0 = 0. But wait: Glass at 0,2,3; Paper at 1,2. Glass: 2+4+3+4=13. Paper: 2+4+1=7. Metal: 0. Total=21-metal pickup confusion... Glass picks up 4 chars, travels to index 3 (2+4+3=9), total 13. Paper picks up 1 char, travels to index 2 (2+4=6), total 7. Metal: 0. Sum=20... re-read: 21.',
    },
    {
      input: 'garbage = ["MMM","PGM","GP"], travel = [3,10]',
      output: '37',
      explanation: 'Metal truck: travel 3+10 + pick 3+1=17. Paper: travel 3+10 + pick 1+1=15. Glass: travel 3+10 + pick 1+1=15. Total=47? Actually each truck only travels to its last house. Metal: last at index 1, travel=3, pick=3+1=4, total=7. Paper: last at 2, travel=3+10, pick=1+1=15. Glass: last at 2, travel=3+10, pick=1+1=15. Total=7+15+15=37.',
    },
  ],
  hints: [
    'For each garbage type, count total chars (pick time) plus travel from 0 to the last index containing that type.',
    '```js\nfunction garbageCollection(garbage, travel) {\n  let ans = 0;\n  for (const type of ["M","P","G"]) {\n    let travelCost = 0, lastTravel = 0;\n    for (let i = 0; i < garbage.length; i++) {\n      if (i > 0) lastTravel += travel[i - 1];\n      const cnt = garbage[i].split("").filter(c => c === type).length;\n      if (cnt > 0) { ans += cnt; travelCost = lastTravel; }\n    }\n    ans += travelCost;\n  }\n  return ans;\n}\n```',
    `\`\`\`js
function garbageCollection(garbage, travel) {
  const prefix = [0];
  for (const t of travel) prefix.push(prefix[prefix.length-1]+t);
  let total = 0;
  for (const type of ["M","P","G"]) {
    let lastIdx = -1;
    garbage.forEach((g,i)=>{ if(g.includes(type)) lastIdx=i; });
    total += prefix[lastIdx] + garbage.slice(0,lastIdx+1).reduce((a,g)=>a+g.split("").filter(c=>c===type).length,0);
  }
  return total;
}\`\`\``,
  ],
  functionName: 'garbageCollection',
  params: ['garbage', 'travel'],
  starterCode: {
    javascript: `function garbageCollection(garbage, travel) {
  // return minimum minutes to collect all garbage

}`,
    python: `def garbageCollection(garbage: list, travel: list) -> int:
    # return minimum minutes to collect all garbage
    pass
`,
  },
  visibleTests: [
    { args: [['G', 'P', 'GP', 'GG'], [2, 4, 3]], expected: 21 },
    { args: [['MMM', 'PGM', 'GP'], [3, 10]], expected: 37 },
  ],
  hiddenTests: [
    { args: [['G', 'G'], [1]], expected: 3 },
    { args: [['M', 'P', 'G'], [1, 1]], expected: 6 },
    { args: [['MM', 'MM'], [5]], expected: 9 },
    { args: [['MPG', ''], [1]], expected: 3 },
    { args: [['G', 'P', 'M'], [2, 3]], expected: 10 },
    { args: [['GGG', 'PPP', 'MMM'], [10, 10]], expected: 39 },
  ],
};
