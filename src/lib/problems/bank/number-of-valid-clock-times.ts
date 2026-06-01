import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-valid-clock-times',
  title: 'Number of Valid Clock Times',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `You are given a string of length 5 called \`time\`, representing the current time on a digital clock in the format \`"hh:mm"\`. The **earliest** possible time is \`"00:00"\` and the **latest** possible time is \`"23:59"\`.

In the string \`time\`, the digits represented by the \`?\` character are **unknown**, and must be **replaced** with a digit from \`0\` to \`9\`.

Return an integer, the number of valid clock times that can be created by replacing every \`?\` with a digit \`0\`-\`9\`.`,
  constraints: [
    'time is a valid string of length 5 in the format "hh:mm"',
    'time[2] == ":"',
    '0 <= time[0], time[1], time[3], time[4] <= 9 or the character is "?"',
    'The input is generated such that there is at least one "?" in time',
  ],
  examples: [
    {
      input: 'time = "?5:00"',
      output: '2',
      explanation: 'We can replace ? with 0 or 1 (05:00 and 15:00). 2 is not valid because 25:00 exceeds 23.',
    },
    {
      input: 'time = "0?:0?"',
      output: '100',
      explanation: 'The first ? can be 0-9 (10 choices), the second ? can be 0-9 (10 choices). Total = 100.',
    },
    {
      input: 'time = "??:??"',
      output: '1440',
      explanation: 'All valid times from 00:00 to 23:59: 24 * 60 = 1440.',
    },
  ],
  hints: [
    'Level 1: Enumerate all possible replacements. For each ?, try digits 0-9 and count valid times.',
    'Level 2: A time hh:mm is valid if 0 <= hh <= 23 and 0 <= mm <= 59.',
    'Level 3: let cnt=0;for(let h=0;h<24;h++)for(let m=0;m<60;m++){const s=`${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}`;if([...time].every((c,i)=>c==="?"||c===s[i]))cnt++;}return cnt;',
  ],
  functionName: 'countTime',
  params: ['time'],
  starterCode: {
    javascript: `function countTime(time) {
  let cnt = 0;
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m++) {
      const s = \`\${String(h).padStart(2, '0')}:\${String(m).padStart(2, '0')}\`;
      if ([...time].every((c, i) => c === '?' || c === s[i])) cnt++;
    }
  }
  return cnt;
}`,
    typescript: `function countTime(time: string): number {
  let cnt = 0;
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m++) {
      const s = \`\${String(h).padStart(2, '0')}:\${String(m).padStart(2, '0')}\`;
      if ([...time].every((c, i) => c === '?' || c === s[i])) cnt++;
    }
  }
  return cnt;
}`,
    python: `def countTime(time):
    if hasattr(time, 'to_py'): time = time.to_py()
    cnt = 0
    for h in range(24):
        for m in range(60):
            s = f'{h:02d}:{m:02d}'
            if all(c == '?' or c == s[i] for i, c in enumerate(time)):
                cnt += 1
    return cnt`,
  },
  visibleTests: [
    { args: ['?5:00'], expected: 2 },
    { args: ['0?:0?'], expected: 100 },
    { args: ['??:??'], expected: 1440 },
  ],
  hiddenTests: [
    { args: ['1?:22'], expected: 10 },
    { args: ['?4:5?'], expected: 20 },
    { args: ['00:0?'], expected: 10 },
    { args: ['2?:??'], expected: 240 },
  ],
};
